const axios = require('axios');

const HttpError = require('../models/http-error')

const API_KEY = 'AIzaSyB1HILY3x-L7FOFgIkhc2oBtuY0f3GLPMg';

async function getCoordsForAddress(address) {
  // return {
  //   lat: 40.7484474,
  //   lng: -73.9871516
  // };
  // console.log((address));
  // console.log(API_KEY);
  const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`
  );
  // console.log(res);

  const data = res.data;

  if (!data || data.status === 'ZERO_RESULTS'){
    const error = new HttpError('Targeted Address finding Fail',422);
    throw error;
  }
  // console.log(data);
  // console.log(data.results[0].geometry);

  const coordinates = data.results[0].geometry.location;

  console.log(coordinates);
  return coordinates;
}

module.exports = getCoordsForAddress;









