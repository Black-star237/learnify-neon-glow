
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Star, Target, Zap, Crown, Gift } from 'lucide-react';

const RewardsSection = () => {
  const rewards = [
    {
      icon: Star,
      title: "Course Completion",
      description: "Earn badges for completing courses and demonstrating mastery",
      points: 100,
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: Target,
      title: "Skill Mastery",
      description: "Unlock achievements by mastering specific skill categories",
      points: 250,
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Zap,
      title: "Learning Streak",
      description: "Maintain daily learning habits to unlock streak rewards",
      points: 50,
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Crown,
      title: "Leaderboard Champion",
      description: "Compete with peers and climb the monthly leaderboards",
      points: 500,
      color: "from-amber-400 to-yellow-500",
      bgColor: "bg-amber-500/10"
    },
    {
      icon: Gift,
      title: "Community Contributor",
      description: "Help fellow learners and earn community recognition",
      points: 150,
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Trophy,
      title: "Course Creator",
      description: "Share your knowledge by creating courses for the community",
      points: 1000,
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-500/10"
    }
  ];

  const levels = [
    { name: "Novice", minPoints: 0, color: "text-gray-400", badge: "🥉" },
    { name: "Learner", minPoints: 500, color: "text-blue-400", badge: "🥈" },
    { name: "Expert", minPoints: 2000, color: "text-purple-400", badge: "🥇" },
    { name: "Master", minPoints: 5000, color: "text-yellow-400", badge: "👑" },
    { name: "Legend", minPoints: 10000, color: "text-gradient", badge: "⭐" }
  ];

  return (
    <section id="rewards" className="py-20 bg-dark-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Earn <span className="text-gradient">Rewards</span> & Recognition
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Level up your learning journey with our comprehensive rewards system. 
            Earn points, unlock badges, and compete with learners worldwide.
          </p>
        </div>

        {/* Progression System */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Progression Levels</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {levels.map((level, index) => (
              <Card key={index} className="bg-card-gradient backdrop-blur-sm border-glow p-6 text-center min-w-[150px]">
                <div className="text-3xl mb-2">{level.badge}</div>
                <h4 className={`text-lg font-bold ${level.color} mb-1`}>{level.name}</h4>
                <p className="text-gray-400 text-sm">{level.minPoints.toLocaleString()}+ pts</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Rewards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rewards.map((reward, index) => {
            const IconComponent = reward.icon;
            return (
              <Card key={index} className="bg-card-gradient backdrop-blur-sm border-glow hover:border-glow-purple transition-all duration-300 group">
                <div className="p-6 space-y-4">
                  <div className={`w-16 h-16 ${reward.bgColor} rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 bg-gradient-to-r ${reward.color} bg-clip-text text-transparent`} />
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {reward.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {reward.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-center pt-4 border-t border-gray-700">
                    <Badge className={`bg-gradient-to-r ${reward.color} text-white px-4 py-1`}>
                      +{reward.points} points
                    </Badge>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Current User Progress (Demo) */}
        <div className="mt-16">
          <Card className="bg-card-gradient backdrop-blur-sm border-glow-purple p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Your Progress</h3>
              <p className="text-gray-400">Keep learning to unlock more rewards!</p>
            </div>
            
            <div className="max-w-md mx-auto space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white font-medium">Current Level: Expert</span>
                <span className="text-purple-400 font-bold">2,450 / 5,000 pts</span>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: '49%' }}
                />
              </div>
              
              <div className="text-center">
                <span className="text-gray-400 text-sm">2,550 points to Master level</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
