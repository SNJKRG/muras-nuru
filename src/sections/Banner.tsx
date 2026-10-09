export function Banner() {
  return (
    <section className="banner" aria-labelledby="banner-title">
      <picture>
        <source media="(max-width: 767px)" srcSet="/img/banner-m.webp" />
        <img src="/img/banner.webp" alt="Вечернее джайлоо: юрты с дымком, спящие кони и хребет Ала-Тоо" width="2000" height="848" loading="lazy" />
      </picture>
      <div className="wrap banner__text">
        <h2 id="banner-title">Дом у подножия Ала-Тоо</h2>
        <p>Выберите планировку на этой странице. Наличие и условия расскажет менеджер.</p>
        <a className="btn btn--dark" href="#apartments">Посмотреть планировки</a>
      </div>
    </section>
  )
}
