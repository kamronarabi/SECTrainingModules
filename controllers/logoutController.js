const User = require("../model/User");


const handleLogout = async (req, res)=>{
    //on client, also delete the accesstoken
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //no content
    const refreshToken = cookies.jwt;
    //is refreshtoken in DB
    const foundUser= await User.findOne({refreshToken}).exec();
    if(!foundUser){
        res.clearCookie("jwt",{httpOnly:true});
         return res.sendStatus(204);
    }
    //delete token in db
    foundUser.refreshToken = "";
    const result = await foundUser.save();

    res.clearCookie("jwt",{httpOnly:true, sameSite:"None"});//secure: true == only serves on https
    res.sendStatus(204);
}
module.exports = {handleLogout};