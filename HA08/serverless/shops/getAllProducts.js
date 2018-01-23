'use strict';

/**
 * bad Gateway response from AWS
 * @type {*|AWS.DynamoDB.DocumentClient}
 */

/*
const dynamodb = require('./dynamodb');
const request = require('request');

module.exports.get = (event, context, callback) => {

    var options = {
        method: 'GET',
        url: 'https://ce8ie3idkc.execute-api.us-east-2.amazonaws.com/dev/products',
        headers:
            {
                'content-type': 'application/json' },
        strictSSL:false,
        json: true };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        let result = body.filter((item) => { return item["shop_id"] == event.pathParameters.id} );
        console.log(result);
        const jsonResponse = {
            statusCode: 200,
            body: JSON.stringify(result)
        }
        callback(null, jsonResponse);
    });

};
*/
