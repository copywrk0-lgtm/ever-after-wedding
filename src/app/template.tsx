'use client'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
export default function Template({children}:{children:ReactNode}){const reduce=useReducedMotion();return <motion.div initial={reduce?false:{opacity:0}} animate={{opacity:1}} transition={{duration:reduce?0:.45,ease:'easeOut'}}>{children}</motion.div>}
