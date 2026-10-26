import type { LucideIcon } from 'lucide-react'
import { Droplets, Gem, ShieldCheck, Sparkles } from 'lucide-react'
export type Service = { title:string; description:string; image:string; icon:LucideIcon }
export const siteConfig = {
  brand:{name:'APEX',descriptor:'AUTO DETAILING',slogan:'Excelência em cada detalhe.'},
  colors:{black:'#080808',graphite:'#171717',white:'#FFFFFF',gray:'#A3A3A3',gold:'#C9A45C'},
  whatsapp:{number:'',message:'Olá! Conheci vocês pelo site e gostaria de solicitar um orçamento.'},
  contact:{phone:'(00) 00000-0000',email:'contato@exemplo.com.br',address:'Endereço demonstrativo — personalize com a localização real',hours:'Horário demonstrativo — Seg. a Sáb., 08h às 18h'},
  developer:{name:'FE COSTA',url:''},
  hero:{eyebrow:'ESTÉTICA AUTOMOTIVA PREMIUM',title:'SEU CARRO MERECE MAIS DO QUE UMA SIMPLES LAVAGEM.',subtitle:'Tratamentos especializados para valorizar, proteger e transformar a aparência do seu veículo.',image:'images/hero-apex.png'},
  services:[
    {title:'Lavagem detalhada',description:'Limpeza técnica e minuciosa, respeitando cada superfície e acabamento do veículo.',image:'images/service-wash.png',icon:Droplets},
    {title:'Polimento técnico',description:'Correção cuidadosa de imperfeições para recuperar profundidade, brilho e definição.',image:'images/result-paint.png',icon:Sparkles},
    {title:'Vitrificação de pintura',description:'Proteção avançada que realça o acabamento e facilita a manutenção da pintura.',image:'images/hero-apex.png',icon:ShieldCheck},
    {title:'Higienização interna',description:'Cuidado profundo de cabine, revestimentos e áreas de contato para renovar o interior.',image:'images/service-interior.png',icon:Gem}
  ] satisfies Service[], social:{instagram:'',facebook:''}
} as const
