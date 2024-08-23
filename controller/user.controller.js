const USER = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.postSignupUser = async function (req, res) {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const user = await USER.create(req.body);
        res.status(201).json({
            status: "Success",
            message: "User Created",
            data: user
        })
    } catch (error) {
        res.status(404).json({
            stastus: "fail",
            message: error.message
        });
    }
}

exports.postUserLogin = async function (req, res) {
    try {
        const checkemail = await USER.findOne({ email: req.body.email })
        if (!checkemail) {
            throw new Error("Please Enter Valid Email")
        }
        const checkpassword = await bcrypt.compare(req.body.password, checkemail.password)
        if (!checkpassword) {
            throw new Error("Please Enter Valid Password")
        }
        var token = jwt.sign({ id: checkemail._id }, process.env.SECRET_KEY)
        res.status(201).json({
            status: "User Login",
            message: "User Login Successfull",
            data: {
                token: token,
                checkemail
            }
        })

    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

exports.getAllUser = async function (req, res) {
    try {
        const user = await USER.find();
        res.status(200).json({
            status: "Success",
            message: "User Retrieved",
            data: user
        })
    } catch (error) {
        res.status(404).json({
            stastus: "fail",
            message: error.message
        });
    }
}

exports.patchUpdateUser = async function (req, res) {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = await USER.findByIdAndUpdate(req.params.id, req.body)
        res.status(201).json({
            status: "Success",
            message: "User Updated",
            data: user
        })
    } catch (error) {
        res.status(404).json({
            stastus: "fail",
            message: error.message
        });
    }
}

exports.deleteUser = async function (req, res) {
    try {
        const user = await USER.findByIdAndDelete(req.params.id, req.body)
        res.status(201).json({
            status: "Success",
            message: "User Deleted",
            data: user
        })
    } catch (error) {
        res.status(404).json({
            stastus: "fail",
            message: error.message
        });
    }
}