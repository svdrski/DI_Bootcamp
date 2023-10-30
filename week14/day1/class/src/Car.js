export const Car = (props) => {

    let {chosenCar, nameChosenCar} = props

    const checkCars = () => {

        if(chosenCar.length > 1) {
            return `Here are all the ${nameChosenCar} cars available in the shop`
        } else if ( chosenCar.length == 1) {
            return `Here are all the ${nameChosenCar} car available in the shop`
        } else if (chosenCar.length == 0) {
            return `No ${nameChosenCar} car currently available in the shop`
        }
    }


    return(
        <div>
            <h1>{checkCars()}</h1>
            {
                chosenCar.map(car=>{
                    return(
                        <ul key={car.id}>
                                <li>Brand : {car.brand}</li>
                                <li>Name : {car.name}</li>
                                <li>Year of creation : {car.year}</li>
                                <li>Origin : {car.origin}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
} 