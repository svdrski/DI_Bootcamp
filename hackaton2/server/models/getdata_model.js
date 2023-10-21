const db = require('../config/db.js')

class get {
    
    static async room (id) {
        try{
            const response = {}
            const data = await   db('rooms').where({id}).select('*')
                      response.room = data[0]
            
            const photos = await db('photos').where('id', id).select('*')
                      response.photos = photos
            
            const profileimg = await db('profile_img').where('id', id).select('*')
                     response.profileimg = profileimg
            
            return response
        } catch (e) {console.log('Error ' + e)}
    }

    
}

module.exports = get

//
//.select('table1.column1', 'table2.column2')
//  .innerJoin('table2', 'table1.columnX', 'table2.columnY')