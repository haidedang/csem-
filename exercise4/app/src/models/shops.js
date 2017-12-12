/**
 * Created by haidang on 10.12.17.
 */

const Sequelize = require('sequelize');

module.exports = global.db.define('shops', {
        owner_id: { type: Sequelize.STRING},
        name : { type: Sequelize.STRING}
    },
    { timestamps: false }
)
