import React, {Component} from 'react';
import {ThemeContext} from "../context/ThemeContext";

class Navbar extends Component {
    static contextType = ThemeContext;
    render() {
        console.log("context", this.context);
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;

        return (<nav style={{background: theme.bg, color: theme.syntax }}>
            <div>
                <h1>
                    Context Example
                </h1>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About us
                    </li>
                    <li>
                        Contact us
                    </li>
                </ul>
            </div>
        </nav>)
    }
}

export default Navbar;