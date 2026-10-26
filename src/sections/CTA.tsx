import {ArrowUpRight} from 'lucide-react'
import {WhatsAppLink} from '../components/WhatsAppLink'
export function CTA(){return <section className="cta-section"><img src="images/hero-apex.png" alt="" loading="lazy" aria-hidden="true"/><div className="cta-overlay"/><div className="container cta-content"><p>O PRÓXIMO NÍVEL COMEÇA AQUI</p><h2>PRONTO PARA TRANSFORMAR SEU VEÍCULO?</h2><span>Entre em contato e descubra o tratamento ideal para o seu carro.</span><WhatsAppLink className="button button--gold">Solicitar orçamento pelo WhatsApp <ArrowUpRight size={18}/></WhatsAppLink></div></section>}
