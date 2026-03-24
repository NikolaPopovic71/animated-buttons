import { AnimatedButton } from './AnimatedButton'
import { useButtonAnimation } from '../hooks/useButtonAnimation'
import styles from './PizzaButton.module.css'

interface PizzaButtonProps {
  onComplete?: () => void
}

export function PizzaButton({ onComplete }: PizzaButtonProps) {
  const { state, trigger, reset } = useButtonAnimation({ duration: 5500, onComplete })

  const icon = (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <g className={`${styles.scooter} ${styles[state]}`}>
        <rect x="4" y="22" width="22" height="7" rx="3" fill="#e65100"/>
        <circle cx="8"  cy="30" r="3" fill="#1a1a1a" className={`${styles.wheel} ${styles[state]}`} style={{transformOrigin:'8px 30px'}}/>
        <circle cx="24" cy="30" r="3" fill="#1a1a1a" className={`${styles.wheel} ${styles[state]}`} style={{transformOrigin:'24px 30px'}}/>
        <circle cx="8"  cy="30" r="1.2" fill="#444"/>
        <circle cx="24" cy="30" r="1.2" fill="#444"/>
        <rect x="14" y="15" width="12" height="8" rx="1.5" fill="#bf360c"/>
        <rect x="15" y="16" width="10" height="6" rx="1"   fill="#ff8f00"/>
        <g
          className={`${styles.boxLid} ${styles[state]}`}
          style={{ transformOrigin: '15px 22px' }}
        >
          <rect x="14" y="11" width="12" height="5" rx="1.5" fill="#e65100"/>
          <line x1="16" y1="13.5" x2="24" y2="13.5" stroke="white" strokeWidth="0.7" opacity="0.4"/>
        </g>
      </g>

      <g className={`${styles.cheesePop} ${styles[state]}`} style={{ transformOrigin: '28px 13px' }}>
        <circle cx="28" cy="13" r="4.5" fill="#ffcc02"/>
        <path d="M26 13 Q27.5 11 28 13 Q28.5 11 30 13" stroke="#e65100" strokeWidth="0.8" fill="none"/>
      </g>

      <path d="M28 9  Q30 6 28 4"  stroke="#ff9800" strokeWidth="1.2" fill="none" strokeLinecap="round" className={`${styles.steam} ${styles[state]}`}/>
      <path d="M31 10 Q33 7 31 5"  stroke="#ff9800" strokeWidth="1.2" fill="none" strokeLinecap="round" className={`${styles.steam} ${styles[state]} ${styles.sd1}`}/>
    </svg>
  )

  return (
    <AnimatedButton
      state={state}
      onClick={trigger}
      onReset={reset}
      idleText="Order Pizza"
      runningText="On the way…"
      doneText="🍕 Delivered!"
      bgColor="#1f0d00"
      textColor="#ffe8cc"
      icon={icon}
    />
  )
}
