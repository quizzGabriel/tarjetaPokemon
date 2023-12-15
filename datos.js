let tarjetaHtml = document.getElementById("Tarjeta");

const obtenerElemento = async() =>{
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
} 

obtenerElemento();