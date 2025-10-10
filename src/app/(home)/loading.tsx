export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="w-10 h-10 border-4 border-secondary border-t-primary rounded-full animate-spin" />
      <p className="mt-4 text-sm font-medium tracking-wide">Loading content...</p>
    </div>
  );
}