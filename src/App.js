import Header from './components/Header';
import Countdown from './components/Countdown'
import Vinyls from './components/Vinyls'
import './App.css';
import Vinyl_Instance from './components/Vinyl_Instance';


function Cover(){
  return (
    <img src="cover.png" alt="the cover of midnights by taylor swift" width="20%"></img>
  )
}



function App() {
  return (
    <div className="App">
      <Header />
      <Countdown />
    </div>
  );
}

export default App;
