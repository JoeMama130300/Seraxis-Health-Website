import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-10", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg 
        viewBox="0 0 160 160" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto shrink-0"
      >
        {/* Grey circles on the left */}
        <circle cx="50" cy="50" r="40" fill="#E5E7EB" />
        <circle cx="50" cy="110" r="40" fill="#E5E7EB" />
        
        {/* Blue circles on the right */}
        <circle cx="110" cy="50" r="40" fill="#4256D0" />
        <circle cx="110" cy="110" r="40" fill="#4256D0" />
        
        {/* Purple S shape */}
        <path 
          d="M130 45C130 35 120 30 110 30C90 30 80 45 80 60C80 90 130 90 130 120C130 135 120 150 100 150C85 150 75 140 75 130" 
          stroke="#98477D" 
          strokeWidth="22" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      
      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex flex-col leading-none">
            <span className="font-headline font-bold text-base md:text-lg tracking-tight text-[#4256D0]">Seraxis</span>
            <span className="font-headline font-bold text-base md:text-lg tracking-tight text-[#4256D0]">Health</span>
          </div>
          <span className="text-[7px] font-medium tracking-wider text-on-surface-variant mt-0.5 italic">
            Seeing Beyond the Moment.
          </span>
        </div>
      )}
    </div>
  );
}
