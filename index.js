const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { append } = require("express/lib/response");
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors("*"));
app.use(morgan("tiny"));

const products = require('./router/productsRoute')
const users = require('./router/userRoute')

app.use('/products', products);
app.use(users);


app.listen(3001, () => {
  console.clear();
  console.debug("Server running on port http://localhost:3001");
});







// SELECT detailName, category
// FROM detailProducts
// WHERE category = :categoryValue
// ORDER BY id ASC
// LIMIT :offset, :itemsPerPage; =========pakai ` ` 



// const products = await db.detailProduct.findAll({
//   attributes: ['detailName','category'],
//   where: {
//     category: 'T-Shirt',
//   },
//   order: [['id', 'ASC']],
//   offset,
//   limit: itemsPerPage,
  
// });
// app.get("/Atest", async(req,res) => {
//     const users = await db.User.findOne();

//     return res.status(200).json({
//         data: users,
//     });
// });