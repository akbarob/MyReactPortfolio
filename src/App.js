import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import AnimatedRoutes from './Components/Routes/AnimatedRoutes';
import { useContext } from 'react';
import { ThemeContext } from './Components/Themes/theme';

function App() {
  const [{setTheme, isDark}, toggleTheme] = useContext(ThemeContext)
  let Mode= isDark? "DarkMode" : "LightMode"
  console.log("Current Theme is:", Mode)
  return (
    <div className={setTheme.className}>
      <Header setTheme= {setTheme} isDark= {isDark} toggleTheme ={toggleTheme}/>
      <AnimatedRoutes setTheme= {setTheme} />
      <Footer setTheme= {setTheme} isDark= {isDark}/>
    </div>
  );
}

export default App;
