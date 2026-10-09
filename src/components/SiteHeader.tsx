import { useState } from 'react'
import { PHONE, PHONE_HREF, nav, navMore } from '../data'
import { useUi } from '../lib/ui'
import { Logo } from './Logo'
import { Modal } from './Modal'

export function SiteHeader() {
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
