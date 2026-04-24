function CompoundInterest({ capital, setCapital, tauxInt, setTauxInt }) {
  
  const futureValue = (capital * Math.pow((1 + (tauxInt / 100)), 10)).toFixed(2);

  return (
    <div className="calculator-section" style={{ border: '1px solid #000', padding: '20px', borderRadius: '10px' }}>
      <h3>Calculateur d'évolution (sur 10 ans)</h3>
      
      <div>
        <label>Capital Initial: {capital} DH</label><br/>
        <input 
          type="range" min="1000" max="100000" step="1000"
          value={capital} 
          onChange={(e) => setCapital(Number(e.target.value))} 
        />
      </div>

      <div>
        <label>Taux d'intérêt annuel: {tauxInt}%</label><br/>
        <input 
          type="range" min="1" max="20" step="0.5"
          value={tauxInt} 
          onChange={(e) => setTauxInt(Number(e.target.value))} 
        />
      </div>

      <div style={{ marginTop: '20px', fontWeight: 'bold', color: '#2c3e50' }}>
        Valeur estimée après 10 ans: {futureValue} DH
      </div>
    </div>
  );
}

export default CompoundInterest;