class reg {
    static Page (req, res) {
        res.render('regroom')
    }
    
    static Room (req, res) {
        const {address} = req.body
        console.log(address)
    }
}

module.exports = reg