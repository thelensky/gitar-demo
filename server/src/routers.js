const AuthenicationControler = require ('./controllers/AuthenticationController')
const AuthenicationControlerPolicy = require ('./policies/AuthenicationControlerPolicy')

module.exports = (app) => {
	app.post('/register',AuthenicationControlerPolicy.register, AuthenicationControler.register)
	app.post('/login', AuthenicationControler.login)
};