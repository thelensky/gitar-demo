const bcrypt = require('bcrypt-nodejs');

function hashPassword(user, options) {
	if (!user.changed('password')) {
		return;
	}

	user.password = bcrypt.hashSync(user.password);
}

module.exports = function (sequelize, DataTypes) {
	const User = sequelize.define('User', {
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate:{
				isEmail: {
					msg: "Email не прошол валидацию!"
				}
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: {
					args:[5 , 30],
					msg: "Пароль должен быть немение 5 и не более 30 символов"
				},
				is:{
					args: /^[a-zA-Z0-9]{5,30}/,
					msg: "Пароль доложен состоять из латинских букв или цифр!"
				} 
			}
		}
	}, {
		hooks: {
			beforeUpdate: hashPassword,
			beforeSave: hashPassword
		}
	});

	User.prototype.comparePassword = function (password) {
		return bcrypt.compareSync(password, this.password);
	};

	return User;
};
