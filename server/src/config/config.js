module.exports = {
	port: process.env.PORT || 8081,
	db:{
		database: process.env.DB_NAME || 'tabtracer',
		user: process.env.DB_USER || 'tabtracer',
		password: process.env.DB_PASS || 'tabtracer',
		options: {
			dialect: 'sqlite',
			host: process.env.HOST || 'localhost',
			storage: './tabtracer.sqlite'
		}
	},
	authentication: {
		jwtSecret: process.env.JWT_SECRET || 'secret'
	}
}