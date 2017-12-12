/**
 * Created by haidang on 10.12.17.
 */

const Sequelize = require('sequelize');

module.exports = global.db.define('products', {
        shop_id: { type: Sequelize.STRING},
        name : { type: Sequelize.STRING},
        price: { type: Sequelize.STRING}
    },
    { timestamps: false }
)
