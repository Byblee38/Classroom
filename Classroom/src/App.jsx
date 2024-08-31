import Header from '../src/Page/Header_and_Footer/Header.jsx'
import Hero from '../src/Page/Home/Component/Hero/Hero.jsx'
import Benefit from './Page/Home/Component/Benefit/Benefit.jsx';

function App() {
  return (
    <div>
      <Header/>
      <section>
        <Hero/>
      </section>
      <section>
        <Benefit/>
      </section>
    </div>
  )
}

export default App;
