import {ArrowUpRight} from 'lucide-react'
import {SectionHeading} from '../components/SectionHeading'
import {Reveal} from '../components/Reveal'
import {WhatsAppLink} from '../components/WhatsAppLink'
import {siteConfig} from '../config/site'
export function Services(){return <section className="section services" id="servicos"><div className="container"><SectionHeading index="02" eyebrow="SERVIÇOS" title="CUIDADO AUTOMOTIVO EM OUTRO NÍVEL."/><div className="services-grid">{siteConfig.services.map((service,index)=>{const Icon=service.icon;return <Reveal className="service-card" key={service.title}><div className="service-image-wrap"><img src={service.image} alt={`${service.title} em veículo premium`} loading="lazy"/><span>0{index+1}</span></div><div className="service-body"><Icon size={22} strokeWidth={1.4}/><h3>{service.title}</h3><p>{service.description}</p><WhatsAppLink className="text-link">Solicitar orçamento <ArrowUpRight size={16}/></WhatsAppLink></div></Reveal>})}</div></div></section>}
