import React, { Component } from 'react'
import CardList from './Cardlist';
import SearchBox from './SearchBox';
import { Robots } from './robots';
import { render } from '@testing-library/react';


class App extends Component {

       constructor (){
        super()
        this.state = {
            robots: Robots,
            searchField: ''
        }
       }

       onsearchChange = (e) => {
        this.setState({searchField: e.target.value})
        
    }

    render(){

        const data = this.state.robots.filter(item=> {
            return  item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
         })

        return(
            <>
            <h1>Robofriends</h1>
            <SearchBox action={this.onsearchChange}/>
            <CardList Robots={data}/>
            </>
        )
    }
}

export default App
