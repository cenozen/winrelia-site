import type { Metadata } from "next";
import { ArrowRight, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "China Warehouse Consolidation for E-commerce Sellers | Winrelia",
  description: "Combine goods from multiple China suppliers in one warehouse for receiving, QC, repacking, kitting and coordinated export. Practical support for Amazon, eBay and Shopify brands.",
  alternates: { canonical: "/china-warehouse-consolidation" },
  openGraph: {
    title: "China Warehouse Consolidation for E-commerce Sellers | Winrelia",
    description: "One China-side coordination point for multiple factories, QC, branded repacking and consolidated shipment preparation.",
    url: "/china-warehouse-consolidation",
    type: "article",
  },
};

const steps = [
  "Share your supplier list, SKUs, expected quantities, target country and packaging requirements.",
  "Agree receiving instructions, QC scope, carton labels and the shipment plan before goods arrive.",
  "Suppliers deliver to the China warehouse; quantities and agreed inspection points are recorded.",
  "Goods are repacked, relabeled or assembled into kits where required; carton sizes and protection are reviewed.",
  "Finished cartons are documented and prepared for a coordinated shipment or container loading.",
];
const faqs = [
  { q: "Can you combine orders from several Chinese factories?", a: "Yes. WINRELIA coordinates receiving goods from multiple suppliers in China, with agreed checks and preparation before a planned consolidated shipment. Feasibility depends on the goods, supplier schedules and shipping requirements." },
  { q: "Can you inspect products before consolidating them?", a: "Yes. Quantity, appearance, dimensions, function and packaging checks can be agreed for each SKU. Inspection scope and acceptance criteria should be defined before receipt." },
  { q: "Can you add our branding or assemble mixed-product kits?", a: "We can coordinate labels, inserts, branded packaging and kitting, subject to the SKU, materials and agreed quantities." },
  { q: "Will consolidation always reduce freight costs?", a: "No. Savings depend on carton dimensions, weight, handling, shipment frequency, destination and carrier pricing. We review the actual figures before recommending a change." },
  { q: "Who is this service best for?", a: "Small and growing Amazon, eBay, Shopify and other e-commerce brands that buy from several Chinese suppliers but do not operate a full China-side sourcing, QC and warehouse team." },
];
export default function ConsolidationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Service", "@id": "https://www.winrelia.com/china-warehouse-consolidation#service", name: "China warehouse consolidation for e-commerce sellers", serviceType: "Multi-supplier receiving, quality checks, repacking, kitting and consolidated shipment preparation", provider: { "@id": "https://www.winrelia.com/#organization" }, areaServed: ["United Kingdom", "United States", "Australia", "Canada", "European Union"], url: "https://www.winrelia.com/china-warehouse-consolidation" },
      { "@type": "FAQPage", mainEntity: faqs.map(({q,a}) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }
    ]
  };
  return <main className="service-detail-page">
    <header className="site-header detail-header"><a className="brand" href="/" aria-label="Winrelia home"><img src="/winrelia-logo.png" alt="Winrelia" width="205" height="68" /></a><nav aria-label="Main navigation"><a href="/#services">Solutions</a><a href="/#why">Why Winrelia</a><a href="/#about">About us</a><a href="/#contact">Contact Us</a></nav><a className="header-cta" href="mailto:winrelia@hotmail.com?subject=China%20consolidation%20review">Review my shipments <ArrowRight size={16}/></a></header>
    <section className="detail-hero"><div className="detail-hero-copy"><nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><ChevronRight size={14}/><span>Warehouse consolidation</span></nav><p className="kicker light">For Amazon, eBay and Shopify brands</p><h1>China Warehouse Consolidation for E-commerce Sellers</h1><p>Buying from several factories should not mean managing several disconnected shipments. WINRELIA helps growing online brands receive, check, repack, label, kit and prepare goods from multiple Chinese suppliers under one coordinated China-side plan.</p><div className="actions"><a className="button primary" href="mailto:winrelia@hotmail.com?subject=Multi-supplier%20consolidation%20review">Send your supplier list <ArrowRight size={18}/></a></div></div><div className="detail-hero-image"><img src="/operations/warehouse-storage-1.jpg" alt="China warehouse receiving area for consolidated supplier goods" width="1200" height="900" /></div></section>
    <section className="detail-content"><div className="detail-main-column"><p className="kicker">What we coordinate</p><h2>From separate factory deliveries to one shipment plan.</h2><p>Our scope can include supplier delivery coordination, warehouse receiving, quantity checks, agreed product QC, relabeling, retail packaging, multi-SKU kit assembly, carton optimization, palletizing and container loading. The right scope depends on your product and order economics.</p><h2>How the process works</h2><div className="detail-steps">{steps.map((s,i)=><article key={s}><span>0{i+1}</span><p>{s}</p></article>)}</div></div><aside className="detail-fit-card"><p className="kicker">Best fit</p><ul><li>Several China suppliers and mixed-SKU orders</li><li>Small brand without a dedicated China QC or warehouse team</li><li>Packaging, kitting or labeling required before export</li><li>Need to evaluate total landed cost, not only factory price</li></ul></aside></section>
    <section className="detail-content"><div className="detail-main-column"><p className="kicker">Cost control</p><h2>Check the numbers before claiming savings.</h2><p>Separate shipments may duplicate pickup, documentation, packaging and handling. Consolidation may also add warehouse labor or storage. We compare supplier delivery dates, carton dimensions, chargeable weight, packing materials, freight quotations and destination handling before deciding what should change.</p><p>For example, a brand purchasing from three factories may choose to receive all goods at one China warehouse, inspect them against SKU-specific checklists and pack mixed-product kits before dispatch. This is an illustrative workflow, not a claim of guaranteed savings.</p></div></section>
    <section className="detail-faq"><p className="kicker">Frequently asked questions</p><h2>Practical answers before you consolidate.</h2><div className="faq-list">{faqs.map(({q,a})=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <section className="detail-cta" id="contact"><p className="kicker light">Start with one shipment</p><h2>Send us your SKU and supplier list.</h2><p>Include supplier locations, quantities, carton sizes if known, target country and the main cost or quality concern. We will suggest a practical review scope.</p><div className="actions"><a className="button white" href="mailto:winrelia@hotmail.com?subject=China%20warehouse%20consolidation%20inquiry">Email WINRELIA <ArrowRight size={18}/></a><a className="email-link" href="https://wa.me/8613430302527?text=Hi%20Owen%2C%20I%20need%20China%20warehouse%20consolidation.">WhatsApp Owen</a></div></section>
    <footer><img src="/winrelia-logo.png" alt="Winrelia" width="165" height="55"/><p>WINRELIA TECHNOLOGY CO., LTD · Shenzhen, China</p><a href="/">Back to home</a></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
  </main>;
}
