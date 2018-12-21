const model = require('./test.model')
const BizError    = require('../../lib/error/bizError');
const logger    = require('../../lib/logger/index');
const code = require('../../config/commonCode.json');

const retrieve = async ( params ,tx ) => {
	return await model.retrieve(params , tx)
}

const find = async ( params ,tx ) => {
	return await model.find(params, tx)
}

const create = async ( body ,tx ) => {
	return await model.create(body, tx)
}

const remove = async ( params,tx ) => {
	let affected_rows = await model.remove( params, tx)
	return affected_rows
}

const modify = async ( body, params,tx ) => {

	let item = await find(params,tx)
	if(!item) throw new BizError(200)

	let affected_rows = await model.modify(body, params, tx)
	if(affected_rows[0] < 1) return item
	else {
		let modified_item = await find(params,tx)
		return modified_item
	}
}

module.exports = {
	retrieve,
	find,
	create,
	modify,
	remove

}