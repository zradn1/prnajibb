'use client'

import { FormEvent } from 'react'
import { appointmentReasons, site } from '@/lib/content'
import { Arrow } from '../ui'

/** Unchanged behaviour: the request is prepared client-side and opened in WhatsApp. */
export default function AppointmentForm() {
  function sendAppointment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '').trim()
    const phone = String(form.get('phone') || '').trim()
    const reason = String(form.get('reason') || 'Consultation')
    const date = String(form.get('date') || 'À convenir')
    const note = String(form.get('note') || '').trim()
    const message = `Bonjour, je souhaite prendre rendez-vous au cabinet du Pr Najeb Youssef.%0A%0ANom : ${encodeURIComponent(name)}%0ATéléphone : ${encodeURIComponent(phone)}%0AMotif : ${encodeURIComponent(reason)}%0APréférence de date : ${encodeURIComponent(date)}${note ? `%0ANote : ${encodeURIComponent(note)}` : ''}`
    window.location.href = `https://wa.me/${site.whatsappNumber}?text=${message}`
  }

  return (
    <div className="appointment" data-m="rise">
      <div className="appointment-head">
        <span>Demande de consultation</span>
        <span>01 — 03</span>
      </div>
      <p className="appointment-note">Votre demande est préparée pour le secrétariat via WhatsApp.</p>
      <form onSubmit={sendAppointment} className="appointment-form">
        <div className="field">
          <label htmlFor="name">Nom complet <span aria-hidden="true">*</span></label>
          <input id="name" name="name" type="text" autoComplete="name" placeholder="Votre nom" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Téléphone <span aria-hidden="true">*</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Votre numéro" required />
        </div>
        <div className="field field-full">
          <label htmlFor="reason">Motif de consultation</label>
          <select id="reason" name="reason" defaultValue="Consultation initiale">
            {appointmentReasons.map(r => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="date">Préférence de date</label>
          <input id="date" name="date" type="date" />
        </div>
        <div className="field">
          <label htmlFor="note">Note (optionnel)</label>
          <input id="note" name="note" type="text" placeholder="Quelques mots" />
        </div>
        <div className="form-foot">
          <button className="btn btn-accent" type="submit">
            Préparer sur WhatsApp
            <span className="btn-icon"><Arrow diagonal /></span>
          </button>
          <p className="form-privacy">Aucune information n’est envoyée à un serveur par ce formulaire.</p>
        </div>
      </form>
    </div>
  )
}
