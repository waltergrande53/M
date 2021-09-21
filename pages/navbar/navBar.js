import  navStyles from '../styles/Navbar.module.css'


const Navbar = ()=> {
    return( 
  <nav  class='nav navbar navbar-dark bg-dark fixed-top  '>  
  <div>
    
      <h2 class='text-danger'>Gigi's Shoppp <img /></h2>
  
     
    </div>
    <div className = {navStyles.links}>
     <a href='/'> <span>home</span></a>
  
      <a href='contact'>      <span>Contact</span></a>

  </div>
  <style jsx>
    {
      `
      .nav{
        
  position: sticky;
  top: 0;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  background:rgb(231,226,221);
  z-index: 1;
      }
      `
    }
  </style>
        </nav>
        )
  }
  export default Navbar;