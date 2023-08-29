
import glass from './img/glassSmile.jpg'
import guitarra from './img/guitarra.jpeg'
import rock from  './img/rock.jpg'

import './App.css'

function App() {
  return (
    <>
      <div>

        <h1>Hello, World</h1>
          <img src={glass} className="glass" alt="Emoji óculos" title="Emoji óculos"/>
          <img src={guitarra} className="guitarra" alt="guitarra" title="Guitarra"/>
          <img src={rock} className="rock" alt="rock símbolo" title="rock"/>
             
      </div>
    </>
  )
}

export default App
