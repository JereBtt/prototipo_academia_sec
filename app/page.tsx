"use client"

import { useState } from "react"
import Version1Elegant from "@/components/versions/version-1-elegant"
import Version2Energetic from "@/components/versions/version-2-energetic"
import Version3Warm from "@/components/versions/version-3-warm"

const versions = [
  { 
    id: 1, 
    name: "Elegante y Moderna", 
    description: "Diseño limpio, tipografía refinada, uso sutil del rojo",
    component: Version1Elegant 
  },
  { 
    id: 2, 
    name: "Energética y Dinámica", 
    description: "Más movimiento, imágenes grandes, atmósfera de baile intensa",
    component: Version2Energetic 
  },
  { 
    id: 3, 
    name: "Cálida y Acogedora", 
    description: "Diseño suave, sensación amigable, enfoque en comunidad",
    component: Version3Warm 
  },
]

export default function Home() {
  const [selectedVersion, setSelectedVersion] = useState(1)
  
  const SelectedComponent = versions.find(v => v.id === selectedVersion)?.component || Version1Elegant

  return (
    <>
      {/* Version Selector - Fixed at bottom */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] bg-foreground/95 backdrop-blur-md rounded-full p-1.5 shadow-2xl border border-card/10">
        <div className="flex items-center gap-1">
          {versions.map((version) => (
            <button
              key={version.id}
              onClick={() => setSelectedVersion(version.id)}
              className={`
                px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${selectedVersion === version.id 
                  ? 'bg-primary text-primary-foreground shadow-lg' 
                  : 'text-card/70 hover:text-card hover:bg-card/10'
                }
              `}
            >
              <span className="hidden sm:inline">Version {version.id}: </span>
              <span className="sm:hidden">V{version.id}</span>
              <span className="hidden md:inline">{version.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Version Info Tooltip */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] bg-card/95 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg border border-border text-center max-w-xs">
        <p className="text-xs text-muted-foreground">
          {versions.find(v => v.id === selectedVersion)?.description}
        </p>
      </div>

      {/* Render Selected Version */}
      <SelectedComponent />
    </>
  )
}
