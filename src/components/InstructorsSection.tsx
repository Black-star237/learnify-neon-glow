
import InstructorCard from './InstructorCard';

const InstructorsSection = () => {
  const instructors = [
    {
      name: "Sarah Chen",
      title: "Senior Frontend Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9c7e5e4?w=200&h=200&fit=crop&crop=face",
      rating: 4.9,
      students: 25420,
      courses: 8,
      specialties: ["React", "JavaScript", "TypeScript", "Next.js"],
      bio: "Passionate educator with 8+ years in frontend development. Helped thousands master modern web technologies."
    },
    {
      name: "Dr. Michael Park",
      title: "AI Research Scientist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      rating: 4.9,
      students: 18600,
      courses: 6,
      specialties: ["Machine Learning", "Python", "Deep Learning", "AI"],
      bio: "Former Google AI researcher with PhD from Stanford. Specializes in making complex AI concepts accessible."
    },
    {
      name: "Emma Wilson",
      title: "Digital Marketing Expert",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      rating: 4.8,
      students: 32100,
      courses: 12,
      specialties: ["SEO", "Social Media", "Content Strategy", "Analytics"],
      bio: "Award-winning marketer who's scaled startups to millions in revenue. Expert in growth hacking strategies."
    },
    {
      name: "Alex Rodriguez",
      title: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      rating: 4.8,
      students: 19800,
      courses: 10,
      specialties: ["UI/UX", "Figma", "Design Systems", "Branding"],
      bio: "Creative director at top design agencies. Expert in user-centered design and brand strategy."
    },
    {
      name: "David Kim",
      title: "Startup Founder & Mentor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      rating: 4.7,
      students: 14250,
      courses: 5,
      specialties: ["Entrepreneurship", "Business Strategy", "Fundraising", "Leadership"],
      bio: "Serial entrepreneur with 3 successful exits. Mentored 100+ startups through accelerator programs."
    },
    {
      name: "Lisa Thompson",
      title: "Full-Stack Engineer",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face",
      rating: 4.8,
      students: 21300,
      courses: 9,
      specialties: ["Node.js", "MongoDB", "AWS", "DevOps"],
      bio: "Full-stack engineer with expertise in scalable systems. Former tech lead at major fintech companies."
    }
  ];

  return (
    <section id="instructors" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Meet Our <span className="text-gradient">Expert Instructors</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn from industry leaders and seasoned professionals who bring real-world experience to every lesson.
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <InstructorCard key={index} {...instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
