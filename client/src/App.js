import "./App.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Homepage from "./components/homepage/Homepage";

function App() {
  const [data, setData] = useState([]);

      useEffect(() => {
          axios.get('http://localhost:8080/api/data')
              .then(response => {
                  setData(response.data);
              })
              .catch(error => {
                  console.error('Error:', error);
              });
      }, []);

      return (
        <div>
            <p>{data}</p>
        </div>
      );
}

export default App;
