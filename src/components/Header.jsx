/*Se crea el primer componente llamado Header.jsx que muestra el título especificado desde App.jsx a traves de un prop.
  cumpliendo así con lo solicitado en el punto 2 del desafío.*/
  
import PropTypes from 'prop-types';

const Header = ({title}) => { 
  return (
    <div className='container d-flex justify-content-center py-5'>
      <h1>{title}</h1>
    </div>
  ); 
};

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;