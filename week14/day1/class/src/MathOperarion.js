export default function Math(props) {

    const {num1, num2}  = props

    function del(){
        if(num2 === 0) {throw new Error('EBALO NA 0')}
        return num1 / num2
    }

    return(
        <h1>{del()}</h1>
    )

}