export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-[var(--container-site)] px-4 py-10 sm:px-6">
      <div className="animate-pulse" aria-busy="true" aria-label="Chargement">
        <div className="h-4 w-24 rounded bg-muted" />
        <div className="mt-4 h-10 w-80 max-w-full rounded bg-muted" />
        <div className="mt-3 h-5 w-full max-w-xl rounded bg-muted" />
        <div className="mt-10 h-96 w-full rounded-md bg-muted" />
      </div>
    </div>
  )
}
