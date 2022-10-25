import PropTypes from 'prop-types'
import Button from "./Button";



const Header = ({title, onAdd}) => {

  return (
    <header className="header">
    <h1 style={{color:"Brown"}}>{title}</h1>
    <Button onClick={onAdd} text="Add" color="green" />

   
    </header>
  )
}

//set the default props 

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

/* //styling
const Styling = {
    color: 'blue',
    fontSize: '40px'
} */

export default Header