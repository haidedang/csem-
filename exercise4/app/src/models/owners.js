/**
 * Created by haidang on 10.12.17.
 */
const Sequelize = require('sequelize');

module.exports = global.db.define('owners', {
    name: { type: Sequelize.STRING}
},
    { timestamps: false}
)

