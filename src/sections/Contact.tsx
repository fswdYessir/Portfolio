import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTheme } from '../components/ThemeContext'

const Contact: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<string | null>(null)
  const { theme } = useTheme()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const serviceId = 'service_ruuhgs8'
    const templateId = 'template_wzwbury'
    const publicKey = 'FWj8pDMCGGNjuGGu2'

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Sol',
      message: message,
    }

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      console.log('SUCCESS!', response.status, response.text)
      setStatus('Email sent successfully')
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error('FAILED...', error)
      setStatus('Error sending email')
    }
  }

  return (
    <section
      id="contact"
      className="flex flex-col items-center text-center py-10"
    >
      <h1 className="text-3xl font-bold">Contact</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-10 gap-6 w-full max-w-[250px] md:max-w-[500px] lg:max-w-[600px]"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            value={name}
            placeholder="Your Name"
            onChange={e => setName(e.target.value)}
            required
            className="h-[40px] px-4 w-full rounded-2xl border border-gray-400 text-[var(--form-text-color)] transition-all"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Your Email"
            onChange={e => setEmail(e.target.value)}
            required
            className="h-[40px] px-4 w-full rounded-2xl border border-gray-400 text-[var(--form-text-color)] transition-all"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Message"
            onChange={e => setMessage(e.target.value)}
            required
            className="h-[250px] px-4 py-3 w-full rounded-2xl border border-gray-400  text-[var(--form-text-color)] transition-all"
          ></textarea>
        </div>

        <input
          type="submit"
          value="SUBMIT"
          className={`Btn text-white ${
            theme === 'light' ? 'bg-gray-800 ' : 'bg-gray-400/50'
          }`}
        />
        {status && <p>{status}</p>}
      </form>
    </section>
  )
}

export default Contact
