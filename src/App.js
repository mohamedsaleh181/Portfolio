
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Counter from './pages/counter'
import Shop from './pages/shop'
import Home from './pages/home'
import About from './pages/about'
import NavBar from './components/NavBar';
import Product from './components/product';
import NotFound from './pages/notFound/NotFound';
import Todo from './pages/todoList/Todo';


function App() {  
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/counter" element={<Counter/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/todoList" element={<Todo/>}></Route>
        <Route path="/shop/product/:id" element={<Product/>}></Route>

        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;

