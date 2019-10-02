import React, {useEffect, Fragment} from 'react';
import Searchbar from './components/layout/Searchbar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/modal/AddLogModal';
import EditLogs from './components/modal/EditLogs';
import AddTechModal from './components/modal/AddTechModal';
import TechListModal from './components/modal/TechListModal';
import {Provider} from 'react-redux';
import store from './store';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
    useEffect(() => {
      //Init Materialize JS
      M.AutoInit();
    });
  return (
    <Provider store={store}>
    <Fragment>
      <AddBtn />
      <AddLogModal />
      <EditLogs />
      <AddTechModal />
      <TechListModal />
      <Searchbar />
      <div className="container">
      <Logs />
      </div>
      
    </Fragment>
    </Provider>
  );
}

export default App;
