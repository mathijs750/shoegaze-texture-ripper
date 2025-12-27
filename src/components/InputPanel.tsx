const InputPanel = () => {
  return (
    <div className="p-4 pt-0 shadow-sm h-full bg-gray-50 dark:bg-gray-800 flex flex-col">
      <div className="flex-1 bg-gray-200 dark:bg-gray-900 rounded relative overflow-hidden">
        <canvas></canvas>
      </div>
    </div>
  );
};

export default InputPanel;
