import './estilo.css'

const PalavrasChave = (props) => {
  return ( <section id="palavras-chave" className="subtitulo">
    <h2>{props.palavra}</h2>
  </section>
  )
}

export default PalavrasChave;