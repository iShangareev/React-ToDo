import { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fectUsers()
  }, [])

  async function fectUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }

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
