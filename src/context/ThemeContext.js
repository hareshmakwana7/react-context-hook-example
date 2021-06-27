import React, {Component, createContext} from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true,
        light: {syntax: "#333", ui: "#eee", bg: "#ddd"},
        dark: {syntax: "#ddd", ui: "#333", bg: "#eee"},
        toggleTheme: this.toggleTheme.bind(this)
    }

    toggleTheme() {
        this.setState({...this.state, isLightTheme: !this.state.isLightTheme});
    }

    render() {
        return(
            <ThemeContext.Provider value={{ ...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider;
