'use strict';

const admin = require('../schemas/admin');

const adminController = () => { };

adminController.createAdmin = (req, res, next) => {
    let Admin = new admin();
    Admin.userName = req.body.userName;
    Admin.password = req.body.password;
    
    Admin.save((error, document) => {
        if (error) {
            res.json({
                result: false,
                message: error
            });
        } else {
            res.json({
                result: true,
                message: document
            })
        }
    });
};

adminController.getAdmin = (req, res) => {
    let username = req.params.username;
    let password = req.params.password;

    admin.find(
        {
        userName: username,
        password: password
        }
    ).exec((error, document) => {
        if (error) {
            res.json({
                result: false,
                message: "Error occurred"
            });
        } else {
            res.json({
                result: true,
                data: document
            });
        }
    });
};

module.exports = adminController;