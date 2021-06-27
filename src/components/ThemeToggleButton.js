import React, {Component} from 'react';
import {ThemeContext} from "../context/ThemeContext";

class ThemeToggleButton extends Component {
    static contextType = ThemeContext;
    render() {
        const {toggleTheme} = this.context;
        return (
            <button type="button" onClick={toggleTheme}>
                Change theme
            </button>
        );
    }
}

export default ThemeToggleButton