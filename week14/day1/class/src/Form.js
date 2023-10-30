import UserData from "./UserData"
export default function Form () {



    const handleSubmit = (e) => {
        e.preventDefault()
        let inputs = e.target.getElementsByTagName('input')
        for(const input of inputs){
            console.log(input.value)
        }
    }



    return(
        <div className="box">
            <UserData handleSubmit={handleSubmit}/>
        </div>
    )
}


