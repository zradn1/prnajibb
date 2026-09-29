import { credentials } from '@/lib/content'
import { SectionLabel } from '../ui'

export default function Intro() {
  return (
    <section className="intro section" id="intro" aria-labelledby="intro-title" data-motion="text-reveal">
      <div className="container intro-grid">
        <SectionLabel index="01">Philosophie</SectionLabel>
        <div className="intro-body">
          <h2 id="intro-title" className="display-2" data-m="lines">
            L’expertise orthopédique au service du <em>mouvement.</em>
          </h2>
          <p className="intro-lead" data-m="rise">
            Pathologies articulaires, traumatiques et sportives&nbsp;: une prise en charge pensée de la consultation à la récupération, à Aïn Sebaâ, Casablanca.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="rule" data-m="rule" aria-hidden="true" />
        <dl className="figures" aria-label="Repères d’expérience">
          {credentials.map(item => (
            <div className="figure" key={item.label} data-m="rise">
              <dt>{item.label}</dt>
              <dd>
                {item.value}
                <span>{item.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
