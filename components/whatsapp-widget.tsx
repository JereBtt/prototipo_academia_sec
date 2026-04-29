'use client'

import { useState } from 'react'
import { X, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { FaWhatsapp } from "react-icons/fa"

type WidgetState = 'collapsed' | 'info' | 'form'


export function WhatsAppWidget() {
  const [state, setState] = useState<WidgetState>('collapsed')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const handleToggle = () => {
    setState(state === 'collapsed' ? 'info' : 'collapsed')
  }

  const handleOpenForm = () => {
    setState('form')
  }

  const handleClose = () => {
    setState('collapsed')
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappPhone = '5493571551356'
    const message = `Hola! Soy ${formData.name}. Me gustaría info sobre las clases. Mi email es ${formData.email} y mi teléfono es ${formData.phone}.`
    const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setState('collapsed')
    setFormData({ name: '', email: '', phone: '' })
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    const cleanValue = value
      .replace(/[^\d+]/g, "")
      .replace(/(?!^)\+/g, "")
      .slice(0, 16)

    setFormData({
      ...formData,
      phone: cleanValue,
    })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans flex flex-col items-end gap-3">

      {/* Info Card — State 2 */}
      {state === 'info' && (
        <div
          className="w-80 bg-white rounded-2xl overflow-hidden"
          style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.18)' }}
        >
          {/* Header */}
          <div className="bg-[#8B1A1A] px-5 py-4 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/avatar-profe.jpg"
                  alt="Profesor de salsa"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white/70 text-xs font-medium uppercase tracking-wider">Salsa en Córdoba</p>
                <div className="mt-2 flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span className="text-xs font-medium text-white">En línea ahora</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-white/70 hover:text-white rounded-full p-1 transition-colors mt-0.5 flex-shrink-0"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="px-5 py-5">

            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              Consultanos por clases de salsa y bachata y te ayudamos a encontrar el nivel y horario ideal para vos.
            </p>

            <button
              onClick={handleOpenForm}
              className="w-full bg-[#25D366] hover:bg-[#20ba5c] text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-between px-4 text-sm"
            >
              <span>Completar formulario</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Form Card — State 3 */}
      {state === 'form' && (
        <div
          className="w-80 bg-white rounded-2xl overflow-hidden"
          style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.18)' }}
        >
          {/* Header */}
          <div className="bg-[#8B1A1A] px-5 py-4 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/avatar-profe.jpg"
                  alt="Profesor de salsa"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white/70 text-xs font-medium uppercase tracking-wider">Salsa en Córdoba</p>
                <div className="mt-2 flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span className="text-xs font-medium text-white">En línea ahora</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-white/70 hover:text-white rounded-full p-1 transition-colors mt-0.5 flex-shrink-0"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Form Body */}
          <div className="px-5 py-5">
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              Dejanos tus datos y te respondemos por WhatsApp a la brevedad.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Nombre *"
                value={formData.name}
                onChange={handleFormChange}
                required
                maxLength={30}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8B1A1A] focus:ring-1 focus:ring-[#8B1A1A]/20 text-gray-800 placeholder:text-gray-400 text-sm transition-colors"
              />

              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleFormChange}
                required
                maxLength={50}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8B1A1A] focus:ring-1 focus:ring-[#8B1A1A]/20 text-gray-800 placeholder:text-gray-400 text-sm transition-colors"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Teléfono *"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                maxLength={30}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#8B1A1A] focus:ring-1 focus:ring-[#8B1A1A]/20 text-gray-800 placeholder:text-gray-400 text-sm transition-colors"
              />

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20ba5c] text-white font-semibold py-3 rounded-xl transition-colors text-sm flex items-center justify-center gap-2 mt-1"
              >
                <FaWhatsapp className="w-6 h-6 text-white" />
                Contactanos por WhatsApp
              </button>
            </form>

            <button
              onClick={() => setState('info')}
              className="w-full mt-3 text-gray-400 hover:text-gray-600 text-xs py-1.5 transition-colors"
            >
              &larr; Volver
            </button>
          </div>
        </div>
      )}

      {/* Collapsed Button — State 1 */}
      <div className="flex items-center gap-2 self-end">
        {state === 'collapsed' && (
          <span className="bg-white text-[#8B1A1A] text-xs font-semibold px-3 py-1.5 rounded-full shadow-md border border-red-100 whitespace-nowrap">
            Disponible 24 hs
          </span>
        )}
        <button
          onClick={handleToggle}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5c] rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 flex-shrink-0 text-white"
          aria-label={state === 'collapsed' ? 'Abrir chat' : 'Cerrar chat'}
        >
          {state === 'collapsed' ? (
            <FaWhatsapp className="w-6 h-6 text-white" />
          ) : (
            <X className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

    </div>
  )
}
