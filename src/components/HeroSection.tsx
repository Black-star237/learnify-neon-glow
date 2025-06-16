
import { Button } from '@/components/ui/button';
import { Play, Star, Users, BookOpen } from 'lucide-react';
import NetworkVisualization from './NetworkVisualization';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-dark-gradient overflow-hidden">
      {/* Background Network Visualization */}
      <NetworkVisualization />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Ins</span>
                <span className="text-gradient"> Attractive</span>
                <br />
                <span className="text-white">course</span>
                <span className="text-gradient"> 5-rewards</span>
              </h1>
              
              <p className="text-gray-300 text-lg max-w-md leading-relaxed">
                Unlock your potential with our innovative learning platform. 
                Earn rewards, connect with experts, and transform your skills 
                through interactive courses designed for success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white px-8 py-3 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg"
              >
                Explore Courses
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mx-auto mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">50K+</div>
                <div className="text-gray-400 text-sm">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mx-auto mb-2">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">1K+</div>
                <div className="text-gray-400 text-sm">Courses</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mx-auto mb-2">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">4.9</div>
                <div className="text-gray-400 text-sm">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Network Visualization Space */}
          <div className="relative h-96 lg:h-full">
            {/* This space is filled by the NetworkVisualization component */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
