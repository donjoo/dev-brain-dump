import MyComponent from "./pages/life";
import Memoss from "./pages/memo";
import Parent from "./pages/parent";
import Counterr from "./pages/reducer";
import Counter from "./pages/test";
import TextInput from "./pages/TextInput";
import TextInputWithFocusButton from "./pages/Hooks/useref";
import Appq from "./pages/Hooks/usememo";
import ThemeContext from "./pages/context.jsx/Theme";
import Child from "./pages/context.jsx/Child.jsx";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState('light')

  return <>
  {/* <Counter></Counter>
  <TextInput></TextInput>
  <MyComponent></MyComponent> */}
  {/* <Memoss></Memoss> */}
  {/* <Parent></Parent> */}
  {/* <Counterr/> */}
  {/* <TextInputWithFocusButton></TextInputWithFocusButton> */}
  <Appq/>
  <ThemeContext.Provider value={{theme,setTheme}} >
    <Child />
  </ThemeContext.Provider>
  </>
}
 

export default App;