import { journey } from '@/lib/content'

export default function Journey() {
  return (
    <section className="journey" aria-labelledby="journey-title" data-motion="stagger-in">
      <div className="container">
        <div className="journey-head">
          <p className="eyebrow" data-m="rise">Votre parcours patient</p>
          <h2 id="journey-title" className="display-3" data-m="lines">
            De la consultation <em>à la récupération.</em>
          </h2>
          <p className="section-lead" data-m="rise">
            Un parcours pensé étape par étape — pour que chacun puisse comprendre, anticiper et avancer en confiance.
          </p>
        </div>
        <div className="rule rule-light" data-m="rule" aria-hidden="true" />
        <ol className="journey-steps">
          {journey.map((step, i) => (
            <li key={step.title} className="journey-step" data-m="step">
              <span className="journey-num">0{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
