import axios from 'axios'
import { useState, useEffect } from 'react';

const Lista = () => {

  const [keywords, setKeywords] = useState([]);

  // executa essa porção do código APENAS UMA VEZ quando o componente for renderizado na página -- Para isso, utilize o useEffect e o [], ou seja, array vazia.
  useEffect(() => {
    axios.get('http://localhost:8000/keywords')
      .then(response => {
        setKeywords(response.data);
      })
  },[])

  return (
    <div className="lista">
      {keywords.map(keyword =>
        <ul>
          key={keyword.titulo}
          <li>{keyword.titulo}</li>
          <li>{keyword.descricao}</li>
        </ul>)}
    </div>
  );
}

export default Lista;