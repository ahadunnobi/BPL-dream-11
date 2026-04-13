import React from 'react';
import bannerImage from '../../../assets/banner-main.png';
import bgShadow from '../../../assets/bg-shadow.png';

const Banner = ({ handleAddCoin }) => {
  return (
    <div className="container mx-auto px-6 mt-8">
      <div 
        className="relative overflow-hidden rounded-[24px] bg-[#030712] border border-white/5 py-16 md:py-24"
        style={{
          backgroundImage: `url(${bgShadow}), radial-gradient(circle at top right, rgba(231, 254, 41, 0.05), transparent)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E7FE29]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto px-6">
          {/* Main Illustration */}
          <div className="mb-10 animate-float">
            <img 
              src={bannerImage} 
              alt="Cricket Equipment" 
              className="w-48 h-auto drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            />
          </div>

          {/* Text Content */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight font-heading">
            Assemble Your Ultimate <br/>
            <span className="text-[#E7FE29] drop-shadow-[0_0_10px_rgba(231,254,41,0.3)]">Dream 11 Cricket Team</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl font-medium">
            Beyond Boundaries Beyond Limits. Join the most advanced fantasy cricket league and dominate the pitch.
          </p>

          {/* CTA Button */}
          <button 
            onClick={handleAddCoin}
            className="btn-premium group relative overflow-hidden"
          >
            <span className="relative z-10">Claim Free Credit</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
