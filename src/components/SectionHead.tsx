export function SectionHead({ kicker, title, lead, id }: { kicker?: string; title: string; lead?: string; id: string }) {
  return (
    <header className="head">
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 id={`${id}-title`}>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </header>
  )
}
