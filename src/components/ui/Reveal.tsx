'use client'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
export function Reveal({children,className='',delay=0,y=28}:{children:ReactNode;className?:string;delay?:number;y?:number}){
 const reduce=useReducedMotion()
 return <motion.div className={className} initial={reduce?false:{opacity:0,y}} whileInView={reduce?undefined:{opacity:1,y:0}} viewport={{once:true,amount:.14,margin:'0px 0px -8% 0px'}} transition={reduce?undefined:{duration:.75,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>
}
