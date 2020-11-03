const _ = require("lodash");
const createProduct = async (req, res) => {
    const productName = req.body.productName;
    const price = req.body.price;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const category = req.body.category;
    console.log("here");
    try {
        console.log("here");
      const addedData = await Product.create({
        productName: productName,
        price: price,
        description: description,
        imageUrl: imageUrl,
        category: category,

      }).fetch();
      if (addedData) {
        console.log("success");
        res.send(addedData);
      } else {
        console.log("something went wrong");
      }
    } catch (err) {
        throw(err)
      console.log(err);
      return res.json("Some error occurred");
    }
    
  };
  const findProduct = async (req, res) => {
    const id= req.body.id;
   
    try {
        
      const findData = await Product.findOne({
        id:id
      });
      if (findData) {
        console.log("success");
        res.send(findData);
      } else {
        console.log("something went wrong");
      }
    } catch (err) {
        throw(err)
      console.log(err);
      return res.json("Some error occurred");
    }


    
  };

  


    const findAll = async (req, res) => {
    
   
    try {
        
      const findData = await Product.find({
        
      });
      if (findData) {
        console.log("success");
        res.send(findData);
      } else {
        console.log("something went wrong");
      }
    } catch (err) {
        throw(err)
      console.log(err);
      return res.json("Some error occurred");
    }
    
  };

  const searchProduct = async (req, res) => {
    const searchBy=req.body.searchBy;
    const searchKey=req.body.searchKey;
    try {
        
      const allProduct = await Product.find({});
      if (allProduct) {
        console.log("success");
        const searchResult=_.filter(allProduct,function(product){
           return product[searchBy].includes(searchKey)
        })
        res.send(searchResult);
      } else {
        console.log("something went wrong");
      }
    } catch (err) {
        throw(err)
      console.log(err);
      return res.json("Some error occurred");
    }
    
  };
  
  module.exports={createProduct, findProduct,findAll,searchProduct}