const jwt = require('jsonwebtoken');
const USER = require('../model/user.model');

exports.userAuth = async function (req, res) {
    try {
        const token = req.headers.token
        if (!token) {
            throw new Error("Please Enter Token");
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await USER.findOne({ _id: decoded._id });
        if (!user) {
            throw new Error("User Not Found");
        }
        req.userID = decoded.id
        next()
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}