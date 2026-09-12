import { ArrowRight, Boxes, ChartNoAxesCombined, CheckCircle2, ClipboardCheck, Linkedin, Mail, MessageCircle, PackageSearch, ShieldCheck, Sparkles, Warehouse, Wrench } from "lucide-react";
import { buyerFaqs } from "./service-data";

const services = [
  {
    slug: "factory-searching-checking",
    icon: PackageSearch,
    title: "Factory Searching & Checking",
    text: "We identify suitable factories, compare real production capabilities and check the working environment before you commit to an order.",
    result: "Better-fit suppliers, fewer sourcing surprises",
    subject: "Factory searching and checking",
    images: [
      ["/operations/factory-search-1.jpg", "Supplier assembly line checked for production capability"],
      ["/operations/factory-search-2.jpg", "Injection moulding workshop during a factory check"],
      ["/operations/factory-search-3.jpg", "Packaging material production line at a supplier factory"],
    ],
  },
  {
    slug: "product-qc",
    icon: ClipboardCheck,
    title: "Product QC",
    text: "We turn your specifications and known defect risks into practical checks, dimensional measurements and clear batch-level evidence.",
    result: "Problems found in China, before dispatch",
    subject: "Product QC",
    images: [
      ["/operations/product-qc-1.jpg", "Component thickness measured with a digital micrometer"],
      ["/operations/product-qc-2.jpg", "Product dimension checked with a digital caliper"],
      ["/operations/product-qc-3.jpg", "Visual inspection of coated hardware components"],
    ],
  },
  {
    slug: "private-label-launch",
    icon: Sparkles,
    title: "Private Label Launch",
    text: "Launch or test a SKU with branded packaging, labels, inserts and mixed-factory components—even when the individual factories cannot support your quantity.",
    result: "A credible brand launch with less cash at risk",
    subject: "Private label launch",
    images: [
      ["/operations/private-label-1.jpg", "Private-label ratchet straps prepared with retail cartons"],
      ["/operations/private-label-2.jpg", "Retail-ready branded packs prepared for fulfilment"],
      ["/operations/private-label-3.jpg", "Barcode-labelled boxes for a private-label order"],
    ],
  },
  {
    slug: "carton-optimization",
    icon: Boxes,
    title: "Carton Optimization",
    text: "We consolidate, resize and repack cartons around product protection, shipping efficiency and your marketplace or fulfilment requirements.",
    result: "Less wasted space and lower landed cost",
    subject: "Carton optimization",
    images: [
      ["/operations/carton-optimization-1.jpg", "Mixed supplier cartons consolidated for one shipment"],
      ["/operations/carton-optimization-2.jpg", "Optimized cartons organized by shipment reference"],
      ["/operations/carton-optimization-3.jpg", "Finished cartons palletized and wrapped for dispatch"],
    ],
  },
  {
    slug: "palletizing-container-loading",
    icon: Wrench,
    title: "Palletizing & Container Loading",
    text: "We coordinate loading across multiple suppliers, palletize when required and use container space carefully so one shipment leaves China under one plan.",
    result: "Simpler coordination and better freight utilization",
    subject: "Palletizing and container loading",
    images: [
      ["/operations/loading-1.jpg", "Mixed cartons arranged inside an export container"],
      ["/operations/loading-2.jpg", "Palletized cargo loaded at the factory yard"],
      ["/operations/loading-3.jpg", "Large cargo positioned and secured inside a container"],
    ],
  },
  {
    slug: "warehouse-storage",
    icon: Warehouse,
    title: "Warehouse Storage",
    text: "Receive goods from different factories, hold neutral inventory and release, label, kit or split it when your market and replenishment needs become clear.",
    result: "Flexible stock without scattered factory storage",
    subject: "Warehouse storage",
    images: [
      ["/operations/warehouse-storage-1.jpg", "Warehouse receiving area with palletized inventory"],
      ["/operations/warehouse-storage-2.jpg", "Dedicated warehouse space available for flexible storage"],
      ["/operations/warehouse-storage-3.jpg", "Palletized goods organized across warehouse aisles"],
    ],
  },
];

const process = [
  ["01", "Share one SKU or challenge", "Send a product link, current pack size, supplier list, target market or urgent operational issue."],
  ["02", "See the cost and risk gaps", "We review the current setup and show practical opportunities before recommending work."],
  ["03", "We execute in China", "Our team coordinates factories, warehouse handling, QC, packaging, kitting, records and dispatch."],
  ["04", "Ship retail-ready", "Inventory leaves China prepared for the market, channel and fulfilment route you selected."],
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Winrelia home"><img src="/winrelia-logo.png" alt="Winrelia" /></a>
      <nav aria-label="Main navigation"><a href="#services">Solutions</a><a href="#audit">Free SKU audit</a><a href="#why">Why Winrelia</a><a href="#process">How it works</a><a href="#about">About us</a><a href="#contact">Contact Us</a></nav>
      <a className="header-cta" href="mailto:winrelia@hotmail.com?subject=Free%20SKU%20audit">Audit one SKU <ArrowRight size={16}/></a>
    </header>
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="hero-copy">
        <p className="eyebrow"><span>Shenzhen · China</span>China-side supply chain for e-commerce brands</p>
        <h1>More than sourcing.<br/><em>Better unit economics.</em></h1>
        <p className="lede">WINRELIA is a China-side supply-chain integration partner for Amazon, eBay, Shopify and growing e-commerce brands. We help reduce hidden cost across supplier coordination, QC, packaging, consolidation, inventory and shipment preparation.</p>
        <div className="actions hero-actions"><a className="button whatsapp-primary" href="https://wa.me/8613430302527?text=Hi%20Owen%2C%20I%27d%20like%20a%20free%20SKU%20packaging%20and%20cost%20audit." target="_blank" rel="noreferrer"><MessageCircle size={19}/> WhatsApp Owen — Free SKU Audit</a><a className="button email-primary" href="mailto:winrelia@hotmail.com?subject=Free%20SKU%20audit"><Mail size={18}/> Email Your SKU</a></div>
        <div className="trust-line"><ShieldCheck size={18}/><span>15+ years of international trade experience · one accountable China-side team</span></div>
      </div>
      <div className="hero-visual">
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <div className="visual-card main-card"><span className="card-icon"><ChartNoAxesCombined/></span><p>CHINA-SIDE COST CONTROL</p><strong>Source → Optimize → Prepare → Ship</strong><small>Every decision connects product, packaging, inventory and fulfilment cost.</small></div>
      </div>
      <div className="proof"><div><strong>15+</strong><span>Years in international trade</span></div><div><strong>3,000 m²</strong><span>China warehouse capacity</span></div><div><strong>600+</strong><span>Customers served worldwide</span></div><div><strong>1,000+</strong><span>Cooperative factories</span></div></div>
    </section>
    <section className="section services" id="services">
      <div className="section-heading"><div><p className="kicker">China-side supply-chain integration for e-commerce</p><h2>Six capabilities.<br/><em>One accountable team.</em></h2></div><p>From supplier coordination and product QC to private label, carton optimization, consolidation and warehouse storage, Winrelia keeps your inventory moving under one coordinated China-side plan.</p></div>
      <div className="service-grid">{services.map(({icon:Icon,title,text,result,subject,images,slug},i)=><article key={title}>
        <div className="service-gallery">
          {images.map(([src,alt],imageIndex)=><img key={src} className={imageIndex===0?"service-image service-image-main":"service-image"} src={src} alt={alt} width="1000" height="1000" loading="lazy" />)}
          <span className="service-number">0{i+1}</span>
        </div>
        <div className="service-content"><span className="service-icon"><Icon/></span><h3>{title}</h3><p>{text}</p><strong className="service-result"><CheckCircle2 size={15}/>{result}</strong><a href={`/services/${slug}`}>Read the service guide <ArrowRight size={15}/></a></div>
      </article>)}</div>
    </section>
    <section className="section faq" id="faq">
      <div className="section-heading"><div><p className="kicker">Clear answers for online sellers</p><h2>Before you contact<br/><em>your China-side partner.</em></h2></div><p>These are the questions we hear most often from e-commerce sellers who need better control over sourcing, packaging, quality and multi-supplier shipments.</p></div>
      <div className="faq-list">{buyerFaqs.map(({question,answer})=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      <a className="faq-more" href="mailto:winrelia@hotmail.com?subject=Winrelia%20e-commerce%20supply%20chain%20question">Ask about your SKU <ArrowRight size={15}/></a>
    </section>
    <section className="audit" id="audit">
      <div className="audit-copy"><p className="kicker light">A practical first step</p><h2>Start with<br/><em>one existing SKU.</em></h2><p>Before changing suppliers or committing to a large order, let us check where packaging, fulfilment, sourcing structure or customization may be costing you margin.</p><a className="button white" href="mailto:winrelia@hotmail.com?subject=Free%20SKU%20Audit&body=Product%20link%3A%0ACurrent%20pack%20size%20and%20weight%3A%0ATarget%20market%3A%0ASales%20channel%3A%0ACurrent%20challenge%3A">Request your free audit <ArrowRight size={18}/></a></div>
      <div className="audit-panel"><div><span>YOU SEND</span><ul><li>Product link or specification</li><li>Current pack size and weight</li><li>Target country and sales channel</li><li>Current supplier or fulfilment issue</li></ul></div><div><span>WE REVIEW</span><ul><li>Packaging and size-tier opportunity</li><li>Likely cost and operational gaps</li><li>Small-batch or kit options</li><li>A practical China-side next step</li></ul></div></div>
    </section>
    <section className="why" id="why">
      <div className="why-copy"><p className="kicker light">Built for e-commerce operations</p><h2>One team behind<br/><em>better landed results.</em></h2><p>We do not measure success by how many factories we contact. We focus on what arrives: the right product, in the right pack, with the right records, ready for the right channel.</p><a className="button white" href="https://wa.me/8613430302527?text=Hi%20Owen%2C%20I%20need%20help%20improving%20my%20China-side%20e-commerce%20supply%20chain." target="_blank" rel="noreferrer">Discuss your challenge <ArrowRight size={18}/></a></div>
      <div className="why-list"><article><span>01</span><div><h3>Margin before factory price</h3><p>We consider packaging, handling, fulfilment size and inventory—not only the ex-factory quotation.</p></div></article><article><span>02</span><div><h3>Small-batch testing before scale</h3><p>Build branded trial inventory and differentiated kits without waiting for every factory to accept a large MOQ.</p></div></article><article><span>03</span><div><h3>China buffer stock, finished later</h3><p>Hold neutral stock, then label, kit, pack and split it when market demand becomes clearer.</p></div></article><article><span>04</span><div><h3>Problems converted into controls</h3><p>Returns, reviews and previous defects become documented checks for the next production batch.</p></div></article></div>
    </section>
    <section className="section process" id="process"><div className="section-heading"><div><p className="kicker">A measurable working process</p><h2>Review first.<br/><em>Execute with evidence.</em></h2></div><p>Start with a single SKU, shipment or urgent problem. Expand the relationship only after you see how our China-side team works.</p></div><div className="process-grid">{process.map(([n,t,b])=><article key={n}><span>{n}</span><div className="process-dot"/><h3>{t}</h3><p>{b}</p></article>)}</div></section>
    <section className="section about" id="about"><div className="about-panel"><p className="kicker light">Based in Shenzhen, working globally</p><h2>Your e-commerce<br/><em>operations team in China.</em></h2><p>WINRELIA TECHNOLOGY CO., LTD brings sourcing, supplier coordination, quality control, warehousing, packaging, consolidation, kitting and shipment preparation under one accountable team, with operational support across Shenzhen, Dongguan and Guangzhou.</p><ul><li><CheckCircle2/>SKU-level packing, carton and batch records</li><li><CheckCircle2/>Small-batch branding and multi-factory kitting</li><li><CheckCircle2/>Quality, documentation and shipment preparation</li></ul><a className="about-link" href="https://www.linkedin.com/in/owen-l-066393135/" target="_blank" rel="me noreferrer"><Linkedin size={18}/>Connect with Owen Liang on LinkedIn</a></div><div className="promise"><img src="/winrelia-logo.png" alt=""/><blockquote>Helping you win your markets.</blockquote><p>From China-side complexity to inventory ready for the UK, Europe, USA, Canada, Australia and beyond.</p></div></section>
    <section className="closing" id="contact"><span className="closing-mark">W</span><p className="kicker light">One SKU is enough to begin</p><h2>Find the hidden cost<br/><em>before your next order.</em></h2><p>Send Owen a product link, current package size and target market. We will reply with a practical review of where cost or risk may be reduced.</p><div className="actions"><a className="button white" href="https://wa.me/8613430302527?text=Hi%20Owen%2C%20I%27d%20like%20a%20free%20SKU%20audit.%20Here%20is%20my%20product%20link%3A" target="_blank" rel="noreferrer">WhatsApp Owen · +86 134 3030 2527 <ArrowRight size={18}/></a><a className="email-link" href="mailto:winrelia@hotmail.com?subject=Free%20SKU%20audit">winrelia@hotmail.com</a></div></section>
    <footer><img src="/winrelia-logo.png" alt="Winrelia" width="165" height="55"/><p>WINRELIA TECHNOLOGY CO., LTD · Shenzhen, China · WhatsApp +86 134 3030 2527</p><a className="footer-social" href="https://www.linkedin.com/in/owen-l-066393135/" target="_blank" rel="me noreferrer"><Linkedin size={16}/>LinkedIn · Owen Liang</a><p>© 2026 Winrelia</p></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: buyerFaqs.map(({question, answer}) => ({"@type": "Question", name: question, acceptedAnswer: {"@type": "Answer", text: answer}})),
    }) }} />
  </main>;
}
