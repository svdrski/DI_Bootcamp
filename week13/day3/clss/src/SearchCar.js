const SearchCar = (props) => {

    let {searchCar, handleChange } = props

    return (
            <>
                <label htmlFor="search">Search: </label>
                <input
                    id="search"
                    type="text"
                    value={searchCar}
                    onChange={handleChange}
                />
            </>
    
        )
    

}

export default SearchCar;
