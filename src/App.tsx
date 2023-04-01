import React from 'react';
import Card, { CardVariant } from './components/Card';

const App = () => {
  return (
    <div>
      <Card onClick={ () => { console.log('функция работает') } } variant={CardVariant.primary} width='200px' height='200px'>
        <button>Кнопка</button>
      </Card>
    </div>
  );
}

export default App;
