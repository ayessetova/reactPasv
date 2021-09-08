import './App.css';
import Menu from "./Menu";

function Header(props) {
    return (
        <div>
            <h3>PASV {props.course} course!</h3>
            <div>Price {props.price} </div>
            <hr />

            <Menu items ={props.items} />
        </div>
    )
}

export default Header;