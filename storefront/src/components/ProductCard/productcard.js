import './productcard.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Hoodies from '../Hoodies/hoodies'

function ProductCard () {
  const [contacts, setContacts] = useState([])
  const [error, setError] = useState(null)
useEffect (()=> {
  axios("https://jsonplaceholder.typicode.com/users")
    .then ((response) => {
      setContacts(response.data);
      setError(null)
    })
    .catch(setError)
  }, []);
  if (error) return <p>An error occurred</p>
  return (
    <div className="App">

{contacts.map(({ id, name, email, company }) => (
        <Hoodies
          key={id}
          name={name}
          email={email}
          tagline={company.catchPhrase}
        />
      ))}
    </div>
  );
}



export default ProductCard;
