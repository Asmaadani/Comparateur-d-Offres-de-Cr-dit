import { useState } from 'react';
import { creditOffers } from "./data.js";
import OfferCard from "./components/OfferCard.js"
import CompoundInterest from "./components/CompoundInterest";

function App() {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [capital, setCapital] = useState(10000);
  const [tauxInt, setTauxInt] = useState(5);
  const minRate = Math.min(...creditOffers.map(o => o.rate));

  return (
    <div className="App"> 
      <h1>Comparateur de Crédit</h1>
      
      <div className="offers-list" style={{ display: 'flex', justifyContent: 'center' }}>
        {creditOffers.map((offre) => (
          <OfferCard 
            key={offre.id} 
            offre={offre} 
            isRecommended={offre.rate === minRate} // vérifier si c'est la valeur minimal pour devienne true 
            onSelect={() => setSelectedOffer(offre)} // Siftna l-clic event k-prop
          />
        ))}
      </div>

      {selectedOffer && (
        <div className="details-section" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
          <h2>Détails de l'offre: {selectedOffer.provider}</h2>
          <p>Durée: {selectedOffer.duration} ans</p>
          <p>Mensualité: {(selectedOffer.amount / (selectedOffer.duration * 12)).toFixed(2)} DH/mois</p>
          <p>Coût Total: {selectedOffer.amount} DH</p>
        </div>
      )}
      <CompoundInterest 
        capital={capital} 
        setCapital={setCapital} 
        tauxInt={tauxInt} 
        setTauxInt={setTauxInt} 
      />
    </div> 
  );
}

export default App;