import { Mail, MessageCircle } from "lucide-react";

const whatsappUrl = "https://wa.me/8613430302527?text=Hi%20Owen%2C%20I%27d%20like%20help%20with%20China%20sourcing%2C%20QC%2C%20consolidation%20or%20repacking.";

export function FloatingContact() {
  return <aside className="floating-contact" aria-label="Contact Winrelia">
    <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contact Owen on WhatsApp">
      <MessageCircle aria-hidden="true"/><span><strong>WhatsApp Owen</strong><small>Fast project review</small></span>
    </a>
    <a className="floating-email" href="mailto:winrelia@hotmail.com?subject=Winrelia%20project%20enquiry" aria-label="Email Winrelia">
      <Mail aria-hidden="true"/><span><strong>Email Winrelia</strong><small>Send product details</small></span>
    </a>
  </aside>;
}
