
const Header = ({name, subject}) => {
  return (
    <>
    <h1>Task Tracker</h1>
    <h2>Gives the Name : {name}</h2>
    <h2>Gives the Subject : {subject}</h2>
    </>
  )
}

//set the default props 

Header.defaultProps = {
    name: "Kalai"
}

export default Header