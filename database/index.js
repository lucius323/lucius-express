/**
 * Created by i99208 on 2016. 11. 9..
 */

const Sequelize = require('sequelize');
const config = require('config');


const sequelize = new Sequelize( config.get('Sequelize.mysql.db'),
                                 config.get('Sequelize.mysql.id'),
                                 config.get('Sequelize.mysql.password'),
                                 config.get('Sequelize.mysql.connection_info')  );


module.exports = sequelize;

