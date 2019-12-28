# Auth Template

This Auth Template uses the following technologies

- [x] Node / Express
- [x] MongoDB
- [ ] Passport.js Google OAuth
- [ ] Passport.js Facebook OAuth
- [ ] Passport.js Twitter OAuth
- [ ] Passport.js LinkedIn OAuth
- [ ] Passport.js Slack OAuth
- [ ] Passport.js Local (Username/Password)

To begin:
Install nodemon globally
[https://www.npmjs.com/package/nodemon]

```
$ npm i nodemon -g
```

```
$ npm install
$ nodemon index.js
```

### Passport Strategies

#### Google

The Google Strategy requires the developer setting up an app in the Developer Console. You will need a `clientID` and `clientSecret`. In addition, you will need to setup the callback URL and the redirect path, along with the consent screen. All of this is completed in the project section of Developer Console.
