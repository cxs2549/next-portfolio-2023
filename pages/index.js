import Footer from "../components/common/Footer"
import Header from "../components/common/header/Header"
import About from "../components/homepage/About"
import Projects from "../components/homepage/Projects"

const App = () => {
  return (
    <div className="antialiased">
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
