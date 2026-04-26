import React, { useState, useMemo } from 'react';
import { creditOffers } from "./data.js";
import OfferCard from "./components/OfferCard";
import CompoundInterest from "./components/CompoundInterest";
import './App.css';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('fr-MA', {
    style: 'currency',
    currency: 'MAD',
    minimumFractionDigits: 2
  }).format(amount);
};

function App() {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [capital, setCapital] = useState(10000);
  const [tauxInt, setTauxInt] = useState(5);

  //  (Recommended)
  const minRate = useMemo(() => {
    return Math.min(...creditOffers.map(o => o.rate));
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>Comparateur de Crédit</h1>
        <p>Trouvez la meilleure offre pour votre projet</p>
      </header>

      <main className="main-content">
        {/*Les Cards + Details */}
        <section className="left-side">
          <div className="offers-list">
            {creditOffers.map((offre) => (
              <OfferCard 
                key={offre.id} 
                offre={offre} 
                isRecommended={offre.rate === minRate}    // vérifier si c'est la valeur minimal pour devienne true 
                onSelect={() => setSelectedOffer(offre)} // Siftna l-clic event k-prop
              />
            ))}
          </div>

          {/* Détails */ }
          <div className="details-container">
            {selectedOffer ? (
              <div className="details-section">
                <h2>Analyse de l'offre: {selectedOffer.provider}</h2>
                <div className="details-grid">
                  <div className="detail-item">
                    <span>Mensualité estimée</span>
                    <strong>{formatCurrency(selectedOffer.amount / (selectedOffer.duration * 12))}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Capital emprunté</span>
                    <strong>{formatCurrency(selectedOffer.amount)}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Taux Annuel</span>
                    <strong>{selectedOffer.rate}%</strong>
                  </div>
                </div>
              </div>
            ) : (
              <div className="details-section empty">
                <p>Sélectionnez une offre pour voir l'analyse détaillée</p>
              </div>
            )}
          </div>
        </section>

        <aside className="right-side">
           <CompoundInterest 
            capital={capital} 
            setCapital={setCapital} 
            tauxInt={tauxInt} 
            setTauxInt={setTauxInt} 
          />
        </aside>
      </main>
    </div>
  );
}

export default App;