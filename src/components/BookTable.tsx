import React from 'react';
import backgroungImage from '../assets/img/reservation.jpg'

export default function BookTable() {
  return (
    <div>
      <section id="book-a-table" className="book-a-table section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Book A Table</h2>
          <p>
            <span>Book Your</span>{' '}
            <span className="description-title">Stay With Us<br /></span>
          </p>
        </div>

        <div className="container">
          <div className="row g-0" data-aos="fade-up" data-aos-delay="100">
            <div
              className="col-lg-4 reservation-img"
              style={{ backgroundImage: 'url(assets/img/reservation.jpg)' }}
            ></div>

            <div
              className="col-lg-8 d-flex align-items-center reservation-form-bg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form">
                <div className="row gy-4">
                  <div className="col-lg-4 col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Your Phone"
                      required
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <input
                      type="date"
                      name="date"
                      className="form-control"
                      id="date"
                      placeholder="Date"
                      required
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <input
                      type="time"
                      className="form-control"
                      name="time"
                      id="time"
                      placeholder="Time"
                      required
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      name="people"
                      id="people"
                      placeholder="# of people"
                      required
                    />
                  </div>
                </div>

                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="text-center mt-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!
                  </div>
                  <button type="submit">Book a Table</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
