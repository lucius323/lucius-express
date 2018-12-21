const Test = require('../../database/model/tests')
const sequelize = require('../../database')
const query = require('../../database/query')


const retrieve = async (where,  transaction) =>{

	let options = {
		where,
		transaction
	}
	return Test.findAll(options)
}

const find = (where, transaction) =>{

	let options = {
		where: where,
		transaction
	}
	return Test.findOne(options)
}

const create = (values, transaction) =>{
	return Test.create( values , {transaction})
}

const modify = (values, params, transaction ) =>{
	let options = {
		where: params,
		transaction
	}

	return Test.update(values,options)
}

const remove = (params ,transaction ) =>{
	let options = {
		where: params,
		transaction
	}

	return Test.destroy(options)
}

module.exports = {
	retrieve,
	find,
	create,
	modify,
	remove

}
