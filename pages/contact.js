const Contact = ()=>{
    return(
<main>

<div class="container-fluid mb-5">


  <div class="row">

 
    <div class="col-md-12">

      <div class="card pb-5">
        <div class="card-body">

          <div class="container">

    
            <section class="section">

          
              <h2 class="font-weight-bold text-center h1 my-5">Contact us</h2>
 
              <p class="text-center grey-text mb-5 mx-auto w-responsive">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Fugit, error amet numquam iure provident voluptate
                esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>

              <div class="row pt-5">
           <div class="col-md-8 col-xl-9">
                  <form name='contact' method="POST" action="success.html" data-netlify="true" class="form"  >

               
                    <div class="row">

                      <div class="col-md-6">
                        <div class="md-form">
                          <label for="contact-name" class="">Your name</label>
                          <input type="text" required id="contact-name" name='name' class="form-control"/>
                        
                        </div>
                      </div>
           
                      <div class="col-md-6">
                        <div class="md-form">
                          <label for="contact-email" class="" name='email'>Your email</label>
                          <input type="email" required id="contact-email" class="form-control"/>
                        
                        </div>
                      </div>
      

                    </div>
           
                    <div class="row">
                      <div class="col-md-12">
                        <div class="md-form">
                          <label for="contact-Subject">Subject</label>
                          <input type="text" required  name='Subject' id="contact-Subject" class="form-control"/>
                       
                        </div>
                      </div>
                    </div>
                
                    <div class="row">
        <div class="col-md-12">

                        <div class="md-form">
                          <label for="contact-message" >Your message</label>
                          <textarea type="text" required name='massage'  id="contact-message" class="md-textarea form-control" rows="3"></textarea>
                          
                        </div>

                      </div>
                    </div>
            
                    <div class="text-center text-md-left my-4">
                      <button class="btn btn-primary submitBtn " type="submit" >Send</button>
                    </div>
                  </form>
              
                  
                </div>
           
                <div class="col-md-4 col-xl-3">
                  <ul class="contact-icons text-center list-unstyled">
                    <li>
                      <i class="fas fa-map-marker fa-2x orange-text"></i>
                      <p>Chatsworth, CA 91311, USA</p>
                    </li>

                    <li>
                      <i class="fas fa-envelope fa-2x "></i>
                      <p>gigishoppp88@gmail.com</p>
                    </li>
                  </ul>
                </div>
         
              </div>

            </section>
          </div>
        </div>

      </div>


    </div>
 

  </div>

</div>

</main>

    )
}
export default Contact;