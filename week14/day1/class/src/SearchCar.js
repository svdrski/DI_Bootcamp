export function SearchCar (props) {
    let {listCars, handleChange} = props
    let listWithoutDup = [...new Set(listCars.map(item => (item.brand)))]

    return(
        <select id='mySelect' onChange={handleChange}>
            <option value='...'> ... </option>
            {listWithoutDup.map(item => (
                <option key={item} value={item}>{item}</option>
            ))}
        </select>
    )
}