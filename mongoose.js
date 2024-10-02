const mongoose = require('mongoose');

const Product = require('./models/product')


const userId = "liam";
const password = '24hkH6ZRESDkhNnM';
const clusterName = "cluster0";
const dbName = "aa";

const url =
  `mongodb+srv://${userId}:${password}@${clusterName}.m0cno.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  console.log(url);

mongoose.connect(url
).then(() => {
  console.log("Connected to DB");
}).catch(() => {
  console.log("Connection ")
})

const createProduct = async (req,res,next)=>{
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price
  });
  console.log(createProduct);
  console.log('1 Created Product:', createdProduct); // 여기서 createdProduct의 내용을 출력
  const result = await createdProduct.save();  // insert 작업
  console.log(typeof createProduct.id);
  console.log(createProduct._id);
  console.log('2 Created Product:', typeof(createProduct));
  console.log('3 Created Product:', createdProduct._id);
  console.log('4 Created Product:', createdProduct.id);
  res.json(result);
};

const getProducts = async (req,res,next) =>{
  // const product = Product.find().cursor <- return Cursor
  const products = await Product.find().exec();
  res.json(products);
}

exports.createProduct = createProduct;
exports.getProducts = getProducts;
