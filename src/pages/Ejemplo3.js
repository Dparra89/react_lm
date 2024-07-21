import '../styles/mapa.css';

const Ejemplo3 = (props) =>{

    return(
        <div className="mapa">
        <h1>Ejemplo google maps - CSS</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.559565072529!2d-58.42083152327115!3d-34.615297158111495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca58892293e7%3A0x23bd06ac12dd4d6b!2sColombres%20274%2C%20C1177%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1721166609482!5m2!1ses!2sar"style={{ width: 850, height:400, border:0}}></iframe>

        </div>
    )
}

export default Ejemplo3;