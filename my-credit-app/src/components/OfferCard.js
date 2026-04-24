function OfferCard({ offre, isRecommended, onSelect }) {
  return (
    <div className="offer-card" onClick={onSelect} style={{ cursor: 'pointer'}}>
      {isRecommended && <span className="badge">Recommended</span>}
      <h3>{offre.provider}</h3>
      <p>Montant: {offre.amount} DH</p>
      <p>Taux: {offre.rate}%</p>
      <button>Voir Détails</button>
    </div>
  );
}
export default OfferCard;