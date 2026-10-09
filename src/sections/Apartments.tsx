import { useMemo, useState } from 'react'
import { SectionHead } from '../components/SectionHead'
import { plans, type Plan } from '../data'
import { fmt, noFilters, useUi, type Filters } from '../lib/ui'


export function Apartments({ filters, setFilters }: { filters: Filters; setFilters: (f: Filters) => void }) {
  const { contact, zoom } = useUi()
  const list = useMemo(() => plans.filter((p) =>
    (!filters.stage || p.stage === filters.stage) &&
    (!filters.rooms || p.rooms === filters.rooms) &&
    (!filters.terrace || !!p.areaTerrace)), [filters])
  const [sel, setSel] = useState<string>(plans[0].id)
  const p: Plan | undefined = list.find((x) => x.id === sel) ?? list[0]
  const set = (patch: Partial<Filters>) => setFilters({ ...filters, ...patch })
  const ctx = p && `Этап ${p.stage}, ${p.label.toLowerCase()}, ${fmt(p.area)} м²${p.areaTerrace ? ` (с террасой ${fmt(p.areaTerrace)} м²)` : ''}`

  return (
    <section id="apartments" className="section wrap" aria-labelledby="apartments-title">
      <SectionHead id="apartments" kicker="Планировки" title="Найдите свою планировку" lead="Выберите этап и тип квартиры. Наличие и актуальную стоимость уточнит менеджер." />
      <div className="filters" role="group" aria-label="Фильтры">
        <div className="filters__g">
          <span>Этап</span>
          {([0, 1, 2, 3] as const).map((s) => (
            <button key={s} className="chip" aria-pressed={filters.stage === s} onClick={() => set({ stage: s })}>{s ? s : 'Все'}</button>
          ))}
        </div>
        <div className="filters__g">
          <span>Комнат</span>
          {([0, 2, 3, 4] as const).map((r) => (
            <button key={r} className="chip" aria-pressed={filters.rooms === r} onClick={() => set({ rooms: r })}>{r ? r : 'Все'}</button>
          ))}
        </div>
        <label className="check">
          <input type="checkbox" checked={filters.terrace} onChange={(e) => set({ terrace: e.target.checked })} />
          С террасой
        </label>
      </div>

      {!p ? (
        <div className="empty" role="status">
          <p>По выбранным фильтрам планировок нет.</p>
          <button className="btn btn--ghost" onClick={() => setFilters(noFilters)}>Сбросить фильтры</button>
        </div>
      ) : (
        <div className="catalog">
          <ul className="catalog__list" aria-label={`Найдено планировок: ${list.length}`}>
            {list.map((x) => (
              <li key={x.id}>
                <button className="plan-row" aria-pressed={x.id === p.id} onClick={() => setSel(x.id)}>
                  <span className="plan-row__t">{x.label}</span>
                  <span className="plan-row__m">Этап {x.stage} · {x.floor}</span>
                  <span className="plan-row__a">{fmt(x.area)} м²{x.areaTerrace && <small> / {fmt(x.areaTerrace)} с террасой</small>}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="catalog__view" aria-live="polite">
            <button className="plan-img" onClick={() => zoom({ src: p.img, alt: `План: ${p.label}`, caption: ctx! })} aria-label="Увеличить план">
              <img key={p.img} src={p.img} alt={`План: ${p.label}, ${fmt(p.area)} м²`} loading="lazy" />
            </button>
            <div className="plan-info">
              <p className="kicker">Этап {p.stage} · Блоки {p.blocks}</p>
              <h3>{p.label}</h3>
              <dl className="areas">
                <div><dt>Площадь квартиры</dt><dd>{fmt(p.area)} м²</dd></div>
                {p.areaTerrace && <div><dt>С террасой</dt><dd>{fmt(p.areaTerrace)} м²</dd></div>}
                <div><dt>Стоимость</dt><dd className="dd-sm">По запросу</dd></div>
              </dl>
              <p className="muted">{p.floor}{p.page ? ` · каталог этапа ${p.stage}, стр. ${p.page}` : ''}. Тип планировки, не конкретная квартира.</p>
              <div className="actions">
                <button className="btn btn--dark" onClick={() => contact(ctx)}>Уточнить эту планировку</button>
                <button className="link" onClick={() => zoom({ src: p.img, alt: `План: ${p.label}`, caption: ctx! })}>Увеличить план</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
