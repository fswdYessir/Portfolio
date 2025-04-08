import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useTheme } from '../components/ThemeContext'
import ScrollAnimation from '../components/ScrollAnimation'

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
    <ScrollAnimation>
      <section
        id="contact"
        className="flex flex-col items-center text-center py-15 px-20 min-h-[80vh]"
      >
        <div className="p-4">
          <h1 className="text-3xl font-bold ">Contact</h1>
          <p>Feel free to reach out.</p>
        </div>

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
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              className="h-[250px] px-4 py-3 w-full rounded-2xl border border-gray-400  text-[var(--form-text-color)] transition-all"
            ></textarea>
          </div>
          {status && (
            <p
              className={`italic font-semibold! rounded transition-all duration-300 ${
                status.includes('success')
                  ? ' bg-green-500/30'
                  : ' bg-red-500/30'
              }`}
            >
              "{status}"
            </p>
          )}
          <div className="flex justify-center">
            <div className="relative inline-flex group mt-4">
              <div
                className={`absolute transform hover:scale-105 active:translate-y-1 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r ${
                  theme === 'light'
                    ? ' from-[#44BCFF] via-[#FF44EC] to-[#FF675E]'
                    : ' from-[#f9d10b] via-[#f4b310] to-[#f9d10b]'
                }`}
              ></div>
              <input
                type="submit"
                value="SUBMIT"
                className={`Btn text-white px-4 py-2 font-semibold rounded-xl relative z-10 ${
                  theme === 'light' ? 'bg-gray-800 ' : 'bg-yellow-400/50'
                }`}
              />
            </div>
          </div>
        </form>
      </section>
    </ScrollAnimation>
  )
}

export default Contact
