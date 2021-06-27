import './App.css';
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <Navbar/>
                <BookList/>
                <ThemeToggleButton />
            </ThemeContextProvider>
        </div>
    );
}

export default App;
