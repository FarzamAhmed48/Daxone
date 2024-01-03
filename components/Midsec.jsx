import "./Midsec.css"
import banner1 from "../assets/banner-bg-1.jpg"
import Card from "./Card"
import c1 from "../assets/pro-hm1-1.jpg"
const Midsec=()=>{
    return<>
    <div className="cntr">
        <img src={banner1} alt="" className="im1"/>
        <h1 className="h21">Premium Home Decorator</h1>
    </div>
    <div  className="center">
        <h2 className="h31">Best Sell</h2>
        <p className="p31">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
    </div>
    <div>
        <Card src={c1} pname="Chair" title="Golden Easy Spot Chair" price="210$" />
    </div>
    </>
}

export default Midsec