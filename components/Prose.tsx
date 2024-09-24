
export const Prose: React.FC<{children: React.ReactNode;}> = ({ children }) => {
  
  return (
    // <div className="max-w-none prose prose-a:text-pink-600 dark:prose-invert">
    <div className="max-w-none prose dark:prose-invert">
      {children}
    </div>
  );
};
