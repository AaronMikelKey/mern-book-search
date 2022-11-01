const {User} = require('../models')

const resolvers = {
	Query: {
		me: async (username) => {
		return User.find(username)
		},
		savedBooks: async (parent, {username}) => {
			const params = username ? {username} : {}
			return User.find(params, 'username savedBooks')
		}
	}
}

module.exports = resolvers