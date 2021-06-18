import './estilo.css'
import Container from '../Container';

const SaberMais = (props) => {
  return (<section className="saber-mais fundo-escuro">
    <Container>
      <p className="container-texto">{props.texto}</p>
      <p className="container-texto">{props.texto}</p>
    </Container>
    <Container>
      <p className="link-externo">
        {props.linkExterno}
        <br />
        <a href={props.href}>{props.conteudo}</a>
      </p>
    </Container>
  </section>
  )
}

export default SaberMais;