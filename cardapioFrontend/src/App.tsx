import './App.css'
import { FoodData } from './Interface/foodData';
import { Card } from './components/card/card';

function App() {
  const data: FoodData[] = [];
  return (
      <div className="container">
        <h1>Cardápio</h1>
        <div className='card-grid'></div>
          {data.map(foodData => 
          <Card 
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}
          />)}
      </div>
  )
}

export default App
