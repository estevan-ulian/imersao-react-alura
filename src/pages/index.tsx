import Header from "./components/Header";
import Menu from "./components/Menu";
import Timeline from "./components/Timeline"
import { config } from '../data/config'

export default function Home() {
  return (
    <div className='flex flex-col flex-1'>

      <Menu />

      <div className={`max-w-screen-xl mx-auto`}>

        <Header config={config} />

        <Timeline playlists={config.playlists} />

      </div>

    </div>
  )
}
