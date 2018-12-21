/**
 * Created by 99856 on 2018. 07. 17..
 */

const sequelize = require('sequelize');
const db = require('../../database');

module.exports = db.define( 'tests',{

	id: { type: sequelize.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },          // 아이디 아이디
	name : { type: sequelize.DataTypes.STRING },
	email : { type: sequelize.DataTypes.STRING },
	created_at: { type: sequelize.DataTypes.DATE },            // 생성된 일시 생성일자
	updated_at: { type: sequelize.DataTypes.DATE },            // 변경된 일시 변경일자
	deleted_at: { type: sequelize.DataTypes.DATE },            // 삭제된 일시 삭제일자

}, {
	paranoid: true
})

