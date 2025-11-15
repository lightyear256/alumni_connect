import FuzzyText from './components/fuzzy';

export default function NotFound() {
  const hoverIntensity = 0.5;   
  const enableHover = true;     

  return (
    <div className="flex flex-col gap-y-5 items-center justify-center h-screen bg-black">
      <FuzzyText 
        baseIntensity={0.2} 
        hoverIntensity={hoverIntensity} 
        enableHover={enableHover}
      >
        404 
      </FuzzyText>

    </div>
  );
}
