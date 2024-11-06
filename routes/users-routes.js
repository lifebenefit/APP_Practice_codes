const express = require("express");
const { check } = require("express-validator");

const usersControllers = require('../controllers/users-controllers');
const fileUpload = require("../middleware/file-upload")
const { log, checkProps} = require("../util/codeHelperUtils")

const router = express.Router();

// app.use('/api/places', placesRoutes);  // /api/places/...   인 경우만 Routing 하도록 지정
router.get(process.env.API_USERS_ROOT, usersControllers.getUsers);

router.post(
  process.env.API_USERS_SIGNUP,
  fileUpload.single('image'),
  [
    check('name').not().isEmpty(),
    check('email')
      .normalizeEmail()   // Test@test.com => test@test.com
      .isEmail(),         //  @xxx.xxx 유무
    check('password').isLength({ min: 6 })
  ],
  usersControllers.signup);
  
router.post(process.env.API_USERS_LOGIN, usersControllers.login);
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