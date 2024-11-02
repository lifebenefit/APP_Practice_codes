const express = require("express");
const { check } = require('express-validator');

const placesControllers = require('../controllers/places-controllers');

const fileUpload = require("../middleware/file-upload");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();


// app.use('/api/places', placesRoutes);  // /api/places/...   인 경우만 Routing 하도록 지정
router.get(process.env.API_PLACES_PID, placesControllers.getPlaceById);

router.get(process.env.API_PLACES_USER_UID, placesControllers.getPlacesByUserId);

/** 유효한 Token 인지 확인하는 Middle Ware 단계
 *  유효한 토큰이 아닐 시, 밑에 라우팅들을 제한함
 */
router.use(checkAuth);

router.post(
  process.env.API_PLACES_ROOT,
  fileUpload.single('image'),  // 이미지 파일을 저장에 실패하든 성공하든 next를 호출 시켜준다
  [  // 각각의 함수를 호출하며 next를 호출한다
    check('title').not().isEmpty(),
    check('description').isLength({ min: 5 }),
    check('address').not().isEmpty()
  ],
  placesControllers.createPlace /* API 핸들러 << 
  일반적으로 미들웨어 체인의 마지막에 위치하며, 
  res.send(), res.json(), res.render() 등을 사용하여 응답을 보냄 */
);

router.patch(
  process.env.API_PLACES_PID,
  [
    check('title').not().isEmpty(),
    check('description').isLength({ min: 5 })
  ],
  placesControllers.updatePlace
);

router.delete(
  process.env.API_PLACES_PID, 
  placesControllers.deletePlace
);
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