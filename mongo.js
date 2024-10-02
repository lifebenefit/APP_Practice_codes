const MongoClient = require('mongodb').MongoClient;


const userId = "liam";
const password = '24hkH6ZRESDkhNnM';
const clusterName = "cluster0";
const dbName = "aa";
const collectionName = "products"  // db table
const url =
  `mongodb+srv://${userId}:${password}@${clusterName}.m0cno.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  console.log(url);

const createProduct = async (req, res, next) => {
  const newProduct = {  // db record <- 몽고에선 Document
    name: req.body.name,
    price: req.body.price
  };
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = await db.collection(`${collectionName}`).insertOne(newProduct); // await 추가
    console.log(result);
    res.json(newProduct); // 응답을 여기로 이동
  } catch (error) {
    return res.json({ message: 'Could not store data.' });
  } finally {
    await client.close(); // finally 블록에서 클라이언트를 닫음
  }

};

const getProducts = async (req, res, next) => {
  // db.collection(`${collectionName}`) <- return Cursor
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = await db.collection(`${collectionName}`).find().toArray(); // await 추가
    console.log(result);
    res.json(result); // 응답을 여기로 이동
  } catch (error) {
    return res.json({ message: 'Could not retrieve products.' });
  } finally {
    await client.close(); // finally 블록에서 클라이언트를 닫음
  }
}

exports.createProduct = createProduct;
exports.getProducts = getProducts;


