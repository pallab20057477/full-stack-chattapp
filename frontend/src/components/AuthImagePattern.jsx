const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-neutral-900 text-white px-16 py-20">
      <div className="max-w-md w-full text-center">
        {/* Grid Animation */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-xl transition duration-700 ease-in-out ${
                i % 2 === 0
                  ? "bg-indigo-800/30 animate-pulse"
                  : "bg-indigo-900/50"
              }`}
            />
          ))}
        </div>

        {/* Title */}
        <h2 className="text-3xl font-semibold mb-3 tracking-tight">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-base text-gray-400 max-w-sm mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
