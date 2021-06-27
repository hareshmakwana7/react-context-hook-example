import React, {Component} from 'react';
import {ThemeContext} from "../context/ThemeContext";

class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const {isLightTheme, light, dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="book-list" style={{background: theme.ui, color: theme.syntax }}>
                <ul>
                    <li style={{background: theme.bg, color: theme.syntax }}>the way of kings</li>
                    <li style={{background: theme.bg, color: theme.syntax }}>the name of the wind</li>
                    <li style={{background: theme.bg, color: theme.syntax }}>the final empire</li>
                </ul>
            </div>
        );
    }
}

export default BookList;