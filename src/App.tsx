import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {
  const users: IUser[] = [
    {id:1, name: 'Noor', email: 'asdas@asdas.rr', address: { city: 'Moscow', street: 'Auchan', zipcode: 'sad'}}
  ]

  return (
    <div>
      <Card
        variant={CardVariant.outlined}
        height={'200px'}
        width={'300px'}>
        <button>Кнопка</button>
      </Card>
      <UserList users={users}></UserList>
    </div>
  );
};

export default App;
