/**
 * DataController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const { datastores } = require("../../config/datastores");

module.exports = {
 list:function(req,res){
   eCom.find({}).exec(function(err,data){
       if(err){
           res.send('500','database error')
       }
       res.view('results',{read:Data})
       
   }) 
 }


};

