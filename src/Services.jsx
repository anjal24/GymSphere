import { useParams, useNavigate } from "react-router";
import "./Services.css";

function Services() {
  const { id } = useParams();
  const navigate = useNavigate();

  const fullServices = [
    {
      id: 1,
      title: "Weight Lifting",
      duration: "60 mins",
      intensity: "High",
      desc: "Build muscle and strength with our professional weight lifting program. Perfect for both beginners and advanced athletes.",
      benefits: [
        "Full Body Strength",
        "Expert Coaching",
        "Custom Workout Plans",
      ],
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=500",
    },
    {
      id: 2,
      title: "Diet Plans",
      duration: "Weekly Updates",
      intensity: "Custom",
      desc: "Achieve your fitness goals with a personalized nutrition roadmap designed specifically for your body type and goals.",
      benefits: [
        "Personalized Macros",
        "Sustainable Results",
        "Weekly Meal Tracking",
      ],
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=500",
    },

    {
      id: 3,
      title: "Cardio HIIT",
      duration: "45 mins",
      intensity: "Extreme",
      desc: "Torch calories and improve your cardiovascular health with our High-Intensity Interval Training. Designed to keep your heart rate up and burn fat even after you leave the gym.",
      benefits: [
        "Rapid Fat Loss",
        "Improved Heart Health",
        "Boosts Metabolic Rate",
        "High Energy Levels",
      ],
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=500",
    },
    {
      id: 4,
      title: "Yoga & Zen",
      duration: "50 mins",
      intensity: "Low",
      desc: "Find your inner peace while improving flexibility and core strength. Our Zen sessions combine traditional asanas with modern mindfulness techniques.",
      benefits: [
        "Stress Reduction",
        "Enhanced Flexibility",
        "Better Posture",
        "Mental Clarity",
      ],
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=500",
    },
    {
      id: 5,
      title: "Personal Training",
      duration: "Flexible",
      intensity: "Variable",
      desc: "Get 1-on-1 attention from certified experts. We create a roadmap based on your specific body type, medical history, and fitness goals.",
      benefits: [
        "1-on-1 Expert Guidance",
        "Correct Form Correction",
        "Personalized Goal Tracking",
        "Faster Results",
      ],
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=500",
    },
    {
      id: 6,
      title: "Zumba Dance",
      duration: "60 mins",
      intensity: "Medium",
      desc: "Ditch the workout and join the party! Zumba combines Latin and international music with dance moves for an effective and fun full-body workout.",
      benefits: [
        "Full Body Toning",
        "Coordination & Agility",
        "Social & Fun Environment",
        "Effective Cardio",
      ],
      img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=500",
    },
    {
      id: 7,
      title: "CrossFit",
      duration: "55 mins",
      intensity: "Extreme",
      desc: "A lifestyle characterized by safe, effective exercise and sound nutrition. CrossFit can be used to accomplish any goal, from improved health to weight loss to better performance.",
      benefits: [
        "Functional Strength",
        "Community Support",
        "Increased Endurance",
        "Olympic Lifting Skills",
      ],
      img: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=500",
    },
    {
      id: 8,
      title: "Boxing",
      duration: "60 mins",
      intensity: "High",
      desc: "Sharpen your mind and body. Learn real boxing techniques, footwork, and combinations while building incredible stamina and power.",
      benefits: [
        "Self-Defense Skills",
        "Enhanced Reflexes",
        "Upper Body Power",
        "Great Stress Relief",
      ],
      img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=500",
    },
    {
      id: 9,
      title: "Steam & Sauna",
      duration: "20 mins",
      intensity: "Relaxing",
      desc: "The perfect post-workout recovery. Our luxury steam rooms and saunas help soothe muscles, clear your skin, and detoxify your system.",
      benefits: [
        "Muscle Recovery",
        "Skin Detoxification",
        "Better Sleep Quality",
        "Improved Circulation",
      ],
      img: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=500",
    },
    {
      id: 10,
      title: "Kids Fitness",
      duration: "45 mins",
      intensity: "Low",
      desc: "Building healthy habits from a young age. Our kids' program focuses on coordination, teamwork, and fun through active play and basic exercises.",
      benefits: [
        "Improved Motor Skills",
        "Social Interaction",
        "Healthy Growth",
        "Confidence Building",
      ],
      img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=500",
    },
  ];

  // Logic to find ONLY the clicked service
  const service = fullServices.find((s) => s.id === parseInt(id));

  // IF block correctly closed now
  if (!service) {
    return (
      <div
        className="services-page"
        style={{ textAlign: "center", paddingTop: "150px" }}
      >
        <h2 style={{ color: "white" }}>Service Details Not Found</h2>
        <button className="join-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  return (
    // html structure

    <div className="services-page">
      <div className="detail-card">
        <div className="detail-img-box">
          <img src={service.img} alt={service.title} />
        </div>

        <div className="detail-content">
          <h1 className="detail-title">{service.title}</h1>

          <div className="detail-tags">
            <span>🕒 {service.duration}</span>
            <span>🔥 {service.intensity} Intensity</span>
          </div>

          <p className="detail-description">{service.desc}</p>

          <div className="benefits-box">
            <h3>Why Choose This?</h3>
            <ul>
              {service.benefits?.map((point, index) => (
                <li key={index}>✨ {point}</li>
              ))}
            </ul>
          </div>

          <div className="action-buttons">
            <button className="join-btn" onClick={() => navigate("/Booknow")}>
              Join This Program
            </button>
            <button className="back-btn" onClick={() => navigate("/")}>
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
