import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import Anchor from "./anchor"
import Logo from "./logo"
import "./Header.css"
const Header=()=>{
    return <>
        <div className="mdiv">
            <div>
                <Logo/>
            </div>
            <div className="anch">
                <Anchor name="Home"/>
                <Anchor name="Shop"/>
                <Anchor name="Mens"/>
                <Anchor name="Pages"/>
                <Anchor name="Blog"/>
                <Anchor name="Contact"/>
            </div>
            <div className="flex">
                <FontAwesomeIcon icon={faCartShopping}  className="ficon"/>
                <p>2 items</p>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="ficon" />
            </div>
        </div>
    </>
}
export default Header