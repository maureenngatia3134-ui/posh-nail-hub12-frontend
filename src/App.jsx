import './App.css'
import Hero from './components/section/hero'
import Statistics from './components/section/statistics.jsx'
import About from './components/section/about.jsx'
import Features from './components/section/Features.jsx'
import Posh from './components/section/posh.jsx'
import Price from './components/section/price.jsx'
import Testimonials from './components/section/Testimonials.jsx'
import Info from './components/section/info.jsx'
import Footer from './components/section/Footer.jsx'

function App() {
  return (
    <main>
      <Hero />
      <Statistics />
      <About />
      <Features />
      <Posh /> 
      <Price />
      <Testimonials />
      <Info />
      <Footer />
    </main>
  )
}

export default App
