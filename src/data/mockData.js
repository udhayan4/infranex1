// Authentic Data & Case Studies extracted from Rodic Challenge PDF (Infranite Globaltech & Rodic Consultants)

export const COMPANY_INFO = {
  name: "InfraSight AI",
  tagline: "Smarter Infrastructure for a Stronger India",
  subtitle: "See the asset. Predict the risk. Act before the delay.",
  heroHeading: "From Infrastructure Data to Infrastructure Intelligence.",
  heroSub: "InfraSight AI transforms roads, bridges, tunnels and infrastructure assets into a continuously monitored, risk-aware and predictive digital ecosystem.",
  developer: "Infranite Globaltech Pvt Ltd (IGT)",
  developerTag: "BUILD | CONNECT | ENABLE",
  dpiitRecognised: true,
  qmsCertification: "ISO QMS Valid through January 2028",
  director: "Vinay Katwe",
  directorTitle: "Director, Infranite Globaltech Pvt Ltd",
  directorQuote: "We have operated the kind of infrastructure we now want to instrument with AI. Our execution experience gives us a unique advantage in building real-world solutions.",
  challengeName: "AI Infrastructure Intelligence & Innovation",
  challengeTrack: "AI for Roads, Bridges & Tunnels",
  partners: ["Rodic Consultants", "Nasscom", "#startupindia"]
};

export const PROVEN_TRACK_RECORD = [
  { label: "Uncovered Villages", value: "1,680", sub: "Under nationwide 4G saturation programme" },
  { label: "Programme Budget Governed", value: "₹800+ Cr", sub: "Large-scale infrastructure delivery" },
  { label: "Sites Executed", value: "850+", sub: "BSNL 4G across Assam, Meghalaya, Mizoram & Tripura" },
  { label: "OFC Network Laid", value: "4,000 km", sub: "Across 10 districts in complex terrains" },
  { label: "Villages Upgraded", value: "1,279", sub: "Upgraded from 2G/3G to high-speed 4G" },
  { label: "Digital Kiosks Deployed", value: "10,000+", sub: "Last-mile citizen connectivity" }
];

export const COMMAND_CENTER_STATS = {
  totalAssets: "18,420",
  activeAlerts: "247",
  openWorkOrders: "486",
  avgResponseTime: "2.4 days",
  networkHealthIndex: "78 / 100",
  healthDistribution: { good: "63%", fair: "27%", poor: "8%", critical: "2%" },
  roadNetworkHealth: { good: "72%", watch: "20%", critical: "8%" },
  assetsAtRisk: "1,842 (10%)"
};

export const MOCK_ASSETS = [
  {
    id: "NH-48-KM124",
    name: "NH-48 Corridor (KM 124.2 – 125.0)",
    type: "Road",
    route: "NH-48",
    chainage: "KM 124.3",
    state: "Maharashtra",
    coordinates: [18.985, 73.120],
    conditionScore: 62,
    riskLevel: "High",
    riskScore: 92,
    defectDensity: "High",
    trend: "Worsening",
    trafficExposure: "High (45,000 PCU/day)",
    lastInspection: "12 Aug 2026",
    nextInspection: "Scheduled in 48h",
    detectedIssues: [
      { type: "Pothole", severity: "High", dimension: "0.8m × 0.6m", depth: "55mm", confidence: "92%" },
      { type: "Alligator Cracking", severity: "Medium", dimension: "2.3m length", confidence: "87%" },
      { type: "Edge Damage", severity: "Medium", dimension: "1.2m² area", confidence: "84%" }
    ],
    predictedFailureRisk: "Rapid structural base degradation within 14-21 days under monsoon rainfall.",
    recommendedAction: "Immediate site verification within 24 hours and automated cold-mix resurfacing work order dispatch.",
    maintenancePriority: "Immediate (Priority 1)"
  },
  {
    id: "BR-07-MAHA",
    name: "Major Viaduct Bridge BR-07 (Length: 620m)",
    type: "Bridge",
    route: "NH-66",
    chainage: "KM 189.4",
    state: "Goa / Maharashtra Border",
    coordinates: [15.820, 73.840],
    conditionScore: 78,
    riskLevel: "High",
    riskScore: 87,
    defectDensity: "Moderate",
    trend: "Moderate Deterioration",
    trafficExposure: "Heavy Freight Corridor",
    lastInspection: "18 Aug 2026",
    nextInspection: "14 Days",
    detectedIssues: [
      { type: "Structural Crack", severity: "Medium", location: "Pier P3 (0.8mm width)", confidence: "94%" },
      { type: "Elastomeric Bearing Movement", severity: "Normal-Watch", location: "Bearing Pier P2", confidence: "91%" },
      { type: "Expansion Joint Wear", severity: "Medium", location: "Joint J-04", confidence: "88%" }
    ],
    predictedFailureRisk: "Potential micro-crack elongation into shear zone under dynamic live heavy-axle load.",
    recommendedAction: "Schedule ultrasonic non-destructive testing (NDT) within 7 days and install vibration telemetry sensors.",
    maintenancePriority: "High (Priority 2)"
  },
  {
    id: "TUN-T04-GHAT",
    name: "Western Ghats Mountain Tunnel T-04 (3.8 km)",
    type: "Tunnel",
    route: "SH-27 Express",
    chainage: "KM 78.5",
    state: "Karnataka",
    coordinates: [14.150, 74.820],
    conditionScore: 82,
    riskLevel: "High",
    riskScore: 78,
    defectDensity: "Low-Medium",
    trend: "Stable with localized seepage",
    trafficExposure: "18,200 vehicles/day",
    lastInspection: "25 Aug 2026",
    nextInspection: "7 Days",
    detectedIssues: [
      { type: "Water Ingress & Seepage", severity: "Medium", location: "Chainage 2.6 km Arch Crown", confidence: "93%" },
      { type: "Lighting Array Luminaire Outage", severity: "High", location: "Chainage 3.4 km Zone B", confidence: "98%" },
      { type: "Jet Fan J-08 Vibration", severity: "Low", location: "Chainage 3.7 km", confidence: "86%" }
    ],
    predictedFailureRisk: "Secondary electrical shorts from moisture buildup; reduced optical visibility in Zone B.",
    recommendedAction: "Dispatch electrical maintenance team for luminaire replacement; inject polyurethane grout at seepage point 2.6 km.",
    maintenancePriority: "High (Priority 3)"
  },
  {
    id: "SH-27-KM45",
    name: "State Highway SH-27 (KM 45.0 – 52.0)",
    type: "Road",
    route: "SH-27",
    chainage: "KM 45.8",
    state: "Karnataka",
    coordinates: [13.340, 75.120],
    conditionScore: 64,
    riskLevel: "Medium",
    riskScore: 64,
    defectDensity: "Medium",
    trend: "Gradual Rutting",
    trafficExposure: "Medium (14,000 PCU/day)",
    lastInspection: "01 Sep 2026",
    nextInspection: "21 Days",
    detectedIssues: [
      { type: "Longitudinal Rutting", severity: "Medium", dimension: "18mm depth / 45m stretch", confidence: "89%" },
      { type: "Drainage Siltation", severity: "Low", dimension: "Side drain blocked 30%", confidence: "85%" }
    ],
    predictedFailureRisk: "Hydroplaning hazard during heavy downpour.",
    recommendedAction: "Milling and overlay scheduling in Q4 preventive maintenance cycle.",
    maintenancePriority: "Medium (Priority 4)"
  },
  {
    id: "BR-12-RIVER",
    name: "River Crossing Bridge BR-12 (Length: 410m)",
    type: "Bridge",
    route: "SH-35",
    chainage: "KM 78.2",
    state: "Madhya Pradesh",
    coordinates: [23.180, 77.410],
    conditionScore: 71,
    riskLevel: "Medium",
    riskScore: 58,
    defectDensity: "Low",
    trend: "Stable",
    trafficExposure: "Mixed Traffic",
    lastInspection: "05 Sep 2026",
    nextInspection: "30 Days",
    detectedIssues: [
      { type: "Concrete Spalling", severity: "Low", location: "Abutment A1", confidence: "90%" },
      { type: "Parapet Wall Impact", severity: "Medium", location: "Span 4 Crash Barrier", confidence: "95%" }
    ],
    predictedFailureRisk: "Exposure of reinforcing steel to atmospheric carbonation.",
    recommendedAction: "Patching with anti-corrosive mortar and replacement of crash barrier beam.",
    maintenancePriority: "Medium (Priority 5)"
  }
];

export const ROAD_DEFECTS_CATALOG = [
  {
    title: "Potholes",
    severity: "High",
    color: "#FF3B57",
    desc: "Automated depth estimation and surface area calculation (0.8m × 0.6m, depth 55mm). Flags hazardous wheel-impact points.",
    detectionTech: "Computer Vision + Stereo Depth Camera",
    accuracy: "> 88%"
  },
  {
    title: "Structural Cracking",
    severity: "Medium-High",
    color: "#FFB020",
    desc: "Detects longitudinal, transverse, and alligator fatigue cracking with micro-millimeter crack-width classification (down to 0.5mm).",
    detectionTech: "High-Res Line-Scan + CNN Segmentation",
    accuracy: "> 91%"
  },
  {
    title: "Rutting & Surface Depressions",
    severity: "Medium",
    color: "#00F0FF",
    desc: "Wheel path depression mapping from vehicle-mounted LiDAR and photometric stereo. Prevents aquaplaning accidents.",
    detectionTech: "Mobile 3D LiDAR & Profilometer",
    accuracy: "> 94%"
  },
  {
    title: "Shoulder & Edge Damage",
    severity: "Medium",
    color: "#00E5A3",
    desc: "Identifies shoulder drop-offs, gravel scour, and pavement edge breaking along rural and intercity highway corridors.",
    detectionTech: "Drone Aerial Imagery + Edge AI",
    accuracy: "> 87%"
  },
  {
    title: "Drainage & Shoulder Siltation",
    severity: "Medium",
    color: "#38BDF8",
    desc: "Monitors side drains, culvert siltation, and vegetative overgrowth before monsoon waterlogging damages the road subbase.",
    detectionTech: "Thermal / Optical Multispectral Imagery",
    accuracy: "> 86%"
  },
  {
    title: "Signage & Lane Markings",
    severity: "Low-Medium",
    color: "#A78BFA",
    desc: "Retroreflectivity assessment, missing signboard alerts, and faded thermoplast lane-marking degradation tracking.",
    detectionTech: "Night-Vision Video AI + OCR",
    accuracy: "> 95%"
  }
];

export const ROAD_KPIS = [
  { label: "Target Network Coverage", value: "100%", sub: "Continuous network-wide monitoring" },
  { label: "Defect Detection Accuracy", value: "> 85%", sub: "Validated against engineer ground-truth" },
  { label: "False Positive Rate", value: "< 10%", sub: "Strict engineering threshold filters" },
  { label: "GIS Location Accuracy", value: "90%", sub: "Sub-meter geo-tagging precision" },
  { label: "Inspection Effort Saved", value: "50%", sub: "Eliminates dangerous manual walking" },
  { label: "Faster Response Time", value: "30%", sub: "Automated work orders dispatched in <24h" },
  { label: "Asset Life Extension", value: "20%", sub: "Estimated savings via preventive repair" }
];

export const BRIDGE_COMPONENTS = [
  {
    id: "deck",
    name: "Bridge Deck & Riding Surface",
    condition: "Good (84/100)",
    status: "Normal",
    statusColor: "#00E5A3",
    defects: "Minor surface wear; waterproofing membrane intact.",
    risk: "Low",
    action: "Routine high-pressure washing and re-sealing in next cycle.",
    telemetry: { roughnessIRI: "2.1 m/km", frictionIndex: "0.68", drainage: "Clear" }
  },
  {
    id: "pier",
    name: "Pier P3 (Substructure)",
    condition: "Watch (68/100)",
    status: "Defect Detected",
    statusColor: "#FFB020",
    defects: "0.8mm vertical shear crack detected at pier cap junction; carbonation depth 12mm.",
    risk: "Medium",
    action: "Schedule ultrasonic pulse velocity testing within 7 days; epoxy injection recommended.",
    telemetry: { crackWidth: "0.8 mm", crackLength: "1.4 m", tiltAngle: "0.02°" }
  },
  {
    id: "bearing",
    name: "Elastomeric Bearings (Pier P2 & P3)",
    condition: "Good (79/100)",
    status: "Operational",
    statusColor: "#00F0FF",
    defects: "Normal longitudinal thermal displacement (14mm). No elastomeric bulging or shear tearing.",
    risk: "Low",
    action: "Continuous wireless displacement telemetry; inspect bearing pads semi-annually.",
    telemetry: { displacement: "14 mm", shearStrain: "0.18", temperature: "28.4°C" }
  },
  {
    id: "girder",
    name: "Prestressed Concrete Girders",
    condition: "Good (88/100)",
    status: "Optimal",
    statusColor: "#00E5A3",
    defects: "No tendon distress; midspan dynamic deflection within IRC 112 permissible limits.",
    risk: "Low",
    action: "Keep dynamic weigh-in-motion (WIM) monitoring active.",
    telemetry: { maxDeflection: "4.2 mm", naturalFrequency: "3.42 Hz", strain: "142 µε" }
  },
  {
    id: "joint",
    name: "Modular Expansion Joints (J-04)",
    condition: "Watch (72/100)",
    status: "Wear Detected",
    statusColor: "#FFB020",
    defects: "Neoprene seal weathering; debris accumulation in trough segment 3.",
    risk: "Medium",
    action: "Clean joint trough and replace damaged seal during night-time lane closure.",
    telemetry: { jointGap: "48 mm", sealIntegrity: "74%", acousticNoise: "+4 dB" }
  },
  {
    id: "foundation",
    name: "Well Foundation & Scour Bed",
    condition: "Good (92/100)",
    status: "Safe",
    statusColor: "#00E5A3",
    defects: "Sonar bathymetry indicates riverbed scour depth 1.8m below design danger mark.",
    risk: "Low",
    action: "Monitor post-monsoon bed levels via echo-sounder survey.",
    telemetry: { scourDepth: "1.8 m", safeMargin: "3.6 m", settlement: "0 mm" }
  }
];

export const TUNNEL_TELEMETRY = {
  id: "T-04",
  name: "Western Ghats Mountain Tunnel T-04",
  length: "3.8 km",
  overallHealth: "82 / 100",
  structuralStatus: "Safe (Lining 82%)",
  ventilationStatus: "Optimal (Jet Fans Operational)",
  trafficStatus: "Normal (45 km/h avg)",
  airQuality: { co: "2 ppm (Threshold: 30 ppm)", no2: "0.04 ppm", visibility: "96%", temperature: "24°C" },
  alerts: [
    { chainage: "KM 1.2", defect: "Concrete lining crack (0.6mm)", severity: "Low", time: "Logged 4h ago" },
    { chainage: "KM 2.6", defect: "Water seepage through joint", severity: "Medium", time: "Logged 1d ago" },
    { chainage: "KM 3.4", defect: "Luminaire bank 14 electrical trip", severity: "High", time: "Logged 2h ago" },
    { chainage: "KM 3.7", defect: "Jet Fan J-08 vibration harmonic", severity: "Low", time: "Logged 6h ago" }
  ]
};

export const RISK_MATRIX_DATA = [
  { id: "A-01", name: "NH-48 (KM 312-318) Bridge Approach", type: "Road", probability: 92, impact: 90, score: 92, category: "Critical", status: "Work Order Pending", cost: "₹18.4 Lakh" },
  { id: "A-02", name: "BR-07 Pier P3 Shear Zone", type: "Bridge", probability: 85, impact: 88, score: 87, category: "Critical", status: "NDT Inspection Slated", cost: "₹12.2 Lakh" },
  { id: "A-03", name: "Tunnel T-04 Luminaire Bank & Seepage", type: "Tunnel", probability: 78, impact: 80, score: 78, category: "High", status: "Dispatched", cost: "₹6.8 Lakh" },
  { id: "A-04", name: "SH-27 (KM 45-52) Rutted Stretch", type: "Road", probability: 64, impact: 65, score: 64, category: "Medium", status: "In Planned Cycle", cost: "₹9.5 Lakh" },
  { id: "A-05", name: "BR-12 Abutment Spalling", type: "Bridge", probability: 55, impact: 60, score: 58, category: "Medium", status: "Monitoring", cost: "₹4.1 Lakh" },
  { id: "A-06", name: "NH-66 KM 124 Drainage Clog", type: "Road", probability: 48, impact: 52, score: 50, category: "Medium", status: "Assigned", cost: "₹2.3 Lakh" },
  { id: "A-07", name: "Tunnel T-02 Jet Fan Bearing", type: "Tunnel", probability: 35, impact: 45, score: 40, category: "Low", status: "Routine O&M", cost: "₹1.5 Lakh" },
  { id: "A-08", name: "SH-35 KM 80 Lane Marking Refresh", type: "Road", probability: 28, impact: 32, score: 30, category: "Low", status: "Scheduled", cost: "₹1.8 Lakh" }
];

export const WORK_ORDER_SAMPLE = {
  id: "#WO-45872",
  asset: "NH-48 | KM 124.3 (National Highway)",
  defect: "Severe Pothole & Base Shear (0.8m × 0.6m, depth 55mm)",
  priority: "High",
  category: "Pavement Urgent Repair",
  contractor: "ABC Infra Services Ltd",
  assignedDate: "12 Sep 2026",
  targetClosure: "18 Sep 2026",
  turnaroundTime: "4.5 days (Historical benchmark: 12 days)",
  status: "Open",
  slaCompliance: "> 90%",
  verificationAiMatch: "95% match confirmed post-repair",
  aiVerificationText: "AI compared before and after high-res imagery. Geometric depression fully eliminated, asphalt compaction level verified within 95% match score. Audit record created."
};

export const MONETISATION_OPPORTUNITIES = [
  { title: "5G Small Cell Hosting", yield: "₹45,000 / month / site", potential: "Telecom operators lease light poles and gantry nodes for dense 5G connectivity." },
  { title: "Smart Bus Shelters (Ads + Wi-Fi)", yield: "₹75,000 / month / shelter", potential: "Programmatic DOOH advertising displays + citizen transit Wi-Fi." },
  { title: "Bridge / Flyover Sponsorship", yield: "₹12-25 Lakh / year", potential: "Corporate environmental branding on viaduct piers and architectural illumination." },
  { title: "EV Fast-Charging Hubs", yield: "₹1.2 Lakh / month / hub", potential: "Revenue share on highway wayside amenities and public land parcels." },
  { title: "Environmental & Weather Data Streams", yield: "₹30,000 / month / stream", potential: "Hyperlocal weather and air quality API syndication to logistics and research." },
  { title: "Smart Sensor-Equipped Parking", yield: "₹80,000 / month / facility", potential: "Real-time occupancy pricing and automated FASTag/UPI fee collection." }
];

export const IMPLEMENTATION_ROADMAP = [
  {
    phase: "Phase 01",
    name: "POC (Proof of Concept)",
    duration: "14 Days",
    scope: "10-20 Road Segments",
    objective: "Prove the AI Intelligence Loop",
    deliverables: [
      "AI defect detection & measurement on real sample road videos/images",
      "Condition & risk scoring model calibration",
      "Interactive evidence dashboard & engineer validation feedback",
      "No heavy hardware upfront — use existing data extracts"
    ],
    outcome: "Working end-to-end intelligence loop with zero disruption to field ops."
  },
  {
    phase: "Phase 02",
    name: "PILOT",
    duration: "6 – 8 Weeks",
    scope: "1 Live Corridor / Highway Project",
    objective: "Validate in Real Rodic Operational Environment",
    deliverables: [
      "Real Rodic project data integration (GIS + inspection history)",
      "Engineer validation & feedback on prioritization rules",
      "Field workflow integration (mobile app alerts & work orders)",
      "Validate economic business case and response time reductions"
    ],
    outcome: "Validated solution with engineer-in-the-loop sign-off."
  },
  {
    phase: "Phase 03",
    name: "SCALE",
    duration: "3 – 6 Months",
    scope: "Multi-Project Rollout",
    objective: "Cross-Asset Expansion (Roads → Bridges → Tunnels)",
    deliverables: [
      "Integrate IoT sensors, CCTV feeds, drone flights, and GIS layers",
      "Advanced predictive analytics & deterioration forecasting",
      "Maintenance contractor workflow and SLA tracking",
      "Centralized project oversight across multiple state circles"
    ],
    outcome: "Production-ready multi-asset platform delivering measurable ROI."
  },
  {
    phase: "Phase 04",
    name: "EXPAND",
    duration: "6+ Months",
    scope: "National / Multi-State Footprint",
    objective: "Full Infrastructure Command & Control Centre",
    deliverables: [
      "Enterprise iCCC deployment for Rodic central and state monitoring",
      "Continuous model training from nationwide repair feedback",
      "Asset monetization layer (5G small cells, EV, smart signage)",
      "Next-gen digital twin with real-time autonomous alerting"
    ],
    outcome: "A self-sustaining, intelligent infrastructure ecosystem for India."
  }
];

export const ARCHITECTURE_LAYERS = [
  {
    layer: "01",
    name: "Multi-Source Data Ingestion",
    items: ["Vehicle-mounted optical cameras (80-100 km/day)", "Drone & aerial LiDAR surveys", "Existing CCTV & surveillance feeds", "IoT structural sensors (strain, tilt, vibration)", "GIS layers, chainage & asset registers", "Historical maintenance & weather feeds"]
  },
  {
    layer: "02",
    name: "Data Ingestion & Processing",
    items: ["High-speed stream pre-processing & de-skewing", "Sub-meter geo-tagging & chainage alignment", "Secure REST APIs, video ingest pipelines, and cloud/edge connectors", "Unified data lake for images, point-clouds, and time-series telemetry"]
  },
  {
    layer: "03",
    name: "AI Intelligence & Risk Engine",
    items: ["Computer Vision defect detection, sizing, and classification", "Structural Health & Asset condition scoring algorithms", "Predictive deterioration models & failure risk forecasting", "GenAI Copilot: Explains findings, drafts work orders, and generates DPR reports"]
  },
  {
    layer: "04",
    name: "Application & Command Workflow",
    items: ["Interactive Command & Control Centre (iCCC) dashboard", "Mobile-first Field App with online/offline audit verification", "Closed-loop Work Order dispatch and contractor SLA monitoring", "Seamless API integration with Rodic Eye, ERP, and PMS systems"]
  }
];

export const RODIC_COLLABORATION_NEEDS = [
  {
    title: "Access to Project / Asset Data",
    desc: "Sample data to develop and test the PoC across 10-20 road segments. Existing inspection images/videos, drawings, and maintenance records.",
    tag: "Data Ingestion"
  },
  {
    title: "Domain Expertise & Guidance",
    desc: "Access to Rodic subject matter experts (roads, bridges, tunnels) to calibrate engineering rules, validate AI detection confidence, and align priorities.",
    tag: "Engineering Validation"
  },
  {
    title: "Access to Existing Systems",
    desc: "Relevant interfaces or data extracts with GIS, asset inventories, and maintenance platforms (e.g. Rodic Eye) under standard IT/security guidelines.",
    tag: "System Integration"
  },
  {
    title: "Project Coordination (SPOC)",
    desc: "Nomination of a single point of contact (SPOC) to streamline data approvals, schedule periodic reviews, and coordinate stakeholder demonstrations.",
    tag: "Governance"
  },
  {
    title: "Field Support (As Required)",
    desc: "Facilitate site access for pilot drone or vehicle surveys, and coordinate with field maintenance teams for on-ground repair validation.",
    tag: "Ground Truth"
  },
  {
    title: "Long-Term Collaborative Vision",
    desc: "Work together beyond the PoC to explore deep integration into Rodic's nationwide project management and consulting portfolio.",
    tag: "Strategic Growth"
  }
];

export const SLIDE_METADATA = [
  { page: 1, title: "Proven Track Record", desc: "IGT field execution: 1,680 villages, ₹800+ Cr budget, 850+ 4G sites.", img: "/slides/page_1.png" },
  { page: 2, title: "Why IGT. Why Now.", desc: "Execution capability + AI engineering: Field experience meets deep tech.", img: "/slides/page_2.png" },
  { page: 3, title: "AI Command & Control Centre", desc: "Integrated ecosystem for Roads, Bridges, Tunnels, and Risk Prioritization.", img: "/slides/page_3.png" },
  { page: 4, title: "Use Case 01: Road Condition AI", desc: "Vehicle-mounted scanning, crack/pothole classification, and KPIs.", img: "/slides/page_4.png" },
  { page: 5, title: "Use Case 02: Bridge Health AI", desc: "Bridge BR-07 structural monitoring, pier shear, bearing tilt, and NDT.", img: "/slides/page_5.png" },
  { page: 6, title: "Use Case 03: Tunnel Safety AI", desc: "Tunnel T-04 cross-section, lighting, ventilation, and water seepage.", img: "/slides/page_6.png" },
  { page: 7, title: "Use Case 06: Unified iCCC", desc: "Enterprise single-pane-of-glass across 18,420 assets and active alerts.", img: "/slides/page_7.png" },
  { page: 8, title: "Use Case 04: Asset Risk & Priority", desc: "Risk matrix, failure probability vs consequence, optimized budget.", img: "/slides/page_8.png" },
  { page: 9, title: "Use Case 05: Operations & Workflow", desc: "Closed-loop work orders, field app, and before/after AI verification.", img: "/slides/page_9.png" },
  { page: 10, title: "Asset Monetisation & Value", desc: "5G small cells, EV hubs, digital ads, and ₹42 Cr illustrative yield.", img: "/slides/page_10.png" },
  { page: 11, title: "Road Asset POC Scope", desc: "10-20 road segments, 6-stage loop (See, Measure, Assess, Prioritise, Act, Verify).", img: "/slides/page_11.png" },
  { page: 12, title: "Implementation Roadmap", desc: "Prove First, Scale Modularly: POC (14d) → Pilot (6-8w) → Scale → Expand.", img: "/slides/page_12.png" },
  { page: 13, title: "System Architecture", desc: "4-layer tech stack with GenAI copilot, edge processing, and Rodic integration.", img: "/slides/page_13.png" },
  { page: 14, title: "What We Need From Rodic", desc: "6 collaboration pillars for real-world impact and national scale.", img: "/slides/page_14.png" }
];
