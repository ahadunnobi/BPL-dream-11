import React from 'react';
import footerLogo from '../assets/logo-footer.png';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/5 bg-[#030712] pt-20 pb-10">
      <div className="container mx-auto px-6">
        {/* Footer Top */}
        <div className="flex flex-col items-center mb-16">
          <img src={footerLogo} alt="Footer Logo" className="w-40 h-auto mb-12 animate-float" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
            {/* About Us */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">About Us</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                We are a passionate team dedicated to providing the best fantasy cricket experience for fans around the world. Track your stats, build your team, and win big!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#E7FE29] transition-all">Home</a></li>
                <li><a href="#" className="hover:text-[#E7FE29] transition-all">Services</a></li>
                <li><a href="#" className="hover:text-[#E7FE29] transition-all">About</a></li>
                <li><a href="#" className="hover:text-[#E7FE29] transition-all">Contact</a></li>
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Subscribe</h3>
              <p className="text-gray-400 text-sm mb-6">Subscribe to our newsletter for the latest updates.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full text-sm text-white focus:outline-none focus:border-[#E7FE29]"
                />
                <button className="btn-premium whitespace-nowrap !py-3">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-10 text-center">
          <p className="text-gray-500 text-sm">
            ©2024 Your Company All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
