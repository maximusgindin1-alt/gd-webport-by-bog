export default function Page() {
  return (
    <main className="game-only" aria-label="Geography game">
      <iframe
        className="game-frame"
        src="https://truffled.lol/games/geo/index.html?proxy=https%3A%2F%2Fcorsproxy.io%2F%3Furl%3D"
        title="Geography game"
        allow="fullscreen"
        allowFullScreen
      />
    </main>
  )
}

