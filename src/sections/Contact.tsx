import {Clock3,MapPin,MessageCircle} from 'lucide-react'
import {Reveal} from '../components/Reveal'
import {SectionHeading} from '../components/SectionHeading'
import {WhatsAppLink} from '../components/WhatsAppLink'
import {siteConfig} from '../config/site'
export function Contact(){return <section className="section contact" id="contato"><div className="container contact-grid"><Reveal className="contact-info"><SectionHeading index="06" eyebrow="CONTATO" title="VISITE NOSSO ESPAÇO."/><div className="contact-item"><MapPin/><div><strong>Localização</strong><span>{siteConfig.contact.address}</span></div></div><div className="contact-item"><Clock3/><div><strong>Atendimento</strong><span>{siteConfig.contact.hours}</span></div></div><WhatsAppLink className="button button--outline"><MessageCircle size={18}/> Falar com a equipe</WhatsAppLink></Reveal><Reveal className="map-placeholder"><div className="map-grid"/><MapPin size={32}/><strong>ÁREA RESERVADA PARA O MAPA</strong><span>Integre o Google Maps ao cadastrar o endereço real.</span><small>LOCALIZAÇÃO DEMONSTRATIVA</small></Reveal></div></section>}
