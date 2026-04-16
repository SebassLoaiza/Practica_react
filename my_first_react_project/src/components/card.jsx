function Card({title, url, nameButton, click}) {
    return (
        <>  
        <h3>{title}</h3>
        <img src={url} alt={title} />
        <button onClick={click}>{nameButton}</button>
        </>
    )
}

export default Card;