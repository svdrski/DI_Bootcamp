import React from 'react'


const Car = ({chosenCar}) => {
    return (
        <div>
            {
                chosenCar.map(item => (
                    <ul key={item.id}>
                        <li>Brand : {item.brand}</li>
                        <li>Name : {item.name}</li>
                        <li>Year of creation : {item.year}</li>
                        <li>Origin : {item.origin}</li>
                    </ul>
                ))
            }
        </div>
    )

}

export default Car


// class Car extends React.Component{
//     constructor (props){
//         super(props)
//         this.state = {color: "red",
//                       brand: 'Ford',
//                       model: 'Mustang'}
//     }


//     changeBrand = () =>{
//         this.setState({brand: "Audi" })
//     }

//     changeColor = () => {
//         let {colors} = this.props
//         let randomColor = colors[Math.floor(Math.random() * colors.length)]
//         this.setState({color: randomColor})

//     }


//     render(){
//         return(
//             <div>
//             <button onClick={(e)=>{
//                 this.setState({color: "Green"})
//             }}>Change</button>
//             <button onClick={this.changeBrand}>brand</button>
//             <button onClick={this.changeColor}>Random</button>
//             <h1>I am a {this.state.color} Car {this.state.brand} {this.state.model}</h1>
//             </div>
           
//         )
//     }
// }


// export default Car