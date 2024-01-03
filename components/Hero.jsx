import Chair from "../assets/hm1-single-1.webp"
import Button from "./Button"
import "./Hero.css"
const Hero=()=>{
    return<>
        <div className="divm">
            <div>
                <img src={Chair} alt="" className="chimg"/>
            </div>
            <div className="divm2">
                <h1 className="h11">30% off</h1>
                <h1 className="h12">Comfort Chair</h1>
                <p className="p11">Collect from Daxone & get 30% Discount</p>
                <Button name="SHOP NOW"/>
            </div>
        </div>
        
    </>
}
export default Hero