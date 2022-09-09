import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes,useParams, useLocation} from 'react-router-dom'
import AboutMe from './AboutMe'
import Home from './Home'
import Projects from './Projects';
export default function AnimatedRoutes(props){
    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home setTheme= {props.setTheme}  isDark= {props.isDark}/>}/>
                <Route path='/home' element={<Home setTheme= {props.setTheme} isDark= {props.isDark}/>}/>
                <Route path='/about' element={<AboutMe/>}/>
                <Route path='/projects' element={<Projects setTheme= {props.setTheme}/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>
                

            </Routes>
        </AnimatePresence>
    )
}