import { AnimatedButton } from './AnimatedButton'
import { useButtonAnimation } from '../hooks/useButtonAnimation'
import styles from './ChristmasTreeButton.module.css'

interface ChristmasTreeButtonProps {
  onComplete?: () => void
}

export function ChristmasTreeButton({ onComplete }: ChristmasTreeButtonProps) {
  const { state, trigger, reset } = useButtonAnimation({ duration: 7000, onComplete })

  const icon = (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      {/* Star */}
      <g className={`${styles.star} ${styles[state]}`} style={{ transformOrigin: '18px 4px' }}>
        <polygon points="18,1 19.5,5.5 24,5.5 20.5,8 22,12.5 18,9.5 14,12.5 15.5,8 12,5.5 16.5,5.5"
          fill="#ffd56b"/>
      </g>

      {/* Ribbon */}
      <path
        d="M6 32 Q10 28 18 26 Q26 28 30 32"
        stroke="#FBCF6F" strokeWidth="1.2" fill="none" strokeLinecap="round"
        className={`${styles.ribbon} ${styles[state]}`}
      />

      {/* Tree layers */}
      <g className={`${styles.tree} ${styles[state]}`}>
        {/* Top layer */}
        <polygon points="18,8 12,17 24,17" fill="#14c041"/>
        {/* Mid layer */}
        <polygon points="18,13 10,23 26,23" fill="#0f9e35"/>
        {/* Bottom layer */}
        <polygon points="18,18 8,30 28,30" fill="#0a7a28"/>

        {/* Decorations — only visible in done state */}
        <circle cx="15" cy="20" r="1.2" fill="#ffd56b" className={`${styles.ball} ${styles[state]}`}/>
        <circle cx="21" cy="22" r="1.2" fill="#ef5350" className={`${styles.ball} ${styles[state]} ${styles.bd1}`}/>
        <circle cx="14" cy="26" r="1.2" fill="#8e4bb2" className={`${styles.ball} ${styles[state]} ${styles.bd2}`}/>
        <circle cx="22" cy="26" r="1"   fill="#ffd56b" className={`${styles.ball} ${styles[state]} ${styles.bd3}`}/>
        <circle cx="18" cy="28" r="1.2" fill="#ef5350" className={`${styles.ball} ${styles[state]} ${styles.bd4}`}/>
      </g>

      {/* Trunk */}
      <rect x="16" y="30" width="4" height="4" rx="1" fill="#795548"/>

      {/* Legs */}
      <g className={`${styles.legs} ${styles[state]}`}>
        <rect x="15" y="33" width="2.5" height="3" rx="1" fill="#977842"/>
        <rect x="18.5" y="33" width="2.5" height="3" rx="1" fill="#977842"/>
      </g>
    </svg>
  )

  return (
    <AnimatedButton
      state={state}
      onClick={trigger}
      onReset={reset}
      idleText="Order Christmas Tree"
      runningText="Delivering…"
      doneText="🎄 Tree is ready!"
      bgColor="#0a1a31"
      textColor="#e8f4ff"
      icon={icon}
      className={styles.root}
    />
  )
}
