/**
 * Created by i99208 on 2016. 11. 12..
 */


var token = function(alg){
    return require('./'+alg);
}


//logger.info( token('random').generate(10) );
//logger.info( token('jwt').generate('email','test@test.com',null) );

module.exports = token;







