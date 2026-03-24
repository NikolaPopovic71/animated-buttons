import { ReactNode } from "react";
import { ButtonState } from "../hooks/useButtonAnimation";
import styles from "./AnimatedButton.module.css";

interface AnimatedButtonProps {
  state: ButtonState;
  onClick: () => void;
  onReset: () => void;
  idleText: string;
  runningText: string;
  doneText: string;
  bgColor: string;
  textColor: string;
  icon: ReactNode;
  className?: string;
}

export function AnimatedButton({
  state,
  onClick,
  onReset,
  idleText,
  runningText,
  doneText,
  bgColor,
  textColor,
  icon,
  className = "",
}: AnimatedButtonProps) {
  const label =
    state === "idle" ? idleText : state === "running" ? runningText : doneText;

  return (
    <button
      type="button"
      className={`${styles.btn} ${styles[state]} ${className}`}
      style={{ background: bgColor, color: textColor }}
      onClick={state === "done" ? onReset : onClick}
      disabled={state === "running"}
      aria-label={label}
      aria-live="polite"
    >
      <span className={styles.iconWrap}>{icon}</span>
      <span
        className={`${styles.label} ${state !== "idle" ? styles.labelShift : ""}`}
      >
        {label}
      </span>
      {state === "done" && (
        <span className={styles.resetHint} aria-hidden="true">
          click to reset
        </span>
      )}
    </button>
  );
}
