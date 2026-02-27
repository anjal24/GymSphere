import "./Home.css";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Weight Lifting",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500",
    },
    {
      id: 2,
      title: "Diet Plans",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=500",
    },
    {
      id: 3,
      title: "Cardio HIIT",
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=500",
    },
    {
      id: 4,
      title: "Yoga & Zen",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=500",
    },
    {
      id: 5,
      title: "Personal Training",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=500",
    },
    {
      id: 6,
      title: "Zumba Dance",
      img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=500",
    },
    {
      id: 7,
      title: "CrossFit",
      img: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=500",
    },
    {
      id: 8,
      title: "Boxing",
      img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=500",
    },
    {
      id: 9,
      title: "Steam & Sauna",
      img: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=500",
    },
    {
      id: 10,
      title: "Kids Fitness",
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=500",
    },
  ];

  return (
    <div className="home-container">
      <h1>Welcome to Our Gym</h1>
      <div className="hero-section">
        <img
          src="https://t4.ftcdn.net/jpg/03/37/96/69/240_F_337966909_vQ6LK6y09bv55ZY51tojJiM3wO6UVrdH.jpg"
          alt="Gym"
          className="home-img"
        />
      </div>

      <div id="services-section">
        <h2>
          Our <span className="highlight">Programs</span>
        </h2>
        <div className="card-slider">
          {services.map((service) => (
            <div
              key={service.id}
              className="image-card"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              <img
                src={service.img}
                alt={service.title}
                className="card-bg-img"
              />
              <div className="card-overlay">
                <h3>{service.title}</h3>
                <span className="explore-text">Click to Explore</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
