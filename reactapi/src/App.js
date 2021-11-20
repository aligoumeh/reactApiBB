import React, {useState, useEffect} from "react"
import Header from "./components/Header"
import Characters from "./components/Characters"
import axios from "axios"
import './App.css';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios(`https://www.breakingbadapi.com/api/characters`)

      console.log(results.data)
      setItems(results.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header />
      <Characters isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
