
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter } from 'lucide-react';
import CourseCard from './CourseCard';

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Programming', 'Design', 'Business', 'Marketing', 'Data Science'];

  const courses = [
    {
      title: "Advanced React Development",
      description: "Master modern React patterns, hooks, and state management with real-world projects.",
      instructor: "Sarah Chen",
      rating: 4.9,
      students: 15420,
      duration: "12 hours",
      level: "Advanced",
      price: "$79",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
      category: "Programming"
    },
    {
      title: "UI/UX Design Mastery",
      description: "Learn to create stunning user interfaces and experiences that convert.",
      instructor: "Alex Rodriguez",
      rating: 4.8,
      students: 12350,
      duration: "18 hours",
      level: "Intermediate",
      price: "$89",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=300&fit=crop",
      category: "Design"
    },
    {
      title: "Digital Marketing Strategy",
      description: "Build comprehensive marketing campaigns that drive growth and engagement.",
      instructor: "Emma Wilson",
      rating: 4.7,
      students: 8950,
      duration: "15 hours",
      level: "Beginner",
      price: "$59",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      category: "Marketing"
    },
    {
      title: "Machine Learning Fundamentals",
      description: "Dive into AI and machine learning with hands-on Python projects.",
      instructor: "Dr. Michael Park",
      rating: 4.9,
      students: 11200,
      duration: "25 hours",
      level: "Intermediate",
      price: "$129",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      category: "Data Science"
    },
    {
      title: "Startup Business Fundamentals",
      description: "Learn how to build, launch, and scale a successful startup from scratch.",
      instructor: "David Kim",
      rating: 4.6,
      students: 7800,
      duration: "20 hours",
      level: "Beginner",
      price: "$99",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      category: "Business"
    },
    {
      title: "Advanced JavaScript Patterns",
      description: "Master advanced JavaScript concepts, design patterns, and best practices.",
      instructor: "Lisa Thompson",
      rating: 4.8,
      students: 9600,
      duration: "16 hours",
      level: "Advanced",
      price: "$109",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop",
      category: "Programming"
    }
  ];

  const filteredCourses = activeCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Explore Our <span className="text-gradient">Courses</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover a world of knowledge with our expertly crafted courses designed to accelerate your learning journey.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search courses..."
              className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
            />
          </div>
          <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 text-sm transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-transparent'
                  : 'border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
          >
            Load More Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
