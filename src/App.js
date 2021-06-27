import './App.css';
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";
import {UseCallbackComponent} from "./components/useCallback/UseCallbackComponent";

function App() {
    return (
        <div className="App">
            <h1>Context Example</h1>
            <hr />
            <ThemeContextProvider>
                <Navbar/>
                <BookList/>
                <ThemeToggleButton />
            </ThemeContextProvider>

            <h1>Use Callback Example</h1>
            <hr />

            <UseCallbackComponent />
        </div>
    );
}

export default App;
