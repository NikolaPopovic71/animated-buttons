import { AnimatedButton } from './AnimatedButton'
import { useButtonAnimation } from '../hooks/useButtonAnimation'
import styles from './BookButton.module.css'

interface BookButtonProps {
  onComplete?: () => void
}

export function BookButton({ onComplete }: BookButtonProps) {
  const { state, trigger, reset } = useButtonAnimation({ duration: 5800, onComplete })

  const icon = (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">

      {/* Package / envelope */}
      <g className={`${styles.pkg} ${styles[state]}`}>
        <rect x="4" y="14" width="20" height="16" rx="2" fill="#7c6b52"/>
        <rect x="4" y="14" width="20" height="16" rx="2" stroke="#5a4e3a" strokeWidth="0.8"/>
        {/* ribbon cross */}
        <line x1="14" y1="14" x2="14" y2="30" stroke="#e8d5b0" strokeWidth="1.2" opacity="0.5"/>
        <line x1="4"  y1="22" x2="24" y2="22" stroke="#e8d5b0" strokeWidth="1.2" opacity="0.5"/>
        {/* bow */}
        <path d="M11 14 Q14 11 17 14" stroke="#e8d5b0" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="1.2" fill="#e8d5b0"/>
      </g>

      {/* Book body */}
      <g className={`${styles.book} ${styles[state]}`} style={{ transformOrigin: '22px 22px' }}>
        {/* Spine */}
        <rect x="16" y="10" width="4" height="20" rx="1" fill="#1a3a5c"/>
        {/* Front cover */}
        <rect x="20" y="10" width="12" height="20" rx="1" fill="#2563a8"/>
        {/* Pages edge */}
        <rect x="12" y="11" width="4.5" height="18" rx="0.5" fill="#f5f0e8"/>
        {/* Title lines */}
        <rect x="22" y="15" width="7" height="1.2" rx="0.5" fill="white" opacity="0.5"/>
        <rect x="22" y="18" width="5" height="1"   rx="0.5" fill="white" opacity="0.35"/>
        <rect x="22" y="21" width="6" height="1"   rx="0.5" fill="white" opacity="0.35"/>
        {/* Pages flutter — only while running */}
        {state === 'running' && (
          <>
            <line x1="12" y1="15" x2="16.5" y2="15" stroke="#ccc" strokeWidth="0.5" className={styles.pageLine}/>
            <line x1="12" y1="19" x2="16.5" y2="19" stroke="#ccc" strokeWidth="0.5" className={`${styles.pageLine} ${styles.pl1}`}/>
            <line x1="12" y1="23" x2="16.5" y2="23" stroke="#ccc" strokeWidth="0.5" className={`${styles.pageLine} ${styles.pl2}`}/>
          </>
        )}
      </g>

      {/* Sparkles on done */}
      {state === 'done' && (
        <>
          <circle cx="8"  cy="10" r="1.5" fill="#ffd56b" className={styles.sparkle}/>
          <circle cx="31" cy="9"  r="1"   fill="#ffd56b" className={`${styles.sparkle} ${styles.sp1}`}/>
          <circle cx="30" cy="28" r="1.2" fill="#ffd56b" className={`${styles.sparkle} ${styles.sp2}`}/>
        </>
      )}
    </svg>
  )

  return (
    <AnimatedButton
      state={state}
      onClick={trigger}
      onReset={reset}
      idleText="Order Book"
      runningText="Shipping…"
      doneText="📖 Book delivered!"
      bgColor="#0d1520"
      textColor="#d6e8ff"
      icon={icon}
    />
  )
}
