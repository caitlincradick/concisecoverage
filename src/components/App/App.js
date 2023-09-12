import './App.css';
import Header from '../Header/Header';
import { data } from '../../mockData';
import Homepage from '../Homepage/Homepage';
import DetailedPage from '../DetailedPage/DetailedPage';
import {Routes, Route, Link} from 'react-router-dom'


function App() {
  console.log(data.articles)
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage data={data.articles} />} />
        <Route path='/article' element={<DetailedPage data={data.articles} />} />
      </Routes>
    </div>
  );
}

export default App;
