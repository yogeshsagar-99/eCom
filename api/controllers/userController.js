const addCart = async (req, res) => {
    const id= req.body.id;
   
    try {
        
      const findData = await user.findOne({userName:"yogesh"});
      if (findData) {
        console.log("success");
        res.send((findData).mongoose.populate('productName'));
      } else {
        console.log("something went wrong");
      }
    } catch (err) {
        throw(err)
      console.log(err);
      return res.json("Some error occurred");
    }
   
  };
  module.exports={addCart}