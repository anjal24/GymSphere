import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        {/* Left Side: Image */}
        <div className="left-content">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000"
            alt="Gym Interior"
            className="about-img"
          />
        </div>
        {/* Right Side: Text Content + Cards */}
        <div className="right-content">
          <h1>
            About <span className="highlight">GymSphere</span>
          </h1>

          <p className="text">
            At GymSphere, we believe that fitness is not just a hobby—it’s a
            lifestyle. Established with a vision to create a world-class
            training environment, we provide the perfect blend of modern
            technology and professional expertise to help you crush your goals.
          </p>

          <p className="text">
            Whether you are a beginner or a pro athlete, our community is built
            to support your transformation. Join us and redefine your limits.
          </p>

          {/* Cards ab Right Content ke andar hain */}
          <div className="about-cards">
            <div className="small-card">
              <h4>500+</h4>
              <p>Happy Members</p>
            </div>
            <div className="small-card">
              <h4>100+</h4>
              <p>Expert Trainers</p>
            </div>
          </div>
        </div>{" "}
        {/* right-content ends */}
      </div>{" "}
      {/* about-wrapper ends */}
    </div>
  );
}

export default About;
