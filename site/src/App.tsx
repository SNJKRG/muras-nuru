import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import {
  PHONE, PHONE_HREF, waHref, nav, navMore, architecture, plans, comfort, steps,
  journal, catalogs, faq, type Shot, type Plan,
} from './data'

/* ---------- общие механизмы: контактная панель и просмотр изображений ---------- */

type Ui = { contact: (context?: string) => void; zoom: (shot: Shot) => void }
const UiCtx = createContext<Ui>({ contact: () => {}, zoom: () => {} })
const useUi = () => useContext(UiCtx)

function Modal({ open, onClose, className, label, children }: {
  open: boolean; onClose: () => void; className?: string; label: string; children: ReactNode
}) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])
  return (
    <dialog
      ref={ref}
      className={className}
      aria-label={label}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      {children}
    </dialog>
  )
}

const fmt = (n: number) => n.toLocaleString('ru-RU', { minimumFractionDigits: 2 })

function Head({ kicker, title, lead, id }: { kicker?: string; title: string; lead?: string; id: string }) {
  return (
    <header className="head">
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 id={`${id}-title`}>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </header>
  )
}

/** Гуашевая вставка на прозрачном фоне */
function Art({ src, alt, w, h, className = '' }: { src: string; alt: string; w: number; h: number; className?: string }) {
  return <img className={`art ${className}`} src={src} alt={alt} width={w} height={h} loading="lazy" />
}

/* ---------- шапка ---------- */

function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Muras Nuru, на главную">
      <img src="/img/logo.webp" alt="" width="84" height="55" />
    </a>
  )
}

function SiteHeader() {
  const { contact } = useUi()
  const [menu, setMenu] = useState(false)
  return (
    <header className="site-header">
      <div className="wrap site-header__in">
        <Logo />
        <nav aria-label="Разделы" className="site-nav">
          {nav.map((l) => <a key={l.id} href={`#${l.id}`}>{l.label}</a>)}
        </nav>
        <div className="site-header__act">
          <a className="phone" href={PHONE_HREF}>{PHONE}</a>
          <button className="btn btn--ghost btn--sm" onClick={() => contact()}>Задать вопрос</button>
          <button className="btn btn--ghost btn--sm menu-btn" onClick={() => setMenu(true)} aria-haspopup="dialog">Меню</button>
        </div>
      </div>
      <Modal open={menu} onClose={() => setMenu(false)} className="sheet sheet--menu" label="Меню">
        <div className="sheet__top">
          <Logo />
          <button className="btn btn--ghost btn--sm" onClick={() => setMenu(false)}>Закрыть</button>
        </div>
        <nav aria-label="Все разделы" className="menu-list">
          {[...nav, ...navMore].map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setMenu(false)}>{l.label}</a>
          ))}
        </nav>
        <div className="menu-foot">
          <a className="btn btn--dark" href={PHONE_HREF}>Позвонить · {PHONE}</a>
          <button className="btn btn--ghost" onClick={() => { setMenu(false); contact() }}>Задать вопрос</button>
        </div>
      </Modal>
    </header>
  )
}

/* ---------- 01 hero ---------- */

function Hero() {
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

/* ---------- 02 обзор ---------- */

function Overview() {
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

/* ---------- 03 архитектура ---------- */

function Architecture() {
  const { zoom } = useUi()
  const [stage, setStage] = useState<1 | 2 | 3>(3)
  const [i, setI] = useState(0)
  const shots = architecture[stage]
  const main = shots[i] ?? shots[0]
  return (
    <section id="architecture" className="section wrap" aria-labelledby="architecture-title">
      <div className="arch-top">
        <Head id="architecture" title="Архитектура с характером места" lead="Современные дома и национальные мотивы в деталях фасадов: петроглифы, орнамент, тёплый камень." />
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

/* ---------- 04 двор ---------- */

function Courtyard() {
  return (
    <section id="courtyard" className="section wrap" aria-labelledby="courtyard-title">
      <Head id="courtyard" title="Бульвар становится частью дня" lead="Прогулка, отдых и игры рядом с домом. Озеленение и благоустройство показаны по проекту." />
      <div className="bento">
        <figure className="bento__a">
          <img src="/img/courtyard-wide.webp" alt="Двор Muras Nuru с высоты: перголы, газоны и дорожки" loading="lazy" />
          <figcaption><strong>Отдых.</strong> Перголы, скамейки и тень деревьев во дворах без машин.</figcaption>
        </figure>
        <figure className="bento__b">
          <img src="/img/court-boulevard.webp" alt="Бульвар между домами с извилистой водной аллеей" loading="lazy" />
          <figcaption><strong>Прогулка.</strong> Аллеи бульвара вдоль домов.</figcaption>
        </figure>
        <figure className="bento__c">
          <img src="/img/court-play.webp" alt="Детская площадка с горкой и игровыми башнями" loading="lazy" />
          <figcaption><strong>Игры.</strong> Детские площадки во дворе.</figcaption>
        </figure>
      </div>
      <a className="link" href="#location">Где находится бульвар</a>
    </section>
  )
}

/* ---------- 05 наследие ---------- */

function Heritage() {
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
          <Head id="heritage" title="Наследие в повседневной жизни" />
          <p>Селкинчек и национальные игры продолжают культурную тему Muras Nuru. Во дворе, где дети качаются на качелях и играют в чүкө, традиция передаётся сама, от старших к младшим.</p>
          <a className="link" href="#courtyard">Проектный двор</a>
        </div>
      </div>
    </section>
  )
}

/* ---------- 06 холлы ---------- */

function Lobbies() {
  const { zoom } = useUi()
  const shot = { src: '/img/lobby.webp', alt: 'Лифтовой холл с деревянными панелями и знаком Muras Nuru', caption: 'Лифтовой холл · Проектная визуализация' }
  return (
    <section id="lobbies" className="section wrap" aria-labelledby="lobbies-title">
      <div className="diptych">
        <button className="diptych__a" onClick={() => zoom(shot)} aria-label="Открыть изображение холла">
          <img src={shot.src} alt={shot.alt} loading="lazy" />
        </button>
        <div className="diptych__b">
          <Head id="lobbies" title="Подъезды с историей" lead="В оформлении холлов используются сюжеты наследия и детали традиционного кыргызского дома: дерево, орнамент, тёплый свет." />
          <figure>
            <img src="/img/lobby-lifts.webp" alt="Лифтовой холл с отделкой камнем и металлом" loading="lazy" />
            <figcaption className="caption">Лифтовой холл · Проектная визуализация</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

/* ---------- 07 комфорт ---------- */

function Comfort() {
  return (
    <section id="comfort" className="section wrap comfort" aria-labelledby="comfort-title">
      <div className="comfort__art">
        <Art src="/img/window.webp" alt="Открытое окно с геранью и видом на горы" w={800} h={1062} />
      </div>
      <div className="comfort__body">
        <Head id="comfort" title="Продумано для повседневной жизни" lead="Устройство дома, безопасность двора и обслуживание." />
        {comfort.map((g) => (
          <div key={g.title} className="cluster">
            <h3>{g.title}</h3>
            <dl>
              {g.rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------- 08 террасы ---------- */

function Terraces({ onTerrace }: { onTerrace: () => void }) {
  return (
    <section id="terraces" className="section terraces" aria-labelledby="terraces-title">
      <div className="wrap terraces__top">
        <div className="terraces__text">
          <Head id="terraces" title="Квартира продолжается на террасе" lead="В третьем этапе есть квартиры первого этажа с собственными террасами." />
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

/* ---------- 09 планировки ---------- */

type Filters = { stage: 0 | 1 | 2 | 3; rooms: 0 | 2 | 3 | 4; terrace: boolean }
const noFilters: Filters = { stage: 0, rooms: 0, terrace: false }

function Apartments({ filters, setFilters }: { filters: Filters; setFilters: (f: Filters) => void }) {
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
      <Head id="apartments" kicker="Планировки" title="Найдите свою планировку" lead="Выберите этап и тип квартиры. Наличие и актуальную стоимость уточнит менеджер." />
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

/* ---------- 10 расположение ---------- */

function Location() {
  const [map, setMap] = useState(false)
  return (
    <section id="location" className="section" aria-labelledby="location-title">
      <div className="wrap">
        <Head id="location" title="Место между городом и горами" lead="Южная часть Бишкека. Городская инфраструктура рядом, Ала-Тоо на горизонте." />
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

/* ---------- 11 покупка ---------- */

function Purchase() {
  const { contact } = useUi()
  return (
    <section id="purchase" className="section dark" aria-labelledby="purchase-title">
      <div className="wrap">
      <div className="purchase-top">
        <Head id="purchase" title="Обсудим подходящий способ покупки" lead="Стоимость выбранного варианта и действующие условия уточнит отдел продаж." />
        <Art className="purchase-top__art" src="/img/keys.webp" alt="Ключи с войлочной кисточкой и пиала чая" w={800} h={672} />
      </div>
      <ol className="steps">
        {steps.map(([t, d], k) => (
          <li key={t}><span className="steps__n">{k + 1}</span><h3>{t}</h3><p>{d}</p></li>
        ))}
      </ol>
      <button className="btn btn--dark" onClick={() => contact('Стоимость и условия покупки')}>Узнать стоимость</button>
      </div>
    </section>
  )
}

/* ---------- 12 строительство ---------- */

function Construction() {
  const { zoom } = useUi()
  return (
    <section id="construction" className="section wrap construction" aria-labelledby="construction-title">
      <Head id="construction" title="Ход строительства" lead="Новости проекта с датами и указанием этапа." />
      <ol className="reel">
        {journal.map((j) => (
          <li key={j.date}>
            <button onClick={() => zoom({ src: j.img, alt: j.title, caption: j.date })} aria-label={`Открыть: ${j.title}`}>
              <img src={j.img} alt={j.title} loading="lazy" />
            </button>
            <p className="reel__d">{j.date}</p>
            <h3>{j.title}</h3>
          </li>
        ))}
      </ol>
    </section>
  )
}

/* ---------- 13 застройщик ---------- */

function Developer() {
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

/* ---------- 14 документы ---------- */

function Documents() {
  return (
    <section id="documents" className="section wrap" aria-labelledby="documents-title">
      <Head id="documents" title="Каталоги этапов" lead="Материалы каждого этапа открыты без формы и регистрации." />
      <ul className="shelf">
        {[...catalogs].reverse().map((c) => (
          <li key={c.stage} className={c.stage === 3 ? 'shelf__main' : ''}>
            <img src={c.cover} alt="" loading="lazy" />
            <div className="shelf__t">
              <h3>{c.title}</h3>
              <p className="muted">PDF, {c.pages} стр., {c.size}</p>
              <div className="shelf__a">
                <a className="btn btn--ghost btn--sm" href={c.href} target="_blank" rel="noreferrer">Открыть</a>
                <a className="link" href={c.href} download>Скачать</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

/* ---------- 15 FAQ ---------- */

function Faq() {
  return (
    <section id="faq" className="section wrap faq-sec" aria-labelledby="faq-title">
      <div className="faq-sec__l">
        <Head id="faq" title="Что ещё важно знать" />
        <Art className="faq-sec__art" src="/img/apples.webp" alt="Ветка яблони с яблоками" w={700} h={642} />
      </div>
      <div className="faq">
        {faq.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

/* ---------- 16 контакт ---------- */

function ContactForm({ context, clearContext, compact }: { context?: string; clearContext: () => void; compact?: boolean }) {
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle')
  const [err, setErr] = useState('')
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const phone = String(new FormData(e.currentTarget).get('phone') ?? '')
    if (phone.replace(/\D/g, '').length < 9) { setErr('Укажите номер телефона полностью, например +996 555 12 34 56'); return }
    setErr('')
    setState('sending')
    // ponytail: демо без backend, подключить endpoint/CRM застройщика
    setTimeout(() => setState('done'), 700)
  }
  if (state === 'done') {
    return (
      <div className="form-done" role="status">
        <h3>Демо-режим: заявка не отправлена</h3>
        <p>Форма ещё не подключена к отделу продаж. Напишите в WhatsApp: вопрос и выбранная планировка подставятся в сообщение.</p>
        <div className="actions">
          <a className="btn btn--dark" href={waHref(`Здравствуйте! ${context ?? 'Вопрос о Muras Nuru'}`)} target="_blank" rel="noreferrer">Написать в WhatsApp</a>
          <button className="link" onClick={() => setState('idle')}>Вернуться к форме</button>
        </div>
      </div>
    )
  }
  return (
    <form className={`form ${compact ? 'form--compact' : ''}`} onSubmit={submit} noValidate>
      {context && (
        <div className="ctx">
          <span><small>Ваш выбор</small>{context}</span>
          <button type="button" className="ctx__x" onClick={clearContext} aria-label="Убрать выбранную планировку">×</button>
        </div>
      )}
      <label className="field">
        <span>Телефон</span>
        <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+996 ___ __ __ __" aria-invalid={!!err} aria-describedby={err ? 'phone-err' : undefined} />
        {err && <small id="phone-err" className="field__err">{err}</small>}
      </label>
      <label className="field">
        <span>Имя <em>необязательно</em></span>
        <input name="name" autoComplete="name" />
      </label>
      <label className="field">
        <span>Вопрос <em>необязательно</em></span>
        <textarea name="q" rows={compact ? 2 : 4} />
      </label>
      <button className="btn btn--dark btn--full" disabled={state === 'sending'}>{state === 'sending' ? 'Отправляем…' : 'Отправить вопрос'}</button>
      <p className="muted small">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
    </form>
  )
}

function Contact({ context, clearContext }: { context?: string; clearContext: () => void }) {
  return (
    <section id="contact" className="section wrap grid contact" aria-labelledby="contact-title">
      <div className="col-6 contact__l">
        <Head id="contact" kicker="Контакты" title="Обсудим ваш будущий дом" lead="Задайте вопрос о выбранной планировке, условиях покупки или проекте." />
        <img className="contact__art" src="/img/family.webp" alt="Семья пьёт чай на террасе, вдали горы" loading="lazy" width="1200" height="767" />
        <dl className="contact__dl">
          <div><dt>Телефон</dt><dd><a href={PHONE_HREF}>{PHONE}</a></dd></div>
          <div><dt>Офис продаж</dt><dd>ул. Арстанбека Дуйшеева, 8, 3 этаж. Пн‑Сб, 9:00‑19:00</dd></div>
        </dl>
      </div>
      <div className="col-5 contact__r">
        <ContactForm context={context} clearContext={clearContext} />
      </div>
    </section>
  )
}

/** Орнаментальный разделитель: розетка «төрт мүйүз» между линиями */
function Orn() {
  return <div className="orn-div" aria-hidden="true"><span /></div>
}

function Banner() {
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

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__in">
        <div className="site-footer__brand">
          <Logo />
          <p className="muted">Бульвар у подножия Ала-Тоо.<br />Застройщик: строительная компания Nurzaman.</p>
        </div>
        <nav aria-label="Разделы в подвале" className="site-footer__nav">
          {[...nav, ...navMore].map((l) => <a key={l.id} href={`#${l.id}`}>{l.label}</a>)}
        </nav>
        <div className="site-footer__c">
          <a href={PHONE_HREF}>{PHONE}</a>
          <a href={waHref('Здравствуйте! Вопрос о Muras Nuru')} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
      <div className="wrap site-footer__base">
        <span>© 2026 Muras Nuru BLVD</span>
        <span>Изображения: проектные визуализации и художественные иллюстрации. Макет сайта.</span>
      </div>
    </footer>
  )
}

/* ---------- приложение ---------- */

export default function App() {
  const [panel, setPanel] = useState(false)
  const [context, setContext] = useState<string>()
  const [shot, setShot] = useState<Shot | null>(null)
  const [filters, setFilters] = useState<Filters>(noFilters)
  const ui = useMemo<Ui>(() => ({
    contact: (c) => { if (c) setContext(c); setPanel(true) },
    zoom: setShot,
  }), [])

  return (
    <UiCtx.Provider value={ui}>
      <a className="skip" href="#apartments">К планировкам</a>
      <SiteHeader />
      <main id="top">
        <Hero />
        <Overview />
        <Orn />
        <Architecture />
        <Courtyard />
        <Heritage />
        <Lobbies />
        <Comfort />
        <Terraces onTerrace={() => setFilters({ stage: 3, rooms: 0, terrace: true })} />
        <Orn />
        <Apartments filters={filters} setFilters={setFilters} />
        <Location />
        <Purchase />
        <Construction />
        <Developer />
        <Orn />
        <Documents />
        <Faq />
        <Contact context={context} clearContext={() => setContext(undefined)} />
        <Banner />
      </main>
      <SiteFooter />


      <Modal open={panel} onClose={() => setPanel(false)} className="modal sheet--contact" label="Задать вопрос">
        <div className="modal__hero">
          <button className="modal__close" onClick={() => setPanel(false)} aria-label="Закрыть">×</button>
        </div>
        <div className="modal__body">
          <h2 className="modal__h">Задать вопрос</h2>
          <p className="muted">Ответим по телефону или в WhatsApp в рабочее время офиса продаж.</p>
          <div className="modal__quick">
            <a className="btn btn--ghost btn--sm" href={PHONE_HREF}>Позвонить</a>
            <a className="btn btn--ghost btn--sm" href={waHref(`Здравствуйте! ${context ?? 'Вопрос о Muras Nuru'}`)} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
          <ContactForm compact context={context} clearContext={() => setContext(undefined)} />
        </div>
      </Modal>

      <Modal open={!!shot} onClose={() => setShot(null)} className="lightbox" label={shot?.alt ?? 'Изображение'}>
        {shot && (
          <>
            <img src={shot.src} alt={shot.alt} />
            <div className="lightbox__bar">
              <span className="caption">{shot.caption}</span>
              <button className="btn btn--ghost btn--sm" onClick={() => setShot(null)}>Закрыть</button>
            </div>
          </>
        )}
      </Modal>
    </UiCtx.Provider>
  )
}
