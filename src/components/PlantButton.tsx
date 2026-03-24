import { AnimatedButton } from "./AnimatedButton";
import { useButtonAnimation } from "../hooks/useButtonAnimation";
import styles from "./PlantButton.module.css";

interface PlantButtonProps {
  onComplete?: () => void;
}

export function PlantButton({ onComplete }: PlantButtonProps) {
  const { state, trigger, reset } = useButtonAnimation({
    duration: 6000,
    onComplete,
  });

  const icon = (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
    >
      <rect x="8" y="28" width="20" height="5" rx="2" fill="#5d4037" />
      <line
        x1="4"
        y1="28"
        x2="32"
        y2="28"
        stroke="#795548"
        strokeWidth="1.5"
        strokeLinecap="round"
        className={`${styles.soilLine} ${styles[state]}`}
      />
      <rect
        x="17"
        y="10"
        width="2.5"
        height="18"
        rx="1"
        fill="#66bb6a"
        className={`${styles.sprout} ${styles[state]}`}
      />
      <ellipse
        cx="12"
        cy="16"
        rx="5"
        ry="3.5"
        fill="#4caf50"
        transform="rotate(-20,12,16)"
        className={`${styles.leafL} ${styles[state]}`}
      />
      <ellipse
        cx="24"
        cy="20"
        rx="5"
        ry="3.5"
        fill="#81c784"
        transform="rotate(15,24,20)"
        className={`${styles.leafR} ${styles[state]}`}
      />
      {state === "running" && (
        <>
          <circle
            cx="10"
            cy="8"
            r="1.5"
            fill="#42a5f5"
            className={styles.drop}
          />
          <circle
            cx="18"
            cy="5"
            r="1"
            fill="#42a5f5"
            className={`${styles.drop} ${styles.d1}`}
          />
          <circle
            cx="26"
            cy="7"
            r="1.2"
            fill="#42a5f5"
            className={`${styles.drop} ${styles.d2}`}
          />
        </>
      )}
    </svg>
  );

  return (
    <AnimatedButton
      state={state}
      onClick={trigger}
      onReset={reset}
      idleText="Grow a Plant"
      runningText="Watering…"
      doneText="🌿 Fully grown!"
      bgColor="#0d1f0f"
      textColor="#d4f7d4"
      icon={icon}
    />
  );
}
