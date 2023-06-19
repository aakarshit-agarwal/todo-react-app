import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo';
import Header from './components/Header';

function App() {
    return (
        <div className='App'>
            <Header></Header>
            <ToDo></ToDo>
        </div>
    );
}

export default App;
