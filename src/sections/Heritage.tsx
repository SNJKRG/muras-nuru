import { SectionHead } from '../components/SectionHead'

export function Heritage() {
  return (
    <section id="heritage" className="section heritage dark" aria-labelledby="heritage-title">
      <div className="wrap grid heritage__in">
        <figure className="heritage__art">
          <picture>
            <source media="(max-width: 767px)" srcSet="/img/children-m.webp" />
            <img src="/img/children.webp" alt="Дети в национальной одежде качаются на селкинчеке и играют в чүкө" loading="lazy" width="1800" height="720" />
          </picture>
          <figcaption className="caption">Художественная иллюстрация</figcaption>
        </figure>
        <div className="heritage__text">
          <SectionHead id="heritage" title="Наследие в повседневной жизни" />
          <p>Селкинчек и национальные игры продолжают культурную тему Muras Nuru. Во дворе, где дети качаются на качелях и играют в чүкө, традиция передаётся сама, от старших к младшим.</p>
          <a className="link" href="#courtyard">Проектный двор</a>
        </div>
      </div>
    </section>
  )
}
