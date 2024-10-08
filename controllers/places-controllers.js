const { v4: uuidV4 } = require('uuid');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const getCoordsForAddress = require('../util/location');
const Place = require('../models/place')

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

const getPlaceById = async (req, res, next) => {
  console.log('GET Request on getPlaceById function');
  const placeId = req.params.pid;  // {pid : 'p1'}

  let place
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    return next(
      new HttpError('DB에 해당 placeId 가 없음.', 500)
      // new HttpError('Something went wrong , could not find a place.', 500)
    );
    // const error = new HttpError(
    //   'Something went wrong , could not find a place.', 500
    // );
    // return next(error);
  };

  if (!place) {
    return next(
      new HttpError('DB에 해당 placeId 에 Data가 없음', 404)
      // new HttpError('Could not find a place for the provided id', 404)
    );
  }
  res.json({ place: place.toObject({ getters: true }) });
};


const getPlacesByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let places;
  try {
    places = await Place.find({ creator: userId })
  } catch (err) {
    return next(new HttpError(
      "Fetching places failed, please try again later",
      500
    ));
  }

  console.log(places);// []
  console.log(!places);// F
  console.log(!places || places);// []
  console.log((!places || places == 0));// T
  console.log((!places || places === 0));// F

  if (!places || places == 0) {
    return next(
      new HttpError('Could not find a places for the provided user id', 404)
    );
  }
  res.json({ places: places.map(place => place.toObject({ getters: true })) }); // {places} 는 {places:places} 의 축약형
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

  console.log('Request Body >>\n"\n', req.body, '\n"');

  const createPlaceDbCommand = new Place({
    title,
    description,
    address,
    location: coordinates,
    image: "https://nstatic.dcinside.com/ad/2024/banner/240926_WutheringWaves_main_800700.jpg",
    creator
  });

  try {
    await createPlaceDbCommand.save();
  } catch (err) {
    const error = new HttpError(
      'Creating Place failed, please try again',
      500
    );
    return next(error);
  }

  res.status(201).json({ place: createPlaceDbCommand });
};

const updatePlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    res.status(422);
    return next(new HttpError('Invalid Input ..., updatePlace Fail'), 422);
  }

  const { title, description } = req.body;
  const placeId = req.params.pid;

  console.log("Update DAta : \n", req.body)
  console.log(title);
  console.log(`type : ${Object.prototype.toString.call(title)}`);

  let updatePlaceDbCommand;
  try {
    updatePlaceDbCommand = await Place.findById(placeId);
    updatePlaceDbCommand.title = title;
    updatePlaceDbCommand.description = description
  } catch (err) {
    return next(
      new HttpError("something went wrong, could not update place.", 500)
    );
  }

  try {
    await updatePlaceDbCommand.save();
  } catch (err) {
    return next(
      new HttpError("something went wrong, could not update place.", 500)
    );
  }

  res.status(200).json({ place: updatePlaceDbCommand.toObject({ getters: true }) });
};

const deletePlace = async (req, res, next) => {
  const placeId = req.params.pid;
  console.log(`Delete ${placeId}`);

  try {
    const place = await Place.findByIdAndDelete(placeId);
    if (!place) {
      return next(new HttpError("Could not find place for this id.", 404));
    }
  } catch (err) {
    console.log(err);
    return next(new HttpError(
      "something went wrong, could not delete place", 500
    ));
  }

  res.status(200).json({ message: "Deleted place . " });
}

// module.exports ??여러개는 어떻게?
exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;