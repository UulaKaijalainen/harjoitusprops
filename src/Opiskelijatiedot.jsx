function Opiskelijatiedot({opiskelija}){
    
    return(
        <div>
            <h2>Opiskelijan tiedot</h2>
            <p><strong>nimi</strong>{opiskelija.nimi}</p>
            <p><strong>ikä</strong>{opiskelija.ika}</p>
            <p><strong>kurssi</strong>{opiskelija.kurssi}</p>
        </div>
    );
}

export default Opiskelijatiedot;
