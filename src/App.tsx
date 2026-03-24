import { useState } from 'react'
import {
  RocketButton,
  PlantButton,
  PizzaButton,
  CoffeeButton,
  ChristmasTreeButton,
  BookButton,
} from './components'
import styles from './App.module.css'

const BUTTONS = [
  { id: 'rocket',   label: 'Rocket Launch',    Component: RocketButton },
  { id: 'plant',    label: 'Plant Growing',     Component: PlantButton },
  { id: 'pizza',    label: 'Pizza Delivery',    Component: PizzaButton },
  { id: 'coffee',   label: 'Coffee Brewing',    Component: CoffeeButton },
  { id: 'xmas',     label: 'Christmas Tree',    Component: ChristmasTreeButton },
  { id: 'book',     label: 'Book Delivery',     Component: BookButton },
] as const

export default function App() {
  const [completedCount, setCompletedCount] = useState(0)

  const handleComplete = () => setCompletedCount(c => c + 1)

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>React · TypeScript · CSS Modules</p>
        <h1 className={styles.title}>Animated Buttons</h1>
        <p className={styles.subtitle}>
          6 self-contained components. Click to trigger · click again to reset.
        </p>
        {completedCount > 0 && (
          <p className={styles.counter}>
            {completedCount} animation{completedCount !== 1 ? 's' : ''} completed
          </p>
        )}
      </header>

      <main className={styles.grid}>
        {BUTTONS.map(({ id, label, Component }) => (
          <div key={id} className={styles.cell}>
            <Component onComplete={handleComplete} />
            <span className={styles.cellLabel}>{label}</span>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/NikolaPopovic71/animated-buttons"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          GitHub
        </a>
        <span className={styles.footerDot} aria-hidden="true">·</span>
        <a
          href="https://ponitech.pro"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          ponITech
        </a>
      </footer>
    </div>
  )
}
