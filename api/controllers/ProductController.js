const _ = require("lodash");
var mongoose = require('mongoose')

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
    const id= req.param.id;
   
    try {
        
      const findData = await Product.find({id:id});
      if (!_.isEmpty(findData)) {
        console.log("success");
        
        res.view('productDesc',{result:findData[0]})
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
        
      const findData = await Product.find({});
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
        const data=_.filter(allProduct,function(product){

           return product[searchBy].includes(searchKey)
        })
        res.view('home',{results:data})
      } else {
        console.log("something went wrong");
      }
    } catch (err) {
        throw(err)
      console.log(err);
      return res.json("Some error occurred");
    }
    
  };
  
//   const cart = async (req, res) => {
//     const id= req.body.id;
   
//     try {
        
//       const findData = await user.findOne({id:id});
//       if (findData) {
//         console.log("success");
//         res.send((findData).mongoose.populate('productName'));
//       } else {
//         console.log("something went wrong");
//       }
//     } catch (err) {
//         throw(err)
//       console.log(err);
//       return res.json("Some error occurred");
//     }

//   };
const list= async function(req,res){
   const data= await Product.find({});
    res.view('home',{results:data})

};
  module.exports={createProduct, findProduct,findAll,searchProduct,list}