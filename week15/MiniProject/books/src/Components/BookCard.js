export default function BookCard ({data}) {

    return(
        <div className="card">
            <img alt="imag" className="imag" src={data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : 'https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png'}></img>
            <div className="info">
                <h2>{data.volumeInfo.title}</h2>
                <p>Author: {data.volumeInfo.authors[0]}</p>
                <p>Published: {data.volumeInfo.publishedDate}</p>
            </div>
        </div>
    )
}