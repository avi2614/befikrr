import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Heart, User, Search, Mic } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Try-On', path: '/try-on' },
    { name: 'Design', path: '/design' },
    { name: 'Track', path: '/track' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleVoice = () => {
    setIsVoiceActive(!isVoiceActive);
    // Voice recognition implementation would go here
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-cream-100/95 backdrop-blur-md border-b border-primary-500/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl lg:text-3xl font-bold text-primary-500 font-display group-hover:text-primary-600 transition-colors">
              बेfikrr
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary-500 focus-visible ${
                  location.pathname === item.path
                    ? 'text-primary-500 border-b-2 border-primary-500 pb-1'
                    : 'text-gray-700 hover:border-b-2 hover:border-primary-300 pb-1'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search and Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search styles..."
                className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200"
              />
            </div>
            <button
              onClick={toggleVoice}
              className={`p-2 rounded-full transition-all duration-300 focus-visible ${
                isVoiceActive 
                  ? 'bg-primary-500 text-white shadow-lg' 
                  : 'text-gray-600 hover:text-primary-500 hover:bg-gray-100'
              }`}
              aria-label="Voice search"
            >
              <Mic className="h-5 w-5" />
            </button>
            <Link to="/wishlist" className="text-gray-600 hover:text-primary-500 transition-colors p-2 rounded-full hover:bg-gray-100 focus-visible">
              <Heart className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-primary-500 transition-colors p-2 rounded-full hover:bg-gray-100 focus-visible relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                3
              </span>
            </Link>
            <Link to="/account" className="text-gray-600 hover:text-primary-500 transition-colors p-2 rounded-full hover:bg-gray-100 focus-visible">
              <User className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary-500 transition-colors p-2 rounded-full hover:bg-gray-100 focus-visible"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="bg-white border-t border-gray-200 shadow-lg">
            <div className="py-4 space-y-2">
              {/* Mobile Search */}
              <div className="px-4 pb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search styles..."
                    className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  />
                </div>
              </div>

              {/* Navigation Items */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-50 focus-visible ${
                    location.pathname === item.path
                      ? 'text-primary-500 bg-primary-50 border-r-4 border-primary-500'
                      : 'text-gray-700 hover:text-primary-500'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Actions */}
              <div className="flex items-center justify-around pt-4 border-t border-gray-200 px-4">
                <button
                  onClick={toggleVoice}
                  className={`p-3 rounded-full transition-all duration-300 focus-visible ${
                    isVoiceActive 
                      ? 'bg-primary-500 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-primary-500 hover:bg-gray-100'
                  }`}
                  aria-label="Voice search"
                >
                  <Mic className="h-5 w-5" />
                </button>
                <Link to="/wishlist" className="text-gray-600 hover:text-primary-500 transition-colors p-3 rounded-full hover:bg-gray-100 focus-visible">
                  <Heart className="h-5 w-5" />
                </Link>
                <Link to="/cart" className="text-gray-600 hover:text-primary-500 transition-colors p-3 rounded-full hover:bg-gray-100 focus-visible relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    3
                  </span>
                </Link>
                <Link to="/account" className="text-gray-600 hover:text-primary-500 transition-colors p-3 rounded-full hover:bg-gray-100 focus-visible">
                  <User className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;