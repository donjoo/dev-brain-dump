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
import CounterComponent from "./pages/Custom/Counter.jsx";
import Appp from "./pages/Hooks/useTransaction.jsx";
import Appk from "./pages/Hooks/useDefferedValue.jsx";
import Appl from "./pages/Hooks/useDefferedValue.jsx";
import NameInput from "./pages/Hooks/useId.jsx";
import Paren from "./pages/Hooks/ImerativeHandle/imperative.jsx";
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
  {/* <Appq/>
  <ThemeContext.Provider value={{theme,setTheme}} >
    <Child />
  </ThemeContext.Provider>
  <Counterr></Counterr> */}
  {/* <CounterComponent /> */}
  {/* <Appp /> */}
  {/* <Appk /> */}
  {/* <Appl /> */}
  {/* <NameInput /> */}
  <Paren />
  </>
}
 

export default App;