import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes,useParams, useLocation} from 'react-router-dom'
import AboutMe from './AboutMe'
import Home from './Home'
export default function AnimatedRoutes(){
    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<AboutMe/>}/>
                <Route path='*' element={<Navigate to='/'/>}/>

            </Routes>
        </AnimatePresence>
    )
}