import Image from 'next/image'
import { motion } from 'framer-motion'

interface HeaderProps {
    config: {
        github: string,
        name: string,
        job: string
    }
}

function Header({ config }: HeaderProps) {

    return (
        <motion.section
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
            className={`mt-2 flex items-center w-full px-4 py-8 gap-4`}
        >

            <Image
                src={`https://github.com/${config?.github}.png`}
                alt="Imagem de perfil"
                width={80}
                height={80}
                className={`rounded-full`}
            />

            <div>

                <h2 className={`font-bold text-xl dark:text-neutral-100`}>{config?.name}</h2>

                <p className={`dark:text-neutral-200`}>{config?.job}</p>

            </div>

        </motion.section>
    )
}

export default Header