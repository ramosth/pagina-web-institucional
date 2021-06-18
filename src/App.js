import './App.css';
import Navbar from './Componentes/Navbar';
import FundoEscuro from './Componentes/FundoEscuro';
import imagemFrontEnd from './imagens/frontend.png';
import PalavrasChave from './Componentes/PalavrasChave';
import SaberMais from './Componentes/SaberMais';
import FormularioContato from './Componentes/FormularioContato';
import Footer from './Componentes/Footer';

function App() {

  const menu = [
    {
      titulo: 'Palavras chave',
      link: '#pala'
    },
    {
      titulo: 'Para saber mais',
      link: '#saibaMais'
    },
    {
      titulo: 'Contato',
      link: '#contato'
    },
  ];

  const fundoEscuro = {
    src: imagemFrontEnd,
    alt: 'imagem de front-end',
    titulo: 'Trabalhar com frontend é sensacional.'
  };

  const saber = {
    texto: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptatibus rem nisi praesentium nostrum, assumenda ipsa illo nesciunt consectetur, cumque accusantium dicta tempore explicabo fuga magni. Fugit estrepellendus voluptatibus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum voluptatibus rem nisi praesentium nostrum, assumenda ipsa illo nesciunt consectetur, cumque accusantium dicta tempore explicabo fuga magni. Fugit estrepellendus voluptatibus.',
    linkExterno: 'Quer saber mais?',
    href: '#',
    conteudo: 'Clique aqui!'
  }

  return (
    <div className="App">
      <main className="main">
        <Navbar navbar={menu} />
        <FundoEscuro src={fundoEscuro.src} alt={fundoEscuro.alt} titulo={fundoEscuro.titulo} />
        <PalavrasChave palavra={'Palavras chave'} />
        <PalavrasChave palavra={'Para saber mais'} />
        <SaberMais texto={saber.texto} linkExterno={saber.linkExterno} href={saber.href} conteudo={saber.conteudo}/>
        <PalavrasChave palavra={'Contato'} />
        <FormularioContato aoSalvar={''}/>
        <Footer footer={'Serratec - Frontend Essencial - 2021'}/>
      </main>
    </div>
  );
}

export default App;
