import React from 'react'

class Sunrise extends React.Component {
    constructor(props){
        super(props)
        this.state = {country: 'Israel', city:'Tel Aviv'}
    }


    componentDidMount(){
        fetch('https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818').then(a=>a.json()).then(
            a=> {
                this.setState({hourSunrise: a.results.sunrise})
            }
            ).catch((e) => {console.log(e)})
    }


    render() {
        let { country, city, hourSunrise } = this.state

        return (
            <h1> In {country} in {city} the hour of sunrise {hourSunrise} </h1>
        )
    }
}


export default Sunrise