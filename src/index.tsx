import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app/app';
import { store } from './store';
import { loadAuthStatus, loadFavoritesCards, loadPlaceCards } from './store/action';
import offerApiService from './service/offer-api-service';
import authApiService from './service/auth-api-service';

store.dispatch(loadPlaceCards(offerApiService.placeCards));
store.dispatch(loadFavoritesCards(offerApiService.favoritesCards));
store.dispatch(loadAuthStatus(authApiService.authStatus));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
