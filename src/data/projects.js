// src/data/projects.js

export const projects = [
  {
    id: 1,
    title: "Face And Motion Detection",
    shortDesc: "Real-time motion and facial detection using Python, OpenCV, and Tkinter.",
    fullDesc: `This intelligent surveillance project is designed to monitor spaces in real time, detecting both motion and human faces with high accuracy using Haar Cascade classifiers from OpenCV.

Features:
- Real-time detection of both motion and faces using webcam feed.
- Uses Haar Cascade Classifier from OpenCV for facial recognition.
- GUI built with Tkinter for interactive control (start/stop monitoring).
- Real-time video feed with highlighted detection areas.
- Option to record surveillance or take snapshots when activity is detected.
- Can be extended with:
  • Night mode filters using OpenCV's image enhancement techniques.
  • Sound alerts using Python’s "playsound" or "pygame".
  • Event logging to a CSV or SQLite database for auditing.
- Ideal for small offices, home surveillance, or entry-level computer vision projects.
- Demonstrates practical skills in computer vision, event-driven GUI development, and system automation.`,
    technologies: ["Python", "OpenCV", "Tkinter"],
    tags: ["AI", "Computer Vision", "Surveillance", "Desktop App"],
    difficulty: "Intermediate",
    img: "face.png",
    repo: "https://github.com/SharadBaghel/Face-and-Motion-Detection"
  },
  {
    id: 2,
    title: "FindIt",
    shortDesc: "Connecting People with People",
    fullDesc: `FindIt is a dynamic social connection platform designed to connect users based on shared interests, profession, and location.

Features:
- User authentication and profile setup system.
- Match suggestion system based on user data and interests.
- Send/receive connection requests and real-time messaging.
- Dynamic user feed with filtering options (interests, city, etc.).
- Built using React and React Router for smooth page transitions.
- Fully responsive and mobile-friendly design.
- Clean UI/UX designed to enhance user engagement and accessibility.
- Built with scalability in mind for community or professional networking.`,
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    tags: ["Web App", "Social", "Networking", "Frontend"],
    difficulty: "Intermediate",
    img: "findit.png",
    repo: "https://github.com/SharadBaghel/FindIt"
  },
  {
    id: 3,
    title: "Frozed",
    shortDesc: "Work Smartly with Endless Possibility",
    fullDesc: `Frozed is a visually striking landing page website aimed at showcasing a product or brand through clean design and animations.

Features:
- Smooth scroll-based animations using AOS (Animate On Scroll).
- Multiple sections: Home, Features, About, Testimonials, Contact.
- Responsive design suitable for all screen sizes.
- Vanilla JavaScript used for form validation and DOM interaction.
- Lightweight with fast loading performance, no external JS frameworks.
- Perfect for startups, product launches, or personal branding.
- Demonstrates frontend creativity, animation logic, and accessibility.`,
    technologies: ["AOS", "JavaScript", "HTML", "CSS"],
    tags: ["Landing Page", "Frontend", "Animation", "UI/UX"],
    difficulty: "Beginner",
    img: "frozed.png",
    repo: "https://github.com/SharadBaghel/rou_main"
  },
  {
    id: 4,
    title: "Easy Study",
    shortDesc: "AI-Based Study Material Generator",
    fullDesc: `Easy Study is an AI-powered educational platform that generates complete study materials based on any academic topic.

Features:
- Uses OpenAI's GPT API to generate notes, summaries, key points, and MCQs.
- Built with full-stack architecture using Next.js (SSR).
- Secure authentication using NextAuth.
- Users can view topic history and regenerate content anytime.
- Drizzle ORM with PostgreSQL used for scalable backend data handling.
- Export generated notes as downloadable PDFs.
- Fully responsive design with dark mode support.
- Great for students, educators, and competitive exam aspirants.
- Demonstrates skills in full-stack dev, AI integration, and UI design.`,
    technologies: ["React", "Next.js", "Drizzle ORM", "OpenAI API"],
    tags: ["AI", "EdTech", "Full Stack", "Productivity"],
    difficulty: "Advanced",
    img: "easy-study.png",
    repo: "https://github.com/SharadBaghel/Ai-study-material-generator"
  }
];
