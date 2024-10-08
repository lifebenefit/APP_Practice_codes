const express = require("express");
// const validator = require('express-validator');
// validator.check()
const { check } = require('express-validator');
// check()


// 객체 구조 분해

const placesControllers = require('../controllers/places-controllers')

const router = express.Router();


// app.use('/api/places', placesRoutes);  // /api/places/...   인 경우만 Routing 하도록 지정
router.get('/:pid', placesControllers.getPlaceById);
router.get('/user/:uid', placesControllers.getPlacesByUserId);
router.post('/',
  [
    check('title').not().isEmpty(),
    check('description').isLength({ min: 5 }),
    check('address').not().isEmpty()
  ],
  placesControllers.createPlace);
router.patch('/:pid',
  [
    check('title').not().isEmpty(),
    check('description').isLength({ min: 5 })
  ],
  placesControllers.updatePlace);
router.delete('/:pid', placesControllers.deletePlace);
/** 
 * get 이고 post 고 patch, delete 고 기능이 있거나 한 건 아님.
 * 해당 Callback 함수에 구현된 Code 가 전부임
 * 예를들어 .get 써놓고 delete 해도 문법상 무관함
GET: 데이터를 조회할 때 사용
POST: 데이터를 생성할 때 사용
PATCH: 데이터를 부분적으로 수정할 때 사용
DELETE: 데이터를 삭제할 때 사용
*/
module.exports = router;