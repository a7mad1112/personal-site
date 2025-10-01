export default function Container({ className = "", children }) {
  return (
    <div className={`max-w-[110rem] mx-auto px-6 ${className}`}>{children}</div>
  );
}
