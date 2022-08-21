import { createContext, useEffect, useState } from "react"

export const themes={
    darkMode: {
        className: "bg-dark motion btn-outline-warning darkmode",
        Navlink: "darkmode nav-link",
        navshade:'dark-shade-sm'
    },
    lightMode:{
        className:"bg-light  motion btn-outline-danger lightmode",
        Navlink: "lightmode nav-link",
        navshade:'light-shade-sm'

    }
}

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false)
    const setTheme = isDark? themes.darkMode : themes.lightMode

    function toggleTheme(){
        localStorage.setItem("isDark", JSON.stringify(!isDark))
        setIsDark(!isDark)
    }
    useEffect(()=>{
        const isDark = localStorage.getItem('isDark') === 'true'
        setIsDark(isDark)
    },[])
    return(
        <ThemeContext.Provider value={[{setTheme, isDark},toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}