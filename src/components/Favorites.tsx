import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { Video } from "../@types/data"


interface FavoriteProps {
    favorites: Video[]
}

function Favorites({ favorites }: FavoriteProps) {

    return (
        <div className={`p-4`}>
            <h2 className={`font-bold text-xl mb-4 uppercase text-center sm:text-left dark:text-neutral-50`}>Favoritos</h2>
            <div className={`flex flex-wrap justify-center sm:justify-start gap-4`}>

                {favorites?.map((favorite, index) => {

                    return (
                        <Link key={index} href={favorite?.url} target="_blank" className={`flex flex-col items-center`}>
                            <motion.div
                                initial={{ scale: .5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                whileHover={{ scale: 1.025 }}
                                viewport={{ once: true }}
                                transition={{ duration: .5 }}
                                className={`relative`}
                            >
                                <Image
                                    src={favorite?.thumb}
                                    alt={favorite?.title}
                                    width={100}
                                    height={100}
                                    className={`rounded-full`}
                                />
                            </motion.div>

                            <span className={`py-2 block text-sm text-center dark:text-neutral-100`}>
                                {favorite?.title}
                            </span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Favorites