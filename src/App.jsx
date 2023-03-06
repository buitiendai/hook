
import './App.css';
import Counter1 from './component/Counter1';
import Counter2 from './component/Counter2';
import MyClock from './component/MyClock';
import SelectCar from './component/SelectCar';
import Selector from './component/Selector';
// import Timer from './component/Timer';

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
        {/* <Timer /> */}
        <hr />
        <Counter1 />
        <hr />
        <Counter2 />
      </>
    </div>
  );
}

export default App;
