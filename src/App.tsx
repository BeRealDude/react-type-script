import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {

  const users: IUser[] = [
    {id: 1, name: 'Vlad', email: 'vlad@vlad.ru', address: {city: 'St.Peterburg', street: 'Mira 6', zipcode: '123' }},
    {id: 2, name: 'Misha', email: 'misha@misha.ru', address: {city: 'St.Peterburg', street: 'Zvezdnay', zipcode: '123' }}
  ]

  return (
    <div>
      <Card onClick={ () => { console.log('функция работает') } } variant={CardVariant.primary} width='200px' height='200px'>
        <button>Кнопка</button>
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;
