import { useContext } from "react";
import ThemeContext from "./Theme";









function Child(){
    const {theme, setTheme} = useContext(ThemeContext);



    const toggeletheme = () => 
        setTheme(prev => (prev === 'light' ? 'dark': 'light'));



    return (
        <div>
            <h2>Current Theme: {theme}</h2>
            <button onClick={}></button>
        </div>
    )
}