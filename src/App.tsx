import List from "./ts/components/List/List";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './ts/store/index';
import ItemDetails from "./ts/components/ItemDetails/ItemDetails";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/ra-12.3-redux_toolkit-main_details-front/" element={<List />} />
          <Route path="/ra-12.3-redux_toolkit-main_details-front/:id/details" element={<ItemDetails/>} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
