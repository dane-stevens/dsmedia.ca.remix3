
import { clientEntry, css, on, type Handle } from "remix/component"

export const Game = clientEntry(
  import.meta.url,
  function Game(handle: Handle) {
    let board: (-1 | 0 | 1)[] = [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0,
    ]
    let val = 1
    return () => {
      const winner = getWinner(board)
      return (
        <div mix={
          css({ width: '100%' })
        }>
          <div mix={
            css({
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '4px',
              width: '100%',
              background: 'var(--surface-4)'
            })
          }>
            {board?.map((current, i) => {
              return (
                <button type='button' disabled={current !== 0}
                  mix={[
                    on('click', () => {
                      board[i] = val
                      val = val === 1 ? -1 : 1
                      handle.update()
                    }),
                    css({
                      display: 'flex',
                      fontSize: 'clamp(30px,4vw,120px)',
                      aspectRatio: '1/1',
                      background: 'var(--surface-0)',
                      border: 'none',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)'
                    })
                  ]}
                >
                  {current === 1 ? 'X' : current === -1 ? 'O' : null}
                  {current === 0 && (
                    <span mix={css({
                      opacity: '0',
                      flexGrow: '1',
                      '&:hover': {
                        opacity: '0.1'
                      }
                    })}>{val === 1 ? 'X' : '0'}</span>
                  )}
                </button>
              )
            })}
          </div>
          {winner === 1 ? 'Winner! X' : winner === -1 ? 'Winner! O' : ''}
        </div>
      )
    }
  }
)


const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(board: (-1 | 0 | 1)[]): -1 | 0 | 1 {
  for (const [a, b, c] of winningLines) {
    if (board[a] !== 0 && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }

  return 0; // no winner
}