export default function Search ({find, searchValue, searchlist, searchValues, gosearch}) {    
    return(
        <>
        <input type='search' onKeyDown={find} value={searchValue} onChange={searchlist} className='search' placeholder="Tel Aviv"/>
            <div id='error'>Not Found</div>
            <div id="searchhelp">
                {searchValues.map(item => (
                    <p className="searchitem" onClick={()=>{gosearch(item.LocalizedName)}}>{item.LocalizedName}</p>
                ))}
            </div>
        </>
    )
}