import { useState } from 'react'
import { SectionHead } from '../components/SectionHead'
import { architecture } from '../data'
import { useUi } from '../lib/ui'

export function Architecture() {
  const { zoom } = useUi()
  const [stage, setStage] = useState<1 | 2 | 3>(3)
  const [i, setI] = useState(0)
  const shots = architecture[stage]
  const main = shots[i] ?? shots[0]
  return (
    <section id="architecture" className="section wrap" aria-labelledby="architecture-title">
      <div className="arch-top">
        <SectionHead id="architecture" title="Архитектура с характером места" lead="Современные дома и национальные мотивы в деталях фасадов: петроглифы, орнамент, тёплый камень." />
        <div className="tabs" role="group" aria-label="Этап строительства">
          {([1, 2, 3] as const).map((s) => (
            <button key={s} className="chip" aria-pressed={stage === s} onClick={() => { setStage(s); setI(0) }}>Этап {s}</button>
          ))}
        </div>
      </div>
      <button className="gallery__main" onClick={() => zoom(main)} aria-label={`Открыть изображение: ${main.alt}`}>
        <img key={main.src} src={main.src} alt={main.alt} loading="lazy" />
      </button>
      <div className="gallery__row">
        <p className="caption">{main.caption}. Вид из окон зависит от этажа и положения квартиры.</p>
        <div className="thumbs">
          {shots.map((s, k) => (
            <button key={s.src} className="thumb" aria-pressed={k === i} onClick={() => setI(k)} aria-label={s.alt}>
              <img src={s.src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
