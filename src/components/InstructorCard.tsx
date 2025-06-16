
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, BookOpen, Award } from 'lucide-react';

interface InstructorCardProps {
  name: string;
  title: string;
  image: string;
  rating: number;
  students: number;
  courses: number;
  specialties: string[];
  bio: string;
}

const InstructorCard = ({
  name,
  title,
  image,
  rating,
  students,
  courses,
  specialties,
  bio
}: InstructorCardProps) => {
  return (
    <Card className="bg-card-gradient backdrop-blur-sm border-glow hover:border-glow-purple transition-all duration-300 group">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img 
              src={image} 
              alt={name}
              className="w-20 h-20 rounded-full object-cover border-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors"
            />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
              <Award className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
              {name}
            </h3>
            <p className="text-gray-400 text-sm">
              {title}
            </p>
            <div className="flex items-center space-x-1 mt-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-yellow-400 text-sm font-medium">{rating}</span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {bio}
        </p>

        {/* Specialties */}
        <div className="space-y-2">
          <h4 className="text-white text-sm font-medium">Specialties</h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="border-purple-500/30 text-purple-300 text-xs"
              >
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 text-cyan-400 mb-1">
              <Users className="w-4 h-4" />
              <span className="text-lg font-bold">{students.toLocaleString()}</span>
            </div>
            <p className="text-gray-400 text-xs">Students</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 text-purple-400 mb-1">
              <BookOpen className="w-4 h-4" />
              <span className="text-lg font-bold">{courses}</span>
            </div>
            <p className="text-gray-400 text-xs">Courses</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default InstructorCard;
