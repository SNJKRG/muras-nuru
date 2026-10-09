import { useUi } from '../lib/ui'

export function Hero() {
  const { contact } = useUi()
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero__text">
        <p className="kicker kicker--brand">MURAS NURU BLVD</p>
        <h1 id="hero-title">Дом, в котором сохранится ваша история</h1>
        <p className="lead">Городской комфорт и горный воздух. Muras&nbsp;Nuru: бульвар у подножия Ала-Тоо.</p>
        <div className="actions">
          <a className="btn btn--dark" href="#apartments">Посмотреть планировки</a>
          <button className="link" onClick={() => contact('Первый экран')}>Задать вопрос</button>
        </div>
      </div>
      <figure className="hero__scene">
        <div className="hero__art">
          <img className="hero__mountains" src="/img/mountains.webp" alt="Хребет Ала-Тоо" width="1600" height="552" fetchPriority="high" />
          <img className="hero__houses" src="/img/houses.webp" alt="Малоэтажные дома третьего этапа" width="1700" height="657" fetchPriority="high" />
        </div>
        <figcaption className="caption">Третий этап · Проектная визуализация</figcaption>
      </figure>
    </section>
  )
}
