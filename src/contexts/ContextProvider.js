import React,{useContext,createContext,useState} from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  };
export const ContextProvider = ({children}) =>{

    const[activeMenu,setActiveMenu] = useState(true)
    const [isClicked,setIsClicked] = useState(initialState)
    const[screenSize,setScreenSize] = useState(undefined)
    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
    const [currentmode,setCurrentMode] = useState('Light')
    const [theme,setTheme] = useState('#03C9D7')
    const [themeSettings,setThemeSettings] = useState(false)
   
    const setMode = (e) =>{
        setCurrentMode(e.target.value);
        localStorage.setItem('thememode',e.target.value);
        setThemeSettings(false);
    }
    
    const setColor =(theme)=>{
        setTheme(theme);
        localStorage.setItem('colormode',theme);
        setThemeSettings(false)
    }
    

    return(      
        <StateContext.Provider 
        value={
            {activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,initialState,screenSize,setScreenSize,themeSettings,setThemeSettings,theme,currentmode,setMode,setColor}
        }>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);