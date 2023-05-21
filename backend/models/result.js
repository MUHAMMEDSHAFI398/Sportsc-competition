const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
    {
   
       highJump:{
        type: [
            {
              name: {
                type: String,
              },
              chessno: {
                type: Number,
              },
            }
          ],
          default: [],
       },
       longJump:{
        type:Array,
       },

       hurdles:{
        type:Array,
       },
       javallin:{
        type:Array,
       },
       hundredMeter:{
        type:Array,
       },
       twoHundredMeter:{
        type:Array,
       },
       fourHundredMeter:{
        type:Array,
       },
       eighHundredMeter:{
        type:Array,
       },
       shortPut:{
        type:Array,
       },
       discusThrow:{
        type:Array,
       },
       relayHundred:{
        type:Array,
       },
       relayFourHundred:{
        type:Array,
       }

    },
    { timestamps: true }
);


const result = mongoose.model("result", resultSchema );
module.exports = result