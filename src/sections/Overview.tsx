import { Art } from '../components/Art'

export function Overview() {
  return (
    <section id="overview" className="section overview" aria-labelledby="overview-title">
      <div className="wrap">
        <h2 id="overview-title" className="statement">
          Новый бульвар Бишкека. Квартал в южной части города, спроектированный вокруг аллей, фонтана и прогулочных пространств.
        </h2>
      </div>
      <div className="wrap overview__body">
        <Art className="overview__art" src="/img/boulevard-art.webp" alt="Аллея тополей, фонтан и прогулка семьи" w={1600} h={903} />
        <div className="overview__text">
          <p>Muras Nuru строится по очередям. У каждого этапа свой тип домов и свои планировки, а объединяет их общий бульвар: зелёная ось, где удобно гулять, встречаться и отдыхать.</p>
          <dl className="facts">
            <div><dt>Бульвар</dt><dd>Прогулочная ось квартала с аллеями и фонтаном.</dd></div>
            <div><dt>Три этапа</dt><dd>Многоэтажные дома и малоэтажные дома с террасами.</dd></div>
            <div><dt>Наследие</dt><dd>Национальные мотивы в фасадах, холлах и дворах.</dd></div>
          </dl>
          <a className="link" href="#documents">Каталоги этапов</a>
        </div>
      </div>
    </section>
  )
}
