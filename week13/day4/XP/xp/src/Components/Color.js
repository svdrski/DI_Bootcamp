import React, { useEffect, useState, useMemo } from "react";



class Child extends React.Component {

    componentWillUnmount () {
        alert('UNMOUNT')
    }


    render(){
        return(
            <h1>Hello World</h1>
        )
    }
}

class Color extends React.Component {

    constructor() {
        super()
        this.state = {favoriteColor: 'red', show: true}
    }


     changeColor = () => {
        this.setState({favoriteColor:'Blue'})
    }


    componentDidMount() {
        this.setState({favoriteColor:'yellow'})
        // alert('useEffect reached')
    }

    shouldComponentUpdate(){
        return true
    }

    componentDidUpdate (){
        console.log("after update")
    }

    getSnapshotBeforeUpdate(){
        console.log("in getSnapshotBeforeUpdate")
        return null
    }



    render(){
        return (
            <>
            <h1>My favorite color is {this.state.favoriteColor}</h1>
            <button onClick={this.changeColor}>Change Color</button>
            {this.state.show && <Child/>}
            <button onClick={()=> {this.setState({show:false})}}>Disable</button>
            </>
        )
    }

}

export default Color




// import { useEffect, useState, useMemo } from "react";

// function Color () {
//     const [favoriteColor, setfavoriteColor] = useState('red')


//     const changeColor = () => {
//         setfavoriteColor('Blue')
//     }

//     useEffect(()=> {
//         // setfavoriteColor('Yellow')
//         alert('useEffect reached')
//     }, [])

 
//     const update = useMemo(()=>{
//         return false
//     }, [favoriteColor]) 


//     return (
//         <>
//         <h1>My favorite color is {favoriteColor}</h1>
//         <button onClick={changeColor}>Change Color</button>
//         </>
//     )
// }

// export default Color