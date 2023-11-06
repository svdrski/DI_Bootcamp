import BookCard from "./BookCard"
export default function BookList ({list}) {
    

    return(
        <div className="view">
        {list.map(item => (
            <BookCard data={item}/>
        ))}
        </div>
    )
}