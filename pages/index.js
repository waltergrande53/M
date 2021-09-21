import { createClient } from "contentful"
import ProductCard from "./components/productCard"
import Hero from './hero/hero'
import productStyles from './/styles/Products.module.css'

 export async function getStaticProps(){
     const client = createClient ({
         space:"wyaorns2fubd",
         accessToken:"BQWAYX7Yo5qaimPRd0wtxHCK24GMA0hkf8MDXZFfgf8",
     })
 
     const res = await client.getEntries({content_type: "products"})

     return{
        props:{
            products:res.items,
        }
     }
    }
export default function Home ({products}){
  console.log(products)

 return (
    <>
  
  <Hero/>

  <section className={productStyles.products} >
        <div className={productStyles.section_title}>
          <h2 id="products">Our products</h2>
        
        </div>
        <div className={productStyles.products_center}>
          {products.map(product =>(
<ProductCard key={product.sys.id} product={product}/>
          ))}
          </div>
      </section>
  </>
  )
}
