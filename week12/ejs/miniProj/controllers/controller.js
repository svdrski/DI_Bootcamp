const model = require('../models/model.js')

class control {
    
    static async getList (req, res) {
        try {
            const feed = await model.getList ()
            if (feed == null) {res.status(500).send('Can not fetch data')}
            res.render('index', {feed})
        } catch (e) {res.send('Error ' + e)}
    }
    
    static async search (req, res) {
        try {
            const data = []
            res.render('search', {data})
        } catch (e) {res.send('Error ' + e)}
    }
    
    static async searchTitle (req, res) {
        try {
            const {title} = req.body
            const data = await model.searchTitle(title)
            if (data == null) {res.status(500).send('Can not fetch data')}
            res.render('search', {data})
        } catch (e) {res.send('Error ' + e)}
    }
    
    static async searchCategory (req, res) {
        try {
            const {category} = req.body
            const data = await model.searchCategory(category)
            if (data == null) {res.status(500).send('Can not fetch data')}
            res.render('search', {data})
        } catch (e) {res.send('Error ' + e)}
    }
    
}

module.exports = control


