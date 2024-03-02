/*  Se crea el componente MyCard.jsx el cual recibe como props los siguientes argumentos desde App.jsx:
    - src de la imágen por medio de props.Img
    - Título de la card (nombre del perro) por medio de props.Name
    - Texto de la card (descripción del perro) por medio de props.Desc
    
    Con lo anterior, se da cumplimiento a lo exigido en el punto 3 del desafío.

    Por otra parte, este componente importa un componente llamado Tags.jsx al cual se le entrega como props un texto que
    corresponde a la raza del perro y el color de fondo del boton haciendo uso del badge de boostrap. Estos props vienen
    a su vez desde App.jsx.

     */
import Card from 'react-bootstrap/Card';
import Tags from './Tags.jsx';

const MyCard = (props) => {
    return (
    <Card className="h-100 p-3">
          <Card.Img className="rounded-3 " variant="top" src={props.Img} />
      <Card.Body className='d-flex flex-column'>
              <Card.Title className='text-center fw-bold'>{props.Name}</Card.Title>
        <Card.Text className='pb-3'>
          {props.Desc}
        </Card.Text>
              <Tags Breed={props.Breed} Color={props.Color} />
      </Card.Body>
    </Card>
  );
}

export default MyCard;