'use client'

import React from "react"
import YoutubeEmbed from "@/components/youtube";
import About from '@/components/About'
import YoutubeGallery from '@/components/YoutubeGallery'

export default function Home() {

  return (
    <main>
      <YoutubeEmbed embedId='HgBd14YxVoM'/>
      <About/>
      <YoutubeGallery title='Recent Videos'/>
    </main>
  )
}
