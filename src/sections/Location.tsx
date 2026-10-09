import { useState } from 'react'
import { SectionHead } from '../components/SectionHead'

export function Location() {
  const [map, setMap] = useState(false)
  return (
    <section id="location" className="section" aria-labelledby="location-title">
      <div className="wrap">
        <SectionHead id="location" title="Место между городом и горами" lead="Южная часть Бишкека. Городская инфраструктура рядом, Ала-Тоо на горизонте." />
      </div>
      <figure className="location-art">
        <img src="/img/location.webp" alt="Бульвар с тополями, дома и хребет Ала-Тоо" loading="lazy" width="1800" height="729" />
      </figure>
      <div className="wrap grid location">
        <div className="col-8 map">
          {map ? (
            <iframe
              title="Карта: Muras Nuru"
              src="https://www.openstreetmap.org/export/embed.html?bbox=74.592%2C42.802%2C74.626%2C42.821&layer=mapnik&marker=42.8117%2C74.6090"
              loading="lazy"
            />
          ) : (
            <div className="map__ph">
              <p>Карта загружается по нажатию, чтобы не мешать прокрутке.</p>
              <button className="btn btn--ghost" onClick={() => setMap(true)}>Показать карту</button>
            </div>
          )}
        </div>
        <div className="col-4 addr">
          <div><h3>Комплекс</h3><p>г. Бишкек, ул. Балык Кумара, 70</p></div>
          <div><h3>Офис продаж</h3><p>ул. Арстанбека Дуйшеева, 8, ЖК «Английский квартал», 3 этаж</p><p className="muted">Пн‑Сб, 9:00‑19:00</p></div>
          <a className="link" href="https://2gis.kg/bishkek/firm/70000001088056770" target="_blank" rel="noreferrer">Открыть в 2GIS</a>
        </div>
      </div>
    </section>
  )
}
