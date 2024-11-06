const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const fs = require('fs');

const HttpError = require('../models/http-error');
const getCoordsForAddress = require('../util/location');
const Place = require('../models/place');
const User = require('../models/user');
// const { default: mongoose } = require('mongoose');
const error = require('mongoose/lib/error');

const { checkProps, log } = require("../util/codeHelperUtils");

const getPlaceById = async (req, res, next) => {
  const placeId = req.params.pid;  // {pid : 'p1'}

  let place
  try {
    place = await Place.findById(placeId);
    if (!place) {
      return next(
        new HttpError('DB에 해당 placeId 에 Data가 없음', 404)
      );
    }
  } catch (err) {
    return next(
      new HttpError('DB에 해당 placeId 가 없음.', 500)
      // new HttpError('Something went wrong , could not find a place.', 500)
    );
  };
  res.json({ place: place.toObject({ getters: true }) });
};


const getPlacesByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  /* find 함수 쓰는 경우 */
  // let places;
  // try {
  //   places = await Place.find({ creator: userId })
  //   if (!places || places == 0) {
  //     return next(
  //       new HttpError('UserId 를 찾을 수 없습니다.', 404)
  //     );
  //   }
  // } catch (err) {
  //   return next(new HttpError(
  //     "Fetching places failed, please try again later",
  //     500
  //   ));
  // }
  // res.json({ places: places.map(place => place.toObject({ getters: true })) }); // {places} 는 {places:places} 의 축약형

  /* populate 함수 쓰는 경우 */
  try {
    userWithPlaces = await User.findById(userId).populate('places');
    if (!userWithPlaces || userWithPlaces.places.length == 0) {
      return next(
        // new HttpError('UserId 를 찾을 수 없거나, 해당Id의 places 장소가 비어 있습니다.', 404)
        new HttpError('장소를 추가해 주세요', 404)
      );
    }
  } catch (err) {
    return next(new HttpError(
      "Fetching places failed, please try again later", 500
    ));
  }

  // log.debug(userWithPlaces.places);
  res.json({ places: userWithPlaces.places.map(place => place.toObject({ getters: true })) }); // {places} 는 {places:places} 의 축약형
};

const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    log.error(errors);
    res.status(422);
    return next(new HttpError(
      'Invalid Input ..., createPlace Fail', 422
    ));
  }

  const { title, description, address } = req.body;
  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (error) {
    return next(error);
  }

  const createPlace = new Place({
    title,
    description,
    address,
    location: coordinates,
    image: req.file.path,
    creator : req.userData.userId
  });

  /* DB 에 creator 값인 Id 가 있는지 확인 */
  let user;
  try {
    user = await User.findById(req.userData.userId);
    log.info(`${user.email} <-해당 USER에 DB Place create!-- ${createPlace.title}`);
    if (!user) {
      return next(new HttpError('creator Id 가 DB 에 존재 하지 않음.'));
    }
  } catch (err) {
    return next(new HttpError(
      'Creating place failed, please try again ...', 500
    ));
  }

  /* DB 에 Place 저장 */
  try {
    // await createPlace.save();

    const _session = await mongoose.startSession();
    _session.startTransaction();
    await createPlace.save({ session: _session });
    user.places.push(createPlace);
    await user.save({ session: _session });
    await _session.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Creating Place failed, please try again',
      500
    );
    return next(error);
  }

  res.status(201).json({ place: createPlace });
};

const updatePlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    log.error(errors);
    res.status(422);
    return next(new HttpError('Invalid Input ..., updatePlace Fail'), 422);
  }

  const { title, description } = req.body;
  const placeId = req.params.pid;

  /* DB에서 해당 placeId 에 해당하는 값 조회 */
  let dbPlaceCollectionData;
  try {
    dbPlaceCollectionData = await Place.findById(placeId);
    dbPlaceCollectionData.title = title;
    dbPlaceCollectionData.description = description
  } catch (err) {
    return next(
      new HttpError("something went wrong, could not update place.", 500)
    );
  }

  /* DB 값의 creator 값과 Request온 요청자 userId 비교 ( 같아야함 ) */
  if (dbPlaceCollectionData.creator.toString() !== req.userData.userId) {
    const error = new HttpError(
      '수정 권한 없음 에러 .',
      401
    );
    return next(error);
  }

  /* 업데이트 된 값 DB 에 저장 */
  try {
    await dbPlaceCollectionData.save();
  } catch (err) {
    return next(
      new HttpError("something went wrong, could not update place.", 500)
    );
  }

  /* Front 에 Response */
  res.status(200).json({ place: dbPlaceCollectionData.toObject({ getters: true }) });
};

const deletePlace = async (req, res, next) => {
  const placeId = req.params.pid;
  // findByIdAndDelete << 인자값 기준으로 찾아서 삭제하는 Function
  // try {
  //   const place = await Place.findByIdAndDelete(placeId);
  //   if (!place) {
  //     return next(new HttpError("Could not find place for this id.", 404));
  //   }
  // } catch (err) {
  //   console.log(err);
  //   return next(new HttpError(
  //     "something went wrong, could not delete place", 500
  //   ));
  // }

  /**
   * populate 시, return 으로 ref Object 전문이 포함된다.
  {
    _id: new ObjectId('6707a366e501e7ce842a0357'),
    title: 'SUNROUNG',
    ...
    creator: {  // 이런식으로 ref: 'User' 오브젝트가 포함되어 리턴된다.
      _id: new ObjectId('67079f5f69b0c7146e252743'),
      email: 'aaa@aaa.com',
      password: 'aaaaaa',
      ...
      places: [
        new ObjectId('67079f7569b0c7146e252745'),   //  << User ObjectId  1
        new ObjectId('6707a366e501e7ce842a0357')    //  << User ObjectId  2
      ],
    },
  }
  */

  // ## ex) await Place.findById(placeId).populate('creator'); 인 경우의 Return 값
  // {
  //   location: { lat: 37.5050809, lng: 127.0535226 },
  //   _id: new ObjectId('6707a366e501e7ce842a0357'),
  //   title: 'SUNROUNG',
  //   description: 'LIFE BENEFIT',
  //   address: '서울특별시 강남구 선릉로90길 56',
  //   creator: {
  //     _id: new ObjectId('67079f5f69b0c7146e252743'),
  //     name: 'a1',
  //     email: 'aaa@aaa.com',
  //     password: 'aaaaaa',
  //     image: 'https://nstatic.dcinside.com/ad/2024/banner/240926_WutheringWaves_main_800700.jpg',
  //     places: [
  //       new ObjectId('67079f7569b0c7146e252745'),
  //       new ObjectId('6707a366e501e7ce842a0357')
  //     ],
  //     __v: 2
  //   },
  //   __v: 0
  // }

  // ## ex) await Place.findById(placeId); 인 경우의 Return 값 
  // {
  //   location: { lat: 37.5050809, lng: 127.0535226 },
  //   _id: new ObjectId('6707a366e501e7ce842a0357'),
  //   title: 'SUNROUNG',
  //   description: 'LIFE BENEFIT',
  //   address: '서울특별시 강남구 선릉로90길 56',
  //   creator: new ObjectId('67079f5f69b0c7146e252743'),
  //   __v: 0
  // }

  let place;
  try {
    place = await Place.findById(placeId).populate('creator');

    if (!place) {
      return next(new HttpError("해당 ID에 대한 장소를 찾을 수 없습니다.", 404));
    }
  } catch (err) {
    log.error("장소를 찾는 중 오류 발생:", err);
    return next(new HttpError(
      "문제가 발생하여 장소를 삭제할 수 없습니다.", 500
    ));
  }

  /** props 검사 */
  if ( !(checkProps(place, ['creator']) && checkProps(place.creator, ['places', '_id'])) ) {
    return next(new HttpError("Front Props data 누락 문제", 400))
  }

  if (place.creator._id.toString() !== req.userData.userId){
    return next( new HttpError("삭제 권한 없음 에러 "),401);
  }

  /* DB에 있는 place collection 삭제 */
  try {
    // await place.remove();  // 해당 mongoose 에서 사용 되지 않는 구버전 함수
    // await Place.deleteOne({ _id: placeId });  // Place collection에서 _id 가 placeId 인것을 삭제
    // await place.deleteOne(); // place Document를 직접 삭제
    const _session = await mongoose.startSession();
    _session.startTransaction();
    await place.deleteOne({ session: _session });  // place 문서를 데이터베이스에서 삭제
    place.creator.places.pull(place);  // place의 creator 문서에서 places 배열에서 해당 place를 제거
    await place.creator.save({ session: _session })  // 변경된 creator 문서를 현재 세션을 사용하여 데이터베이스에 저장
    await _session.commitTransaction();  // 트랜잭션을 커밋하여 모든 변경 사항을 데이터베이스에 영구적으로 반영

  } catch (err) {
    log.error("문제가 발생하여 장소를 삭제할 수 없습니다.", err);
    return next(new HttpError(
      "문제가 발생하여 장소를 삭제할 수 없습니다.", 500
    ));
  }

  /* 삭제 로직 완료 후, 파일 삭제 */
  fs.unlink(place.image, err => {
    err ? log.error(`파일 삭제 에러 [${err}]`) : log.debug(`${place.image} 파일 삭제 완료`);
  });

  res.status(200).json({ message: "장소가 삭제되었습니다." });
}

// module.exports ??여러개는 어떻게?
exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;