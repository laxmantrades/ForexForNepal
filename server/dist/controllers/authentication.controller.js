"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logout = exports.AuthCheck = exports.GoogleCallBack = void 0;
const passport_1 = __importDefault(require("passport"));
const GoogleCallBack = (req, res) => {
    // You need to explicitly call passport.authenticate to handle the authentication callback
    passport_1.default.authenticate("google", { failureRedirect: "/" }, (err, user, info) => {
        if (err || !user) {
            // Handle error or failed authentication
            return res.redirect("/login"); // Redirect to homepage or show an error page
        }
        // If authentication is successful, passport automatically manages the session
        req.logIn(user, (err) => {
            if (err) {
                return res.redirect("/"); // Handle error during login
            }
            // Once the user is logged in, you can save the session if needed and redirect
            req.session.save(() => {
                console.log(req.user);
                res.redirect("/authcheck"); // Redirect after session is saved
            });
        });
    })(req, res); // Execute passport logic for Google OAuth
};
exports.GoogleCallBack = GoogleCallBack;
const AuthCheck = (req, res) => {
    try {
        //console.log(req.isAuthenticated());
        if (req.isAuthenticated()) {
            res.status(200).json({
                authenticated: true,
            });
            return;
        }
        else {
            res.status(200).json({
                authenticated: false,
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something went wrong",
        });
    }
};
exports.AuthCheck = AuthCheck;
const Logout = (req, res) => {
    try {
        req.logOut(() => {
            res.redirect("/");
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.Logout = Logout;
