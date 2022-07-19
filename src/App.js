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
          image='https://www.salirconarte.com/wp-content/uploads/2017/08/vincent-van-gogh-9515695-3-402.jpg'
          />
        <Testimonio
          name='Federico Keys'
          country='Poland'
          job='Music Developer'
          company='Microsoft'
          image='https://lastfm.freetls.fastly.net/i/u/770x0/55a6f78e2715cce95b03ddffc209b209.jpg'
          />
        <Testimonio
          name='Lucifer Belleus'
          country='Greek'
          job='Picture Developer'
          company='Apple'
          image='https://i.pinimg.com/originals/75/94/45/759445289ed13fabe03be7c8930e521e.png'
          />
        <Testimonio
          name='Federico Lopez'
          country='Germany'
          job='Philosophy Developer'
          company='Amazon'
          image='https://media.meer.com/attachments/bb0b599dafd8b46de3d0dd599c699975870416b6/store/fill/860/645/50cefc503fcc0847922aa6d04e8618fde3b9e5f164ec066f43a64f488382/Curt-Stoeving-Retrato-de-Friedrich-Nietzsche-detalle.jpg'
          />
      </div>

    </div>
  );
}

export default App;
