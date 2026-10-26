import type { ReactNode } from 'react'
import { createWhatsAppLink } from '../utils/whatsapp'
import { siteConfig } from '../config/site'
export function WhatsAppLink({children,className='',ariaLabel}:{children:ReactNode;className?:string;ariaLabel?:string}){
  const href=createWhatsAppLink(siteConfig.whatsapp.number,siteConfig.whatsapp.message)
  if(!href)return <button type="button" className={className} aria-label={ariaLabel} onClick={()=>document.querySelector('#contato')?.scrollIntoView()}>{children}</button>
  return <a className={className} href={href} target="_blank" rel="noreferrer" aria-label={ariaLabel}>{children}</a>
}
