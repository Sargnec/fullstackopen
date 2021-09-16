import { useEffect, useState } from 'react';
import SearchInput from './components/SearchInput'
import Results from './components/Results'
import axios from 'axios'
function App() {
  const [filter, setFilter] = useState('')
  const [results, setResults] = useState([])
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data);
      })
  }, [])

  useEffect(() => {
    if (filter) {
      let results = countries.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
      setResults(results)
    }
  }, [filter])

  return (
    <div className="App">
      <SearchInput setFilter={setFilter} />
      <Results results={results} />
    </div>
  );
}

export default App;
