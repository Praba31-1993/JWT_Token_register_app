import { Router } from "express";
const router = Router();
import * as controller from '../controller/appController.js';
// const controller = require("../controller/appController.js")





/** POST Methods */
router.route('/register').post(controller.register); // register user
router.route('/registerMail').post(); // send the email
router.route('/authenticate').post(); // authenticate user
router.route('/login').post(controller.login); // login in app

/** GET Methods */
router.route('/user/:username').get(controller.getUser) // user with username
router.route('/generateOTP').get(controller.generateOTP) // generate random OTP
router.route('/verifyOTP').get() // verify generated OTP
router.route('/createResetSession').get() // reset all the variables


/** PUT Methods */
router.route('/updateuser').put(controller.updateUser); // is use to update the user profile
router.route('/resetPassword').put(); // use to reset password



export default router;