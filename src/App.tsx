import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/ExentsExample'
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import TodoItem from './components/TodoItem';
import TodosItemPage from './components/TodosItemPage';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div style={{marginBottom: 50, display: 'flex', gap: 20}}>
            <NavLink to='/users'>Пользователи</NavLink>
            <NavLink to='/todos'>Список дел</NavLink>
          </div>
          <Route path={'/users'} exact>
            <UserPage/>
          </Route>
          <Route path={'/todos'} exact>
            <TodosPage/>
          </Route>
          <Route path={'/users/:id'}>
            <UserItemPage/>
          </Route>
          <Route path={'/todos/:id'}>
            <TodosItemPage/>
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
