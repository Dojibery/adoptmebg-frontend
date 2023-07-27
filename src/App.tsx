import './App.css'
import {Route, Routes} from 'react-router-dom';
import {ThemeProvider} from "@mui/material";
import theme from "./styles/theme.ts";
import {HomeDesktop} from "./components";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<HomeDesktop/>}/>
                </Routes>
            </ThemeProvider>
        </>
    )
}

export default App;