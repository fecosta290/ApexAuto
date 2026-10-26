import {useEffect,useState} from 'react'
import {Menu,X} from 'lucide-react'
import {Brand} from '../components/Brand'
import {WhatsAppLink} from '../components/WhatsAppLink'
const links=[['Serviços','#servicos'],['Sobre','#sobre'],['Resultados','#resultados'],['Contato','#contato']]
export function Header(){
 const[open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false)
 useEffect(()=>{const update=()=>setScrolled(window.scrollY>24);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update)},[])
 useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow=''}},[open])
 return <header className={`site-header ${scrolled?'is-scrolled':''}`}><div className="container header-inner"><Brand/><nav className={`main-nav ${open?'is-open':''}`} aria-label="Navegação principal">{links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}<WhatsAppLink className="button button--gold nav-cta">Agendar avaliação</WhatsAppLink></nav><button className="menu-toggle" type="button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label={open?'Fechar menu':'Abrir menu'}>{open?<X/>:<Menu/>}</button></div></header>
}
