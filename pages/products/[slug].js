import { createClient } from 'contentful'
import Image from 'next/image'
import Review from '../reviews/reviews'

const client = createClient({
    space:process.env.SPACE_ID,
   accessToken:process.env.ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "products" 
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'products',
    'fields.slug': params.slug
  }) 

 

  return {
    props: { product: items[0] },
    revalidate: 1
  }
}
const addReviews=()=>{
  
}
export default function ProductCard ({product}){
  const {title,price,images,id,size,slug}= product.fields
    return(
   
<div class="classic-tabs border rounded px-4 pt-1">

  <ul class="nav tabs-primary nav-justified" id="advancedTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active show" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
    </li>
  
    <li class="nav-item">
      <a class="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews (1)</a>
    </li>
  </ul>
  <div class="tab-content" id="advancedTabContent">
    <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
    <h5 >{title}</h5>
      <div class='d-flex align-items-center justify-content-center'>
     
      <Image  class="img-fluid shadow-2-strong" src={'https:' + images.fields.file.url}
        width ='500px'    
        height ='500px'    ></Image>
      </div>
      <button  class="btn btn-success">Price {price}$</button>
      <div> Description</div>
      <p class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
        error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
        officia quis dolore quos sapiente tempore alias.</p>
    </div>
 
    <div class="tab-pane show active fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
      <h5><span>1</span> review for <span>{title}</span></h5>
      <div class="media mt-3 mb-4">
   
    <Review/>
 
      <h5 class="mt-4">Add a review</h5>
      <p>Your email address will not be published.</p>
    
   
        <div class="md-form md-outline">
          <textarea id="form76" class="md-textarea form-control pr-6" rows="4"></textarea>
          <label for="form76">Your review</label>
        </div>

        <div class="md-form md-outline">
          <input type="text" id="form75" class="form-control pr-6"/>
          <label for="form75">Name</label>
        </div>
  
        <div class="md-form md-outline">
          <input type="email" id="form77" class="form-control pr-6"/>
          <label for="form77">Email</label>
        </div>
        <div class="text-right pb-2">
          <button type="button" class="btn btn-primary">Add a review</button>
        </div>
      </div>

    </div>
  </div>

</div>



    )
}