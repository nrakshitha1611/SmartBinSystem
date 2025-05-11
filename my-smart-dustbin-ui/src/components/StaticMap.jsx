// components/StaticMap.jsx
const StaticMap = ({ locations }) => {
  return (
    <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
      <div className="relative w-full h-full max-w-2xl mx-auto">
        {/* Simple Texas shape using CSS */}
        <div className="absolute inset-0 bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="relative w-full h-full">
            {/* This is a very simplified Texas shape */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path 
                d="M20,10 L80,10 L90,30 L80,50 L60,70 L40,80 L20,70 L10,50 L5,30 Z" 
                fill="#f0f0f0" 
                stroke="#ccc" 
                strokeWidth="1"
              />
            </svg>
            
            {locations.map((location) => {
              const positions = {
                Austin: { left: '30%', top: '50%' },
                Dallas: { left: '45%', top: '30%' },
                Houston: { left: '55%', top: '60%' },
                'San Antonio': { left: '35%', top: '65%' },
                'El Paso': { left: '10%', top: '50%' }
              };
              
              return (
                <div 
                  key={location.city}
                  className={`absolute w-3 h-3 rounded-full ${
                    location.status === "Active" ? "bg-green-500" : "bg-gray-400"
                  } border border-white transform -translate-x-1/2 -translate-y-1/2`}
                  style={positions[location.city]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticMap;