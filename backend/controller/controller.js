

module.exports={
    register: (req,res,next)=>{
       try{
        console.log(req.body)
        console.log("hi")
       }catch(err){
        console.log(err)
       }
    }
}