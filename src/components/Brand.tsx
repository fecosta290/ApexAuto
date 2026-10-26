import { siteConfig } from '../config/site'
export function Brand(){return <a className="brand" href="#inicio" aria-label="APEX Auto Detailing — início"><span className="brand-mark" aria-hidden="true"><i/><i/></span><span><strong>{siteConfig.brand.name}</strong><small>{siteConfig.brand.descriptor}</small></span></a>}
