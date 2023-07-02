const db = require('../models');

const verifyUser = async (req, res, next) =>{
    if(!req.session.userId){
        return res.status(401).json({msg: "Mohon login ke akun Anda!"});
    }
    const user = await db.User.findOne({
        attributes:['id','fullName','email','accountType'],
        where: {
            id: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    req.userId = user.id;
    req.accountType = user.accountType; 
    next();
}
const adminOnly = async (req, res, next) =>{
    const user = await db.User.findOne({
        where: {
            id: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    if(user.accountType !== "admin") return res.status(403).json({msg: "Akses terlarang"});
    next();
}

module.exports = {
    verifyUser:verifyUser,
    adminOnly:adminOnly
};