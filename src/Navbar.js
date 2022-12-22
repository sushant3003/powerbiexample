import { Link } from "react-router-dom"
const Navbar =()=>{
      return (
            <div>
                  <Link to="/">Home</Link>
                  <Link to="/main">About</Link>
                  <Link to="/power">Careers</Link>
            </div>
      )
}
export default Navbar;