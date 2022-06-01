import React, {FC, useEffect, useState} from 'react';
import List from './List';
import { IUser } from '../types/types';
import UserItem from './UserItem';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const UserPage: FC = () => {

  const [users, setUsers] = useState<IUser[]>([])
  const history = useHistory()

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
      <List
        items={users}
        renderItem={(user:IUser) =>
          <UserItem
            onClick={(user) => history.push('/users/' + user.id)}
            key={user.id}
            user={user}
          />}
      />
  );
};

export default UserPage;
