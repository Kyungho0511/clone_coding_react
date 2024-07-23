import './App.css'
import CounterManager from './counter_components/CounterManager';
import Profile from './counter_components/Profile';

function App() {


  return (
    <>
      <CounterManager />
      <Profile name="klee" age={35}/>
      <Profile name="haena" age={34}/>
      <Profile name="roha" age={2}/>
    </>
  )
}

export default App
