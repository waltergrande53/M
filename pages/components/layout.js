import Navbar from "../navbar/navBar"
const Layout = ({children})=>{
    return(
        <>
<Navbar/>

<div className="page-content">
        { children }
      </div>

</>
    )
}
export default Layout;