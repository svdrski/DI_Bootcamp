import React from 'react'


class PostList extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            posts: [],
            errorMsg: ''
        }
        
    }


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(a => a.json()).then(a => {this.setState({posts: a})})
    }

    render(){
        const {posts} = this.state
        return(
            <>
            <h1>List of posts</h1>
            {posts.map(item => (
                <div className='block'>
                <p>Title: <span>{item.title}</span></p>
                <p>Body: <span>{item.body}</span></p>

             </div>
            ))}
            </>
        )
    }
}




export default PostList