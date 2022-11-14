import Head from "next/head"

import Banner from "../components/Banner"
import Menu from "../components/Menu"
import Header from "../components/Header"
import Timeline from "../components/Timeline"
import Favorites from "../components/Favorites"

import { config } from '../data/config'
import { useState } from "react"

export default function Home() {

  const [searchValue, setSearchValue] = useState('')
  const [dark, setDark] = useState<boolean>(false);

  return (
    <div className={`flex flex-col flex-1 ${dark ? 'dark' : ''}`}>
      <Head>
        <title>AluraTube - Estevan</title>
      </Head>
      <Menu
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        dark={dark}
        setDark={setDark}
      />

      <Banner />

      <div className={`max-w-screen-xl mx-auto dark:bg-neutral-900`}>

        <Header config={config} />

        <Timeline searchValue={searchValue} playlists={config.playlists} />

        <Favorites favorites={config.favorites} />

      </div>

    </div>
  )
}
