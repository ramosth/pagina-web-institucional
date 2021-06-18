import './estilo.css'
import CardInteresse from './CardInteresse'
import axios from 'axios'
import { useState, useEffect } from 'react';

const Interesses = (props) => {

  const [keywords, setKeywords] = useState([]);

  // executa essa porção do código APENAS UMA VEZ quando o componente for renderizado na página -- Para isso, utilize o useEffect e o [], ou seja, array vazia.
  useEffect(() => {
    axios.get('http://localhost:8000/keywords')
    
      .then(response => {
        setKeywords(response.data);
      })
  }, [])


  return (<section className="interesses">

    {keywords.map((item) =>
      <CardInteresse key={item.titulo} texto={item.titulo} />)
    }

  </section>
  )
}

export default Interesses