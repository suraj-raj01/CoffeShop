import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style/style.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {Provider} from "react-redux"
import store from './Redux/store.jsx';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    </Provider>
)
