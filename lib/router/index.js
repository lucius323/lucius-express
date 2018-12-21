/**
 * Created by CYK on 2016-12-07.
 */

const routeconf = require('../../config/route.json');
const logger = require('../logger')

const init = ( app )=>{

    //logger.info('--- route setting ---');

    routeconf.routes.forEach( (route)=>{
        if( route.use ) {
            app.use( route.path, require(route.fn.path) );
        }
    });

}

const reqInfo = (req, res ,next) => {
	logger.info(`===================== GET REQUEST INFORMATIONS =====================`)
	logger.info(`ORIGINAL_URL => ${req.originalUrl}`)
	logger.info(`BASE_URL => ${req.baseUrl}`)
	logger.info(`PATH => ${req.path}`)
	logger.info(`METHOD => ${req.method}`)
	logger.info(`====================================================================`)
	logger.info(`QUERY_PARAMS => ${JSON.stringify(req.params,null,2)}`)
	logger.info(`PATH_PARAMS => ${JSON.stringify(req.params,null,2)}`)
	logger.info(`BODY_PARAMS => ${JSON.stringify(req.body,null,2)}`)
	logger.info(`====================================================================`)
	next()
}



module.exports = {
	init,
	reqInfo
};