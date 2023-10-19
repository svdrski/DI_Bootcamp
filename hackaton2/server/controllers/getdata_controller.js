const db = require('../models/getdata_model.js')

class get {
    static async Room(req, res) {
        const {id} = req.params
        const data = await db.room(id)
        res.json(data)
    }
}

module.exports = get