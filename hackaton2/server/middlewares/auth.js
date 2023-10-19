const jwt = require('jsonwebtoken');

const auth = (req, res, ) => {
    let token = req.headers.authorizations
    if(!token)  { return res.status(301).redirect('/login');}
    token = JSON.parse(token)
    const decoded = jwt.verify(token, 'roommates')
    console.log(decoded.email)
    
}

module.exports = auth