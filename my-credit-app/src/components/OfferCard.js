import React from 'react';

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('fr-MA', {
    style: 'currency',
    currency: 'MAD',
    minimumFractionDigits: 2
  }).format(amount);
};

function OfferCard({ offre, isRecommended, onSelect }) {
  return (
    <div 
      className={`offer-card ${isRecommended ? 'recommended-border' : ''}`} 
      onClick={onSelect}
    >
      {isRecommended && <span className="badge">Recommended</span>}
      
      <div className="card-header">
        <h3>{offre.provider}</h3>
      </div>
      
      <div className="card-body">
        <p className="amount">{formatCurrency(offre.amount)}</p>
        <div className="info-row">
          <span>Taux: <strong>{offre.rate}%</strong></span>
          <span>Durée: <strong>{offre.duration} ans</strong></span>
        </div>
      </div>
      
      <button className="btn-details">Voir Détails</button>
    </div>
  );
}

export default OfferCard;