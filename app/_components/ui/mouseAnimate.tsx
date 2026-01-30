export function MouseAnimate() {
  return (
    <div className="hidden sm:block absolute bottom-8 left-1/2 right-1/2">
      <div className="z-10 w-6 h-10 rounded-2xl border-2 border-white/50 flex justify-center pt-2">
        <div className="w-1 h-3 rounded-2xl bg-white/50 animate-bounce"></div>
      </div>
    </div>
  );
}
