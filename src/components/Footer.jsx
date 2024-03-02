/*  Componente Footer el cual muestra al pié de la pagina una descripción de la galería de imagenes.
    El desafío no especifica que el texto del footer debe ser importado desde App.jsx o definido en el mismo componente.

    Ante esta ambiguedad, el texto se define desde App.jsx ya que se entiende que el componente debe tener un comportamiento
    dinámico en React.
*/

function Footer({ text }) {
  return (
      <div className="p-5 container-xxl text-center fw-bold">
          <p>
            {text}
          </p>
      </div>
  )
}

export default Footer