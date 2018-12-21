/**
 * Created by 99856 on 2018. 07. 17..
 */

const error = require('../../lib/error/index');
const paging = require('../../lib/paging')
const logger = require('../../lib/logger')
const svc = require('./test.service')
const isEmpty = require('../../lib/common/util').isEmpty

/**
 *  검색
 *
 * @param req
 * @param res
 */
const retrieve = async (req, res) => {

	let params = req.query

	try {
		let result = await svc.retrieve(params)
		res.json(result)
	}
	catch(err){
		res.status(500).json(err)
	}

}

/**
 *  조회
 *
 * @param req
 * @param res
 */
const find = async (req, res) => {

	let id = req.params.id

	if(isEmpty(id)){
		return res.status(400).json(error(400))
	}

	let params = {
		id
	}

	try {
		let result = await svc.find(params)
		res.json(result)
	}
	catch(err){
		res.status(500).json(err)
	}
}


/**
 *  수정
 *
 * @param req
 * @param res
 */
const modify = async (req, res) => {

	let id = req.params.id
	let body = req.body

	if(isEmpty(id) || isEmpty(body)){
		return res.status(400).json(error(400))
	}

	let params = {
		id
	}

	try {
		let result = await svc.modify( body, params )
		res.json(result)
	}
	catch(err){
		res.status(500).json(err)
	}

}


/**
 * 등록
 *
 * @param req
 * @param res
 */
const create = async (req, res) => {

	let body = req.body

	if(isEmpty(req.body) ){
		return res.status(400).json(error(400))
	}

	try {
		let result = await svc.create( body )
		res.json(result)
	}
	catch(err){
		res.status(500).json(err)
	}

}


/**
 *  삭제
 *
 * @param req
 * @param res
 */
const remove = async (req, res) => {

	let id = req.params.id

	if(isEmpty(id)){
		return res.status(400).json(error(400))
	}

	let params = {
		id
	}

	try {
		let result = await svc.remove( params )
		res.json(result)
	}
	catch(err){
		res.status(500).json(err)
	}

}


module.exports = {
	retrieve,
	find,
	create,
	modify,
	remove
}