const { v4: uuidV4 } = require('uuid');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const getCoordsForAddress = require('../util/location');

let DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Daeu Ivile',
    description: 'company of LifeBenefit',
    location: {
      lat: 37.5050809,
      lng: 127.0535226
    },
    address: '서울특별시 강남구 선릉로90길 56',
    creator: 'u1'
  }
];

const getPlaceById = (req, res, next) => {
  console.log('GET Request in places');
  const placeId = req.params.pid;  // {pid : 'p1'}
  const place = DUMMY_PLACES.find(p => {
    return p.id === placeId;
  })

  if (!place) {
    throw new HttpError('Could not find a place for the provided id', 404)
    // const error = new Error('Could not find a place for the provided id');
    // error.code = 404;
    // throw error;  // 해당 함수가 async 나 promis 같은 비동기 함수인 경우, throw 사용 불가
    // // next(error);
    // // return;
  }
  res.json({ place: place });
};


const getPlacesByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const places = DUMMY_PLACES.filter(p => {
    return p.creator === userId;
  });

  if (!places || places === 0) {
    return next(
      new HttpError('Could not find a places for the provided user id', 404));
    // const error = new Error('Could not find a places for the provided user id');
    // error.code = 404;
    // throw error;  // 해당 함수가 async 나 promis 같은 비동기 함수인 경우, throw 사용 불가
    // return next(error);
  }
  res.json({ places }); // {places} 는 {places:places} 의 축약형
};

const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    res.status(422);
    return next(new HttpError(
      'Invalid Input ..., createPlace Fail', 422
    ));
  }

  const { title, description, address, creator } = req.body;

  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (error) {
    return next(error);
  }
  // const title = req.body.title;
  const createPlace = {
    id: uuidV4(),
    title,
    description,
    location: coordinates,
    address,
    creator
  };
  DUMMY_PLACES.push(createPlace); // unshift(첫째열에Push)

  res.status(201).json({ place: createPlace });
};

const updatePlaceById = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    res.status(422);
    throw new HttpError('Invalid Input ..., updatePlaceById Fail');
  }

  const { title, description } = req.body;
  const placeId = req.params.pid;

  // const updatedPlace = {
  //   ...DUMMY_PLACES.find(p => {
  //     return p.id === placeId;
  //   })
  // };

  // const updatedPlace = 
  //   DUMMY_PLACES.find(p => {
  //     return p.id === placeId;
  //   });
  const updatedPlace = { ...DUMMY_PLACES.find(p => p.id === placeId) };

  console.log(Object.prototype.toString.call(updatedPlace));
  console.log(updatedPlace);
  const placeIndex = DUMMY_PLACES.findIndex(p => p.id === placeId);

  updatedPlace.title = title;
  updatedPlace.description = description;

  DUMMY_PLACES[placeIndex] = updatedPlace;

  res.status(200).json({ place: updatedPlace });
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.pid;

  if (!DUMMY_PLACES.find(p => p.id === placeId)) {
    console.log(errors);
    res.status(404);
    throw new HttpError('Invalid Input ..., deletePlace Fail', 404);
  }

  DUMMY_PLACES = DUMMY_PLACES.filter(dp => dp.id !== placeId);
  res.status(200).json({ message: "Deleted place . " })
}

// module.exports ??여러개는 어떻게?
exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlaceById = updatePlaceById;
exports.deletePlace = deletePlace;