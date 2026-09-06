import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, ChevronRight, Linkedin } from "lucide-react";
import { servicePages } from "@/app/service-data";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

async function getService(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return {};
  return {
    title: { absolute: service.metaTitle },
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      type: "website",
      url: `/services/${service.slug}`,
      siteName: "Winrelia",
      title: service.metaTitle,
      description: service.description,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getService(slug);
  if (!service) return null;

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return <main className="service-detail-page">
    <header className="site-header detail-header">
      <a className="brand" href="/" aria-label="Winrelia home"><img src="/winrelia-logo.png" alt="Winrelia" width="205" height="68" /></a>
      <nav aria-label="Main navigation"><a href="/#services">Solutions</a><a href="/#audit">Free SKU audit</a><a href="/#why">Why Winrelia</a><a href="/#about">About us</a><a href="/#contact">Contact Us</a></nav>
      <a className="header-cta" href="mailto:winrelia@hotmail.com?subject=Free%20SKU%20audit">Audit one SKU <ArrowRight size={16}/></a>
    </header>
    <section className="detail-hero">
      <div className="detail-hero-copy">
        <nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><ChevronRight size={14}/><a href="/#services">Solutions</a><ChevronRight size={14}/><span>{service.title}</span></nav>
        <p className="kicker light">China-side e-commerce operations</p>
        <h1>{service.title}</h1>
        <p>{service.intro}</p>
        <div className="actions"><a className="button primary" href="mailto:winrelia@hotmail.com?subject=Winrelia%20service%20review">Discuss this service <ArrowRight size={18}/></a><a className="detail-text-link" href="/#contact">Contact Winrelia</a></div>
      </div>
      <div className="detail-hero-image"><img src={service.image} alt={service.imageAlt} width="1200" height="900" /></div>
    </section>
    <section className="detail-content">
      <div className="detail-main-column">
        <p className="kicker">How we help</p>
        <h2>A practical China-side process for your next order.</h2>
        <div className="detail-steps">{service.steps.map((step, index) => <article key={step}><span>0{index + 1}</span><p>{step}</p></article>)}</div>
      </div>
      <aside className="detail-fit-card"><p className="kicker">This is a good fit when</p><ul>{service.fit.map((item) => <li key={item}><CheckCircle2 size={17}/><span>{item}</span></li>)}</ul></aside>
    </section>
    <section className="detail-outcomes"><div><p className="kicker light">What you can expect</p><h2>Less China-side friction.<br/><em>More control over the result.</em></h2></div><ul>{service.outcomes.map((item) => <li key={item}><CheckCircle2 size={18}/><span>{item}</span></li>)}</ul></section>
    <section className="detail-faq"><p className="kicker">Buyer questions</p><h2>Questions online sellers ask before starting.</h2><div className="faq-list">{service.faq.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>
    <section className="detail-cta" id="contact"><p className="kicker light">Start with one SKU</p><h2>Send the product, pack or shipment problem.</h2><p>We will review the China-side opportunity and reply with a practical next step.</p><div className="actions"><a className="button white" href="https://wa.me/8613430302527?text=Hi%20Owen%2C%20I%27d%20like%20to%20discuss%20this%20service%3A%20">WhatsApp Owen <ArrowRight size={18}/></a><a className="email-link" href="mailto:winrelia@hotmail.com?subject=Winrelia%20service%20review">winrelia@hotmail.com</a></div></section>
    <footer><img src="/winrelia-logo.png" alt="Winrelia" width="165" height="55"/><p>WINRELIA TECHNOLOGY CO., LTD · Shenzhen, China · WhatsApp +86 134 3030 2527</p><a className="footer-social" href="https://www.linkedin.com/in/owen-l-066393135/" target="_blank" rel="me noreferrer"><Linkedin size={16}/>LinkedIn · Owen Liang</a><p>© 2026 Winrelia</p></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
  </main>;
}
