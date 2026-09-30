export default function Page() {
  return (
    <main className="game-only" aria-label="Geography game">
      <iframe
        className="game-frame"
        src="/geo/index.html"
        title="Geography game"
        allow="fullscreen"
        allowFullScreen
      />
    </main>
  )
}

