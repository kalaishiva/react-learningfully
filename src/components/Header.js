
const Header = ({name, subject}) => {
  return (
    <>
    <h1 style={Styling}>Task Tracker</h1>
    <h2>Gives the default Name props : {name}</h2>
    <h2>Gives the Subject : {subject}</h2>
    </>
  )
}

//set the default props 

Header.defaultProps = {
    name: "Kalai"
}

//styling
const Styling = {
    color: 'blue',
    fontSize: '40px'
}

export default Header