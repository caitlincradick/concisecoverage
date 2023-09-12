import './App.css';
import Header from '../Header/Header';
import { data } from '../../mockData';
import Homepage from '../Homepage/Homepage';


function App() {
  console.log(data.articles)
  return (
    <div className="App">
      <Header />
      <Homepage data ={data.articles} />
    </div>
  );
}

export default App;
