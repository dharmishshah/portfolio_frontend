import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HomePage from "./Components/HomePage";
import PortfolioList from "./Containers/PortfolioList";
import HomePageContainer from "./Containers/HomePageContainer";

ReactDOM.render(
  <React.StrictMode>
    <HomePageContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
