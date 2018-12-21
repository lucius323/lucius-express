

const biz = require('./test.biz')
const error = require('../../lib/error/index');
const TRAN      = require('../../database/transaction/index');
const database = require('../../database/index');
const BizError    = require('../../lib/error/bizError');

const logger    = require('../../lib/logger/index');

/**
 * 검색
 *
 * @param params
 */
const retrieve = async ( params ) => {

	const _trxStart = async (tx) => {
		try{
			return await biz.retrieve( params ,tx );
		}
		catch(err) {
			logger.error(err)
			if( err instanceof BizError ) throw err.getError()
			else throw error(500)
		}
	};

	return await database.transaction( TRAN, _trxStart )
}


/**
 * 조회
 *
 * @param params
 */
const find = async ( params ) =>{

	const _trxStart = async (tx) => {
		try{
			return await biz.find( params ,tx );
		}
		catch(err) {
			logger.error(err)
			if( err instanceof BizError ) throw err.getError()
			else throw error(500)
		}
	};

	return await database.transaction( TRAN, _trxStart )
}

/**
 *  변경
 *
 * @param body
 * @param params
 */
const modify = async ( body, params ) =>{

	const _trxStart = async (tx) => {
		try{
			return await biz.modify( body, params ,tx );
		}
		catch(err) {
			logger.error(err)
			if( err instanceof BizError ) throw err.getError()
			else throw error(500)
		}
	};

	return await database.transaction( TRAN, _trxStart )
}

/**
 * 등록
 *
 * @param body
 */
const create = async ( body ) =>{

	const _trxStart = async (tx) => {
		try{
			return await biz.create( body, tx );
		}
		catch(err) {
			logger.error(err)
			if( err instanceof BizError ) throw err.getError()
			else throw error(500)
		}
	};

	return await database.transaction( TRAN, _trxStart )
}


/**
 * 삭제
 *
 * @param params
 */
const remove = async ( params ) =>{

	const _trxStart = async (tx) => {
		try{
			return await biz.remove( params , tx );
		}
		catch(err) {
			logger.error(err)
			if( err instanceof BizError ) throw err.getError()
			else throw error(500)
		}
	};

	return await database.transaction( TRAN, _trxStart )
}


module.exports = {
	retrieve,
	find,
	create,
	modify,
	remove

}