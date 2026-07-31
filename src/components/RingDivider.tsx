import RingMotif from "./RingMotif";

export default function RingDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center py-6 ${className}`}>
      <RingMotif size={96} rings={5} chaos={0.7} />
    </div>
  );
}
