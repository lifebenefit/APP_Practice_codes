const express = require("express");

const router = express.Router();

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

router.get('/:pid', (req, res, next) => {
  console.log('GET Request in places');
  const placeId = req.params.pid;  // {pid : 'p1'}
  const place = DUMMY_PLACES.find(p => {
    return p.id === placeId;
  })

  if (!place) {
    const error = new Error('Could not find a place for the provided id');
    error.code = 404;
    throw error;  // 동기식 동작인 경우 throw 가능, 근데 보통 비동기코드 일 거임.
    // next(error);
    return;
  }
  res.json({ place: place });
});

router.get('/user/:uid', (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find(p => {
    return p.creator === userId;
  });

  if (!place) {
    const error = new Error('Could not find a place for the provided user id');
    error.code = 404;
    // throw error;  // 동기식 동작인 경우 throw 가능, 근데 보통 비동기코드 일 거임.
    return next(error);
  }
  res.json({ place }); // {place} 는 {place:place} 의 축약형
});


module.exports = router;