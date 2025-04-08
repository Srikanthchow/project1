import React from 'react'
import cat from '../assets/img/Chicken-Biryani.jpg'
import dog from '../assets/img/malabar-chicken-biryani1.webp'
import ani from '../assets/img/Best-Mutton-Biryani-Recipe.jpg'
import lion from '../assets/img/65.jpg'
import tig from '../assets/img/mutton.jpg'
import bird from '../assets/img/Egg-Biryani-Featured-1.jpg'
import pat from '../assets/img/menu/menu-item-1.png'
export default function Menu() {
  return (
    <div>

<section id="menu" className="menu section">


<div className="container section-title" data-aos="fade-up">
  <h2>Our Menu</h2>
  <p><span>Check Our</span> <span className="description-title">Yummy Menu</span></p>
</div>

<div className="container">

  <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">

    

    <li className="nav-item">
      <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
        <h4>Dinner</h4>
      </a>
    </li>

  </ul>

  <div className="tab-content" data-aos="fade-up" data-aos-delay="200">

    <div className="tab-pane fade active show" id="menu-starters">

      <div className="tab-header text-center">
        <p>Menu</p>
        <h3>Dinners</h3>
      </div>

      <div className="row gy-5">

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-1.png" className="glightbox">
          <img src={cat} className="menu-img img-fluid" alt=""/></a>
          <h4>Dum Biriyani</h4>
          <p className="ingredients">
            chicken
          </p>
          <p className="price">
            $499
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-2.png" className="glightbox">
          <img src={dog} className="menu-img img-fluid" alt=""/></a>
          <h4>Fry Biriyani</h4>
          <p className="ingredients">
           
          </p>
          <p className="price">
            $459
          </p>
        </div>
        

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-3.png" className="glightbox">
          <img src={ani} className="menu-img img-fluid" alt=""/></a>
          <h4>Mutton Biriyani</h4>
          <p className="ingredients">
            mutton
          </p>
          <p className="price">
            $679
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-4.png" className="glightbox">
          <img src={lion} className="menu-img img-fluid" alt=""/></a>
          <h4>65 Biriyani</h4>
          <p className="ingredients">
            Chicken
          </p>
          <p className="price">
            $399
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-5.png" className="glightbox">
          <img src={tig} className="menu-img img-fluid" alt=""/></a>
          <h4>jucie mutton Biriyani</h4>
          <p className="ingredients">
            Mutton
          </p>
          <p className="price">
            $799
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-6.png" className="glightbox">
          <img src={bird} className="menu-img img-fluid" alt=""/></a>
          <h4>Egg Biriyani</h4>
          <p className="ingredients">
            Eggs
          </p>
          <p className="price">
            $299
          </p>
        </div>

      </div>
    </div>

    <div className="tab-pane fade" id="menu-breakfast">

      <div className="tab-header text-center">
        <p>Menu</p>
        <h3>Breakfast</h3>
      </div>

      <div className="row gy-5">

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-1.png" className="glightbox">
          <img src={pat} className="menu-img img-fluid" alt=""/></a>
          <h4>Magnam Tiste</h4>
          <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
          </p>
          <p className="price">
            $5.95
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-2.png" className="glightbox">
          <img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt=""/></a>
          <h4>Aut Luia</h4>
          <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
          </p>
          <p className="price">
            $14.95
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-3.png" className="glightbox">
          <img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt=""/></a>
          <h4>Est Eligendi</h4>
          <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
          </p>
          <p className="price">
            $8.95
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-4.png" className="glightbox">
          <img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt=""/></a>
          <h4>Eos Luibusdam</h4>
          <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
          </p>
          <p className="price">
            $12.95
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-5.png" className="glightbox">
          <img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt=""/></a>
          <h4>Eos Luibusdam</h4>
          <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
          </p>
          <p className="price">
            $12.95
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-6.png" className="glightbox">
          <img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt=""/></a>
          <h4>Laboriosam Direva</h4>
          <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
          </p>
          <p className="price">
            $9.95
          </p>
        </div>

      </div>
    </div>

    <div className="tab-pane fade" id="menu-lunch">

      <div className="tab-header text-center">
        <p>Menu</p>
        <h3>Lunch</h3>
      </div>

      <div className="row gy-5">

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-1.png" className="glightbox">
          <img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt=""/></a>
          <h4>Magnam Tiste</h4>
          <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
          </p>
          <p className="price">
            $5.95
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-2.png" className="glightbox">
          <img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt=""/></a>
          <h4>Aut Luia</h4>
          <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
          </p>
          <p className="price">
            $14.95
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-3.png" className="glightbox">
          <img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt=""/></a>
          <h4>Est Eligendi</h4>
          <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
          </p>
          <p className="price">
            $8.95
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-4.png" className="glightbox">
          <img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt=""/></a>
          <h4>Eos Luibusdam</h4>
          <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
          </p>
          <p className="price">
            $12.95
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-5.png" className="glightbox">
          <img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt=""/></a>
          <h4>Eos Luibusdam</h4>
          <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
          </p>
          <p className="price">
            $12.95
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-6.png" className="glightbox">
          <img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt=""/></a>
          <h4>Laboriosam Direva</h4>
          <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
          </p>
          <p className="price">
            $9.95
          </p>
        </div>

      </div>
    </div>

    <div className="tab-pane fade" id="menu-dinner">

      <div className="tab-header text-center">
        <p>Menu</p>
        <h3>Dinner</h3>
      </div>

      <div className="row gy-5">

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-1.png" className="glightbox">
          <img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt=""/></a>
          <h4>Magnam Tiste</h4>
          <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
          </p>
          <p className="price">
            $5.95
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-2.png" className="glightbox">
          <img src="assets/img/menu/menu-item-2.png" className="menu-img img-fluid" alt=""/></a>
          <h4>Aut Luia</h4>
          <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
          </p>
          <p className="price">
            $14.95
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-3.png" className="glightbox">
          <img src="assets/img/menu/menu-item-3.png" className="menu-img img-fluid" alt=""/></a>
          <h4>Est Eligendi</h4>
          <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
          </p>
          <p className="price">
            $8.95
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-4.png" className="glightbox">
          <img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt=""/></a>
          <h4>Eos Luibusdam</h4>
          <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
          </p>
          <p className="price">
            $12.95
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-5.png" className="glightbox">
          <img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt=""/></a>
          <h4>Eos Luibusdam</h4>
          <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
          </p>
          <p className="price">
            $12.95
          </p>
        </div>

        <div className="col-lg-4 menu-item">
          <a href="assets/img/menu/menu-item-6.png" className="glightbox">
          <img src="assets/img/menu/menu-item-6.png" className="menu-img img-fluid" alt=""/></a>
          <h4>Laboriosam Direva</h4>
          <p className="ingredients">
            Lorem, deren, trataro, filede, nerada
          </p>
          <p className="price">
            $9.95
          </p>
        </div>

      </div>
    </div>

  </div>

</div>

</section>
    </div>
  )
}
