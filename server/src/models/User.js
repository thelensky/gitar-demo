module.exports = (sequelize, DataTypes) =>
	sequelize.define('User', {
		email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			validate: {
				isEmail: {
					msg: "Email не прошол валидацию!"
				}
			}
		},
		password: {
			type: DataTypes.STRING,
			validate: {
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
	});