import axios from "axios"



export default function Book ({list, setList}) {


    async function searcher  (e){
        e.preventDefault()
        const data = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${(e.target.search.value).toLowerCase()}+intitle:keyes&key=${process.env.REACT_APP_KEY}`)
        setList(data.data.items)
    }

    function sorter (e){
        if(['newest', 'oldest'].includes(e.target.value)){
            const sortedList = [...list].sort((a,b)=> {
            const optionA = (a.volumeInfo.publishedDate ? Number(a.volumeInfo.publishedDate.slice(0,4)) : 0)
            const optionB = (b.volumeInfo.publishedDate ? Number(b.volumeInfo?.publishedDate.slice(0,4)) : 0)
            return e.target.value === 'newest' ? optionB - optionA : optionA - optionB 
        })
            setList(sortedList)
        }

    }


    return(
        <nav>
            <form onSubmit={searcher}>
                <input type="text" name='search' />
                <input className="btn" type="submit" value='Search'/>
            </form>

            <select id='sorting' onChange={sorter}>
                <option hidden>Sort</option>
                <option value='newest'>newest</option>
                <option  value='oldest'>oldest</option>
            </select>
        </nav>
    )
}