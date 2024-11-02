const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validation');

const Schema = mongoose.Schema;

const dbTableName = "users_data"

const userSchema = new Schema({
  name      : {type: String , required: true},
  email     : {type: String , required: true, unique: true},
  password  : {type: String , required: true, minlength: 6},
  image     : {type: String , required: true},
  places    : [{type: mongoose.Types.ObjectId, required:true, ref: 'Place'}]   // Place.js 의존성생성 (외래키 개념)
});

userSchema.plugin(uniqueValidator);

// module.exports = mongoose.model("User", userSchema);
// Place 라고 db Table 을 정해도 어차피 몽고DB에서 "소문자 + 복수형"으로 변환한다.
module.exports = mongoose.model("User", userSchema, dbTableName);