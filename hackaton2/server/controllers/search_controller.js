const model = require('../models/search_mode.js')

class search {
    
    static  async Open (req, res) {
        res.render('search')

    }

    static async GetList (req, res) {
        try{
           const data = await model.get()
           res.send(data)
        } catch (e) {console.log('Eroor ' + e)}
    }


    static async value (req, res) {
        const {value} = req.query
        console.log(value)
        const data = await model.find(value)
        res.json(data)
    }
}

module.exports = search