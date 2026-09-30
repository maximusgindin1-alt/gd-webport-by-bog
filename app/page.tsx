export default function Page() {
  return (
    <main className="game-only" aria-label="Geography game">
      <iframe
        className="game-frame"
        src="https://truffled.lol/games/geo/index.html"
        title="Geography game"
        allow="fullscreen"
        allowFullScreen
      />
    </main>
  )
}

