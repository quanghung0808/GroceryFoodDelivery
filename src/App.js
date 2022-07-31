import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import { configureStore } from './store/ConfigureStore';
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
