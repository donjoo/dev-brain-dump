import { useContext } from "react";
import ThemeContext from "./Theme";
import Childd from "./jj";



function Child() {
    const { theme, setTheme } = useContext(ThemeContext);


    const toggleTheme = () => 
        setTheme(prev => (prev == 'light' ? 'dark': 'light'));



return (
    <div>
        <h2>Current Theme: {theme}</h2>
        <button onClick={toggleTheme}>Togggle Theme</button>
        <Childd />
    </div>
);

}
export default Child;








