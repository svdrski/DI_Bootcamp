function BootstrapCard ({array}) {
    return (
        array.map(item =>(
            <div className="card m-5" style={{width: '30rem'}}>
            <img className="card-img-top" src={item.imageUrl} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <a href={item.buttonUrl} class="btn btn-primary">{item.buttonLabel}</a>
            </div>
          </div>   
        ))
 
    )
}

export default BootstrapCard