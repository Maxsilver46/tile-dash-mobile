import { useRef, useState } from "react";
import { Dimensions } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";

interface ConfettiEffectProps {
  isActive: boolean;
  onStop?: () => void;
}

const ConfettiEffect = ({ isActive }: ConfettiEffectProps) => {
  const [shouldRender, setShouldRender] = useState(true);
  const shouldContinue = useRef(true);
  const { width } = Dimensions.get("window");

  if (!isActive || !shouldRender) return null;

  const handleAnimationEnd = () => {
    if (shouldContinue.current && isActive) {
      setTimeout(() => {
        setShouldRender(false);
        setTimeout(() => setShouldRender(true), 100);
      }, 500);
    }
  };

  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <ConfettiCannon
          key={`confetti-${index}`}
          count={25}
          origin={{ x: (width / 6) * (index + 1), y: -50 }}
          autoStart={true}
          fadeOut={true}
          colors={[
            "#FFD700",
            "#FF6B6B",
            "#4ECDC4",
            "#45B7D1",
            "#96CEB4",
            "#FFEEAD",
          ]}
          explosionSpeed={350}
          fallSpeed={3000}
          onAnimationEnd={handleAnimationEnd}
        />
      ))}
    </>
  );
};

export default ConfettiEffect;
