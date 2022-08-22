import { createContext, useEffect, useState } from "react"

export const themes={
    darkMode: {
        className: "bg-dark motion btn-outline-warning darkmode",
        Navlink: "darkmode nav-link linker",
        navshade:'dark-shade-sm sticky-top darkmode',
        footer:'footer darkmode text-center  motion ',
        color: 'darkmode',
        header:'darkmodenav',
        a:'a darkmode'
    },
    lightMode:{
        className:"bg-light  motion btn-outline-danger lightmode",
        Navlink: "lightmode nav-link linker",
        navshade:'light-shade-sm sticky-top lightmode',
        footer:'footer lightmode   text-center motion  ',
        color: 'lightmode',
        header:'ligtmodenav',
        a:'a lightmode'


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