import { SectionHead } from '../components/SectionHead'
import { useUi } from '../lib/ui'

export function Lobbies() {
  const { zoom } = useUi()
  const shot = { src: '/img/lobby.webp', alt: 'Лифтовой холл с деревянными панелями и знаком Muras Nuru', caption: 'Лифтовой холл · Проектная визуализация' }
  return (
    <section id="lobbies" className="section wrap" aria-labelledby="lobbies-title">
      <div className="diptych">
        <button className="diptych__a" onClick={() => zoom(shot)} aria-label="Открыть изображение холла">
          <img src={shot.src} alt={shot.alt} loading="lazy" />
        </button>
        <div className="diptych__b">
          <SectionHead id="lobbies" title="Подъезды с историей" lead="В оформлении холлов используются сюжеты наследия и детали традиционного кыргызского дома: дерево, орнамент, тёплый свет." />
          <figure>
            <img src="/img/lobby-lifts.webp" alt="Лифтовой холл с отделкой камнем и металлом" loading="lazy" />
            <figcaption className="caption">Лифтовой холл · Проектная визуализация</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
