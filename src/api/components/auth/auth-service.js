const jwt = require('jsonwebtoken');
const authRepository = require('./auth-repository');
const { passwordMatched } =
require('../../../utils/password');
function generateToken(email) {
 const jwtSecret = 'RANDOM_STRING';
 return jwt.sign(
 {
 email,
 timestamp: Date.now(),
 },
 jwtSecret,
 {
 expiresIn: '1d',
 }
 );
}
async function checkLoginCredentials(email, password) {
 const user = await authRepository.getUserByEmail(email);
 // We define a default password string here to handle
 // the case when the user login is invalid. We still
 // want to check the password anyway, so that it prevents
 // the attacker guessing login credentials by looking
 // at the processing time.
 const userPassword = user ? user.password :
'<RANDOM_FILLER>';
 const loginPassed = await passwordMatched(password,
userPassword);
 if (user && loginPassed) {
 return {
 email: user.email,
 fullName: user.fullName,
 token: generateToken(email),
 };
 }
 return null;
}
module.exports = {
 checkLoginCredentials,
};