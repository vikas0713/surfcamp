const InfoBlock = ({data}) => {


    const {text, headline, copy, reversed, image} = data;

    return <div className={`info ${reversed ? "info--reversed": ""}`}>
        <img className="info__image" src={image}/>
        <div className="info__text">
            <h5>{text}</h5>
        </div>
        <div className="info__headline copy">
            <p>{headline}</p>
            <p>{copy}</p>
        </div>
        <button className="btn btn--medium btn--turquoise">Book now</button>
    </div>
}

export default InfoBlock;