import React, {useState, useEffect} from "react"
import Header from "./components/Header"
import axios from "axios"
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios(`https://www.breakingbadapi.com/api/characters`)

      console.log(results.data)
    }

    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
