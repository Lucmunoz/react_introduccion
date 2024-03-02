/* Según exige el desafío en el punto 6, este componente importa los componentes: Header, Footer y varops componentes MyCard (En concreto
se importan 5 cards y para cada una se entrega como props el nombre del perro, su descripción ademas de la raza y el color. Estos últimos
(raza y color) son props para el componente Tags pero, como exige el desafío, deben ser declaradas junto a las props del componente MyCard*/

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MyCard from "./components/MyCard.jsx";

  /*en relación al USO DE CSS y lo solicitado en el punto 7 del desafío, se hace uso de los estilos de Bootstrap mediante importando los siguientes modulos de bootstrap. Ni el desafío ni el documento de apreciacion establecen restricciones en este ambito*/

import 'bootstrap/dist/css/bootstrap.min.css'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const App = () => {

  return (
    <> 
      <Header className="Header" title="Adopta un Perrito" />

      <Container>
      <Row className='row-cols-4 gy-5'>
        <Col >
            <MyCard Breed="Cavalier King" Name="Slinki" Color="bg-primary" Img='../src/assets/img/perro_1.jpg' Desc="El Cavalier King Charles Spaniel es una raza de perro pequeño de tipo spaniel originaria de Inglaterra, de temperamento activo y alegre. Su principal función ha sido la de mascota de compañía, lo que se muestra en pinturas del siglo XVI."/>
        </Col>
        <Col>
            <MyCard Breed="Welsh Corgi" Name="Toto" Color="bg-secondary" Img='../src/assets/img/perro_2.jpg' Desc="El Welsh Corgi es un pequeño tipo de perro de pastoreo que se originó en Gales. El nombre corgi se deriva de las palabras galesas cor y ci, que significan 'enano' y 'perro', respectivamente. Se reconocen dos razas separadas: el Pembroke Welsh Corgi y el Cardigan Welsh Corgi." />
        </Col>
        <Col>
            <MyCard Breed="Dachshund" Name="Balto" Color="bg-success" Img='../src/assets/img/perro_3.jpg' Desc="El dachshund, también conocido como perro salchicha o teckel, es una raza de perro originaria de Alemania. Su peculiar fisonomía se debe a una mutación genética conocida como bassetismo, que dota a los ejemplares de unas extremidades cortas en relación con el tamaño del cuerpo." />
        </Col>
        <Col>
            <MyCard Breed="Maltés" Name="Doki" Color="bg-danger" Img='../src/assets/img/perro_4.jpg' Desc="El bichón maltés es una raza de perro de tamaño pequeño o mediano que surgió en el Mediterráneo central, siendo Italia quien tomó el patrocinio. Es un ánimal dulce, cariñoso, inteligente, receptivo y confiado, son buenos perros de familia, juguetones y alegres." />
        </Col>
        <Col>
            <MyCard Breed="Boyero de Berna" Color="bg-warning" Name="Coto" Img='../src/assets/img/perro_5.jpg' Desc="El boyero de Berna es una raza de perro boyero muy versátil que se originó en el Cantón de Berna en Suiza. Se trata de un moloso macizo, con una altura aproximada de 70 cm a la cruz y un peso, si es macho, que ronda los 48-51 kg y, si es hembra, los 46-49 kg. Se caracteriza por sus colores negro, marrón y blanco." />
        </Col>
      </Row>
    </Container>

      <Footer text="Explora nuestra galería de adopción de perros para encotnrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imágen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo, fiel y amoroso para la eternidad."/>
    </>
  );
};

export default App;
