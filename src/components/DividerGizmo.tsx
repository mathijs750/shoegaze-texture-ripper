const DividerGizmo = ({ onMouseDown }: { onMouseDown: any }): any => {
  return (
    <div
      onMouseDown={onMouseDown}
      className="w-2 hover:w-3 bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 dark:hover:bg-blue-600 
                 cursor-col-resize flex-none transition-all duration-100 z-10 flex items-center justify-center"
    >
      <span className="text-gray-400 dark:text-gray-300 select-none font-bold leading-none text-s">⋮</span>
    </div>
  );
};

export default DividerGizmo;
