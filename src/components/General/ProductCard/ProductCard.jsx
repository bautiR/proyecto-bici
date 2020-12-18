import { useEffect } from 'react';
import {useState} from 'react';
import './ProductCard.css';
const ProductCard = () => {


    const [cont, setCont] = useState(0);

   useEffect(() =>{
       setCont(cont + 1);
   }, [cont])

        
    
    
    return(
       
        <article className='container'>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <div className='row justify-content-around'>
                <img src="C:\Users\mavic\OneDrive\Escritorio\curso-react\galeria" alt="Mi primer producto"></img>
                <h3>Bicleta 1</h3>
                <p>$30000</p>
                <button onClick={cont} >+</button>
                <p>0</p>
                <button>-</button>
                <button>Agregar al carrito</button>
            </div>    

                  

                

                
        </article>
    )
}



export default ProductCard;



