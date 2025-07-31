import React from 'react';
import { ArrowRight, Sparkles, Zap, Camera, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Oversized Crew Neck',
      price: '₹1,299',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Oversized'
    },
    {
      id: 2,
      name: 'Classic Polo',
      price: '₹999',
      image: 'https://images.pexels.com/photos/8532612/pexels-photo-8532612.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Polos'
    },
    {
      id: 3,
      name: 'Street Hoodie',
      price: '₹1,799',
      image: 'https://images.pexels.com/photos/8532620/pexels-photo-8532620.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Hoodies'
    }
  ];

  const features = [
    {
      icon: Camera,
      title: 'Virtual Try-On',
      description: 'See how clothes look on you with AR technology'
    },
    {
      icon: Palette,
      title: 'Design Studio',
      description: 'Create custom designs with our 3D preview tool'
    },
    {
      icon: Sparkles,
      title: 'AI Stylist',
      description: 'Get personalized style recommendations'
    },
    {
      icon: Zap,
      title: 'Voice Shopping',
      description: 'Shop hands-free with voice commands'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cream-100 via-cream-50 to-cream-200 pt-20 lg:pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-16 h-16 lg:w-20 lg:h-20 bg-primary-500 rounded-full animate-bounce-gentle"></div>
          <div className="absolute top-40 right-20 w-12 h-12 lg:w-16 lg:h-16 bg-primary-500 rounded-full animate-bounce-gentle delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-10 h-10 lg:w-12 lg:h-12 bg-primary-500 rounded-full animate-bounce-gentle delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="heading-responsive font-bold text-primary-500 leading-tight font-display">
                  बेfikrr
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700">
                  Wear Your Vibe
                </p>
                <p className="text-base sm:text-lg text-gray-600 max-w-md text-balance">
                  The future of fashion meets technology. Experience AI-powered styling, 
                  virtual try-ons, and custom designs that define your unique style.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/try-on"
                  className="btn-primary group flex items-center justify-center space-x-2"
                >
                  <Camera className="h-5 w-5" />
                  <span>Try Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/design"
                  className="btn-secondary group flex items-center justify-center space-x-2"
                >
                  <Palette className="h-5 w-5" />
                  <span>Customize</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Fashion Model"
                  className="w-full h-64 sm:h-80 lg:h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Limited Edition
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-500 mb-4 font-display">
              Fashion Meets Technology
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Experience the future of shopping with our cutting-edge features
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-6 rounded-2xl hover:bg-cream-50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary-500 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary-500 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-balance">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 lg:py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-500 mb-4 font-display">
              Trending Drops
            </h2>
            <p className="text-base sm:text-lg text-gray-600 text-balance">
              Discover the latest styles that define your vibe
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group card overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <Link
                      to="/try-on"
                      className="bg-white text-primary-500 px-6 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      Try On
                    </Link>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-primary-500 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 lg:mt-12">
            <Link
              to="/shop"
              className="btn-primary group inline-flex items-center space-x-2"
            >
              <span>Shop All Styles</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 font-display">
            Ready to Express Your Style?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-primary-100 text-balance">
            Join thousands who've already discovered their perfect fit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/try-on"
              className="bg-white text-primary-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-cream-50 transition-colors"
            >
              Start Virtual Try-On
            </Link>
            <Link
              to="/design"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-primary-500 transition-colors"
            >
              Create Custom Design
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;