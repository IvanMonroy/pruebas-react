import logo from './logo.svg';
import './App.css';
import MiPrimerComponente from './Components/CSSGridLayaut/MiPrimerComponente';
import FlexBox from './Components/FlexBox/FlexBox';
import {InterpolacionComponent} from './Components/Interpolacion&Ciclos/InterpolacionComponent';
import { EventosComponent } from './Components/EventosComponent/EventosComponent';

function App() {
  let nombre = "Iván Rene Monroy Santos";
  let tel = "1312434";
  return (
    <div className="App">
      <header className="App-header">
        <img src="http://static.demilked.com/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-14.gif" className="App-logo" alt="logo" />
        <p>
          Mi primer proyecto en React.
        </p>
        <h1>Hola <strong>{nombre}</strong></h1>
        <h2>tel: {tel}</h2>
        {/* MiPrimerComponente es el componente con CSS grid layaut */}
        <MiPrimerComponente />
        <img src="https://thumbs.gfycat.com/InnocentFlusteredAquaticleech-size_restricted.gif" className="App-logo" alt="logo" />
        <FlexBox />
        <img src="https://i.gifer.com/AyV0.gif" className="App-logo" alt="logo" />
        <InterpolacionComponent/>
        <hr/>
        <EventosComponent/>
      </header>
    </div>
  );
}

export default App;
