// Delete this file and put your own home page in app/actions/controller.tsx
import { css } from 'remix/component'

import { Document } from './document.tsx'
import { Game } from './public/game.tsx'

const FONT_STACK =
  "'JetBrains Mono', ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace"

export function HomePage() {
  return () => (
    <Document head={<HomeHead />}>
      <main
        mix={css({
          // Light-mode design tokens (default).
          '--surface-0': '#dee2e6',
          '--surface-3': '#f0f4f7',
          '--surface-4': '#f7fbff',
          '--text-primary': '#313539',
          '--text-tertiary': '#94989c',
          '--brand-blue': '#2dacf9',
          // Dark-mode overrides.
          '@media (prefers-color-scheme: dark)': {
            '--surface-0': '#1e2226',
            '--surface-3': '#313539',
            '--surface-4': '#363a3e',
            '--text-primary': '#dee2e6',
            '--text-tertiary': '#94989c',
          },
          '& *, & *::before, & *::after': { boxSizing: 'border-box' },
          margin: 0,
          padding: '48px 24px',
          minHeight: '100vh',
          background: 'var(--surface-0)',
          color: 'var(--text-primary)',
          fontFamily: FONT_STACK,
          fontSize: '14px',
          lineHeight: 1.5,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <div
          mix={css({
            width: '100%',
            maxWidth: '820px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '72px',
          })}
        >
          <h1>Tic-Tac-Toe</h1>
          <Game />
          <Footer />
        </div>
      </main>
    </Document>
  )
}

function HomeHead() {
  return () => (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
      />
    </>
  )
}




function Footer() {
  return () => (
    <footer
      mix={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
      })}
    >
      <div
        mix={css({
          display: 'flex',
          gap: '24px',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <nav
          aria-label="Remix social links"
          mix={css({
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'flex-end',
            color: 'var(--text-tertiary)',
            '& a': {
              width: '20px',
              height: '20px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'inherit',
              transition: 'color 150ms ease',
            },
            '& a:hover, & a:focus-visible': {
              color: 'var(--text-primary)',
              outline: 'none',
            },
            '& svg': { width: '100%', height: '100%', display: 'block' },
          })}
        >
          <a href="https://github.com/remix-run/remix" aria-label="GitHub">
            <GitHubIcon />
          </a>
        </nav>
      </div>
      <div
        mix={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontSize: '10px',
          lineHeight: 1.6,
          letterSpacing: '0.05em',
          color: 'var(--text-tertiary)',
          textAlign: 'center',
          '& p': { margin: 0, whiteSpace: 'nowrap' },
        })}
      >
        <p>&copy;{new Date().getFullYear()} DS MEDIA</p>
      </div>
    </footer>
  )
}


function GitHubIcon() {
  return () => (
    <svg viewBox="0 0 20 19.67" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.008 0C4.474 0 0 4.507 0 10.083C0 14.54 2.867 18.312 6.843 19.648C7.341 19.748 7.523 19.431 7.523 19.164C7.523 18.93 7.506 18.129 7.506 17.294C4.722 17.895 4.142 16.092 4.142 16.092C3.695 14.924 3.032 14.623 3.032 14.623C2.121 14.006 3.099 14.006 3.099 14.006C4.109 14.072 4.64 15.041 4.64 15.041C5.534 16.576 6.976 16.142 7.556 15.875C7.639 15.224 7.904 14.773 8.186 14.523C5.965 14.289 3.629 13.421 3.629 9.548C3.629 8.447 4.026 7.545 4.656 6.844C4.557 6.594 4.209 5.559 4.756 4.173C4.756 4.173 5.601 3.906 7.506 5.208C8.322 4.987 9.163 4.875 10.008 4.874C10.853 4.874 11.715 4.991 12.51 5.208C14.416 3.906 15.261 4.173 15.261 4.173C15.808 5.559 15.46 6.594 15.36 6.844C16.007 7.545 16.388 8.447 16.388 9.548C16.388 13.421 14.051 14.273 11.814 14.523C12.179 14.84 12.494 15.441 12.494 16.393C12.494 17.745 12.477 18.83 12.477 19.164C12.477 19.431 12.66 19.748 13.157 19.648C17.133 18.312 20 14.54 20 10.083C20.016 4.507 15.526 0 10.008 0Z"
        fill="currentColor"
      />
    </svg>
  )
}