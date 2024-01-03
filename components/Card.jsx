import "./Card.css"
const Card=(props)=>{
    return <>
        <div className="crd">
            <img src={props.src} alt="" className="crimg"/>
            <p>{props.pname}</p>
            <h2>{props.title}</h2>
            <h2>{props.price}</h2>
        </div>
    </>
}
export default Card