import { Art } from '../components/Art'

export function Developer() {
  return (
    <section id="developer" className="section wrap developer" aria-labelledby="developer-title">
      <Art className="developer__art" src="/img/horses.webp" alt="Лошади пасутся на джайлоо" w={1200} h={481} />
      <div className="developer__text">
        <img className="developer__logo" src="/img/nurzaman.webp" alt="Строительная компания Nurzaman" width="400" height="82" loading="lazy" />
        <h2 id="developer-title">Проект компании Nurzaman</h2>
        <p>Строительная компания Nurzaman возводит жилые комплексы в Бишкеке и Оше. В Muras Nuru она соединяет современную архитектуру с темой кыргызского наследия.</p>
        <a className="link" href="https://nurzaman.kg/o-kompanii/" target="_blank" rel="noreferrer">О компании Nurzaman</a>
      </div>
    </section>
  )
}
