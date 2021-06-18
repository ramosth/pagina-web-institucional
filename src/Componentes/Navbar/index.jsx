import './estilo.css'

const Navbar = (props) => {
  return (<nav className="navbar">
    <ul>
      {props.navbar.map(item =>
        <li>
          <a key={item.titulo} href={item.link}>{item.titulo}</a>
        </li>
      )}
    </ul>
  </nav>
  )
}

export default Navbar