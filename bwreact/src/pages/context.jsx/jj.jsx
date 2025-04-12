import { useContext } from "react";
import ThemeContext from "./Theme";



function Childd() {
    const { theme, setTheme } = useContext(ThemeContext);


    const toggleTheme = () => 
        setTheme(prev => (prev == 'light' ? 'dark': 'light'));



return (
    <div>
        <h2>Current Thesssssme: {theme}</h2>
        <button onClick={toggleTheme}>Togggle Theme</button>
    </div>
);

}
export default Childd;
