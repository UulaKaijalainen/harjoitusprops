
import Tervehdys from './Hello'
import Opiskelijatiedot from './Opiskelijatiedot'

function App() {
const opiskelija = {
  nimi: "Matti Meikäläinen",
  ika: "16",
  kurssi: "Reactim perusteet"
};


  return (
    <div>
   <Tervehdys name="Uula"/>
   <Opiskelijatiedot opiskelija={opiskelija}/>
    </div>
  );
};

export default App
