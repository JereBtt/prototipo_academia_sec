'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'

type WidgetState = 'collapsed' | 'info'

const WHATSAPP_PHONE = '5493513715379'

const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`

export function WhatsAppWidget() {
  const [state, setState] = useState<WidgetState>('collapsed')

  useEffect(() => {
    const handleOpen = () => {
      setState('info')
    }

    window.addEventListener('open-whatsapp-widget', handleOpen)

    return () => {
      window.removeEventListener('open-whatsapp-widget', handleOpen)
    }
  }, [])

  const handleToggle = () => {
    setState(state === 'collapsed' ? 'info' : 'collapsed')
  }

  const handleClose = () => {
    setState('collapsed')
  }

  return (
    <>
      <style>
        {`
          @keyframes whatsapp-alarm {
            0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); box-shadow: 0 14px 34px rgba(37, 211, 102, 0.38); }
            7% { transform: translate3d(-5px, 0, 0) rotate(-18deg) scale(1.16); }
            14% { transform: translate3d(5px, 0, 0) rotate(18deg) scale(1.2); }
            21% { transform: translate3d(-4px, 0, 0) rotate(-16deg) scale(1.16); }
            28% { transform: translate3d(4px, 0, 0) rotate(16deg) scale(1.14); }
            38% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
            56% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1.1); box-shadow: 0 0 0 8px rgba(37, 211, 102, 0.18); }
            72% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); box-shadow: 0 0 0 20px rgba(37, 211, 102, 0); }
          }
        `}
      </style>

      {state !== 'collapsed' && (
        <button
          type="button"
          aria-label="Cerrar contacto"
          className="fixed inset-0 z-40 cursor-default bg-transparent"
          onClick={handleClose}
        />
      )}

      <div className="fixed bottom-4 right-4 z-50 font-sans flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
        {state === 'info' && (
          <div
            className="w-80 max-w-[calc(100vw-2rem)] bg-white rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.18)' }}
          >
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

            <div className="px-5 py-5">
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Consultanos por clases de salsa y bachata y te ayudamos a encontrar el nivel y horario ideal para vos.
              </p>

              <a
                href={whatsappUrl('Hola! Quiero consultar por las clases de salsa y bachata.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="w-full bg-[#25D366] hover:bg-[#20ba5c] text-white font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 px-4 text-sm"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
                <span>Contactanos por WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 self-end">
          {state === 'collapsed' && (
            <span className="bg-white text-[#8B1A1A] text-sm font-semibold px-4 py-2 rounded-full shadow-md border border-red-100 whitespace-nowrap">
              Contactanos
            </span>
          )}
          <button
            onClick={handleToggle}
            className="w-16 h-16 bg-[#25D366] hover:bg-[#20ba5c] rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 flex-shrink-0 text-white"
            style={state === 'collapsed' ? { animation: 'whatsapp-alarm 0.82s ease-in-out infinite' } : undefined}
            aria-label={state === 'collapsed' ? 'Abrir contacto' : 'Cerrar contacto'}
          >
            {state === 'collapsed' ? (
              <FaWhatsapp className="w-8 h-8 text-white" />
            ) : (
              <X className="w-7 h-7 text-white" />
            )}
          </button>
        </div>
      </div>
    </>
  )
}
