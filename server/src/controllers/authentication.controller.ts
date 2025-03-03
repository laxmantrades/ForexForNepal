import { RequestHandler } from "express";
import passport from "passport";
import { createUser } from "../services/userService";
import { format } from "date-fns";

export const GoogleCallBack: RequestHandler = async (req, res) => {
  // You need to explicitly call passport.authenticate to handle the authentication callback
  passport.authenticate(
    "google",
    { failureRedirect: "/" },
    (err, user, info) => {
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
          res.redirect("http://localhost:3000/?success=true"); // Redirect after session is saved
        });
      });
    }
  )(req, res); // Execute passport logic for Google OAuth
};

export const AuthCheck: RequestHandler = async (req, res) => {
  try {
    //console.log(req.isAuthenticated());

    if (req.isAuthenticated()) {
      const user: any = req.user;
      const date = new Date();
      const formattedDate = format(date, "EEEE MMMM yyyy HH:mm");

      const userData = {
        email: user?.emails[0]?.value,
        fullName: user?.displayName,
        refreshToken: req.sessionID,
        photoUrl: user.photos[0].value,
        lastLogin: formattedDate,
      };

      const createdUser = await createUser(userData);

      //console.log("This is", user);

      res.status(200).json({
        authenticated: true,
        user: createdUser,
      });

      return;
    } else {
      res.status(200).json({
        authenticated: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

export const Logout: RequestHandler = (req, res) => {
  try {
    req.logOut(() => {
      res.redirect("http://localhost:3000");
    });
  } catch (error) {
    console.log(error);
  }
};
