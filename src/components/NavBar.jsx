import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
      <nav className="nav d-flex justify-content-around align-items-center bg-dark text-light">
        <Link to="/" className='text-decoration-none text-light'>
            <h3>Logo</h3>
        </Link>
        <ul className="d-flex justify-content-around align-items-center w-50 list-unstyled">
          <li className="list-item">
              <Link to="/about" className='text-decoration-none text-light'>About</Link>
          </li>
          <li className="list-item">
              <Link to="/shop" className='text-decoration-none text-light'>Shop</Link>
          </li>
          <li className="list-item">
              <Link to="/" className='text-decoration-none text-light'>Home</Link>
          </li>
          <li className="list-item">
              <Link to="/counter" className='text-decoration-none text-light'>Counter</Link>
          </li>
          <li className="list-item">
              <Link to="/todoList" className='text-decoration-none text-light'>Todo List</Link>
          </li>
          <li className="list-item">
              <Link to="/register" className='text-decoration-none text-light'>Sign Up</Link>
          </li>
          
        </ul>
      </nav>
    );
  };
  export default NavBar;
  