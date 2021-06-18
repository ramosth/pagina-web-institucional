import './estilo.css'

const FundoEscuro = (props) => {
  return (
    <section className="principal fundo-escuro">
      <div>
        <img src={props.src} alt={props.alt} />
        <h1>{props.titulo}</h1>
      </div>
    </section>
  )
}

export default FundoEscuro;