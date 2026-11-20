'use client'
import Link from 'next/link'
import { useState } from 'react'
export function SiteHeader(){
 const [open,setOpen]=useState(false)
 return <header className="site-head">
  <Link href="/" className="brand"><span className="brand-mark">E<span>∞</span>A</span><span className="brand-name">EVER AFTER<br/><small>WEDDINGS</small></span></Link>
  <nav className="desktop-nav"><Link href="/celebrations">Celebrations</Link><Link href="/approach">Approach</Link><Link href="/feel">Your feeling</Link><Link className="nav-cta" href="/plan">Plan with us ↗</Link></nav>
  <button className="menu-btn" onClick={()=>setOpen(!open)} aria-expanded={open}>{open?'CLOSE':'MENU'} <span>—</span></button>
  {open&&<div className="mobile-menu"><Link onClick={()=>setOpen(false)} href="/celebrations">Celebrations</Link><Link onClick={()=>setOpen(false)} href="/approach">Approach</Link><Link onClick={()=>setOpen(false)} href="/feel">Find your feeling</Link><Link onClick={()=>setOpen(false)} href="/plan">Plan with us ↗</Link></div>}
 </header>
}
