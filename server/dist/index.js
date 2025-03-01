"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const authentication_route_1 = __importDefault(require("./routes/authentication.route"));
const googlestrategy_1 = __importDefault(require("./middlewares/googlestrategy"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use((0, express_session_1.default)({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        //sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24,
    },
}));
app.use(passport_1.default.initialize()); //initialise passport for authentication
app.use(passport_1.default.session()); //use session for keeping track
passport_1.default.use(googlestrategy_1.default);
passport_1.default.serializeUser((user, done) => done(null, user));
passport_1.default.deserializeUser((user, done) => {
    //console.log(user);
    return done(null, user);
});
app.use(authentication_route_1.default);
app.listen(process.env.PORT, () => {
    console.log(`the server is listening on port ${process.env.PORT}`);
});
