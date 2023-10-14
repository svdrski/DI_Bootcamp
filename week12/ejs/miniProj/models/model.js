const Parser = require('rss-parser')
const parser = new Parser()

class model {
    static async getList () {
        try {
            return  await parser.parseURL('https://thefactfile.org/feed/')
        } catch (e) { return null}
    }
    
    static async searchTitle(title) {
        try{
            const list = await parser.parseURL('https://thefactfile.org/feed/')
            const result = list.items.filter(item => item.title.toLowerCase().includes(title.toLowerCase()))
            return title.length === 0 ? [] : result
        } catch (e) {return null}

    }
    
    static async searchCategory(category) {
        try {
            const list = await parser.parseURL('https://thefactfile.org/feed/')
            const result = list.items.filter(item => {
                return item.categories.some( catgr =>{
                    return   catgr.toLowerCase() === category.toLowerCase()
                }) })
            return category.length === 0 ? [] : result
        }catch (e) {return null}
    }
    
}

module.exports = model