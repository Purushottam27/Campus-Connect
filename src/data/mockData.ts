export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  price: string;
  posterUrl: string;
  clubId: string;
  clubName: string;
  isPast: boolean;
}

export interface ClubMember {
  name: string;
  role: string;
}

export interface Domain {
  name: string;
  head: string;
  members: string[];
}

export interface Club {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  facultyHead: {
    name: string;
    department: string;
  };
  leadership: ClubMember[];
  domains: Domain[];
  memberCount: number;
}

export const clubs: Club[] = [
  {
    id: "tech-club",
    name: "GeeksforGeeks",
    shortDescription: "Exploring the frontiers of technology and innovation",
    fullDescription: "GeeksforGeeks is the premier technology club fostering innovation, coding excellence, and cutting-edge research. We organize hackathons, workshops, and tech talks to empower students with industry-relevant skills.",
    facultyHead: { name: "Dr. Rahul Dubey", department: "Computer Science" },
    leadership: [
      { name: "Arjun Sharma", role: "President" },
      { name: "Priya Patel", role: "Vice President" },
      { name: "Rohan Verma", role: "Secretary" },
      { name: "Ananya Singh", role: "Treasurer" }
    ],
    domains: [
      { name: "Technical", head: "Vikram Reddy", members: ["Aarav Gupta", "Ishaan Mehta", "Kavya Nair"] },
      { name: "Content", head: "Sneha Iyer", members: ["Aditya Rao", "Meera Sharma"] },
      { name: "Management", head: "Rahul Joshi", members: ["Tanya Kapoor", "Varun Singh"] },
      { name: "Graphics", head: "Neha Kulkarni", members: ["Siddharth Pillai", "Riya Menon"] }
    ],
    memberCount: 50
  },
  {
    id: "cultural-club",
    name: "Nritya Sangam",
    shortDescription: "Celebrating diversity through arts and culture",
    fullDescription: "Rang Manch brings together students passionate about performing arts, dance, music, and cultural expression. We organize festivals, performances, and workshops celebrating India's rich heritage.",
    facultyHead: { name: "Prof. Sunita Sharma", department: "Fine Arts" },
    leadership: [
      { name: "Nidhi Agarwal", role: "President" },
      { name: "Karan Malhotra", role: "Vice President" },
      { name: "Divya Krishnan", role: "Secretary" }
    ],
    domains: [
      { name: "Management", head: "Akash Jain", members: ["Pooja Reddy", "Manish Kumar"] },
      { name: "Promotion", head: "Shreya Bose", members: ["Vivek Nair", "Anita Sharma"] },
      { name: "Social Media", head: "Raj Patel", members: ["Kritika Singh", "Harsh Vardhan"] },
      { name: "Content", head: "Simran Kaur", members: ["Aryan Khanna", "Tara Menon"] }
    ],
    memberCount: 30
  },
  {
    id: "sports-club",
    name: "SportsClub",
    shortDescription: "Empowering athletes and promoting fitness",
    fullDescription: "SportsClub is dedicated to nurturing sporting talent and promoting a healthy lifestyle. From inter-college tournaments to fitness workshops, we bring the spirit of sportsmanship to campus.",
    facultyHead: { name: "Mr. Suresh Babu", department: "Physical Education" },
    leadership: [
      { name: "Aditya Rane", role: "President" },
      { name: "Megha Patil", role: "Vice President" },
      { name: "Sanjay Deshmukh", role: "Secretary" }
    ],
    domains: [
      { name: "Technical", head: "Pranav Kulkarni", members: ["Rohit Sharma", "Deepa Iyer"] },
      { name: "Management", head: "Neeta Joshi", members: ["Vijay Kumar", "Priyanka Nair"] },
      { name: "Promotion", head: "Gaurav Singh", members: ["Asha Reddy", "Mohan Das"] }
    ],
    memberCount: 95
  },
  {
    id: "photography-club",
    name: "Photography Club",
    shortDescription: "Capturing moments, creating memories",
    fullDescription: "Lens Craft unites photography enthusiasts to explore visual storytelling. Through photo walks, exhibitions, and editing workshops, we develop both technical skills and artistic vision.",
    facultyHead: { name: "Dr. Meera Nambiar", department: "Media Studies" },
    leadership: [
      { name: "Sahil Kapoor", role: "President" },
      { name: "Rhea Chatterjee", role: "Vice President" },
      { name: "Arnav Gupta", role: "Secretary" }
    ],
    domains: [
      { name: "Videography", head: "Kunal Sharma", members: ["Tanvi Reddy", "Aakash Pillai"] },
      { name: "Graphics", head: "Pallavi Iyer", members: ["Saurabh Nair", "Nisha Menon"] },
      { name: "Social Media", head: "Yash Agarwal", members: ["Diya Kapoor", "Rohan Joshi"] },
      { name: "Content", head: "Anushka Singh", members: ["Kabir Malhotra", "Shreya Das"] }
    ],
    memberCount: 65
  },
  {
    id: "literary-club",
    name: "Hindi Samiti",
    shortDescription: "Where words come alive",
    fullDescription: "Hindi Samiti is the haven for wordsmiths, debaters, and literature lovers. We host poetry slams, creative writing contests, debates, and book discussions to celebrate the power of language.",
    facultyHead: { name: "Prof. Lakshmi Menon", department: "Hindi Literature" },
    leadership: [
      { name: "Aditi Rao", role: "President" },
      { name: "Nikhil Sharma", role: "Vice President" },
      { name: "Kavitha Nair", role: "Secretary" }
    ],
    domains: [
      { name: "Content", head: "Raghav Pillai", members: ["Anjali Reddy", "Vishnu Kumar"] },
      { name: "Management", head: "Shruti Iyer", members: ["Arjun Das", "Meghna Sharma"] },
      { name: "Promotion", head: "Arun Krishnan", members: ["Pooja Nair", "Siddharth Menon"] }
    ],
    memberCount: 55
  },
  {
    id: "music-club",
    name: "Bandish",
    shortDescription: "Uniting through the universal language of music",
    fullDescription: "Bandish brings together vocalists, instrumentalists, and music lovers. From classical to contemporary, we organize jam sessions, concerts, and music production workshops.",
    facultyHead: { name: "Dr. Venkat Subramaniam", department: "Music" },
    leadership: [
      { name: "Varun Iyer", role: "President" },
      { name: "Sonali Kulkarni", role: "Vice President" },
      { name: "Pranav Menon", role: "Secretary" }
    ],
    domains: [
      { name: "Technical", head: "Aakash Sharma", members: ["Riya Patel", "Karthik Nair"] },
      { name: "Videography", head: "Snehal Reddy", members: ["Amit Joshi", "Prerna Singh"] },
      { name: "Social Media", head: "Nandini Das", members: ["Harsh Kapoor", "Tara Krishnan"] }
    ],
    memberCount: 70
  },
  {
    id: "drama-club",
    name: "Google Developer Groups",
    shortDescription: "Life is a stage, and we perform",
    fullDescription: "Google Developer Group (GDG) club is a local, independent community of developers and tech enthusiasts interested in Google developer technologies and the open-source community.",
    facultyHead: { name: "Dr. D.K.Mishra", department: "Mathematics and Computing" },
    leadership: [
      { name: "Tanmay Deshpande", role: "President" },
      { name: "Isha Bhattacharya", role: "Vice President" },
      { name: "Akshay Menon", role: "Secretary" }
    ],
    domains: [
      { name: "Management", head: "Radhika Sharma", members: ["Nitin Pillai", "Gayatri Iyer"] },
      { name: "Promotion", head: "Sameer Rao", members: ["Anjana Nair", "Vinay Kumar"] },
      { name: "Graphics", head: "Aparna Reddy", members: ["Sanjay Menon", "Divya Kapoor"] },
      { name: "Content", head: "Kiran Das", members: ["Madhavi Sharma", "Rohit Nair"] }
    ],
    memberCount: 60
  },
  {
    id: "social-service-club",
    name: "Seva Samiti",
    shortDescription: "Making a difference, one step at a time",
    fullDescription: "Seva Samiti is committed to community service and social impact. We organize blood drives, environmental initiatives, educational outreach, and disaster relief activities.",
    facultyHead: { name: "Dr. Anand Krishnamurthy", department: "Social Work" },
    leadership: [
      { name: "Shreya Iyer", role: "President" },
      { name: "Manav Sharma", role: "Vice President" },
      { name: "Preethi Nair", role: "Secretary" }
    ],
    domains: [
      { name: "Management", head: "Karthik Reddy", members: ["Ananya Pillai", "Suresh Kumar"] },
      { name: "Content", head: "Lakshmi Menon", members: ["Aravind Das", "Meera Sharma"] },
      { name: "Social Media", head: "Rahul Nair", members: ["Diya Iyer", "Vikash Joshi"] },
      { name: "Promotion", head: "Nidhi Kapoor", members: ["Sanjana Rao", "Arjun Pillai"] }
    ],
    memberCount: 80
  }
];

export const events: Event[] = [
  // Upcoming Events
  {
    id: "hackathon-2024",
    title: "CodeRush 2.0 2025",
    description: "48-hour coding marathon to build innovative solutions. Top prizes worth ₹50,000!",
    date: "2025-12-24",
    time: "11:00 AM",
    venue: "Student Activity Center",
    price: "₹19",
    posterUrl: "https://gfg.ggits.org/gfg-banner.png",
    clubId: "tech-club",
    clubName: "GeeksforGeeks",
    isPast: false
  },
  {
    id: "cultural-fest",
    title: "Utsav - Annual Cultural Festival",
    description: "Three days of dance, music, drama, and celebration of cultural diversity.",
    date: "2026-02-20",
    time: "10:00 AM",
    venue: "Open Air Theatre",
    price: "Free",
    posterUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
    clubId: "cultural-club",
    clubName: "Nritya Sangam",
    isPast: false
  },
  {
    id: "sports-meet",
    title: "Inter-College Sports Meet",
    description: "Compete in athletics, basketball, football, and more across 15 colleges.",
    date: "2025-12-22",
    time: "02:00 AM",
    venue: "Sports Ground",
    price: "₹100",
    posterUrl: "https://t4.ftcdn.net/jpg/02/86/76/77/240_F_286767786_boXM75PDLYIsYWzabZ3fKcM3esv50TNS.jpg",
    clubId: "sports-club",
    clubName: "SportsClub",
    isPast: false
  },
  {
    id: "photo-exhibition",
    title: "Frames of Life - Photo Exhibition",
    description: "An exhibition showcasing stunning photography from our talented members.",
    date: "2026-02-01",
    time: "11:00 AM",
    venue: "Art Gallery, Block C",
    price: "Free",
    posterUrl: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=300&fit=crop",
    clubId: "photography-club",
    clubName: "Photography Club",
    isPast: false
  },
  {
    id: "poetry-slam",
    title: "Voices Unheard - Poetry Slam",
    description: "Express your thoughts through spoken word poetry. Open mic for all!",
    date: "2025-12-23",
    time: "05:00 PM",
    venue: "Seminar Hall",
    price: "Free",
    posterUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    clubId: "literary-club",
    clubName: "Hindi Samiti",
    isPast: false
  },
  {
    id: "battle-bands",
    title: "Battle of Bands",
    description: "Campus bands compete for the title of the best college band of the year.",
    date: "2026-01-10",
    time: "06:00 PM",
    venue: "Main Auditorium",
    price: "Free",
    posterUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    clubId: "music-club",
    clubName: "Bandish",
    isPast: false
  },
  
  {
    id: "blood-drive",
    title: "Blood Donation Camp",
    description: "Save lives by donating blood. Every drop counts!",
    date: "2025-10-20",
    time: "11:00 AM",
    venue: "Health Center",
    price: "Free",
    posterUrl: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=400&h=300&fit=crop",
    clubId: "social-service-club",
    clubName: "Seva Samiti",
    isPast: true
  },
  // Past Events
  {
    id: "ai-ml-workshop-2023",
    title: "CodeRush",
    description: "Hands-on workshop covering DSA fundamentals and coding best practices.",
    date: "2025-10-15",
    time: "10:00 AM",
    venue: "Student Activity Center",
    price: "₹30",
    posterUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    clubId: "tech-club",
    clubName: "GeeksforGeeks",
    isPast: true
  },
  {
    id: "diwali-night-2023",
    title: "Diwali Cultural Night 2023",
    description: "A spectacular celebration of lights with traditional performances, rangoli, and fireworks.",
    date: "2025-10-12",
    time: "06:00 PM",
    venue: "Main Ground",
    price: "Free",
    posterUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
    clubId: "cultural-club",
    clubName: "Nritya Sangam",
    isPast: true
  },
  {
    id: "sports-day-2023",
    title: "Annual Sports Day 2023",
    description: "A day of athletic excellence with track events, team sports, and award ceremonies.",
    date: "2023-10-28",
    time: "08:00 AM",
    venue: "Sports Complex",
    price: "Free",
    posterUrl: "https://images.unsplash.com/photo-1461896836934-482c28bf3d8f?w=400&h=300&fit=crop",
    clubId: "sports-club",
    clubName: "SportsClub",
    isPast: true
  },
  {
    id: "monsoon-photowalk",
    title: "Monsoon Photo Walk",
    description: "Capture the beauty of monsoon season around campus with guided photography tips.",
    date: "2023-08-20",
    time: "07:00 AM",
    venue: "Campus Grounds",
    price: "Free",
    posterUrl: "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=400&h=300&fit=crop",
    clubId: "photography-club",
    clubName: "PhotographyClub",
    isPast: true
  },
  {
    id: "freshers-concert-2023",
    title: "Freshers' Night Concert",
    description: "Welcome concert for new students featuring live performances by college bands.",
    date: "2025-09-25",
    time: "07:00 PM",
    venue: "Main Ground",
    price: "Free",
    posterUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
    clubId: "music-club",
    clubName: "Bandish",
    isPast: true
  },
  {
    id: "tree-plantation-2023",
    title: "Tree Plantation Drive",
    description: "Environmental initiative planting 500 trees across campus and nearby areas.",
    date: "2023-06-05",
    time: "06:30 AM",
    venue: "Campus & Surroundings",
    price: "Free",
    posterUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
    clubId: "social-service-club",
    clubName: "Seva Samiti",
    isPast: true
  }
];

export type UserRole = "student" | "club_head" | null;

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  clubId?: string; // Only for club heads
}
