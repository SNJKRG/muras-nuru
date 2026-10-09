import { useMemo, useState } from 'react'
import { ContactForm } from './components/ContactForm'
import { Modal } from './components/Modal'
import { Ornament } from './components/Ornament'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { PHONE_HREF, waHref, type Shot } from './data'
import { UiCtx, noFilters, type Filters, type Ui } from './lib/ui'
import { Apartments } from './sections/Apartments'
import { Architecture } from './sections/Architecture'
import { Banner } from './sections/Banner'
import { Comfort } from './sections/Comfort'
import { Construction } from './sections/Construction'
import { Contact } from './sections/Contact'
import { Courtyard } from './sections/Courtyard'
import { Developer } from './sections/Developer'
import { Documents } from './sections/Documents'
import { Faq } from './sections/Faq'
import { Heritage } from './sections/Heritage'
import { Hero } from './sections/Hero'
import { Lobbies } from './sections/Lobbies'
import { Location } from './sections/Location'
import { Overview } from './sections/Overview'
import { Purchase } from './sections/Purchase'
import { Terraces } from './sections/Terraces'

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
        <Ornament />
        <Architecture />
        <Courtyard />
        <Heritage />
        <Lobbies />
        <Comfort />
        <Terraces onTerrace={() => setFilters({ stage: 3, rooms: 0, terrace: true })} />
        <Ornament />
        <Apartments filters={filters} setFilters={setFilters} />
        <Location />
        <Purchase />
        <Construction />
        <Developer />
        <Ornament />
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
