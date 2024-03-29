// fecthing user form jwt aauth tokken
var jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const fetchuser=async(req,res,next)=>{
    try{
    const auth_token_by_browser=req.header("auth-token");
    // now we have to macth this auht token wiht generated by jwt are they same
    // the verify function will return the payloadd if toke match return error
    
    if(!auth_token_by_browser){
       return  res.status(400).send("Auth token not present in brwser header");
    }
    // here payload is data containing in the jwt token
    const payload=await jwt.verify(auth_token_by_browser,JWT_SECRET);
    req.user=payload.user
    // req.user=User.find({user})._id
    // now remmebr your ppayload payloa conatain a key user which correspond to a obect containing id;
    next();
}
catch(err){
    res.status(400).send("Please Entser a valid token id");
}

};

module.exports=fetchuser;
