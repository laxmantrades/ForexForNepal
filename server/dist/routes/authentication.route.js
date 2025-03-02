"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authentication_controller_1 = require("../controllers/authentication.controller");
const passport_1 = __importDefault(require("passport"));
const authenticationRoute = express_1.default.Router();
//authenticationRoute.route("/login").post()
authenticationRoute.route("/login").get(passport_1.default.authenticate("google", {
    scope: ["profile", "email"],
    //accessType: "offline", // Request a refresh token for offline access
    "prompt": "select_account"
}));
authenticationRoute.route("/auth/google/callback").get(authentication_controller_1.GoogleCallBack);
authenticationRoute.route("/authcheck").get(authentication_controller_1.AuthCheck);
authenticationRoute.route("/logout").get(authentication_controller_1.Logout);
exports.default = authenticationRoute;
