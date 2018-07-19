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
			validate:{
				isEmail: true,
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len: [6, 30],
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
