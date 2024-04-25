import React from 'react'
import { Education } from './Education/Education'
import './Main.css'
import { Skills } from './Skills/Skills'
import { Sertificats } from './Sertificats/Sertificats'
import { Language } from './Language/Language'
export const Main = () => {
  return (
    <main>
      <Education/>
      <Skills/>
      <Sertificats/>
      <Language/>
    </main>
  )
}
