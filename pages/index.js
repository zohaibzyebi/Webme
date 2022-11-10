import About from '../components/Home/About'
import Contact from '../components/Home/Contact'
import Header from '../components/Home/Header'
import Services from '../components/Home/Services'
import Testimonials from '../components/Home/Testimonials'
import Works from '../components/Home/Works'

export default function Home() {
  return (
    <div className='container'>
      <Header />
      <About />
      <Services />
      <Testimonials />
      <Works />
      <Contact />
    </div>
  )
}
