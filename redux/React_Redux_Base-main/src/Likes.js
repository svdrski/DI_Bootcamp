import { connect } from "react-redux"



function Likes (props){
    console.log(props)
    return(
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>❤️ {props.likes}</button>
            <button onClick={props.onDislike}>dislike</button>
        </div>
    )
}





function mapStateToProps(state) {
    console.log('mapStateToProps', state)
    const {likes} = state
    return{
        likes: likes.likes,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        
        onIncrementLikes: () =>{
            const action = {type: 'INCREMENT'}
            dispatch(action)
        },

        onDislike: ()=>{
            const action = {type: 'DECREMENT'}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes)