import heroStyle from '/styles/Hero.module.css'
const Hero = ()=>{
return(
    <header className={heroStyle.hero}>
    <div className={heroStyle.banner}>
      <h1 className={heroStyle.bannerTitle} >Gigi's Shoppp</h1>
      <button className={heroStyle.bannerBtn}><a href="#products">Shop Now</a></button>
    </div>
  </header>
)
}
export default Hero;