import { SectionHead } from '../components/SectionHead'
import { catalogs } from '../data'

export function Documents() {
  return (
    <section id="documents" className="section wrap" aria-labelledby="documents-title">
      <SectionHead id="documents" title="Каталоги этапов" lead="Материалы каждого этапа открыты без формы и регистрации." />
      <ul className="shelf">
        {[...catalogs].reverse().map((c) => (
          <li key={c.stage} className={c.stage === 3 ? 'shelf__main' : ''}>
            <img src={c.cover} alt="" loading="lazy" />
            <div className="shelf__t">
              <h3>{c.title}</h3>
              <p className="muted">PDF, {c.pages} стр., {c.size}</p>
              <div className="shelf__a">
                <a className="btn btn--ghost btn--sm" href={c.href} target="_blank" rel="noreferrer">Открыть</a>
                <a className="link" href={c.href} download>Скачать</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
