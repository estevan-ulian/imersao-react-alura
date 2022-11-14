import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion'

import { PlaylistsProps, Video } from "../@types/data"

interface TimelineProps {
    playlists: PlaylistsProps[],
    searchValue: string
}

function Timeline({ playlists, searchValue }: TimelineProps) {

    const playlistNames = Object.keys(playlists)

    return (
        <>
            {playlistNames?.map((playlistName, index) => {
                // @ts-ignore
                const videos: Video[] = playlists[playlistName]

                return (

                    <section
                        key={index}
                        className={`w-full overflow-hidden p-4`}
                    >

                        <h2 className={`font-bold text-xl mb-4 uppercase dark:text-neutral-100`}>{playlistName}</h2>

                        <div
                            className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}
                        >

                            {videos.filter((video: Video) => {

                                const titleNormalized = video.title.toLowerCase()
                                const searchValueNormalized = searchValue.toLocaleLowerCase()

                                return titleNormalized.includes(searchValueNormalized)

                            }).map((video: Video, index) => {
                                return (
                                    <motion.div key={index}
                                        initial={{ opacity: 0, scale: .5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.025 }}
                                        transition={{ duration: .5 }}
                                        viewport={{ once: true }}
                                        className={`bg-neutral-200 dark:bg-neutral-700 rounded-b-md`}
                                    >
                                        <Link href={video.url} className={`w-full h-full overflow-clip`} target='_blank'>

                                            <Image
                                                src={video.thumb}
                                                alt={video.title}
                                                className={`aspect-video object-cover w-full h-auto rounded-t-md`}
                                                width={800}
                                                height={450}
                                                priority
                                            />

                                            <span className={`py-2 block px-3 text-sm dark:text-neutral-100`}>{video.title}</span>

                                        </Link>
                                    </motion.div>
                                )
                            })}

                        </div>

                    </section>
                )
            })}
        </>
    )
}

export default Timeline