import './styles/app.css'
import {useState} from 'react';
import Nav from './components/General/nav/nav'
import NavItem from './components/General/nav/NavItem/NavItem.jsx'
import ProductCard from './components/General/ProductCard/ProductCard'


function App() {
  /*
  const [cont, setCont] = useState(0);

   useEffect(() =>{
       setCont(cont + 1);
   }, [cont])
    function itemCount({item, initial,onAdd}){
        
  */

  

  return (
    <>
    <Nav />
    <NavItem />
    <ProductCard />
    <ProductCard />
    <ProductCard />

    </>
  );
}

export default App;
