export const eventDetails = {
  name: "TECH SYMPOSIUM 2026",
  host: "CSI Trivandrum Chapter",
  date: "October 15-17, 2026",
  location: "Technopark, Trivandrum",
  description: "Join the largest national-level tech event in Kerala. Three days of intense hackathons, paper presentations, expert talks, and networking.",
};

export const tracks = [
  {
    id: "t1",
    title: "National Hackathon",
    type: "Competition",
    description: "36-hour coding marathon to solve real-world problems. Build, innovate, and win exciting prizes.",
    teamSize: "3-4 members",
  },
  {
    id: "t2",
    title: "Paper Presentation",
    type: "Competition",
    description: "Present your research papers in front of esteemed panelists from top tech companies.",
    teamSize: "1-2 members",
  },
  {
    id: "t3",
    title: "AI & ML Workshop",
    type: "Workshop",
    description: "Hands-on workshop on building LLMs and generative AI applications.",
    teamSize: "Individual",
  },
  {
    id: "t4",
    title: "Cybersecurity Capture The Flag (CTF)",
    type: "Competition",
    description: "Test your hacking skills in our isolated environment.",
    teamSize: "2-3 members",
  }
];

export const speakers = [
  {
    id: "s1",
    name: "Dr. Arya Menon",
    role: "Chief AI Scientist",
    company: "TechNova",
    image: "https://i.pravatar.cc/300?img=1",
    bio: "Pioneer in NLP models for regional languages."
  },
  {
    id: "s2",
    name: "Rahul Nair",
    role: "VP of Engineering",
    company: "CloudCore",
    image: "https://i.pravatar.cc/300?img=11",
    bio: "Expert in scalable distributed systems and cloud infrastructure."
  },
  {
    id: "s3",
    name: "Sneha Varghese",
    role: "Lead Security Researcher",
    company: "CyberDefend",
    image: "https://i.pravatar.cc/300?img=5",
    bio: "Internationally recognized ethical hacker and bug bounty hunter."
  }
];

export const schedule = [
  {
    date: "Day 1 - Oct 15",
    events: [
      { time: "09:00 AM", title: "Inauguration Ceremony", location: "Main Auditorium" },
      { time: "10:30 AM", title: "Keynote: Future of AI", location: "Main Auditorium" },
      { time: "01:00 PM", title: "Hackathon Kickoff", location: "Innovation Lab" },
      { time: "02:30 PM", title: "AI & ML Workshop (Part 1)", location: "Hall A" }
    ]
  },
  {
    date: "Day 2 - Oct 16",
    events: [
      { time: "09:00 AM", title: "Paper Presentations", location: "Seminar Halls" },
      { time: "11:00 AM", title: "Cybersecurity CTF Starts", location: "Lab 2" },
      { time: "02:00 PM", title: "Panel Discussion: Tech Startups", location: "Main Auditorium" }
    ]
  },
  {
    date: "Day 3 - Oct 17",
    events: [
      { time: "10:00 AM", title: "Hackathon Judging", location: "Innovation Lab" },
      { time: "02:00 PM", title: "Valedictory Function", location: "Main Auditorium" },
      { time: "04:00 PM", title: "Prize Distribution", location: "Main Auditorium" }
    ]
  }
];

export const sponsors = [
  { name: "Google Developers", tier: "Platinum", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", tier: "Gold", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Kerala Startup Mission", tier: "Ecosystem Partner", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Solid_blue.svg" },
  { name: "Infosys", tier: "Silver", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" }
];
