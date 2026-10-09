import { Art } from '../components/Art'
import { SectionHead } from '../components/SectionHead'
import { faq } from '../data'

export function Faq() {
  return (
    <section id="faq" className="section wrap faq-sec" aria-labelledby="faq-title">
      <div className="faq-sec__l">
        <SectionHead id="faq" title="Что ещё важно знать" />
        <Art className="faq-sec__art" src="/img/apples.webp" alt="Ветка яблони с яблоками" w={700} h={642} />
      </div>
      <div className="faq">
        {faq.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
