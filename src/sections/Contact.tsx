import { ContactForm } from '../components/ContactForm'
import { SectionHead } from '../components/SectionHead'
import { PHONE, PHONE_HREF } from '../data'

export function Contact({ context, clearContext }: { context?: string; clearContext: () => void }) {
  return (
    <section id="contact" className="section wrap grid contact" aria-labelledby="contact-title">
      <div className="col-6 contact__l">
        <SectionHead id="contact" kicker="Контакты" title="Обсудим ваш будущий дом" lead="Задайте вопрос о выбранной планировке, условиях покупки или проекте." />
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
