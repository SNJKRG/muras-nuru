import { useState } from 'react'
import { waHref } from '../data'

export function ContactForm({ context, clearContext, compact }: { context?: string; clearContext: () => void; compact?: boolean }) {
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
