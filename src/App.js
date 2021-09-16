import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import FillOptions from './FillOptions';

/* Formula for calculating blood alcohol level is:
litres: bottles * 0.33
grams: litres * 8 * 4.5
burning: weight / 10
grams(left): grams – (burning * time)
result (for male): grams / (weight * 0.7)
result (for female): grams / (weight * 0.6)  */


function App() {
  const [weight,setWeight] = useState(0);
  const [bottles,setBottles] = useState(1);
  const [time,setTime] = useState(0);
  const [gender,setGender] = useState('male');
  const [result,setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    const litres = bottles *  0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time)

    let promilles = 0;

    if (gender === 'male') {
      promilles = gramsLeft / (weight * 0.7);
    } else {
      promilles = gramsLeft / (weight * 0.6);
    }
    if (promilles < 0) {
      promilles = 0;
    }

    setResult(promilles);
    
  }


  return (
    <div id="container">
    <h3>Calculating alcohol blood level</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Weight</label>
        <input name="weight" type="number" id="valikko" value={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div>Bottles
    <select id="valikko"
    value={bottles}
    onChange={e => setBottles(e.target.value)}>
      <FillOptions />
    </select>
    </div>
    <div>Time (h)
    <select id="valikko"
    value={time}
    onChange={e => setTime(e.target.value)}>
      <FillOptions />
    </select>
    </div>
      <div>
        <label>Gender</label>
        <input className="form-check-input" type="radio" id="valikko" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label className="form-check-label">Male</label>
        <input className="form-check-input" type="radio" id="valikko" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label className="form-check-label">Female</label>
      </div>
      <div>
        <output id="tulos">{result.toFixed(1)}</output>
      </div>
      <button className="btn btn-primary mt-4">Calculate</button>
    </form>
    </div>
  );
}

export default App;
