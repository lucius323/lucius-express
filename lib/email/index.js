/**
 * Created by i99208 on 2016. 11. 12..
 */


var nodemailer = require('nodemailer');
const logger = require('../../lib/logger')

var config = require('config');

var smtpTransport = nodemailer.createTransport( config.get('Email.smtp'));

const send = function ( mailOptions ){

    smtpTransport.sendMail(mailOptions, function(error, response){

        if (error){
            logger.info(error);
        } else {
            logger.info("Message sent : " + JSON.stringify(response,null,2));
        }
        smtpTransport.close();
    });

}

exports.send = send;