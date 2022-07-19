import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='titleContainer' >
          <h1>ECOSISDUO</h1>
        </div>
        <Testimonio 
          name='Federico Toys'
          country='Mexico'
          job='Art Developer'
          company='Google'
          image='https://shorturl.at/bdiY8'
          />
        <Testimonio
          name='Federico Keys'
          country='Poland'
          job='Music Developer'
          company='Microsoft'
          image='https://shorturl.at/bfntZ'
          />
        <Testimonio
          name='Lucifer Belleus'
          country='Greek'
          job='Picture Developer'
          company='Apple'
          image='https://shorturl.at/eik58'
          />
      </div>
    </div>
  );
}

export default App;
