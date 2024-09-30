const HttpError = require('../models/http-error')
const { v4: uuidV4 } = require('uuid');

const DUMMY_PLACES = [
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
    // throw error;  // 동기식 동작인 경우 throw 가능, 근데 보통 비동기코드 일 거임.
    // // next(error);
    // // return;
  }
  res.json({ place: place });
};


const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find(p => {
    return p.creator === userId;
  });

  if (!place) {
    return next(
      new HttpError('Could not find a place for the provided user id', 404));
    // const error = new Error('Could not find a place for the provided user id');
    // error.code = 404;
    // // throw error;  // 동기식 동작인 경우 throw 가능, 근데 보통 비동기코드 일 거임.
    // return next(error);
  }
  res.json({ place }); // {place} 는 {place:place} 의 축약형
};

const createPlace = (req, res, next) => {
  const { title, description, coordinates, address, creator } = req.body;
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
  const updatedPlace = {...DUMMY_PLACES.find(p => p.id === placeId)};

  console.log(Object.prototype.toString.call(updatedPlace));
  console.log(updatedPlace);
  const placeIndex = DUMMY_PLACES.findIndex(p => p.id === placeId);

  updatedPlace.title = title;
  updatedPlace.description = description;

  DUMMY_PLACES[placeIndex] = updatedPlace;

  res.status(200).json({ place: updatedPlace });
};

const deletePlace = (req, res, next) => {

}

// module.exports ??여러개는 어떻게?
exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
exports.updatePlaceById = updatePlaceById;
exports.deletePlace = deletePlace;