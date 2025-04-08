//import React from 'react'
import sri from '../assets/img/restaurants.jpg'
import srii from '../assets/img/famous.webp'
export default function About() {
  return (
    <div>

<section id="about" className="about section">


<div className="container section-title" data-aos="fade-up">
  <h2>About Us<br></br></h2>
  <p><span>Learn More</span> <span className="description-title">About Us</span></p>
</div>

<div className="container">

  <div className="row gy-4">
    <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
      <img src={sri} className="img-fluid mb-4" alt=""/>
      <div className="book-a-table">
        <h3>Book a Table</h3>
        <p> +91 6300695968 </p>
      </div>
    </div>
    <div className="col-lg-5" data-aos="fade-up" data-aos-delay="250">
      <div className="content ps-0 ps-lg-5">
        <p className="fst-italic">
        "Where every meal is a masterpiece, and every guest is family."
        "Your search for the perfect dining experience ends here."
        </p>
        <ul>
          <li><i className="bi bi-check-circle-fill"></i> <span>"Flavors that tell a story, service that makes you stay."</span></li>
          <li><i className="bi bi-check-circle-fill"></i> <span>"More than just a restaurant – it's a destination for your senses."</span></li>
          <li><i className="bi bi-check-circle-fill"></i> <span>"Good food. Great memories. Unforgettable moments.".</span></li>
        </ul>
        <p>
            ALL ABOUT TASTE!!!
        "A taste so divine, it lingers in your memory forever."
        "Flavors that dance on your palate, crafted with love and precision."
        "Taste the magic in every bite."
        "Where every dish is a symphony of flavors."
        "Indulge in the art of taste  because you deserve the best."
        </p>

        <div className="position-relative mt-4">
          <img src={srii}  className="img-fluid" alt=""/>
          <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a>
        </div>
      </div>
    </div>
  </div>

</div>

</section>
    </div>
  )
}
