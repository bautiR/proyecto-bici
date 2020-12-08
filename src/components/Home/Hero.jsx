function Hero(){

    const saludar = () =>{
        alert('holaaaaa')
    }
    return(
        <>
        <h1 className='tituloColor'>Bienvenidos a proyecto bici</h1>
        <p>Las mejores bicis y los mejores precios</p>
        <button onClick={saludar}>saludar</button>
        </>
    )    
    
}

export default Hero;