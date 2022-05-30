import Card, { CardVariant } from './components/Card';

const App = () => {
  return (
    <div>
      <Card
        variant={CardVariant.outlined}
        height={'200px'}
        width={'300px'}>
        <button>Кнопка</button>
      </Card>
    </div>
  );
};

export default App;
