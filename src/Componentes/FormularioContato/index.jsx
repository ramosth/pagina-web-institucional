import { useState } from 'react';
import './estilo.css'

const FormularioContato = (props) => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const salvar = (evento) => {
    evento.preventDefault();
    const form = {}
    form.nome = nome;
    form.email = email;
    form.mensagem = mensagem;
    props.aoSalvar(form);
    setNome('');
    setEmail('');
    setMensagem('');
  }

  return (<section className="contato">
    <form onSubmit={salvar}>
      <input className="form-control" type="text" placeholder="Nome" value={nome} onChange={(evt) => setNome(evt.target.value)} />
      <input className="form-control" type="text" placeholder="E-mail" value={email} onChange={(evt) => setEmail(evt.target.value)} />
      <textarea className="form-control" placeholder="Mensagem" value={mensagem} onChange={(evt) => setMensagem(evt.target.value)}></textarea>
      <button>Enviar mensagem</button>
    </form>
  </section>
  )
}

export default FormularioContato;