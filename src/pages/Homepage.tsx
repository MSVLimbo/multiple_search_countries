import React, {FC} from "react";
import logo from "../logo.svg";
import {Link} from "react-router-dom";

interface HomepageProps {

}

const Homepage: FC<HomepageProps> = () => {
    return (
        <div className="App">
        <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Let start using a searchable multiple select component for a list of countries</p>

                <Link
                    to={'/countries'}
                >
                    Start using
                </Link>
            </header>
        </div>
    )
}
export default Homepage;