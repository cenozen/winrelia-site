export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  fit: string[];
  steps: string[];
  outcomes: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const servicePages: ServicePage[] = [
  {
    slug: "factory-searching-checking",
    title: "Factory Searching & Checking",
    metaTitle: "China Factory Sourcing & Supplier Checking | Winrelia",
    description: "Find and verify suitable Chinese factories for e-commerce products with practical production, capability and risk checks before you place an order.",
    intro: "A supplier that answers quickly is not automatically the right factory. Winrelia helps online sellers compare production capability, product fit, working conditions and communication before a new supplier becomes an expensive problem.",
    image: "/operations/factory-search-1.jpg",
    imageAlt: "Winrelia checking a Chinese supplier production line",
    fit: ["You are testing a new SKU or changing suppliers", "Your product needs a factory with specific equipment or materials", "You want a China-side check before sending a deposit"],
    steps: ["Clarify the product specification, target quantity and selling market", "Shortlist factories around capability, MOQ, lead time and communication", "Check the production environment and compare evidence before recommending the next step"],
    outcomes: ["A supplier shortlist based on fit, not only price", "Fewer sourcing surprises after the order is placed", "A practical path from sample or trial order to repeat supply"],
    faq: [
      { question: "Can Winrelia find a factory for a product I have not sourced before?", answer: "Yes. Send a product link, specification or reference photo. We can map the required production capability, compare suitable factories and identify what needs to be confirmed before ordering." },
      { question: "Do you only work with factories in Shenzhen?", answer: "No. We coordinate suppliers across China and use our Shenzhen-side warehouse and operations team when receiving, checking, repacking or consolidating goods is useful." },
    ],
  },
  {
    slug: "product-qc",
    title: "Product QC",
    metaTitle: "China Product Quality Control for E-commerce Sellers | Winrelia",
    description: "Practical China product quality control with specification checks, measurements, visual inspection and batch evidence before goods leave the supplier.",
    intro: "Quality control should be designed around the defects that create returns, poor reviews and wasted freight. We turn your specification and known risks into checks that can be performed before dispatch.",
    image: "/operations/product-qc-1.jpg",
    imageAlt: "Digital measurement during China product quality control",
    fit: ["You need pre-shipment checks before goods leave China", "Previous batches had dimensions, finish or quantity problems", "Your product requires repeatable inspection records"],
    steps: ["Translate your product requirements into a practical inspection checklist", "Check quantity, dimensions, function, appearance and packaging against the agreed standard", "Share clear batch-level findings so you can decide to release, rework or hold the shipment"],
    outcomes: ["Problems found in China instead of after delivery", "Clearer supplier accountability and batch records", "Fewer avoidable returns, replacements and customer complaints"],
    faq: [
      { question: "What does your product QC cover?", answer: "The scope depends on the SKU. Typical checks include quantity, dimensions, materials, appearance, function, packaging and carton marks, with photos or measurements where they help a release decision." },
      { question: "Can QC be combined with consolidation?", answer: "Yes. Goods from different suppliers can arrive at our China-side operation for checking, repacking, kitting or consolidation before one planned shipment." },
    ],
  },
  {
    slug: "private-label-launch",
    title: "Private Label Launch",
    metaTitle: "Small-Batch Private Label & Branded Packaging in China | Winrelia",
    description: "Launch and test branded e-commerce SKUs with small-batch packaging, labels, inserts and mixed-factory components coordinated in China.",
    intro: "A new brand does not always need a factory-sized MOQ. Winrelia helps online sellers combine practical packaging, labels, inserts and components so a differentiated SKU can be tested before you commit too much cash.",
    image: "/operations/private-label-1.jpg",
    imageAlt: "Branded private-label retail cartons prepared in China",
    fit: ["You want to test a branded SKU before scaling", "A factory MOQ is too high for your first order", "Different components or packaging come from different suppliers"],
    steps: ["Confirm brand assets, pack format, component list and target channel", "Coordinate suppliers, packaging production and small-batch preparation", "Check, label, kit and document the finished retail-ready units"],
    outcomes: ["A more credible first launch with less inventory risk", "Small-batch branding coordinated around the whole SKU", "Packaging that fits your marketplace, fulfilment and customer experience"],
    faq: [
      { question: "Can you support private label when my quantity is below a factory MOQ?", answer: "Often, yes. We review which parts need factory production and which parts can be coordinated separately, then build a realistic small-batch route instead of promising an impossible MOQ." },
      { question: "Can you combine products from more than one factory into one kit?", answer: "Yes. We can coordinate receiving, quantity checks, kitting, relabeling and retail packaging from multiple suppliers at the China-side operation." },
    ],
  },
  {
    slug: "carton-optimization",
    title: "Carton Optimization",
    metaTitle: "Carton Optimization & Packaging Cost Reduction in China | Winrelia",
    description: "Optimize cartons and repack e-commerce products around protection, dimensional weight, fulfilment requirements and total landed cost.",
    intro: "The lowest factory price can still produce an expensive shipment if the carton wastes space or crosses a fulfilment size tier. We review product protection, pack dimensions and shipping reality together.",
    image: "/operations/carton-optimization-1.jpg",
    imageAlt: "Supplier cartons being consolidated for carton optimization",
    fit: ["Your current packaging wastes volume or pushes up delivery fees", "You sell through parcel, fulfilment or marketplace size tiers", "Different suppliers use inconsistent cartons and labels"],
    steps: ["Record the current product, inner pack and master carton dimensions", "Compare practical pack alternatives around protection, handling and freight", "Repack or coordinate revised cartons and keep the final shipment records clear"],
    outcomes: ["Less wasted space and better container utilization", "A clearer connection between pack size and landed cost", "Packaging prepared for the route and fulfilment model you actually use"],
    faq: [
      { question: "How can carton optimization reduce an e-commerce seller's cost?", answer: "A better pack can reduce dimensional weight, avoid a costly size tier, improve container utilization and simplify handling. The correct choice depends on product protection and the destination fulfilment rules." },
      { question: "Can you optimize cartons after products arrive from the factory?", answer: "Yes. We can receive goods, assess the current pack, repack or relabel where appropriate and prepare the shipment around the final channel requirements." },
    ],
  },
  {
    slug: "palletizing-container-loading",
    title: "Palletizing & Container Loading",
    metaTitle: "China Consolidation, Palletizing & Container Loading | Winrelia",
    description: "Coordinate multiple Chinese suppliers, palletize cargo and load one consolidated shipment with clearer records and better freight utilization.",
    intro: "When several factories finish at different times, the difficult part is often coordination rather than buying. Winrelia brings supplier cargo together, checks the shipment plan and prepares one controlled loading operation.",
    image: "/operations/loading-1.jpg",
    imageAlt: "Mixed supplier cartons loaded into an export container in China",
    fit: ["Your order is split across several Chinese suppliers", "Suppliers have different loading, documentation or timing constraints", "You want one coordinated shipment instead of scattered dispatches"],
    steps: ["Build a supplier-by-supplier arrival and documentation plan", "Receive, identify and reconcile cargo before loading", "Palletize or load around protection, space utilization and the chosen shipping route"],
    outcomes: ["One accountable China-side shipment plan", "Fewer supplier calls and fewer last-minute loading surprises", "Better use of available container or consolidation space"],
    faq: [
      { question: "Can you consolidate goods from several Chinese factories?", answer: "Yes. We coordinate arrivals, warehouse receiving, quantity records, QC or repacking where needed, then prepare a consolidated shipment under one operating plan." },
      { question: "Do you support both palletized and loose container loading?", answer: "Yes. The loading method depends on the cargo, destination requirements, protection needs and how the shipment can use space efficiently." },
    ],
  },
  {
    slug: "warehouse-storage",
    title: "Warehouse Storage",
    metaTitle: "China Warehouse Storage & E-commerce Inventory Handling | Winrelia",
    description: "Use China warehouse storage to receive, hold, label, kit, split and release inventory from multiple suppliers as your market demand develops.",
    intro: "A China warehouse can be more than a place to park cartons. It can become the buffer between suppliers, packaging decisions, replenishment timing and the shipment your market actually needs.",
    image: "/operations/warehouse-storage-1.jpg",
    imageAlt: "Palletized e-commerce inventory organized in a China warehouse",
    fit: ["Your suppliers finish at different times", "You need a buffer before a consolidated export shipment", "You want to delay final labeling, kitting or split shipments until demand is clearer"],
    steps: ["Receive and identify cargo against supplier and SKU records", "Hold, count, label, kit, repack or split stock according to the next shipment plan", "Release retail-ready inventory with the records needed for dispatch"],
    outcomes: ["Less scattered stock across different factories", "More flexibility around replenishment and shipment timing", "A single China-side point for inventory coordination"],
    faq: [
      { question: "Can you store goods from multiple suppliers together?", answer: "Yes. We can receive and organize goods by supplier, SKU or shipment reference so they can be checked, combined, repacked or released under a clear plan." },
      { question: "Can stock be stored before final packaging is decided?", answer: "Yes. Where the product and packaging allow it, neutral stock can be held and finished later with labels, kits or market-specific packing." },
    ],
  },
];

export const buyerFaqs = [
  { question: "What does Winrelia do for e-commerce sellers?", answer: "Winrelia is a China-side sourcing and operations partner for online sellers and growing brands. We coordinate factory searching, product QC, private label launch, packaging optimization, multi-supplier consolidation, warehouse handling and shipment preparation." },
  { question: "Can Winrelia work with several Chinese suppliers on one order?", answer: "Yes. We can coordinate supplier timing, receive goods into our China-side operation, check and organize cargo, then prepare a consolidated shipment under one accountable plan." },
  { question: "Can you help with a small first order or private-label test?", answer: "Yes. We review the product, packaging and component requirements and look for a practical small-batch route before you scale the order." },
  { question: "Which markets do you support?", answer: "We support online sellers and growing brands shipping from China to the UK, Europe, the USA, Australia and other international markets, subject to the product and shipping requirements." },
  { question: "How do I start a review?", answer: "Send a product link or specification, current pack size and weight, target market, sales channel and the problem you want to solve. Winrelia can start with one existing SKU or shipment." },
];
