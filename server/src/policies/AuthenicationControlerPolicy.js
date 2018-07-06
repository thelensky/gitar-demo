const validator = require('validator');

module.exports = {
	register(req, res, next) {
		if (!validator.isEmail(req.body.email)) {
			res.status(400).send({
				error: 'Введите верный email!'
			});
		}
		else if (!validator.isLength(req.body.password, { min: 5, max: 30 })) {
			res.status(400).send({
				error: 'Пароль должен быть немение 5 и не более 30 символов'
			});
		}
		else if (!validator.matches(req.body.password, /^[a-zA-Z0-9]{5,30}/)) {
			res.status(400).send({
				error: 'Пароль доложен состоять из латинских букв или цифр!'
			});
		}
		else {
			next();
		}

	}
};
