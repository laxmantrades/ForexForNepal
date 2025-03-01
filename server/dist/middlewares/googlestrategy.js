"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const GoogleStrategy = require("passport-google-oauth20");
dotenv_1.default.config();
const GoogleOauth = new GoogleStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: `http://localhost:${process.env.PORT}/auth/google/callback`,
    prompt: 'select_account'
}, (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
});
exports.default = GoogleOauth;
