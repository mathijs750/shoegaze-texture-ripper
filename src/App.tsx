import { useEffect, useRef, useState } from "react";
import DividerGizmo from "./components/DividerGizmo";
import InputPanel from "./components/InputPanel";
import OutputPanel from "./components/OutputPanel";

function App() {
  const [splitRatio, setSplitRatio] = useState(0.5);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { left, width } = containerRef.current.getBoundingClientRect();

      // Calculate new ratio (Mouse X position relative to container / Total Width)
      let newRatio = (e.clientX - left) / width;

      if (newRatio < 0.2) newRatio = 0.2;
      if (newRatio > 0.8) newRatio = 0.8;

      setSplitRatio(newRatio);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = "auto";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const startDragging = () => {
    setIsDragging(true);
    document.body.style.userSelect = "none";
  };
  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-800">
      <div className="flex-none">
        <p>Toolbar</p>
      </div>

      <div ref={containerRef} className="flex flex-1 w-full overflow-hidden relative">
        <div className="h-full overflow-auto" style={{ width: `${splitRatio * 100}%` }}>
          <div className={isDragging ? "pointer-events-none h-full" : "h-full"}>
            <InputPanel />
          </div>
        </div>

        <DividerGizmo onMouseDown={startDragging} />

        <div className="h-full overflow-auto flex-1">
          <div className={isDragging ? "pointer-events-none h-full" : "h-full"}>
            <OutputPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
