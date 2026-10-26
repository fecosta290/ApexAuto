export function createWhatsAppLink(number:string,message:string):string|null {
  const normalized=number.replace(/\D/g,'')
  if(normalized.length<10||normalized.length>15)return null
  return `https://wa.me/${normalized}?text=${encodeURIComponent(message)}`
}
