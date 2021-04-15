import React,{useState} from 'react'
import PropTypes from 'prop-types'

const Contador = ({num1, num2, nombre}) =>{

    

    //const[cont,setCont] = useState(valorinicial);

    //const [respuesta,setRespuesta]  = useState(0)
    const [mensaje, setMensaje] = useState('')
    

    return(
        <>
            <h1>Bienvenido</h1>
            <h2>Numero 1= {num1}, Numero 2= {num2}</h2>
            <button onClick={() => setMensaje(`señor ${nombre} la Suma de los numeros es ${num1+num2}`)}>Sumar</button>
            <button onClick={() => setMensaje(`señor ${nombre} la Resta de los numeros es ${num1-num2}`)}>Restar</button>

            <h2>{mensaje}</h2>
        </>
    )




}

Contador.propTypes = {
    cont: PropTypes.number.isRequired
}

export default Contador