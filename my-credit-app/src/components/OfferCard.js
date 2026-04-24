function OfferCard( {offre, isRecommended} ){
    return (
        <div className="offer-card" style={{ border: '1px solid #ccc', margin: '10px', padding: '15px', borderRadius: '8px' }}>
            {isRecommended && <span className="badge">Recommended</span>}
            <h3>{offre.provider}</h3>
            <p>Montant: {offre.amount} DH</p>
            <p>Taux: {offre.rate}%</p>
            <button>Voir Détails</button>
        </div>
    );
}
export default OfferCard;