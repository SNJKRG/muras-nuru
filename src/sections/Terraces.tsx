import { Art } from '../components/Art'
import { SectionHead } from '../components/SectionHead'

export function Terraces({ onTerrace }: { onTerrace: () => void }) {
  return (
    <section id="terraces" className="section terraces" aria-labelledby="terraces-title">
      <div className="wrap terraces__top">
        <div className="terraces__text">
          <SectionHead id="terraces" title="Квартира продолжается на террасе" lead="В третьем этапе есть квартиры первого этажа с собственными террасами." />
          <dl className="areas">
            <div><dt>Площадь квартиры</dt><dd>111,80 м²</dd></div>
            <div><dt>Вместе с террасой</dt><dd>146,43 м²</dd></div>
          </dl>
          <a className="btn btn--dark" href="#apartments" onClick={onTerrace}>Планировки с террасой</a>
        </div>
        <Art className="terraces__art" src="/img/terrace-art.webp" alt="Терраса с цветущей яблоней, девочка поливает цветы" w={1400} h={994} />
      </div>
      <figure className="wrap terraces__photo">
        <img src="/img/terraces.webp" alt="Малоэтажный дом третьего этапа с террасами на первом этаже" loading="lazy" />
        <figcaption className="caption">Третий этап · Проектная визуализация. Пример площадей: 3-комнатная квартира, блоки 10, 12, 14, 16.</figcaption>
      </figure>
    </section>
  )
}
