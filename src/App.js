import './App.css';
import Routes from './routes/'
import { Provider } from "react-redux";
import { store ,persistor } from './store/config/configureStore';
import { PersistGate } from 'redux-persist/integration/react'
const App =()=>{
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes/>
      </PersistGate>
    </Provider>
  );
}
export default App;
