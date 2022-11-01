const {gql} = require('apollo-server-express')

const typeDefs = gql`
	type User {
		username: String
		email: String
		savedBooks: [Book]
	}
	type Book {
		_id: ID
		description: String
		bookId: String
		image: String
		link: String
		title: String
	}

	type Query {
		me(username: String): User
	}

	type Query {
		savedBooks(username: String): [Book]
	}

`

module.exports = typeDefs