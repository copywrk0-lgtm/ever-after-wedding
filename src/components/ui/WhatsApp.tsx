import {MessageCircle} from 'lucide-react'
import {CONTENT} from '@/config/content'
export function WhatsApp(){const url=`https://wa.me/${CONTENT.brand.phone.replace(/\D/g,'')}?text=${encodeURIComponent('Hi EverAfter! I found you through your website and would love to discuss planning my wedding.')}`;return <a aria-label="Chat on WhatsApp" href={url} target="_blank" rel="noreferrer" className="focus-ring fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#711f2d] text-ivory shadow-2xl transition hover:-translate-y-1"><MessageCircle size={21}/></a>}
