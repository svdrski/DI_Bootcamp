import React, { Component } from 'react'
import CardList from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import { Robots } from '../robots';
import { render } from '@testing-library/react';
import Scroll from '../components/Scroll';


class App extends Component {

       constructor (){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
       }

       onsearchChange = (e) => {
        this.setState({searchField: e.target.value})
        
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(a=>a.json()).then(a => this.setState({robots: a}))
        
    }

    render(){

        const data = this.state.robots.filter(item=> {
            return  item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
         })

        return(
            !this.state.robots.length ? <h1>Loading</h1> :
            <>
            <div>
            <h1>Robofriends</h1>
            <SearchBox action={this.onsearchChange}/>
            </div>
            <Scroll>
                <CardList Robots={data}/>
            </Scroll>
            </>
        )
    }
}

export default App
