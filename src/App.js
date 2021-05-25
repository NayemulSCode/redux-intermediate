
import { Provider } from 'react-redux';
import './App.css';
import BookShop from './components/BookShop/BookShop';
import BookShopA from './components/BookShopA';
import PenShop from './components/PenShop';
import store from './redux/store';

function App() {
  return (
    <Provider store= {store}>
      <div className="App">
        <BookShop />
        <BookShopA />
        <PenShop />
      </div>
    </Provider>
  );
}

export default App;
