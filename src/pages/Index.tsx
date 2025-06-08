
import { ArrowRight, Shield, Users, Music, Gamepad2, Sparkles, Zap, Gift, Crown, Image, Mic, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Security",
      description: "Protect your server with Antinuke and emergency tools."
    },
    {
      icon: Zap,
      title: "Automoderation",
      description: "Automatically filter spam, links, and unwanted content."
    },
    {
      icon: Users,
      title: "Moderation",
      description: "Kick, ban, mute, warn, and more with ease."
    },
    {
      icon: Music,
      title: "Music System",
      description: "High-quality music playback with advanced controls."
    },
    {
      icon: Sparkles,
      title: "Welcoming",
      description: "Personalized welcome messages and join/leave logs."
    },
    {
      icon: Bot,
      title: "Utilities",
      description: "Useful tools to streamline server management."
    },
    {
      icon: Gift,
      title: "Giveaway",
      description: "Create and manage giveaways easily."
    },
    {
      icon: Gamepad2,
      title: "Games",
      description: "Interactive commands and games to entertain your members."
    },
    {
      icon: Crown,
      title: "Custom Roles",
      description: "Let users assign roles to themselves."
    },
    {
      icon: Sparkles,
      title: "Fun",
      description: "Meme commands, image edits, and lighthearted tools."
    },
    {
      icon: Mic,
      title: "Voice Tools",
      description: "Auto voice channels, join-to-create, and more."
    },
    {
      icon: Image,
      title: "AI Image Generator",
      description: "Generate AI images right from Discord."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-purple-500/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Olympus
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                <a href="https://discord.com/oauth2/authorize?client_id=1380980741382602853" target="_blank" rel="noopener noreferrer">
                  Invite Olympus
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-block p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full mb-6 backdrop-blur-sm border border-purple-500/30">
              <Bot className="w-16 h-16 text-purple-400" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Olympus
            </h1>
            <p className="text-2xl md:text-3xl text-purple-300 mb-6 font-medium">
              A powerful Discord bot to elevate your community
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Transform your Discord server with Olympus - the ultimate bot combining advanced security, 
              smart moderation, entertainment features, and powerful tools to create the perfect community experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                <a href="https://discord.com/oauth2/authorize?client_id=1380980741382602853" target="_blank" rel="noopener noreferrer">
                  Invite Olympus
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-600 hover:text-white text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105">
                <a href="https://discord.gg/t6K8QZ3Ebw" target="_blank" rel="noopener noreferrer">
                  Join Support Server
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to manage and enhance your Discord community in one comprehensive bot
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/20 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
                <CardContent className="p-6 text-center">
                  <div className="inline-block p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full mb-4 backdrop-blur-sm">
                    <feature.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-r from-purple-900/10 to-blue-900/10">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              About Olympus
            </h2>
            <div className="bg-gradient-to-br from-slate-800/30 to-purple-900/20 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 md:p-12">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Olympus is a powerful, easy-to-use Discord bot designed to enhance your server experience with an extensive suite of features. 
                Built with <span className="text-purple-400 font-semibold">advanced security</span>, <span className="text-blue-400 font-semibold">automoderation</span>, 
                <span className="text-purple-400 font-semibold"> moderation</span>, <span className="text-blue-400 font-semibold">music systems</span>, 
                <span className="text-purple-400 font-semibold"> welcoming features</span>, and more at its core, Olympus ensures your community stays safe and well-managed, 
                giving you <span className="text-gradient-to-r from-purple-400 to-blue-400 font-semibold">peace of mind and control</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to elevate your Discord server?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of communities already using Olympus to create amazing Discord experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-10 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                <a href="https://discord.com/oauth2/authorize?client_id=1380980741382602853" target="_blank" rel="noopener noreferrer">
                  Invite Olympus Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-600 hover:text-white text-lg px-10 py-4 transition-all duration-300">
                <a href="https://discord.gg/t6K8QZ3Ebw" target="_blank" rel="noopener noreferrer">
                  Get Support
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-sm border-t border-purple-500/20 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Olympus
              </span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="https://discord.gg/t6K8QZ3Ebw" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Support Server</a>
              <a href="#" className="hover:text-purple-400 transition-colors">GitHub</a>
            </div>
          </div>
          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center">
            <p className="text-gray-500">&copy; 2024 Olympus Discord Bot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
