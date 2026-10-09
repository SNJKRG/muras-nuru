import { SectionHead } from '../components/SectionHead'
import { journal } from '../data'
import { useUi } from '../lib/ui'

export function Construction() {
  const { zoom } = useUi()
  return (
    <section id="construction" className="section wrap construction" aria-labelledby="construction-title">
      <SectionHead id="construction" title="Ход строительства" lead="Новости проекта с датами и указанием этапа." />
      <ol className="reel">
        {journal.map((j) => (
          <li key={j.date}>
            <button onClick={() => zoom({ src: j.img, alt: j.title, caption: j.date })} aria-label={`Открыть: ${j.title}`}>
              <img src={j.img} alt={j.title} loading="lazy" />
            </button>
            <p className="reel__d">{j.date}</p>
            <h3>{j.title}</h3>
          </li>
        ))}
      </ol>
    </section>
  )
}
