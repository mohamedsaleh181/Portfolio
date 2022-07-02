import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
      <nav className="nav d-flex justify-content-around align-items-center">
        <Link to="/">
            <h3>Logo</h3>
        </Link>
        <ul className="d-flex justify-content-around align-items-center w-50">
          <li className="list-item">
              <Link to="/about">About</Link>
          </li>
          <li className="list-item">
              <Link to="/shop">Shop</Link>
          </li>
          <li className="list-item">
              <Link to="/">Home</Link>
          </li>
          <li className="list-item">
              <Link to="/counter">Counter</Link>
          </li>
          <li className="list-item">
              <Link to="/todoList">Todo List</Link>
          </li>
          
        </ul>
      </nav>
    );
  };
  export default NavBar;
  