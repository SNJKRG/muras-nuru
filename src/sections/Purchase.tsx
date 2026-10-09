import { Art } from '../components/Art'
import { SectionHead } from '../components/SectionHead'
import { steps } from '../data'
import { useUi } from '../lib/ui'

export function Purchase() {
  const { contact } = useUi()
  return (
    <section id="purchase" className="section dark" aria-labelledby="purchase-title">
      <div className="wrap">
      <div className="purchase-top">
        <SectionHead id="purchase" title="Обсудим подходящий способ покупки" lead="Стоимость выбранного варианта и действующие условия уточнит отдел продаж." />
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
