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
}

module.exports = search