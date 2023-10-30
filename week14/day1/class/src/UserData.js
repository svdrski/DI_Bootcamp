export default function UserData ({handleSubmit}){
   
    return(
        <>
        <form onSubmit={handleSubmit}>
            <InputWith id='name' label='Name' type='text'/>
            <InputWith id="age" label="Age" type="number" />
                <InputWith id="email" label="Email" type="email" />
            <button type="submit">Submit</button>
        </form>
    </>
    )
}

const InputWith = ({id, label, type}) =>{
    return(
        <>
        <label htmlFor={id}>{label}</label>
        <input
            id={id}
            type={type}
        />
    </>
    )
}