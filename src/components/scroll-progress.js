import { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  const handleProgress = () => {
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const viewportHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setProgress(Math.round((scrolled / viewportHeight) * 100));
  };

  useEffect(() => {
    document.addEventListener("scroll", handleProgress);

    return () => document.removeEventListener("scroll", handleProgress);
  }, []);

  return (
    <div className="relative pl-1 pr-0.5">
      <div className="w-6 h-6 absolute rounded-full bg-white -top-1 -right-0.5"></div>
      <div
        style={{
          background: `radial-gradient(closest-side, white 70%, transparent 80% 100%), conic-gradient(#4bc5fa ${progress}%, white 0)`,
        }}
        className={`relative w-4 h-4 rounded-full`}
      >
        <progress
          value={progress}
          min="0"
          max="100"
          className="invisible h-0 w-0"
        >
          75%
        </progress>
      </div>
    </div>
  );
};

export default ScrollProgress;
