const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dbTableName = "places_linked_user"

const placeSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  address: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }   // User.js 의존성생성 (외래키 개념)
  // creator     : {type: String, required: true}
});

// module.exports = mongoose.model('Place', placeSchema);
// Place 라고 db Table 을 정해도 어차피 몽고DB에서 "소문자 + 복수형"으로 변환한다.
// 변환되기 싫으면 3번째 인자에 이름을 넣어야 함
module.exports = mongoose.model('Place', placeSchema, dbTableName);

