import React from 'react';

function AboutUs() {
  return (
    <section className="about-us">
      <h2>About Us</h2>
      <p className="about-intro">
        Welcome to <strong>Paradise Nursery</strong> — where plants are our passion! Established
        in 1995, we have been proudly serving plant lovers for nearly three decades. What began
        as a small family greenhouse has grown into one of the most trusted nurseries in the
        region, offering over 300 varieties of houseplants, herbs, and succulents.
      </p>
      <p className="about-intro">
        We believe every home deserves a little green. Our expert growers hand-pick and nurture
        every plant, so it arrives at your door healthy, happy, and ready to thrive.
      </p>
      <div className="about-cards">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To bring nature into every home by making quality plants accessible, affordable, and
            easy to care for — for beginners and collectors alike.
          </p>
        </div>
        <div className="about-card">
          <h3>What We Offer</h3>
          <p>
            Hand-raised foliage plants, fragrant herbs, and resilient succulents, complete with
            care guides and friendly expert advice.
          </p>
        </div>
        <div className="about-card">
          <h3>Our Promise</h3>
          <p>
            Sustainable growing practices, honest pricing, and a 30-day guarantee on every plant
            we sell. Your green journey starts here.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
