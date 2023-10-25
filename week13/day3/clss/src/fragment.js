import React from 'react'


const SearchCar = (props) => {
    let { searchCar, handleChange } = props
    return (
        <div>
            <h1>My Component</h1>
            <React.Fragment>
                <p>Paragraph 1</p>
                <p>Paragraph 2</p>
                <p>Paragraph 3</p>
            </React.Fragment>
        </div>
    );
}

export default SearchCar;
