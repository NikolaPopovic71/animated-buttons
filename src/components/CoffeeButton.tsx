import { AnimatedButton } from './AnimatedButton'
import { useButtonAnimation } from '../hooks/useButtonAnimation'
import styles from './CoffeeButton.module.css'

interface CoffeeButtonProps {
  onComplete?: () => void
}

export function CoffeeButton({ onComplete }: CoffeeButtonProps) {
  const { state, trigger, reset } = useButtonAnimation({ duration: 6500, onComplete })

  const icon = (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle
        cx="18" cy="22" r="10"
        fill="none" stroke="#a1887f" strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="62.8"
        strokeDashoffset="62.8"
        className={`${styles.progressRing} ${styles[state]}`}
        transform="rotate(-90 18 22)"
      />
      <path d="M10 16 L10 30 Q10 33 13 33 L23 33 Q26 33 26 30 L26 16 Z" fill="#4e342e"/>
      <clipPath id="cupClip">
        <path d="M10 16 L10 30 Q10 33 13 33 L23 33 Q26 33 26 30 L26 16 Z"/>
      </clipPath>
      <rect
        x="10" y="16" width="16" height="17"
        fill="#6d4c41"
        clipPath="url(#cupClip)"
        className={`${styles.fill} ${styles[state]}`}
        style={{ transformOrigin: '18px 33px' }}
      />
      <path d="M26 20 Q31 20 31 24 Q31 28 26 28" stroke="#5d4037" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <rect x="9" y="14" width="18" height="3" rx="1.5" fill="#5d4037"/>
      {state === 'running' && (
        <>
          <line x1="18" y1="6" x2="18" y2="13" stroke="#ff8f00" strokeWidth="1.5" strokeLinecap="round" className={styles.drip}/>
          <line x1="14" y1="7" x2="14" y2="13" stroke="#ff8f00" strokeWidth="1.2" strokeLinecap="round" className={`${styles.drip} ${styles.d1}`}/>
          <line x1="22" y1="7" x2="22" y2="13" stroke="#ff8f00" strokeWidth="1.2" strokeLinecap="round" className={`${styles.drip} ${styles.d2}`}/>
        </>
      )}
      {state === 'done' && (
        <>
          <path d="M14 6  Q16 3 14 0"  stroke="#ffccbc" strokeWidth="1.1" fill="none" strokeLinecap="round" className={styles.steam}/>
          <path d="M18 5  Q20 2 18 -1" stroke="#ffccbc" strokeWidth="1.1" fill="none" strokeLinecap="round" className={`${styles.steam} ${styles.s1}`}/>
          <path d="M22 6  Q24 3 22 0"  stroke="#ffccbc" strokeWidth="1.1" fill="none" strokeLinecap="round" className={`${styles.steam} ${styles.s2}`}/>
          <ellipse cx="13" cy="28" rx="2" ry="1.2" fill="#6d4c41" className={styles.bean}/>
          <ellipse cx="23" cy="29" rx="2" ry="1.2" fill="#6d4c41" className={`${styles.bean} ${styles.b1}`}/>
        </>
      )}
    </svg>
  )

  return (
    <AnimatedButton
      state={state}
      onClick={trigger}
      onReset={reset}
      idleText="Brew Coffee"
      runningText="Brewing…"
      doneText="☕ Ready to drink!"
      bgColor="#140a00"
      textColor="#f5e0c0"
      icon={icon}
    />
  )
}
