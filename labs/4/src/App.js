import React from 'react';
import './App.css';
import Card from './components/Card';
function App() {
  return (
    <div class="cardholder">

      <div className="card">
        <Card title={'Max '}/>
        <Card content={'enjoys the beach.'} />
      </div>

      <div className="card">
        <Card title={'Maggie '}/>
        <Card content={'loves to run.'} />
      </div>

      <div className="card">
        <Card title={'Buddy '}/>
        <Card content={'sniffs butts.'} />
      </div>

    </div>
  );
}
 
export default App;