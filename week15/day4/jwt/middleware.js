const jwt = require("jsonwebtoken");


function verify ( req, res, next) {

    console.log('SOMEONE CONNECT')
    const token = req.cookies.token;

    // const token =  req.headers["authorization"];
    if(!token) {
        return res.status(401).send('Unauthorized')
    }

    jwt.verify(token, 'KEY', (err, user)=>{
        if(err) { return res.status(403).send('Token verification failed')}
        req.user = user
        next()
    })
}

module.exports = verify