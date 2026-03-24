import { AnimatedButton } from "./AnimatedButton";
import { useButtonAnimation } from "../hooks/useButtonAnimation";
import styles from "./RocketButton.module.css";

interface RocketButtonProps {
  onComplete?: () => void;
}

export function RocketButton({ onComplete }: RocketButtonProps) {
  const { state, trigger, reset } = useButtonAnimation({
    duration: 5000,
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
      <g className={`${styles.rocketBody} ${styles[state]}`}>
        <ellipse cx="18" cy="15" rx="5" ry="9" fill="#4fc3f7" />
        <path d="M13 15 Q18 4 23 15 Z" fill="#81d4fa" />
        <rect x="11" y="18" width="14" height="5" rx="2" fill="#29b6f6" />
        <circle cx="18" cy="15" r="2.5" fill="#0d1b2a" />
        <circle cx="18" cy="15" r="1.2" fill="#4fc3f7" />
        <path d="M11 20 Q8 22 9 25 L13 22 Z" fill="#ef5350" />
        <path d="M25 20 Q28 22 27 25 L23 22 Z" fill="#ef5350" />
      </g>
      <g
        className={`${styles.flame} ${styles[state]}`}
        transform="translate(14,23)"
      >
        <ellipse cx="4" cy="3" rx="4" ry="5" fill="#ff9800" opacity="0.9" />
        <ellipse cx="4" cy="4" rx="2" ry="3" fill="#ffeb3b" />
      </g>
      {(state === "running" || state === "done") && (
        <>
          <circle
            cx="6"
            cy="8"
            r="1.2"
            fill="white"
            opacity="0.6"
            className={styles.starDot}
          />
          <circle
            cx="30"
            cy="14"
            r="0.9"
            fill="white"
            opacity="0.5"
            className={`${styles.starDot} ${styles.d1}`}
          />
          <circle
            cx="22"
            cy="4"
            r="1"
            fill="white"
            opacity="0.7"
            className={`${styles.starDot} ${styles.d2}`}
          />
          <circle
            cx="4"
            cy="22"
            r="0.8"
            fill="white"
            opacity="0.4"
            className={`${styles.starDot} ${styles.d3}`}
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
      idleText="Launch Rocket"
      runningText="Launching…"
      doneText="🚀 Orbit reached!"
      bgColor="#0d1b2a"
      textColor="#e0f0ff"
      icon={icon}
      className={styles.root}
    />
  );
}
