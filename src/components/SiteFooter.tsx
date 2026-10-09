import { PHONE, PHONE_HREF, waHref, nav, navMore } from '../data'
import { Logo } from './Logo'

export function SiteFooter() {
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
