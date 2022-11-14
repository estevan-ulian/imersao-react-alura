import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

function Banner() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className={`w-full h-40 md:h-80 overflow-clip mt-14 relative`}
        >
            <Image
                src={`https://source.unsplash.com/random/?developer`}
                width={1440}
                height={160}
                alt=''
                className='object-cover object-center'
            />
        </motion.div>
    )
}

export default Banner