import { check } from 'meteor/check';

const jwt = require('jsonwebtoken');
const serverSecret = Meteor.settings.private.jwtSecret;

Meteor.methods({
  'createJWT' (userEmail) {
    check(userEmail, String);
    const token = jwt.sign({ userEmail }, serverSecret);
    return token;
  }
});
