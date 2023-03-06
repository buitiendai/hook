
import './App.css';
import Counter1 from './component/Counter1';
import MyClock from './component/MyClock';
import SelectCar from './component/SelectCar';
import Selector from './component/Selector';
import Timer from './component/Timer';

function App() {
  return (
    <div className="App">
      <>
        <Selector />
        <hr />
        <MyClock />
        <hr />
        <SelectCar />
        <hr />
        <Timer />
        <hr />
        <Counter1 />
      </>
    </div>
  );
}

export default App;
