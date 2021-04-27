import './App.css';
import Header from './components/Header';
import SimpleContainer from './components/Container';


function App() {
  return (
    <div>
      <Header/>
      <div className='simple-container'>
        <SimpleContainer />
      </div>
    </div>
  );
}

export default App;
