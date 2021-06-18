import './estilo.css'

const Navbar = (props) => {
  return (<nav className="navbar">
    <ul>
      {props.navbar.map(item =>
        <li key={item.titulo}>
          <a href={item.link}>{item.titulo}</a>
        </li>
      )}
    </ul>
  </nav>
  )
}

export default Navbar