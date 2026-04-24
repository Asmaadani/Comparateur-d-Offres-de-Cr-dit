import './App.css';
import { creditOffers } from "./data.js";
import OfferCard from "./components/OfferCard";

function App() {
  const minRate = Math.min(...creditOffers.map(o => o.rate));

  return (
    <div className="App">
      <h1>Comparateur de Crédit</h1>
      <div className="offers-list" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {creditOffers.map((offre) => (
          <OfferCard key={offre.id} offre={offre} isRecommended={offre.rate === minRate} />
          // devienne isRecommended sauf s'il est la petite valeur 
        ))}
      </div>
    </div>
  );
}

export default App;