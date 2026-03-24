# Animated Buttons

A set of **6 animated React button components** built with TypeScript and CSS Modules — no animation libraries required.

Each button has three states (`idle → running → done`) driven by a shared `useButtonAnimation` hook. Click again in the `done` state to reset.

**Live demo:** https://animated-buttons.netlify.app

---

## Buttons

| Component | Theme | Duration |
|---|---|---|
| `<RocketButton />` | Rocket launch with flame & stars | 5 s |
| `<PlantButton />` | Seed grows into plant with water drops | 6 s |
| `<PizzaButton />` | Scooter delivers pizza with steam | 5.5 s |
| `<CoffeeButton />` | Progress ring fills while coffee brews | 6.5 s |
| `<ChristmasTreeButton />` | Tree runs and decorates itself | 7 s |
| `<BookButton />` | Package shakes, book emerges with sparkles | 5.8 s |

---

## Getting started

```bash
git clone https://github.com/NikolaPopovic71/animated-buttons.git
cd animated-buttons
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Usage

```tsx
import { RocketButton } from './components'

function MyPage() {
  return (
    <RocketButton onComplete={() => console.log('Launched!')} />
  )
}
```

All buttons accept an optional `onComplete` callback fired when the animation finishes.

### Using the hook directly

If you want to build your own animated button, use the shared hook:

```tsx
import { useButtonAnimation } from './hooks/useButtonAnimation'

function MyButton() {
  const { state, trigger, reset } = useButtonAnimation({
    duration: 4000,
    onComplete: () => console.log('done'),
  })

  return (
    <button onClick={state === 'done' ? reset : trigger} disabled={state === 'running'}>
      {state === 'idle' && 'Start'}
      {state === 'running' && 'Running…'}
      {state === 'done' && 'Done — click to reset'}
    </button>
  )
}
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `onComplete` | `() => void` | — | Called when animation finishes |

### ButtonState type

```ts
type ButtonState = 'idle' | 'running' | 'done'
```

---

## Project structure

```
animated-buttons/
├── src/
│   ├── components/
│   │   ├── AnimatedButton.tsx      # Base component
│   │   ├── AnimatedButton.module.css
│   │   ├── RocketButton.tsx
│   │   ├── RocketButton.module.css
│   │   ├── PlantButton.tsx
│   │   ├── PlantButton.module.css
│   │   ├── PizzaButton.tsx
│   │   ├── PizzaButton.module.css
│   │   ├── CoffeeButton.tsx
│   │   ├── CoffeeButton.module.css
│   │   ├── ChristmasTreeButton.tsx
│   │   ├── ChristmasTreeButton.module.css
│   │   ├── BookButton.tsx
│   │   ├── BookButton.module.css
│   │   └── index.ts                # Barrel export
│   ├── hooks/
│   │   └── useButtonAnimation.ts
│   ├── App.tsx
│   ├── App.module.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── netlify.toml
├── .gitignore
└── package.json
```

---

## Tech stack

- [React 18](https://react.dev)
- [TypeScript 5](https://www.typescriptlang.org)
- [Vite 5](https://vitejs.dev)
- CSS Modules — zero runtime dependencies for animations

---

## Deploy to Netlify

### Option A — Netlify UI (drag & drop)

```bash
npm run build
# drag the dist/ folder to netlify.com/drop
```

### Option B — Git integration (recommended)

1. Push to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**
3. Connect your GitHub repo
4. Build settings are pre-configured via `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**

---

## Adding a new button

1. Create `src/components/MyButton.tsx` and `MyButton.module.css`
2. Use `useButtonAnimation` for state management
3. Compose with `<AnimatedButton>` for consistent base styles
4. Export from `src/components/index.ts`

---

## License

MIT — free to use, modify, and share.

---

Built by [ponITech](https://ponitech.pro) · [@NikolaP_itech](https://x.com/NikolaP_itech)
