
/*  Componente llamado Tags.jsx el cual será importado dentro de cada Card. Este componente recibe como props 
    un texto que corresponde a la raza del perro y un background color que se define mediante el uso de BADGES de
    bootstrap. Estos props son definidos desde App.jsx según exige el desafío en el punto 4.
*/
import Button from 'react-bootstrap/Button';

function Tags(props) {
console.log(props)
    return (
        <Button className={`mt-auto ${props.Color} border-0`}>{props.Breed}</Button>
  )
}

export default Tags;