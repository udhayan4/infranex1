// Simple, Human-Friendly Data for Infranite Globaltech & InfraSight

export const COMPANY_INFO = {
  name: "InfraSight",
  tagline: "Making Roads, Bridges and Tunnels Safer for Everyone",
  subtitle: "Spot road problems early. Fix them quickly. Keep travel safe.",
  heroHeading: "Making Roads and Bridges Safer with Smart Technology.",
  heroSub: "InfraSight uses everyday vehicle cameras and drones to automatically find potholes, bridge cracks, and tunnel issues — so repair teams can fix them before they get worse.",
  developer: "Infranite Globaltech Pvt Ltd (IGT)",
  developerTag: "BUILD • CONNECT • ENABLE",
  dpiitRecognised: true,
  qmsCertification: "ISO Certified Quality System",
  director: "Vinay Katwe",
  directorTitle: "Director, Infranite Globaltech",
  directorQuote: "We have built real roads and telecom networks across India. We know the practical problems on the ground, so we build simple tools that work in real life.",
  challengeName: "Smart Infrastructure Solutions",
  challengeTrack: "Safer Roads, Bridges & Tunnels",
  partners: ["Rodic Consultants", "Nasscom", "#startupindia"]
};

export const PROVEN_TRACK_RECORD = [
  { label: "Villages Connected", value: "1,680", sub: "Connected with high-speed internet" },
  { label: "Public Projects Managed", value: "₹800+ Cr", sub: "Delivered on time across India" },
  { label: "Mobile Sites Built", value: "850+", sub: "Built across tough hill regions" },
  { label: "Fiber Cables Laid", value: "4,000 km", sub: "Connecting 10 remote districts" },
  { label: "Villages Upgraded", value: "1,279", sub: "Upgraded to fast 4G networks" },
  { label: "Public Kiosks Set Up", value: "10,000+", sub: "Helping citizens access services" }
];

export const COMMAND_CENTER_STATS = {
  totalAssets: "18,420",
  activeAlerts: "247",
  openWorkOrders: "486",
  avgResponseTime: "2.4 days",
  networkHealthIndex: "88% Safe",
  healthDistribution: { good: "72% Safe", fair: "20% Good", poor: "7% Check Soon", critical: "1% Fix Now" },
  roadNetworkHealth: { good: "75% Good", watch: "18% Normal", critical: "7% Need Repair" },
  assetsAtRisk: "184 (Fix Soon)"
};

export const MOCK_ASSETS = [
  {
    id: "ROAD-48",
    name: "Highway NH-48 (Mumbai - Pune Stretch)",
    type: "Road",
    route: "National Highway 48",
    chainage: "Mile 124",
    state: "Maharashtra",
    coordinates: [18.985, 73.120],
    conditionScore: 68,
    riskLevel: "Needs Repair",
    riskScore: 88,
    defectDensity: "3 Potholes found",
    trend: "Getting worse due to rain",
    trafficExposure: "Heavy Daily Traffic (45,000 cars/day)",
    lastInspection: "Yesterday",
    nextInspection: "Scheduled Tomorrow",
    detectedIssues: [
      { type: "Large Pothole", severity: "Needs Quick Fix", dimension: "2.5 ft wide, 2 inches deep", confidence: "94% Sure" },
      { type: "Surface Cracks", severity: "Medium", dimension: "7 ft line crack", confidence: "89% Sure" },
      { type: "Broken Road Edge", severity: "Medium", dimension: "4 ft along side", confidence: "85% Sure" }
    ],
    predictedFailureRisk: "Heavy rain can make this pothole larger and damage car tires.",
    recommendedAction: "Send a repair truck with asphalt to fill and flatten within 24 hours.",
    maintenancePriority: "Priority 1 (Fix Today)"
  },
  {
    id: "BRIDGE-07",
    name: "River Bridge BR-07 (Highway 66)",
    type: "Bridge",
    route: "Highway 66",
    chainage: "Mile 189",
    state: "Goa / Maharashtra Border",
    coordinates: [15.820, 73.840],
    conditionScore: 78,
    riskLevel: "Needs Attention",
    riskScore: 65,
    defectDensity: "Minor Pillar Crack",
    trend: "Stable, but needs monitoring",
    trafficExposure: "Heavy Trucks & Buses",
    lastInspection: "3 Days ago",
    nextInspection: "In 2 Weeks",
    detectedIssues: [
      { type: "Small Pillar Crack", severity: "Watch Closely", location: "Support Pillar #3", confidence: "92% Sure" },
      { type: "Bridge Joint Wear", severity: "Normal Wear", location: "Road Joint #4", confidence: "88% Sure" },
      { type: "Surface Smoothness", severity: "Good", location: "Top Road Layer", confidence: "96% Sure" }
    ],
    predictedFailureRisk: "Crack is small now but should be sealed before heavy monsoon floods.",
    recommendedAction: "Send an inspector with a camera to seal the crack with concrete glue.",
    maintenancePriority: "Priority 2 (Next Week)"
  },
  {
    id: "TUNNEL-04",
    name: "Mountain Pass Tunnel T-04 (2.4 Miles)",
    type: "Tunnel",
    route: "Expressway 27",
    chainage: "Mile 78",
    state: "Karnataka",
    coordinates: [14.150, 74.820],
    conditionScore: 84,
    riskLevel: "Good & Safe",
    riskScore: 35,
    defectDensity: "Minor Water Drop",
    trend: "Safe and Dry",
    trafficExposure: "18,000 cars/day",
    lastInspection: "Last Week",
    nextInspection: "Next Month",
    detectedIssues: [
      { type: "Small Water Leak", severity: "Low", location: "Ceiling near middle", confidence: "91% Sure" },
      { type: "One Light Bulb Off", severity: "Easy Fix", location: "Light Section #14", confidence: "98% Sure" },
      { type: "Fresh Air Fans", severity: "All Working", location: "Fan Units 1-8", confidence: "99% Sure" }
    ],
    predictedFailureRisk: "No structural danger. Change light bulb for better driver visibility.",
    recommendedAction: "Replace light bulb and wipe ceiling moisture during routine night check.",
    maintenancePriority: "Priority 3 (Routine Maintenance)"
  },
  {
    id: "ROAD-27",
    name: "State Highway 27 (Rural Stretch)",
    type: "Road",
    route: "Highway 27",
    chainage: "Mile 45",
    state: "Karnataka",
    coordinates: [13.340, 75.120],
    conditionScore: 82,
    riskLevel: "Good & Safe",
    riskScore: 28,
    defectDensity: "Minor Tire Ruts",
    trend: "Good Condition",
    trafficExposure: "Local Traffic (14,000 cars/day)",
    lastInspection: "10 Days ago",
    nextInspection: "In 3 Weeks",
    detectedIssues: [
      { type: "Slight Tire Ruts", severity: "Normal", dimension: "Gentle road curve", confidence: "90% Sure" },
      { type: "Side Rain Drain", severity: "Good", dimension: "Clean and flowing", confidence: "87% Sure" }
    ],
    predictedFailureRisk: "Road is in good shape. Re-check in regular monthly round.",
    recommendedAction: "Routine cleaning of roadside leaves and dirt.",
    maintenancePriority: "Priority 4 (Normal Check)"
  },
  {
    id: "BRIDGE-12",
    name: "Valley Overpass Bridge BR-12",
    type: "Bridge",
    route: "Highway 35",
    chainage: "Mile 78",
    state: "Madhya Pradesh",
    coordinates: [23.180, 77.410],
    conditionScore: 89,
    riskLevel: "Safe & Sound",
    riskScore: 18,
    defectDensity: "Clean",
    trend: "Very Good",
    trafficExposure: "Normal Highway Traffic",
    lastInspection: "2 Weeks ago",
    nextInspection: "In 1 Month",
    detectedIssues: [
      { type: "Side Wall Paint Scrape", severity: "Cosmetic Only", location: "Side barrier", confidence: "95% Sure" }
    ],
    predictedFailureRisk: "Bridge structure is solid and healthy.",
    recommendedAction: "Repaint side rail during regular annual maintenance.",
    maintenancePriority: "Priority 5 (All Good)"
  }
];

export const ROAD_DEFECTS_CATALOG = [
  {
    title: "Potholes",
    severity: "High Priority",
    color: "#E11D48",
    badge: "badge-red",
    desc: "Automatically spots holes in the road, calculates size and depth, and alerts repair vans so drivers don't bump or damage tires.",
    detectionTech: "Car Dashcam & Drone Video",
    accuracy: "95% Accuracy"
  },
  {
    title: "Road Cracks",
    severity: "Medium Priority",
    color: "#D97706",
    badge: "badge-yellow",
    desc: "Finds small hairline cracks before water seeps in and turns them into big potholes during the rainy season.",
    detectionTech: "High-Definition Road Cameras",
    accuracy: "92% Accuracy"
  },
  {
    title: "Tire Ruts & Dips",
    severity: "Medium Priority",
    color: "#2563EB",
    badge: "badge-blue",
    desc: "Spots uneven tire grooves and sunken road areas where rainwater can gather and cause cars to slip.",
    detectionTech: "Road Profiling Sensors",
    accuracy: "94% Accuracy"
  },
  {
    title: "Broken Road Edges",
    severity: "Normal Priority",
    color: "#16A34A",
    badge: "badge-green",
    desc: "Checks if the sides and shoulders of rural roads are chipping away or dropping too low.",
    detectionTech: "Drone & Car Cameras",
    accuracy: "90% Accuracy"
  },
  {
    title: "Blocked Rain Drains",
    severity: "Normal Priority",
    color: "#0284C7",
    badge: "badge-blue",
    desc: "Checks if roadside drains are clogged with mud, so water doesn't flood the highway during heavy rain.",
    detectionTech: "Aerial Drone Photos",
    accuracy: "89% Accuracy"
  },
  {
    title: "Faded Signs & Markings",
    severity: "Low Priority",
    color: "#7C3AED",
    badge: "badge-purple",
    desc: "Alerts when white lane lines or highway signs are faded and need a fresh coat of reflective paint.",
    detectionTech: "Night & Day Video AI",
    accuracy: "96% Accuracy"
  }
];

export const ROAD_KPIS = [
  { label: "Roads Covered", value: "100%", sub: "Full coverage of every mile" },
  { label: "Problem Spotting Accuracy", value: "> 90%", sub: "Verified by real engineers" },
  { label: "Fewer False Alarms", value: "< 5%", sub: "Only real problems are flagged" },
  { label: "Exact GPS Location", value: "1 Meter", sub: "Repair vans find the spot instantly" },
  { label: "Time Saved on Inspection", value: "50%", sub: "No need for people to walk highways" },
  { label: "Faster Repair Time", value: "3x Faster", sub: "Repairs start within 24 hours" },
  { label: "Longer Road Life", value: "+5 Years", sub: "Fixing small cracks early saves money" }
];

export const BRIDGE_COMPONENTS = [
  {
    id: "deck",
    name: "Road Deck (Where Cars Drive)",
    condition: "Good & Smooth (88/100)",
    status: "Safe",
    statusColor: "#16A34A",
    defects: "Smooth asphalt surface. No holes or water pooling.",
    risk: "Safe",
    action: "Normal cleaning during scheduled wash.",
    telemetry: { smoothness: "Very Smooth", waterDrain: "Clear", surfaceGrip: "High" }
  },
  {
    id: "pier",
    name: "Support Pillar #3",
    condition: "Needs Sealing (68/100)",
    status: "Small Crack Found",
    statusColor: "#D97706",
    defects: "Small surface crack spotted on the pillar. Concrete inside is strong.",
    risk: "Attention",
    action: "Seal crack with waterproof concrete coating in next 7 days.",
    telemetry: { crackSize: "Small (0.8 mm)", pillarStrength: "95% Strong", leanAngle: "0.0° (Straight)" }
  },
  {
    id: "bearing",
    name: "Rubber Cushions (Under Bridge)",
    condition: "Working Well (82/100)",
    status: "Normal",
    statusColor: "#2563EB",
    defects: "Rubber shock pads are moving smoothly with temperature changes.",
    risk: "Safe",
    action: "Regular check-up in 6 months.",
    telemetry: { cushionMovement: "Normal (14mm)", rubberHealth: "Good", temperature: "28°C" }
  },
  {
    id: "girder",
    name: "Steel & Concrete Beams",
    condition: "Solid & Strong (92/100)",
    status: "Excellent",
    statusColor: "#16A34A",
    defects: "No bending or rust. Handles heavy truck weight easily.",
    risk: "Safe",
    action: "Keep standard weight sensors running.",
    telemetry: { loadWeight: "Well below safety limit", vibration: "Normal", steelHealth: "100%" }
  },
  {
    id: "joint",
    name: "Road Expansion Joints",
    condition: "Check Rubber Seal (72/100)",
    status: "Dust & Wear",
    statusColor: "#D97706",
    defects: "Rubber expansion strip has some road dust and normal wear.",
    risk: "Normal Watch",
    action: "Blow out dust and check rubber seal next month.",
    telemetry: { jointGap: "48 mm (Correct)", rubberSeal: "75% Good", noiseLevel: "Normal" }
  },
  {
    id: "foundation",
    name: "Riverbed Foundation Piles",
    condition: "Solid Bedrock (95/100)",
    status: "Safe & Firm",
    statusColor: "#16A34A",
    defects: "River sand levels are normal. Foundation is buried deep in bedrock.",
    risk: "Safe",
    action: "Check riverbed levels again after monsoon rains.",
    telemetry: { sandDepth: "Safe Margin", foundationShift: "0 mm (Rock Solid)", riverLevel: "Normal" }
  }
];

export const TUNNEL_TELEMETRY = {
  id: "T-04",
  name: "Western Mountain Tunnel T-04",
  length: "2.4 Miles (3.8 km)",
  overallHealth: "88% Healthy & Safe",
  structuralStatus: "Safe & Dry (Walls 90% Intact)",
  ventilationStatus: "Fresh Air (Fans Working)",
  trafficStatus: "Smooth Traffic (35 mph avg)",
  airQuality: { co: "Clean & Fresh", visibility: "Clear (98%)", temperature: "24°C", fansRunning: "8 of 8 Fans ON" },
  alerts: [
    { chainage: "Mile 0.8", defect: "Small hairline wall crack", severity: "Low", time: "Logged 4h ago" },
    { chainage: "Mile 1.6", defect: "Slow water drop at ceiling", severity: "Medium", time: "Logged 1d ago" },
    { chainage: "Mile 2.1", defect: "Light bulb replacement needed", severity: "Easy Fix", time: "Logged 2h ago" },
    { chainage: "Mile 2.3", defect: "Routine fan inspection due", severity: "Routine", time: "Logged 6h ago" }
  ]
};

export const RISK_MATRIX_DATA = [
  { id: "A-01", name: "Highway 48 Pothole Spot (Mile 124)", type: "Road", probability: 92, impact: 90, score: 92, category: "Fix Today", status: "Repair Van Dispatched", cost: "₹45,000" },
  { id: "A-02", name: "Bridge 07 Pillar #3 Crack", type: "Bridge", probability: 82, impact: 85, score: 84, category: "Fix This Week", status: "Inspection Booked", cost: "₹60,000" },
  { id: "A-03", name: "Tunnel 04 Light & Water Check", type: "Tunnel", probability: 70, impact: 75, score: 72, category: "Fix This Month", status: "Scheduled", cost: "₹25,000" },
  { id: "A-04", name: "Highway 27 Uneven Surface", type: "Road", probability: 60, impact: 58, score: 59, category: "Normal Cycle", status: "In Planned Queue", cost: "₹80,000" },
  { id: "A-05", name: "Bridge 12 Paint & Railing", type: "Bridge", probability: 40, impact: 45, score: 42, category: "Routine", status: "On Watchlist", cost: "₹15,000" },
  { id: "A-06", name: "Highway 66 Side Drain Mud", type: "Road", probability: 35, impact: 40, score: 37, category: "Routine", status: "Assigned", cost: "₹12,000" }
];

export const WORK_ORDER_SAMPLE = {
  id: "Order #45872",
  asset: "Highway NH-48 (Mile 124.3)",
  defect: "Large Pothole (2.5 ft wide, 2 inches deep)",
  priority: "High Priority (Fix Today)",
  category: "Pothole Filling",
  contractor: "National Road Repair Team",
  assignedDate: "Today, 9:00 AM",
  targetClosure: "Tomorrow, 5:00 PM",
  turnaroundTime: "Within 24 Hours",
  status: "Assigned",
  slaCompliance: "On Track",
  verificationAiMatch: "100% Repaired & Level",
  aiVerificationText: "Photo taken after repair shows the pothole is completely filled with smooth asphalt. The road surface is flat and safe for driving."
};

export const MONETISATION_OPPORTUNITIES = [
  { title: "5G Mobile Towers on Light Poles", yield: "₹45,000 / month / pole", potential: "Mobile companies rent highway light poles to provide fast mobile internet to travelers." },
  { title: "Smart Bus Shelters with Digital Displays", yield: "₹75,000 / month / shelter", potential: "Bus shelters provide live arrival times and earn money from clean digital brand ads." },
  { title: "Electric Vehicle (EV) Charging Stations", yield: "₹1.2 Lakh / month / hub", potential: "Fast chargers at highway rest stops for electric cars and buses." },
  { title: "Weather & Road Info Screens", yield: "₹30,000 / month / screen", potential: "Helpful screens giving drivers live fog, rain, and safety tips." }
];

export const IMPLEMENTATION_ROADMAP = [
  {
    phase: "Step 01",
    name: "Quick 14-Day Test",
    duration: "14 Days",
    scope: "10 Road Sections",
    objective: "See How Easy It Works",
    deliverables: [
      "We scan 10 sample road videos with cameras",
      "Show you the automatic pothole & crack finder in action",
      "Provide a clean, easy report with photos and GPS spots",
      "Zero new hardware needed — uses simple video files"
    ],
    outcome: "Working proof on your real roads within two weeks."
  },
  {
    phase: "Step 02",
    name: "Corridor Pilot",
    duration: "6 - 8 Weeks",
    scope: "1 Full Highway",
    objective: "Help Local Road Teams on the Ground",
    deliverables: [
      "Scan an entire highway corridor end-to-end",
      "Give road teams a simple mobile app to view repair spots",
      "Track how fast repairs get done",
      "Show how much money is saved by fixing cracks early"
    ],
    outcome: "Highway teams fixing road problems 3x faster."
  },
  {
    phase: "Step 03",
    name: "State Expansion",
    duration: "3 - 6 Months",
    scope: "Multiple Highways & Bridges",
    objective: "Cover Roads, Bridges & Tunnels Together",
    deliverables: [
      "Add bridge safety checks and tunnel air monitoring",
      "Connect all highway repair contractors in one easy list",
      "Monthly health scorecards for government leaders"
    ],
    outcome: "Smooth, safe travel across the entire state network."
  },
  {
    phase: "Step 04",
    name: "National Scale",
    duration: "Ongoing",
    scope: "Countrywide Highways",
    objective: "Safer, Smarter Roads for India",
    deliverables: [
      "Nationwide road health dashboard",
      "Smart EV chargers and connected amenities",
      "Safer highways with fewer accidents and potholes"
    ],
    outcome: "India's roads continuously monitored and kept in top condition."
  }
];

export const ARCHITECTURE_LAYERS = [
  {
    layer: "1",
    name: "Taking Photos & Videos",
    items: ["Regular dashcams on patrol cars (drive 60 miles/day)", "Camera drones flying over bridges", "Existing highway CCTV cameras", "Simple temperature & air sensors in tunnels"]
  },
  {
    layer: "2",
    name: "Automatic Problem Spotter",
    items: ["Computer vision instantly finds potholes & cracks", "Measures size and depth accurately", "Pins exact GPS spot on a map", "Sorts problems by urgency (Fix Now, Check Soon, Safe)"]
  },
  {
    layer: "3",
    name: "Easy Work Orders & Alerts",
    items: ["Generates clear job cards for repair workers", "Sends notification directly to contractor's phone", "Tracks time until repair is completed"]
  },
  {
    layer: "4",
    name: "Photo Check & Confirmation",
    items: ["Worker snaps a photo after fixing the pothole", "System confirms the repair is flat and smooth", "Saves a permanent record of the finished work"]
  }
];

export const RODIC_COLLABORATION_NEEDS = [
  {
    title: "Sample Road Videos",
    desc: "A few short video recordings or photos of road stretches to run the 14-day test.",
    tag: "Data Input"
  },
  {
    title: "Engineer Feedback",
    desc: "Occasional advice from your road and bridge engineers on which issues they want prioritized.",
    tag: "Guidance"
  },
  {
    title: "Access to Road Lists",
    desc: "Simple list of highway names and mile markers to tag locations accurately.",
    tag: "Coordination"
  },
  {
    title: "Single Point of Contact",
    desc: "One friendly coordinator from your team to join quick weekly progress updates.",
    tag: "Teamwork"
  },
  {
    title: "Field Visit Support",
    desc: "Permission to test our vehicle camera on a pilot highway stretch.",
    tag: "Field Testing"
  },
  {
    title: "Long-Term Vision",
    desc: "Working together to make roads safer across your entire project portfolio.",
    tag: "Partnership"
  }
];

export const SLIDE_METADATA = [
  { page: 1, title: "Our Proven Track Record", desc: "Real field execution: 1,680 villages connected, ₹800+ Cr public projects delivered.", img: "/slides/page_1.png" },
  { page: 2, title: "Why Infranite Globaltech", desc: "Combining real civil engineering field experience with simple, smart technology.", img: "/slides/page_2.png" },
  { page: 3, title: "Smart City & Highway Center", desc: "One clean screen for Roads, Bridges, Tunnels, and easy repair priorities.", img: "/slides/page_3.png" },
  { page: 4, title: "Road Health & Pothole Spotting", desc: "Car-mounted cameras automatically spot potholes and measure road quality.", img: "/slides/page_4.png" },
  { page: 5, title: "Bridge Safety & Pillar Checks", desc: "Checking bridge pillars, joints, and decks so repairs happen before problems grow.", img: "/slides/page_5.png" },
  { page: 6, title: "Tunnel Safety & Air Monitoring", desc: "Making sure tunnels have clean fresh air, working lights, and dry walls.", img: "/slides/page_6.png" },
  { page: 7, title: "Unified Operations Center", desc: "Simple summary screen showing all roads, open repairs, and response times.", img: "/slides/page_7.png" },
  { page: 8, title: "Smart Priority List", desc: "Helps leaders spend repair budgets where they prevent accidents and save lives.", img: "/slides/page_8.png" },
  { page: 9, title: "4-Step Easy Repair Workflow", desc: "Spot problem → Send team → Repair → Check finished photo.", img: "/slides/page_9.png" },
  { page: 10, title: "Smart Highway Amenities", desc: "Adding EV fast chargers, solar lighting, and public mobile connectivity.", img: "/slides/page_10.png" },
  { page: 11, title: "14-Day Quick Test Scope", desc: "Quick test on 10 road stretches with zero upfront hardware disruption.", img: "/slides/page_11.png" },
  { page: 12, title: "Simple 4-Step Roadmap", desc: "Step 1 (Test) → Step 2 (Pilot) → Step 3 (State) → Step 4 (National).", img: "/slides/page_12.png" },
  { page: 13, title: "How the System Connects", desc: "Clean 4-step pipeline from cameras to finished repair confirmation.", img: "/slides/page_13.png" },
  { page: 14, title: "Working Together with Partners", desc: "6 straightforward ways we partner with infrastructure agencies.", img: "/slides/page_14.png" }
];
