import PropTypes from 'prop-types';

export const FirstApp = ( {title, subTitle, name}) => {

  if( !title ) {
    throw new Error('El titulo es necesario');
  }

  return (
    <>
      <h1> {title} </h1>
      <p> {subTitle} </p>
      <p> {name} </p>
    </>
  )
}
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 'No hay subtitulo',
  name: 'Miguel Cruz'
}
