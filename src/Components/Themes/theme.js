import { createContext, useEffect, useState } from "react"

export const themes={
    darkMode: {
        className: "bg-dark motion btn-outline-warning darkmode",
        Navlink: "darkmode nav-link linker",
        card:"darkmode nav-link card ",
        navshade:'dark-shade-sm sticky-top darkmode',
        footer:'footer darkmode text-center  motion ',
        color: 'darkmode',
        header:'darkmodenav',
        a:'a darkmode',
        projectLink:'darkmode projectLink'
    },
    lightMode:{
        className:"bg-light  motion btn-outline-danger lightmode",
        Navlink: "lightmode nav-link linker",
        card:"lightmode nav-link card ",
        navshade:'light-shade-sm sticky-top lightmode',
        footer:'footer lightmode   text-center motion',
        color: 'lightmode',
        header:'ligtmodenav',
        a:'a lightmode',
        projectLink:'lightmode projectLink'


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