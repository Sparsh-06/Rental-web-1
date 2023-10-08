import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import { FirebaseProvider } from './Components/Backend Components/Context/Firebase.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </FirebaseProvider>
  </React.StrictMode>,
)
