import { EjemploProps1, EjemploProps2, EjemploProps3, EjemploProps4, EjemploProps5 } from "../components/Props";

const nombre2 = 'Laura';
const frutas = ['manzana','bananas','palta', 'naranjas']

const equipos = ['Argentina','Colombia','Uruguay','Canada']

const mostrarValor = valor =>{
    console.log(valor)
}

const Ejemplo1 = (props) => {
    return(
        <div>
        <h1>Ejemplo propiedades</h1>
        {/* propiedad simple y reutilizar */}
        <EjemploProps1 nombre='Daniela'/>
        <EjemploProps1 nombre={nombre2}/>
        {/* listar elementos (array) */}
        <EjemploProps2 elementos={frutas}/>
        <EjemploProps2 elementos ={equipos}/>
        {/* varias propiedades */}
        <EjemploProps3 titulo='Hola soy el título' subtitulo='Hola soy el subtítulo' cuerpo='Hola soy el contenido'/>
        {/* funcion */}
        <EjemploProps4 cambiarvalor={mostrarValor}/>

        <EjemploProps5 eventoClick={mostrarValor}/>

        </div>
    )
}

export default Ejemplo1;
