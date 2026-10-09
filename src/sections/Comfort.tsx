import { Art } from '../components/Art'
import { SectionHead } from '../components/SectionHead'
import { comfort } from '../data'

export function Comfort() {
  return (
    <section id="comfort" className="section wrap comfort" aria-labelledby="comfort-title">
      <div className="comfort__art">
        <Art src="/img/window.webp" alt="Открытое окно с геранью и видом на горы" w={800} h={1062} />
      </div>
      <div className="comfort__body">
        <SectionHead id="comfort" title="Продумано для повседневной жизни" lead="Устройство дома, безопасность двора и обслуживание." />
        {comfort.map((g) => (
          <div key={g.title} className="cluster">
            <h3>{g.title}</h3>
            <dl>
              {g.rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
          </div>
        ))}
      </div>
    </section>
  )
}
