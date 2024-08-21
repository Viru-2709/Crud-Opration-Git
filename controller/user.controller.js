const USER = require('../model/user.model')
const bcrypt = require('bcrypt')

exports.postAddUser = async function (req, res) {
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
            Message: error.message
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
            Message: error.message
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
            Message: error.message
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
            Message: error.message
        });
    }
}