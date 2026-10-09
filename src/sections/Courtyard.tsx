import { SectionHead } from '../components/SectionHead'

export function Courtyard() {
  return (
    <section id="courtyard" className="section wrap" aria-labelledby="courtyard-title">
      <SectionHead id="courtyard" title="Бульвар становится частью дня" lead="Прогулка, отдых и игры рядом с домом. Озеленение и благоустройство показаны по проекту." />
      <div className="bento">
        <figure className="bento__a">
          <img src="/img/courtyard-wide.webp" alt="Двор Muras Nuru с высоты: перголы, газоны и дорожки" loading="lazy" />
          <figcaption><strong>Отдых.</strong> Перголы, скамейки и тень деревьев во дворах без машин.</figcaption>
        </figure>
        <figure className="bento__b">
          <img src="/img/court-boulevard.webp" alt="Бульвар между домами с извилистой водной аллеей" loading="lazy" />
          <figcaption><strong>Прогулка.</strong> Аллеи бульвара вдоль домов.</figcaption>
        </figure>
        <figure className="bento__c">
          <img src="/img/court-play.webp" alt="Детская площадка с горкой и игровыми башнями" loading="lazy" />
          <figcaption><strong>Игры.</strong> Детские площадки во дворе.</figcaption>
        </figure>
      </div>
      <a className="link" href="#location">Где находится бульвар</a>
    </section>
  )
}
