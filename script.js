const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
let feaReady = false;
const menuButton = $('.menu-button');
const mobileMenu = $('.mobile-menu');

const translations = {
  "en": {
    "title": "DIRLOSAN — Engineering and Simulation",
    "description": "DIRLOSAN Engineering and Simulation — product design, CFD, FEA and engineering consulting.",
    "brandHome": "DIRLOSAN home",
    "primaryNav": "Primary navigation",
    "languageLabel": "Choose language",
    "openMenu": "Open menu",
    "closeMenu": "Close menu",
    "themeDark": "Switch to dark mode",
    "themeLight": "Switch to light mode",
    "navServices": "Services",
    "navWhat": "What we do",
    "navProcess": "Process",
    "navProjects": "Projects",
    "navTestimonials": "Testimonials",
    "navIndustries": "Industries",
    "navEstimate": "Estimate",
    "navWho": "Who we are",
    "navAbout": "About",
    "navFaq": "FAQ",
    "navStart": "Start a project",
    "mobileNote": "Engineering, simulation and product development.",
    "heroEyebrow": "Engineering · Simulation · Product Development",
    "heroTitle": "From concept to <span class=\"text-outline\">validated product.</span>",
    "heroIntro": "Product design, CFD, FEA and engineering consulting from the first sketch through simulation, refinement and development.",
    "heroStart": "Start a project",
    "heroExplore": "Explore services",
    "heroIndex": "ENGINEERED WITH INTENT",
    "whatEyebrow": "What we do",
    "whatTitle": "Engineering from <span>geometry to evidence.</span>",
    "whatIntro": "Design, analysis and automation are handled as one connected engineering workflow.",
    "whatAria": "DIRLOSAN engineering capabilities",
    "whatGroup1": "Design & document",
    "whatGroup1Desc": "Turn requirements into geometry, drawings and production-ready engineering documentation.",
    "whatGroup2": "Simulate & validate",
    "whatGroup2Desc": "Use CFD, FEA, thermal and vacuum analysis to find problems before hardware is committed.",
    "whatGroup3": "Automate & integrate",
    "whatGroup3Desc": "Connect mechanical design with controls, robotics and engineering software.",
    "what1": "Concept-to-production product design",
    "what2": "3D CAD modelling",
    "what3": "Manufacturing drawings",
    "what4": "Assembly & welding drawings",
    "what5": "P&ID documentation",
    "what6": "Bills of materials & supplier-ready documentation",
    "what7": "CFD flow analysis",
    "what8": "Thermal simulation",
    "what9": "Structural FEA",
    "what10": "Vacuum analysis",
    "what11": "Simulation-led design optimisation",
    "what12": "Cooling systems engineering",
    "what13": "Industrial machinery & frame design",
    "what14": "Robotics & automation design",
    "what15": "Siemens PLC programming",
    "what16": "ABB & KUKA robot simulation",
    "what17": "Python engineering automation",
    "what18": "MATLAB engineering analysis",
    "capabilities": "Capabilities",
    "capabilitiesTitle": "Design it. Simulate it.<br>Make the next decision with evidence.",
    "consultDefine": "DEFINE",
    "consultCompare": "COMPARE",
    "consultDecide": "DECIDE",
    "serviceDesign": "Complete product design",
    "serviceDesignDesc": "From early concepts and CAD development through detailed engineering, analysis and design refinement.",
    "serviceCfdDesc": "Computational fluid dynamics for airflow, thermal behaviour, pressure losses and fluid-system performance.",
    "serviceFeaDesc": "Structural simulation for stress, deformation, stiffness, stability and design optimisation.",
    "serviceConsulting": "Engineering consulting",
    "serviceConsultingDesc": "Independent engineering support for design decisions, simulation strategy, technical problems and product development.",
    "processEyebrow": "A clear development loop",
    "processTitle": "Concept → Design → Simulate → Validate → Refine",
    "processAria": "Engineering process",
    "processConcept": "Concept",
    "processConceptDesc": "Frame the requirement and the real engineering constraints.",
    "processDesign": "Design",
    "processDesignDesc": "Build the geometry, architecture and detail needed to evaluate it.",
    "processSimulate": "Simulate",
    "processSimulateDesc": "Use CFD or FEA to test the behaviour before committing to hardware.",
    "processValidate": "Validate",
    "processValidateDesc": "Check the result against the design intent and practical limits.",
    "processRefine": "Refine",
    "processRefineDesc": "Turn the findings into a better product and repeat where needed.",
    "projectsEyebrow": "Selected engineering work",
    "projectsTitle": "Projects that span design, simulation and automation.",
    "projectsIntro": "No client-confidential imagery is shown here. These summaries describe the engineering scope without identifying customers or protected project material.",
    "project1Type": "THERMAL SYSTEMS",
    "project1Title": "Industrial chiller development",
    "project1Desc": "Ground-up mechanical development of an industrial chiller, including component geometry, equipment structure, interfaces and manufacturing documentation. Structural checks were used alongside the CAD work so the design could be refined before fabrication.",
    "project2Type": "DATACENTER COOLING",
    "project2Title": "High-density cooling architecture",
    "project2Desc": "A complete cooling concept for high-heat-load computing equipment, developed from system layout through detailed mechanical design. The work included structural and vacuum considerations, packaging constraints and the routing of thermal and fluid interfaces.",
    "project3Type": "VACUUM EQUIPMENT",
    "project3Title": "Vacuum process equipment & test rigs",
    "project3Desc": "Mechanical design of vacuum vessels, integrated pumping hardware and supporting test equipment. The engineering focused on assembly strategy, service access, piping interfaces and the structural behaviour of components exposed to vacuum loading.",
    "project4Type": "MATERIAL HANDLING",
    "project4Title": "Automated material transport system",
    "project4Desc": "Development of an automated transport concept built around a custom robot mounted on an AGV platform. The scope joined mechanical design, motion constraints, payload handling and automation requirements into one integrated system.",
    "project5Type": "ROBOTIC PRODUCTION",
    "project5Title": "Multi-robot assembly line simulation",
    "project5Desc": "A complete virtual production line combining factory layout, conveyors, human interaction and six industrial robots carrying out pick-and-place, painting and welding operations. Kinematics and sequencing were developed together so the cell could be evaluated as a system.",
    "project6Type": "MECHATRONICS",
    "project6Title": "Automated musical instrument",
    "project6Desc": "A mechatronic instrument built from the ground up, with custom mechanical parts, three stepper-driven axes and a Python translation layer converting MIDI commands into machine motion. The project combined CAD, prototyping, controls and software integration.",
    "project7Type": "CFD / FEA",
    "project7Title": "Aerodynamic & flow-device optimisation",
    "project7Desc": "CFD-led development work across aerodynamic surfaces and compact flow devices, including wing concepts, ventilation hardware and valve geometry. Flow behaviour, pressure loss and structural constraints were used to guide geometry changes instead of relying on visual design alone.",
    "project8Type": "PRODUCT DESIGN",
    "project8Title": "Consumer & specialist product development",
    "project8Desc": "Detailed product-design work ranging from premium consumer hardware to specialist mechanical devices. The emphasis was on packaging, material choice, manufacturability, assembly strategy and translating an early concept into a coherent set of production-ready parts.",
    "tagManufacturing": "Manufacturing",
    "tagDfM": "DFM",
    "testimonialsEyebrow": "Client feedback",
    "testimonialsTitle": "What clients say after the work is delivered.",
    "testimonialsNote": "Client names below are pseudonyms used for privacy. Project titles are intentionally omitted.",
    "privacyName": "Name changed for privacy",
    "industriesEyebrow": "Where it applies",
    "industriesTitle": "Useful across products, components and fluid systems.",
    "industry1Title": "Industrial equipment",
    "industry1Desc": "Housings, brackets, ducts, frames, fixtures and functional assemblies.",
    "industry2Title": "Fluid systems",
    "industry2Desc": "Manifolds, channels, pressure-drop studies, fans and thermal paths.",
    "industry3Title": "Product development",
    "industry3Desc": "Concept work, redesigns, failure investigation and engineering support.",
    "industry4Title": "Prototyping support",
    "industry4Desc": "Use analysis early to reduce trial-and-error before physical testing.",
    "estimateEyebrow": "Budget estimator",
    "estimateTitle": "Get a fast <span class=\"text-outline\">budget range.</span>",
    "estimateIntro": "A planning tool for early budgeting. Final pricing depends on geometry, scope, inputs and deliverables.",
    "estimateType": "Type of work",
    "estimateCad": "CAD / Design",
    "estimateCadRate": "from €20 / hour",
    "estimateSim": "Simulation",
    "estimateSimRate": "from €45 / hour",
    "estimateHours": "Estimated hours",
    "estimateComplexity": "Complexity",
    "estimateBasic": "Basic",
    "estimateStandard": "Standard",
    "estimateComplex": "Complex",
    "estimateBudget": "Indicative budget",
    "estimateDisclaimer": "This is a rough budgeting aid, not a quotation. Simulation scope can change significantly with model preparation, meshing, boundary conditions and convergence requirements.",
    "whoEyebrow": "Who we are",
    "whoTitle": "Direct engineering ownership, from the first requirement to the final model.",
    "whoRole": "Mechanical Design Engineer · CFD / FEA · Robotics & Automation",
    "whoLead": "DIRLOSAN is built around direct engineer-to-client communication. The technical work is led by Bogdan-Ioan Dîrloșan, a mechanical design engineer with a robotics background and a completed M.Sc. in Artificial Intelligence.",
    "whoBody": "His experience covers full-lifecycle CAD design, industrial cooling equipment and machinery, CFD and FEA, manufacturing documentation, robotics and automation. He has worked from early client requirements through detailed models, drawings, simulation and production handoff.",
    "whoStudiesLabel": "Studies",
    "whoStudies": "B.Sc. Robotics · M.Sc. Artificial Intelligence",
    "whoMoreSummary": "Credentials & tools",
    "whoToolsLabel": "Engineering tools",
    "whoCredential3Label": "Core work",
    "whoCredential3": "CAD · CFD · FEA · Automation",
    "whoCredential4Label": "Certification",
    "whoCredential4": "Computer Vision · Udacity",
    "whoCredential5Label": "Certification",
    "whoCredential5": "CAD Certification",
    "whoCredential6Label": "Recognition",
    "whoCredential6": "Podium · Sonaca Factory Management",
    "whoCta": "Discuss your project",
    "aboutTitle": "Good simulation is useful when it changes a design decision.",
    "aboutCopy": "DIRLOSAN combines mechanical product design with CFD, FEA, robotics and automation experience. The work covers manufacturing-ready CAD, industrial machinery, cooling systems, simulation and client-facing engineering support.",
    "tagProduct": "Product development",
    "tagFluid": "Fluid dynamics",
    "tagStructural": "Structural analysis",
    "tagAutomation": "Robotics & automation",
    "skillCad": "CAD & design",
    "skillSimulation": "Simulation",
    "skillAutomation": "Automation & analysis",
    "faqEyebrow": "Questions clients ask",
    "faqTitle": "The practical details before we start.",
    "faq1Q": "Can you start from a rough idea, sketch or incomplete CAD?",
    "faq1A": "Yes. Work can begin from an early concept, sketches, reference dimensions or an existing CAD model, depending on the stage of the project.",
    "faq2Q": "Can you handle both the design and the simulation?",
    "faq2A": "Yes. Product design, CFD and FEA can be kept in one workflow so simulation findings can feed directly back into the geometry.",
    "faq3Q": "What do you need from me to quote the work?",
    "faq3A": "A short description of the problem, any available drawings or CAD, target performance, known loads or flow conditions, required deliverables and your preferred timeline are usually enough for an initial scope.",
    "faq4Q": "Can the work be quoted as a fixed-price project?",
    "faq4A": "For clearly defined deliverables, fixed-price work is possible. Larger or evolving projects can be divided into milestones so scope and cost stay visible as the design develops.",
    "faq5Q": "What files and deliverables can I receive?",
    "faq5A": "Depending on scope, deliverables can include native CAD, STEP files, manufacturing drawings, assemblies, BOMs, simulation reports, plots and the supporting engineering documentation agreed for the project.",
    "faq6Q": "Can you work under an NDA or with confidential product data?",
    "faq6A": "If the project is confidential, mention that before sending sensitive files. NDA and information-handling requirements can be agreed before detailed project data is shared.",
    "faq7Q": "Which CAD and simulation tools do you use?",
    "faq7A": "The toolset includes SolidWorks, Catia V5, Fusion 360 and AutoCAD for design, plus Ansys, Abaqus and SolidWorks Simulation for structural, thermal and fluid analysis.",
    "faq8Q": "Can you work with my existing engineer, manufacturer or supplier?",
    "faq8A": "Yes. The work can be structured around an existing team, with design files, drawings and engineering decisions prepared for review or handoff to manufacturing.",
    "faq9Q": "Do you work with international clients remotely?",
    "faq9A": "Yes. The engineering workflow is suitable for remote projects, with requirements, CAD, reviews and deliverables handled digitally.",
    "faq10Q": "How are revisions and scope changes handled?",
    "faq10A": "The initial scope should define the expected deliverables and review points. If the requirements change materially, the impact on schedule and cost can be agreed before the additional work proceeds.",
    "faq11Q": "Can you help if a design is failing or underperforming?",
    "faq11A": "Yes. Existing designs can be reviewed to identify likely structural, thermal, flow or manufacturability issues, then tested through targeted analysis and design changes.",
    "faq12Q": "Are CFD or FEA results the same as physical certification?",
    "faq12A": "No. Simulation is an engineering decision tool and depends on the model, assumptions, inputs and boundary conditions. Where certification or regulatory approval is required, the relevant physical tests and authorised certification process still apply.",
    "contactEyebrow": "Have an engineering problem?",
    "contactTitle": "Let’s work through it.",
    "contactIntro": "Tell us what you’re designing, what isn’t working, or what you need to validate.",
    "formName": "Name",
    "formEmail": "Email",
    "formMessage": "What are you working on?",
    "formSend": "Send enquiry",
    "formNote": "Submitting opens your email app with the message addressed to dirlosan@bdengineering.com.",
    "formSuccess": "Opening your email app…",
    "footerLine": "Engineering and Simulation",
    "backTop": "Back to top ↑"
  },
  "ro": {
    "title": "DIRLOSAN — Inginerie și Simulare",
    "description": "DIRLOSAN Inginerie și Simulare — design de produs, CFD, FEA și consultanță inginerească.",
    "brandHome": "Pagina principală DIRLOSAN",
    "primaryNav": "Navigare principală",
    "languageLabel": "Alege limba",
    "openMenu": "Deschide meniul",
    "closeMenu": "Închide meniul",
    "themeDark": "Comută la modul întunecat",
    "themeLight": "Comută la modul luminos",
    "navServices": "Servicii",
    "navWhat": "Ce facem",
    "navProcess": "Proces",
    "navProjects": "Proiecte",
    "navTestimonials": "Recenzii",
    "navIndustries": "Domenii",
    "navEstimate": "Estimator",
    "navWho": "Cine suntem",
    "navAbout": "Despre noi",
    "navFaq": "Întrebări",
    "navStart": "Începe un proiect",
    "mobileNote": "Inginerie, simulare și dezvoltare de produs.",
    "heroEyebrow": "Inginerie · Simulare · Dezvoltare de produs",
    "heroTitle": "De la concept la <span class=\"text-outline\">produs validat.</span>",
    "heroIntro": "Design de produs, CFD, FEA și consultanță inginerească, de la prima schiță până la simulare, optimizare și dezvoltare.",
    "heroStart": "Începe un proiect",
    "heroExplore": "Vezi serviciile",
    "heroIndex": "INGINERIE CU SCOP",
    "whatEyebrow": "Ce facem",
    "whatTitle": "Inginerie de la <span>geometrie la validare.</span>",
    "whatIntro": "Designul, analiza și automatizarea sunt tratate ca un singur flux de lucru ingineresc.",
    "whatAria": "Capabilități inginerești DIRLOSAN",
    "whatGroup1": "Proiectare & documentație",
    "whatGroup1Desc": "Transformăm cerințele în geometrie, desene și documentație inginerească pregătită pentru producție.",
    "whatGroup2": "Simulare & validare",
    "whatGroup2Desc": "Folosim CFD, FEA, analize termice și de vid pentru a identifica problemele înainte de fabricație.",
    "whatGroup3": "Automatizare & integrare",
    "whatGroup3Desc": "Conectăm proiectarea mecanică cu automatizări, robotică și software ingineresc.",
    "what1": "Design de produs de la concept la producție",
    "what2": "Modelare CAD 3D",
    "what3": "Desene de fabricație",
    "what4": "Desene de ansamblu și sudură",
    "what5": "Documentație P&ID",
    "what6": "Liste de materiale și documentație pentru furnizori",
    "what7": "Analiză CFD a curgerii",
    "what8": "Simulare termică",
    "what9": "FEA structural",
    "what10": "Analiză în vid",
    "what11": "Optimizare de design bazată pe simulare",
    "what12": "Ingineria sistemelor de răcire",
    "what13": "Proiectarea utilajelor și cadrelor industriale",
    "what14": "Design de robotică și automatizare",
    "what15": "Programare PLC Siemens",
    "what16": "Simulare roboți ABB și KUKA",
    "what17": "Automatizare inginerească în Python",
    "what18": "Analiză inginerească în MATLAB",
    "capabilities": "Capabilități",
    "capabilitiesTitle": "Proiectează. Simulează.<br>Ia următoarea decizie pe baza datelor.",
    "consultDefine": "DEFINEȘTE",
    "consultCompare": "COMPARĂ",
    "consultDecide": "DECIDE",
    "serviceDesign": "Design complet de produs",
    "serviceDesignDesc": "De la concepte inițiale și dezvoltare CAD până la inginerie de detaliu, analiză și rafinarea designului.",
    "serviceCfdDesc": "Dinamică computațională a fluidelor pentru curgere, comportament termic, pierderi de presiune și performanța sistemelor de fluide.",
    "serviceFeaDesc": "Simulare structurală pentru tensiuni, deformații, rigiditate, stabilitate și optimizarea designului.",
    "serviceConsulting": "Consultanță inginerească",
    "serviceConsultingDesc": "Suport ingineresc independent pentru decizii de proiectare, strategii de simulare, probleme tehnice și dezvoltare de produs.",
    "processEyebrow": "Un ciclu clar de dezvoltare",
    "processTitle": "Concept → Design → Simulare → Validare → Rafinare",
    "processAria": "Proces de inginerie",
    "processConcept": "Concept",
    "processConceptDesc": "Definim cerința și constrângerile inginerești reale.",
    "processDesign": "Design",
    "processDesignDesc": "Construim geometria, arhitectura și detaliile necesare pentru evaluare.",
    "processSimulate": "Simulare",
    "processSimulateDesc": "Folosim CFD sau FEA pentru a testa comportamentul înainte de a investi în prototipuri fizice.",
    "processValidate": "Validare",
    "processValidateDesc": "Verificăm rezultatul față de intenția de proiectare și limitele practice.",
    "processRefine": "Rafinare",
    "processRefineDesc": "Transformăm concluziile într-un produs mai bun și repetăm când este necesar.",
    "projectsEyebrow": "Lucrări inginerești selectate",
    "projectsTitle": "Proiecte care combină designul, simularea și automatizarea.",
    "projectsIntro": "Nu sunt afișate imagini confidențiale ale clienților. Rezumatele descriu scopul tehnic fără a identifica beneficiarii sau materialele protejate ale proiectelor.",
    "project1Type": "SISTEME TERMICE",
    "project1Title": "Dezvoltarea unui chiller industrial",
    "project1Desc": "Dezvoltare mecanică de la zero a unui chiller industrial, incluzând geometria componentelor, structura echipamentului, interfețele și documentația de fabricație. Verificările structurale au fost folosite împreună cu proiectarea CAD pentru rafinarea soluției înainte de fabricație.",
    "project2Type": "RĂCIRE DATACENTER",
    "project2Title": "Arhitectură de răcire pentru sarcini termice mari",
    "project2Desc": "Concept complet de răcire pentru echipamente de calcul cu densitate termică ridicată, dezvoltat de la arhitectura sistemului până la designul mecanic detaliat. Lucrările au inclus considerații structurale și de vid, constrângeri de ambalare și trasee pentru interfețele termice și de fluid.",
    "project3Type": "ECHIPAMENTE DE VID",
    "project3Title": "Echipamente de proces în vid și standuri de test",
    "project3Desc": "Design mecanic pentru vase de vid, echipamente de pompare integrate și standuri de test asociate. Ingineria s-a concentrat pe strategia de asamblare, accesul pentru service, interfețele de conducte și comportamentul structural al componentelor supuse vidului.",
    "project4Type": "MANIPULARE MATERIALE",
    "project4Title": "Sistem automat de transport al materialelor",
    "project4Desc": "Dezvoltarea unui concept automat de transport bazat pe un robot personalizat montat pe o platformă AGV. Scopul a combinat designul mecanic, constrângerile de mișcare, manipularea sarcinii și cerințele de automatizare într-un singur sistem integrat.",
    "project5Type": "PRODUCȚIE ROBOTIZATĂ",
    "project5Title": "Simularea unei linii de asamblare multi-robot",
    "project5Desc": "Linie virtuală completă de producție cu layout de fabrică, transportoare, interacțiune umană și șase roboți industriali pentru operații de pick-and-place, vopsire și sudură. Cinematica și secvențierea au fost dezvoltate împreună pentru evaluarea celulei ca sistem complet.",
    "project6Type": "MECATRONICĂ",
    "project6Title": "Instrument muzical automatizat",
    "project6Desc": "Instrument mecatronic construit de la zero, cu piese mecanice personalizate, trei axe acționate de motoare pas cu pas și un strat software Python care transformă comenzi MIDI în mișcare mecanică. Proiectul a combinat CAD, prototipare, control și integrare software.",
    "project7Type": "CFD / FEA",
    "project7Title": "Optimizare aerodinamică și a dispozitivelor de curgere",
    "project7Desc": "Dezvoltare condusă de CFD pentru suprafețe aerodinamice și dispozitive compacte de curgere, inclusiv concepte de aripi, echipamente de ventilație și geometrii de valve. Comportamentul curgerii, pierderea de presiune și constrângerile structurale au ghidat modificările geometrice.",
    "project8Type": "DESIGN DE PRODUS",
    "project8Title": "Dezvoltare de produse de consum și dispozitive specializate",
    "project8Desc": "Design detaliat pentru produse de consum premium și dispozitive mecanice specializate. Accentul a fost pus pe integrarea componentelor, alegerea materialelor, fabricație, strategie de asamblare și transformarea conceptelor timpurii în piese coerente pregătite pentru producție.",
    "tagManufacturing": "Fabricație",
    "tagDfM": "DFM",
    "testimonialsEyebrow": "Feedback de la clienți",
    "testimonialsTitle": "Ce spun clienții după livrarea lucrării.",
    "testimonialsNote": "Numele clienților de mai jos sunt pseudonime folosite pentru confidențialitate. Titlurile proiectelor sunt omise intenționat.",
    "privacyName": "Nume schimbat pentru confidențialitate",
    "industriesEyebrow": "Unde se aplică",
    "industriesTitle": "Util pentru produse, componente și sisteme de fluide.",
    "industry1Title": "Echipamente industriale",
    "industry1Desc": "Carcase, console, conducte, cadre, dispozitive și ansambluri funcționale.",
    "industry2Title": "Sisteme de fluide",
    "industry2Desc": "Distribuitoare, canale, studii de pierdere de presiune, ventilatoare și trasee termice.",
    "industry3Title": "Dezvoltare de produs",
    "industry3Desc": "Concepte, reproiectări, investigarea defectelor și suport ingineresc.",
    "industry4Title": "Suport pentru prototipare",
    "industry4Desc": "Folosește analiza devreme pentru a reduce încercările repetate înainte de testele fizice.",
    "estimateEyebrow": "Estimator de buget",
    "estimateTitle": "Obține rapid un <span class=\"text-outline\">buget orientativ.</span>",
    "estimateIntro": "Un instrument pentru bugetare preliminară. Prețul final depinde de geometrie, scop, datele de intrare și livrabile.",
    "estimateType": "Tipul lucrării",
    "estimateCad": "CAD / Design",
    "estimateCadRate": "de la €20 / oră",
    "estimateSim": "Simulare",
    "estimateSimRate": "de la €45 / oră",
    "estimateHours": "Ore estimate",
    "estimateComplexity": "Complexitate",
    "estimateBasic": "De bază",
    "estimateStandard": "Standard",
    "estimateComplex": "Complex",
    "estimateBudget": "Buget orientativ",
    "estimateDisclaimer": "Acesta este un instrument orientativ de bugetare, nu o ofertă. Scopul simulării poate varia semnificativ în funcție de pregătirea modelului, discretizare, condițiile la limită și cerințele de convergență.",
    "whoEyebrow": "Cine suntem",
    "whoTitle": "Responsabilitate tehnică directă, de la prima cerință până la modelul final.",
    "whoRole": "Inginer proiectare mecanică · CFD / FEA · Robotică & automatizare",
    "whoLead": "DIRLOSAN se bazează pe comunicare directă între inginer și client. Activitatea tehnică este coordonată de Bogdan-Ioan Dîrloșan, inginer de proiectare mecanică cu pregătire în robotică și master finalizat în Inteligență Artificială.",
    "whoBody": "Experiența sa acoperă proiectarea CAD pe întreg ciclul de dezvoltare, echipamente de răcire industrială și utilaje, CFD și FEA, documentație pentru fabricație, robotică și automatizare. A lucrat de la cerințele inițiale ale clientului până la modele detaliate, desene, simulare și predarea către producție.",
    "whoStudiesLabel": "Studii",
    "whoStudies": "Licență în Robotică · Master în Inteligență Artificială",
    "whoMoreSummary": "Acreditări și instrumente",
    "whoToolsLabel": "Instrumente inginerești",
    "whoCredential3Label": "Activitate principală",
    "whoCredential3": "CAD · CFD · FEA · Automatizare",
    "whoCredential4Label": "Certificare",
    "whoCredential4": "Computer Vision · Udacity",
    "whoCredential5Label": "Certificare",
    "whoCredential5": "Certificare CAD",
    "whoCredential6Label": "Recunoaștere",
    "whoCredential6": "Podium · Concurs Sonaca de management al fabricii",
    "whoCta": "Discută proiectul tău",
    "aboutTitle": "O simulare bună este utilă atunci când schimbă o decizie de proiectare.",
    "aboutCopy": "DIRLOSAN combină designul mecanic de produs cu experiență în CFD, FEA, robotică și automatizare. Activitatea acoperă CAD pregătit pentru fabricație, utilaje industriale, sisteme de răcire, simulare și suport tehnic direct pentru clienți.",
    "tagProduct": "Dezvoltare de produs",
    "tagFluid": "Dinamica fluidelor",
    "tagStructural": "Analiză structurală",
    "tagAutomation": "Robotică și automatizare",
    "skillCad": "CAD și design",
    "skillSimulation": "Simulare",
    "skillAutomation": "Automatizare și analiză",
    "faqEyebrow": "Întrebări importante pentru clienți",
    "faqTitle": "Detaliile practice înainte să începem.",
    "faq1Q": "Puteți începe de la o idee, o schiță sau un CAD incomplet?",
    "faq1A": "Da. Putem începe de la un concept timpuriu, schițe, dimensiuni de referință sau un model CAD existent, în funcție de etapa proiectului.",
    "faq2Q": "Puteți face atât designul, cât și simularea?",
    "faq2A": "Da. Designul de produs, CFD și FEA pot rămâne în același flux, astfel încât rezultatele simulării să poată fi introduse direct în geometrie.",
    "faq3Q": "De ce aveți nevoie pentru a putea estima proiectul?",
    "faq3A": "O descriere scurtă a problemei, desenele sau CAD-ul disponibil, performanța țintă, încărcările ori condițiile de curgere cunoscute, livrabilele cerute și termenul dorit sunt de obicei suficiente pentru o estimare inițială.",
    "faq4Q": "Proiectul poate fi ofertat la preț fix?",
    "faq4A": "Pentru livrabile clar definite, este posibil un preț fix. Proiectele mai mari sau în evoluție pot fi împărțite în etape, astfel încât domeniul și costurile să rămână clare.",
    "faq5Q": "Ce fișiere și livrabile pot primi?",
    "faq5A": "În funcție de domeniu, livrabilele pot include CAD nativ, fișiere STEP, desene de fabricație, ansambluri, BOM-uri, rapoarte de simulare, grafice și documentația inginerească agreată pentru proiect.",
    "faq6Q": "Puteți lucra sub NDA sau cu date confidențiale despre produs?",
    "faq6A": "Dacă proiectul este confidențial, menționați acest lucru înainte de a trimite fișiere sensibile. Cerințele de NDA și de gestionare a informațiilor pot fi stabilite înainte de partajarea datelor detaliate.",
    "faq7Q": "Ce programe CAD și de simulare folosiți?",
    "faq7A": "Setul de instrumente include SolidWorks, Catia V5, Fusion 360 și AutoCAD pentru proiectare, plus Ansys, Abaqus și SolidWorks Simulation pentru analiză structurală, termică și de fluide.",
    "faq8Q": "Puteți lucra cu inginerul, producătorul sau furnizorul meu?",
    "faq8A": "Da. Activitatea poate fi integrată într-o echipă existentă, iar fișierele de design, desenele și deciziile inginerești pot fi pregătite pentru revizuire sau transfer către fabricație.",
    "faq9Q": "Lucrați de la distanță cu clienți internaționali?",
    "faq9A": "Da. Fluxul de lucru este potrivit pentru proiecte remote, cu cerințe, CAD, revizuiri și livrabile gestionate digital.",
    "faq10Q": "Cum sunt gestionate reviziile și schimbările de scop?",
    "faq10A": "Scopul inițial ar trebui să definească livrabilele și punctele de revizuire. Dacă cerințele se schimbă semnificativ, impactul asupra termenului și costului poate fi agreat înainte de lucrările suplimentare.",
    "faq11Q": "Puteți ajuta dacă un design nu funcționează sau nu atinge performanța dorită?",
    "faq11A": "Da. Un design existent poate fi analizat pentru probleme structurale, termice, de curgere sau de fabricație, apoi verificat prin analiză țintită și modificări de design.",
    "faq12Q": "Rezultatele CFD sau FEA echivalează cu o certificare fizică?",
    "faq12A": "Nu. Simularea este un instrument pentru decizii inginerești și depinde de model, ipoteze, date de intrare și condiții la limită. Dacă este necesară certificare sau aprobare de reglementare, testele fizice și procesul autorizat de certificare rămân necesare.",
    "contactEyebrow": "Ai o problemă inginerească?",
    "contactTitle": "Hai să o rezolvăm.",
    "contactIntro": "Spune-ne ce proiectezi, ce nu funcționează sau ce trebuie să validezi.",
    "formName": "Nume",
    "formEmail": "Email",
    "formMessage": "La ce lucrezi?",
    "formSend": "Trimite solicitarea",
    "formNote": "La trimitere se deschide aplicația ta de email, cu mesajul adresat către dirlosan@bdengineering.com.",
    "formSuccess": "Se deschide aplicația ta de email…",
    "footerLine": "Inginerie și Simulare",
    "backTop": "Înapoi sus ↑"
  },
  "de": {
    "title": "DIRLOSAN — Engineering und Simulation",
    "description": "DIRLOSAN Engineering und Simulation — Produktdesign, CFD, FEA und technische Beratung.",
    "brandHome": "DIRLOSAN Startseite",
    "primaryNav": "Hauptnavigation",
    "languageLabel": "Sprache wählen",
    "openMenu": "Menü öffnen",
    "closeMenu": "Menü schließen",
    "themeDark": "Zum Dunkelmodus wechseln",
    "themeLight": "Zum Hellmodus wechseln",
    "navServices": "Leistungen",
    "navWhat": "Was wir machen",
    "navProcess": "Prozess",
    "navProjects": "Projekte",
    "navTestimonials": "Kundenstimmen",
    "navIndustries": "Branchen",
    "navEstimate": "Kalkulator",
    "navWho": "Wer wir sind",
    "navAbout": "Über uns",
    "navFaq": "FAQ",
    "navStart": "Projekt starten",
    "mobileNote": "Engineering, Simulation und Produktentwicklung.",
    "heroEyebrow": "Engineering · Simulation · Produktentwicklung",
    "heroTitle": "Vom Konzept zum <span class=\"text-outline\">validierten Produkt.</span>",
    "heroIntro": "Produktdesign, CFD, FEA und technische Beratung von der ersten Skizze über Simulation und Optimierung bis zur Entwicklung.",
    "heroStart": "Projekt starten",
    "heroExplore": "Leistungen ansehen",
    "heroIndex": "GEZIELT ENTWICKELT",
    "whatEyebrow": "Was wir machen",
    "whatTitle": "Engineering von <span>Geometrie bis Nachweis.</span>",
    "whatIntro": "Konstruktion, Analyse und Automatisierung werden als ein durchgängiger Engineering-Workflow behandelt.",
    "whatAria": "Technische Fähigkeiten von DIRLOSAN",
    "whatGroup1": "Konstruieren & dokumentieren",
    "whatGroup1Desc": "Anforderungen werden in Geometrie, Zeichnungen und fertigungsgerechte Engineering-Dokumentation übersetzt.",
    "whatGroup2": "Simulieren & validieren",
    "whatGroup2Desc": "CFD, FEA, Thermik- und Vakuumanalysen helfen, Probleme vor der Fertigung zu erkennen.",
    "whatGroup3": "Automatisieren & integrieren",
    "whatGroup3Desc": "Mechanische Konstruktion wird mit Steuerungstechnik, Robotik und Engineering-Software verbunden.",
    "what1": "Produktentwicklung vom Konzept bis zur Fertigung",
    "what2": "3D-CAD-Modellierung",
    "what3": "Fertigungszeichnungen",
    "what4": "Montage- und Schweißzeichnungen",
    "what5": "P&ID-Dokumentation",
    "what6": "Stücklisten und lieferantengerechte Dokumentation",
    "what7": "CFD-Strömungsanalyse",
    "what8": "Thermische Simulation",
    "what9": "Struktur-FEA",
    "what10": "Vakuumanalyse",
    "what11": "Simulationsgestützte Designoptimierung",
    "what12": "Engineering von Kühlsystemen",
    "what13": "Konstruktion von Industriemaschinen und Rahmen",
    "what14": "Robotik- und Automatisierungsdesign",
    "what15": "Siemens-SPS-Programmierung",
    "what16": "ABB- und KUKA-Robotersimulation",
    "what17": "Engineering-Automatisierung mit Python",
    "what18": "Technische Analyse mit MATLAB",
    "capabilities": "Leistungen",
    "capabilitiesTitle": "Entwerfen. Simulieren.<br>Die nächste Entscheidung mit Daten treffen.",
    "consultDefine": "DEFINIEREN",
    "consultCompare": "VERGLEICHEN",
    "consultDecide": "ENTSCHEIDEN",
    "serviceDesign": "Komplette Produktentwicklung",
    "serviceDesignDesc": "Von frühen Konzepten und CAD-Entwicklung bis zu Detailkonstruktion, Analyse und Designoptimierung.",
    "serviceCfdDesc": "Numerische Strömungsmechanik für Strömung, thermisches Verhalten, Druckverluste und die Leistung von Fluidsystemen.",
    "serviceFeaDesc": "Struktursimulation für Spannungen, Verformungen, Steifigkeit, Stabilität und Designoptimierung.",
    "serviceConsulting": "Engineering-Beratung",
    "serviceConsultingDesc": "Unabhängige technische Unterstützung für Konstruktionsentscheidungen, Simulationsstrategien, technische Probleme und Produktentwicklung.",
    "processEyebrow": "Ein klarer Entwicklungszyklus",
    "processTitle": "Konzept → Design → Simulation → Validierung → Optimierung",
    "processAria": "Engineering-Prozess",
    "processConcept": "Konzept",
    "processConceptDesc": "Anforderungen und reale technische Randbedingungen klar definieren.",
    "processDesign": "Design",
    "processDesignDesc": "Geometrie, Architektur und Details für eine belastbare Bewertung aufbauen.",
    "processSimulate": "Simulation",
    "processSimulateDesc": "CFD oder FEA einsetzen, um das Verhalten vor dem Bau von Hardware zu prüfen.",
    "processValidate": "Validierung",
    "processValidateDesc": "Das Ergebnis mit dem Entwicklungsziel und praktischen Grenzen abgleichen.",
    "processRefine": "Optimierung",
    "processRefineDesc": "Erkenntnisse in ein besseres Produkt überführen und bei Bedarf erneut iterieren.",
    "projectsEyebrow": "Ausgewählte Engineering-Arbeiten",
    "projectsTitle": "Projekte zwischen Konstruktion, Simulation und Automatisierung.",
    "projectsIntro": "Es werden keine vertraulichen Kundenbilder gezeigt. Die Zusammenfassungen beschreiben den technischen Umfang, ohne Kunden oder geschütztes Projektmaterial zu identifizieren.",
    "project1Type": "THERMISCHE SYSTEME",
    "project1Title": "Entwicklung eines Industriechillers",
    "project1Desc": "Mechanische Neuentwicklung eines Industriechillers einschließlich Bauteilgeometrie, Anlagenstruktur, Schnittstellen und Fertigungsdokumentation. Strukturelle Prüfungen wurden parallel zur CAD-Konstruktion eingesetzt, um das Design vor der Fertigung zu verfeinern.",
    "project2Type": "RECHENZENTRUMSKÜHLUNG",
    "project2Title": "Kühlarchitektur für hohe Wärmelasten",
    "project2Desc": "Vollständiges Kühlkonzept für Rechentechnik mit hoher Wärmedichte, vom Systemlayout bis zur detaillierten mechanischen Konstruktion. Berücksichtigt wurden Struktur- und Vakuumaspekte, Packaging-Grenzen sowie thermische und fluidische Schnittstellen.",
    "project3Type": "VAKUUMTECHNIK",
    "project3Title": "Vakuum-Prozessanlagen und Prüfstände",
    "project3Desc": "Mechanische Konstruktion von Vakuumbehältern, integrierter Pumpentechnik und unterstützenden Prüfständen. Im Fokus standen Montagekonzept, Wartungszugang, Rohrschnittstellen und das strukturelle Verhalten vakuumbelasteter Komponenten.",
    "project4Type": "MATERIALHANDLING",
    "project4Title": "Automatisiertes Materialtransportsystem",
    "project4Desc": "Entwicklung eines automatisierten Transportkonzepts mit einem kundenspezifisch konstruierten Roboter auf einer AGV-Plattform. Mechanik, Bewegungsgrenzen, Lastaufnahme und Automatisierungsanforderungen wurden als integriertes System entwickelt.",
    "project5Type": "ROBOTERPRODUKTION",
    "project5Title": "Simulation einer Multi-Roboter-Montagelinie",
    "project5Desc": "Virtuelle Produktionslinie mit Fabriklayout, Fördertechnik, Menschinteraktion und sechs Industrierobotern für Pick-and-Place-, Lackier- und Schweißaufgaben. Kinematik und Ablaufplanung wurden gemeinsam entwickelt, um die Zelle als Gesamtsystem zu bewerten.",
    "project6Type": "MECHATRONIK",
    "project6Title": "Automatisiertes Musikinstrument",
    "project6Desc": "Von Grund auf entwickeltes mechatronisches Instrument mit kundenspezifischen Mechanikteilen, drei Schrittmotorachsen und einer Python-Schicht, die MIDI-Befehle in Maschinenbewegung übersetzt. Das Projekt verband CAD, Prototyping, Steuerung und Softwareintegration.",
    "project7Type": "CFD / FEA",
    "project7Title": "Aerodynamik- und Strömungsoptimierung",
    "project7Desc": "CFD-gestützte Entwicklung für aerodynamische Flächen und kompakte Strömungsbauteile, darunter Flügelkonzepte, Lüftungshardware und Ventilgeometrien. Strömungsverhalten, Druckverlust und strukturelle Randbedingungen steuerten die Geometrieänderungen.",
    "project8Type": "PRODUKTDESIGN",
    "project8Title": "Konsum- und Spezialproduktentwicklung",
    "project8Desc": "Detaillierte Produktentwicklung von hochwertiger Consumer-Hardware bis zu spezialisierten mechanischen Geräten. Im Fokus standen Packaging, Materialwahl, Fertigbarkeit, Montagekonzept und die Überführung früher Ideen in konsistente, produktionsreife Bauteile.",
    "tagManufacturing": "Fertigung",
    "tagDfM": "DFM",
    "testimonialsEyebrow": "Kundenfeedback",
    "testimonialsTitle": "Was Kunden nach Abschluss der Arbeit sagen.",
    "testimonialsNote": "Die untenstehenden Kundennamen sind aus Datenschutzgründen Pseudonyme. Projekttitel werden bewusst nicht genannt.",
    "privacyName": "Name aus Datenschutzgründen geändert",
    "industriesEyebrow": "Einsatzfelder",
    "industriesTitle": "Nützlich für Produkte, Komponenten und Fluidsysteme.",
    "industry1Title": "Industrieanlagen",
    "industry1Desc": "Gehäuse, Halterungen, Kanäle, Rahmen, Vorrichtungen und funktionale Baugruppen.",
    "industry2Title": "Fluidsysteme",
    "industry2Desc": "Verteiler, Kanäle, Druckverluststudien, Lüfter und thermische Pfade.",
    "industry3Title": "Produktentwicklung",
    "industry3Desc": "Konzepte, Redesigns, Fehleruntersuchung und technische Unterstützung.",
    "industry4Title": "Prototyping-Unterstützung",
    "industry4Desc": "Analysen früh nutzen, um Versuch-und-Irrtum vor physischen Tests zu reduzieren.",
    "estimateEyebrow": "Budgetrechner",
    "estimateTitle": "Schnell einen <span class=\"text-outline\">Budgetrahmen erhalten.</span>",
    "estimateIntro": "Ein Werkzeug für die frühe Budgetplanung. Der Endpreis hängt von Geometrie, Umfang, Eingaben und Lieferumfang ab.",
    "estimateType": "Art der Arbeit",
    "estimateCad": "CAD / Konstruktion",
    "estimateCadRate": "ab €20 / Stunde",
    "estimateSim": "Simulation",
    "estimateSimRate": "ab €45 / Stunde",
    "estimateHours": "Geschätzte Stunden",
    "estimateComplexity": "Komplexität",
    "estimateBasic": "Einfach",
    "estimateStandard": "Standard",
    "estimateComplex": "Komplex",
    "estimateBudget": "Orientierungsbudget",
    "estimateDisclaimer": "Dies ist eine grobe Budgethilfe und kein Angebot. Der Simulationsumfang kann sich durch Modellvorbereitung, Vernetzung, Randbedingungen und Konvergenzanforderungen deutlich ändern.",
    "whoEyebrow": "Wer wir sind",
    "whoTitle": "Direkte technische Verantwortung, von der ersten Anforderung bis zum finalen Modell.",
    "whoRole": "Mechanical Design Engineer · CFD / FEA · Robotik & Automatisierung",
    "whoLead": "DIRLOSAN setzt auf direkte Kommunikation zwischen Ingenieur und Kunde. Die technische Arbeit wird von Bogdan-Ioan Dîrloșan geleitet, einem Mechanical Design Engineer mit Robotik-Hintergrund und abgeschlossenem M.Sc. in Künstlicher Intelligenz.",
    "whoBody": "Seine Erfahrung umfasst den gesamten CAD-Entwicklungszyklus, industrielle Kühltechnik und Maschinenbau, CFD und FEA, Fertigungsdokumentation sowie Robotik und Automatisierung. Er arbeitet von frühen Kundenanforderungen über detaillierte Modelle, Zeichnungen und Simulationen bis zur Übergabe an die Fertigung.",
    "whoStudiesLabel": "Studium",
    "whoStudies": "B.Sc. Robotik · M.Sc. Künstliche Intelligenz",
    "whoMoreSummary": "Qualifikationen & Tools",
    "whoToolsLabel": "Engineering-Tools",
    "whoCredential3Label": "Kernbereiche",
    "whoCredential3": "CAD · CFD · FEA · Automatisierung",
    "whoCredential4Label": "Zertifizierung",
    "whoCredential4": "Computer Vision · Udacity",
    "whoCredential5Label": "Zertifizierung",
    "whoCredential5": "CAD-Zertifizierung",
    "whoCredential6Label": "Auszeichnung",
    "whoCredential6": "Podiumsplatz · Sonaca Factory Management",
    "whoCta": "Projekt besprechen",
    "aboutTitle": "Gute Simulation ist dann nützlich, wenn sie eine Konstruktionsentscheidung verändert.",
    "aboutCopy": "DIRLOSAN verbindet mechanische Produktentwicklung mit Erfahrung in CFD, FEA, Robotik und Automatisierung. Die Arbeit umfasst fertigungsgerechtes CAD, Industriemaschinen, Kühlsysteme, Simulation und direkte technische Kundenbetreuung.",
    "tagProduct": "Produktentwicklung",
    "tagFluid": "Strömungsmechanik",
    "tagStructural": "Strukturanalyse",
    "tagAutomation": "Robotik & Automatisierung",
    "skillCad": "CAD & Konstruktion",
    "skillSimulation": "Simulation",
    "skillAutomation": "Automatisierung & Analyse",
    "faqEyebrow": "Wichtige Kundenfragen",
    "faqTitle": "Die praktischen Details vor Projektstart.",
    "faq1Q": "Können Sie mit einer groben Idee, Skizze oder unvollständigem CAD starten?",
    "faq1A": "Ja. Je nach Projektphase können wir mit einem frühen Konzept, Skizzen, Referenzmaßen oder einem vorhandenen CAD-Modell beginnen.",
    "faq2Q": "Können Sie sowohl Konstruktion als auch Simulation übernehmen?",
    "faq2A": "Ja. Produktdesign, CFD und FEA können in einem Workflow bleiben, sodass Simulationsergebnisse direkt in die Geometrie zurückfließen.",
    "faq3Q": "Was benötigen Sie, um das Projekt zu kalkulieren?",
    "faq3A": "Eine kurze Problembeschreibung, vorhandene Zeichnungen oder CAD-Daten, Zielperformance, bekannte Lasten oder Strömungsbedingungen, gewünschte Liefergegenstände und der bevorzugte Zeitplan reichen meist für eine erste Eingrenzung.",
    "faq4Q": "Kann die Arbeit als Festpreisprojekt angeboten werden?",
    "faq4A": "Bei klar definierten Liefergegenständen ist ein Festpreis möglich. Größere oder sich entwickelnde Projekte können in Meilensteine unterteilt werden, damit Umfang und Kosten transparent bleiben.",
    "faq5Q": "Welche Dateien und Ergebnisse kann ich erhalten?",
    "faq5A": "Je nach Umfang können native CAD-Dateien, STEP-Dateien, Fertigungszeichnungen, Baugruppen, Stücklisten, Simulationsberichte, Diagramme und die vereinbarte technische Dokumentation geliefert werden.",
    "faq6Q": "Können Sie unter NDA oder mit vertraulichen Produktdaten arbeiten?",
    "faq6A": "Wenn das Projekt vertraulich ist, sollte dies vor dem Versand sensibler Dateien genannt werden. NDA- und Informationsschutzanforderungen können vereinbart werden, bevor detaillierte Projektdaten geteilt werden.",
    "faq7Q": "Welche CAD- und Simulationsprogramme nutzen Sie?",
    "faq7A": "Zum Werkzeugbestand gehören SolidWorks, Catia V5, Fusion 360 und AutoCAD für die Konstruktion sowie Ansys, Abaqus und SolidWorks Simulation für Struktur-, Thermik- und Strömungsanalysen.",
    "faq8Q": "Können Sie mit meinem bestehenden Ingenieur, Hersteller oder Lieferanten zusammenarbeiten?",
    "faq8A": "Ja. Die Arbeit kann in ein bestehendes Team eingebunden werden; Konstruktionsdateien, Zeichnungen und technische Entscheidungen können für Review oder Übergabe an die Fertigung vorbereitet werden.",
    "faq9Q": "Arbeiten Sie remote mit internationalen Kunden?",
    "faq9A": "Ja. Der Engineering-Workflow eignet sich für Remote-Projekte, bei denen Anforderungen, CAD, Reviews und Liefergegenstände digital abgewickelt werden.",
    "faq10Q": "Wie werden Revisionen und Änderungen am Leistungsumfang behandelt?",
    "faq10A": "Der anfängliche Umfang sollte Liefergegenstände und Review-Punkte definieren. Ändern sich die Anforderungen wesentlich, können Auswirkungen auf Termin und Kosten vor zusätzlicher Arbeit abgestimmt werden.",
    "faq11Q": "Können Sie helfen, wenn ein Design versagt oder die Zielperformance nicht erreicht?",
    "faq11A": "Ja. Bestehende Konstruktionen können auf strukturelle, thermische, strömungstechnische oder fertigungstechnische Probleme geprüft und anschließend durch gezielte Analyse und Designänderungen verbessert werden.",
    "faq12Q": "Sind CFD- oder FEA-Ergebnisse dasselbe wie eine physische Zertifizierung?",
    "faq12A": "Nein. Simulation ist ein Werkzeug für technische Entscheidungen und hängt von Modell, Annahmen, Eingaben und Randbedingungen ab. Wenn Zertifizierung oder behördliche Zulassung erforderlich ist, gelten weiterhin die entsprechenden physischen Tests und autorisierten Zertifizierungsverfahren.",
    "contactEyebrow": "Ein technisches Problem?",
    "contactTitle": "Lassen Sie es uns lösen.",
    "contactIntro": "Sagen Sie uns, was Sie entwickeln, was nicht funktioniert oder was validiert werden muss.",
    "formName": "Name",
    "formEmail": "E-Mail",
    "formMessage": "Woran arbeiten Sie?",
    "formSend": "Anfrage senden",
    "formNote": "Beim Absenden öffnet sich Ihre E-Mail-App mit einer Nachricht an dirlosan@bdengineering.com.",
    "formSuccess": "Ihre E-Mail-App wird geöffnet…",
    "footerLine": "Engineering und Simulation",
    "backTop": "Nach oben ↑"
  }
};

let currentLang = 'en';
try { currentLang = localStorage.getItem('dirlosan-lang') || 'en'; } catch (_) {}
if (!translations[currentLang]) currentLang = 'en';

function applyLanguage(lang, animate = false) {
  if (!translations[lang]) return;
  currentLang = lang;
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.title = t.title;
  $('meta[name="description"]')?.setAttribute('content', t.description);

  if (animate && !reduced) document.body.classList.add('language-changing');
  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] != null) el.textContent = t[key];
  });
  $$('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] != null) el.innerHTML = t[key];
  });
  $$('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (t[key] != null) el.setAttribute('aria-label', t[key]);
  });

  $('.current-language').textContent = lang.toUpperCase();
  $$('.language-menu [data-lang]').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  updateThemeLabel();
  updateMenuLabel();
  try { localStorage.setItem('dirlosan-lang', lang); } catch (_) {}
  if (animate && !reduced) setTimeout(() => document.body.classList.remove('language-changing'), 260);
}

function currentTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}
function updateThemeLabel() {
  const t = translations[currentLang];
  $('.theme-toggle')?.setAttribute('aria-label', currentTheme() === 'dark' ? t.themeLight : t.themeDark);
}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#060b13' : '#ffffff');
  updateThemeLabel();
  try { localStorage.setItem('dirlosan-theme', theme); } catch (_) {}
  if (feaReady) drawFEA();
}

applyLanguage(currentLang);
applyTheme(currentTheme());

// Intro wipe
if (!reduced) {
  requestAnimationFrame(() => setTimeout(() => $('.intro-wipe')?.classList.add('done'), 180));
  setTimeout(() => $('.intro-wipe')?.classList.add('gone'), 1700);
} else $('.intro-wipe')?.classList.add('gone');

// Header + page progress + parallax
const header = $('.site-header');
const progress = $('.page-progress span');
const heroCopy = $('.hero-copy');
const heroStreamlines = $('.hero-streamlines');
const aboutLines = $('.about-lines');
let scrollTicking = false;
function updateScrollEffects() {
  const y = scrollY;
  header?.classList.toggle('scrolled', y > 24);
  const max = document.documentElement.scrollHeight - innerHeight;
  if (progress) progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
  if (!reduced) {
    if (heroCopy) heroCopy.style.transform = `translate3d(0,${Math.min(y * .08, 55)}px,0)`;
    if (heroStreamlines) heroStreamlines.style.transform = `translate3d(0,${Math.min(y * .13, 95)}px,0)`;
    if (aboutLines) {
      const r = $('.about')?.getBoundingClientRect();
      if (r) aboutLines.style.transform = `translate3d(0,${Math.max(-45, Math.min(45, -r.top * .035))}px,0)`;
    }
  }
  scrollTicking = false;
}
function onScroll() {
  if (!scrollTicking) {
    requestAnimationFrame(updateScrollEffects);
    scrollTicking = true;
  }
}
addEventListener('scroll', onScroll, { passive: true });
updateScrollEffects();

// Language menu
const langButton = $('.language-button');
const langMenu = $('.language-menu');
function closeLang() {
  langButton?.setAttribute('aria-expanded', 'false');
  langMenu?.classList.remove('open');
  langMenu?.setAttribute('aria-hidden', 'true');
}
langButton?.addEventListener('click', e => {
  e.stopPropagation();
  const open = langButton.getAttribute('aria-expanded') !== 'true';
  langButton.setAttribute('aria-expanded', String(open));
  langMenu.classList.toggle('open', open);
  langMenu.setAttribute('aria-hidden', String(!open));
});
$$('.language-menu [data-lang]').forEach(btn => btn.addEventListener('click', () => {
  applyLanguage(btn.dataset.lang, true);
  closeLang();
}));
document.addEventListener('click', e => { if (!e.target.closest('.language-switcher')) closeLang(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeLang(); closeMobileMenu(); } });

// Theme
$('.theme-toggle')?.addEventListener('click', () => applyTheme(currentTheme() === 'dark' ? 'light' : 'dark'));

// Mobile navigation
function updateMenuLabel() {
  const btn = $('.menu-button');
  if (!btn) return;
  const open = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-label', translations[currentLang][open ? 'closeMenu' : 'openMenu']);
}
function closeMobileMenu() {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  updateMenuLabel();
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  mobileMenu.classList.toggle('open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  updateMenuLabel();
});
$$('.mobile-menu a').forEach(a => a.addEventListener('click', closeMobileMenu));
updateMenuLabel();

// Reveal on entry
if (!reduced && 'IntersectionObserver' in window) {
  const revealTargets = $$('.reveal');
  const revealObserver = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  }), { threshold: .12, rootMargin: '0px 0px -5%' });
  revealTargets.forEach(el => {
    el.classList.add('will-reveal');
    revealObserver.observe(el);
  });
} else {
  $$('.reveal').forEach(el => el.classList.add('visible'));
}

// Services activation: page scrolling no longer changes the preview.
// The mouse wheel changes it only while the pointer is over the visual viewport.
// It also advances every 12 seconds while the services section is on screen.
const services = $$('.service');
const visuals = $$('.visual-stage');
const serviceViewport = $('.service-visual');
const cycleDots = $$('.service-cycle-dots i');
const cycleBar = $('.service-cycle-bar b');
let activeService = 0;
let serviceCycleTimer = 0;
let serviceSectionVisible = false;
let lastServiceWheel = 0;
function resetCycleBar() {
  if (!cycleBar) return;
  cycleBar.style.animation = 'none';
  void cycleBar.offsetWidth;
  if (!reduced && serviceSectionVisible) cycleBar.style.animation = 'serviceCountdown 12s linear forwards';
}
function activateService(index, resetTimer = true) {
  activeService = (index + visuals.length) % visuals.length;
  services.forEach((s, i) => s.classList.toggle('active', i === activeService));
  visuals.forEach((v, i) => v.classList.toggle('active', i === activeService));
  cycleDots.forEach((d, i) => d.classList.toggle('active', i === activeService));
  if (resetTimer) restartServiceCycle();
}
function restartServiceCycle() {
  clearInterval(serviceCycleTimer);
  serviceCycleTimer = 0;
  resetCycleBar();
  if (!serviceSectionVisible || reduced || document.hidden) return;
  serviceCycleTimer = setInterval(() => { activateService(activeService + 1, false); resetCycleBar(); }, 12000);
}
activateService(0, false);
services.forEach(s => {
  s.addEventListener('pointerenter', () => activateService(+s.dataset.service));
  s.addEventListener('click', () => activateService(+s.dataset.service));
});
serviceViewport?.addEventListener('wheel', e => {
  e.preventDefault();
  const now = performance.now();
  if (now - lastServiceWheel < 420 || Math.abs(e.deltaY) < 6) return;
  lastServiceWheel = now;
  activateService(activeService + (e.deltaY > 0 ? 1 : -1));
}, { passive: false });
if ('IntersectionObserver' in window && serviceViewport) {
  new IntersectionObserver(([entry]) => {
    serviceSectionVisible = entry.isIntersecting;
    restartServiceCycle();
  }, { threshold: .2 }).observe(serviceViewport);
} else {
  serviceSectionVisible = true;
  restartServiceCycle();
}

// Scroll-driven capability story: three deliberate engineering chapters.
// Only one chapter is active at a time, and its six capabilities enter sequentially.
const whatSection = $('.what-we-do');
const capabilityClusters = $$('.capability-cluster');
const whatStagePanels = $$('.what-stage-panel');
const whatStageSteps = $$('.what-stage-step');
const whatProgress = $('.what-progress span');
let whatTicking = false;
let activeWhatStage = -1;

function setWhatStage(stage) {
  if (stage === activeWhatStage) return;
  activeWhatStage = stage;
  capabilityClusters.forEach((cluster, i) => {
    cluster.classList.toggle('active', i === stage);
    cluster.classList.toggle('past', i < stage);
  });
  whatStagePanels.forEach((panel, i) => panel.classList.toggle('active', i === stage));
  whatStageSteps.forEach((step, i) => step.classList.toggle('active', i === stage));
}

function updateWhatWeDo() {
  if (!whatSection) { whatTicking = false; return; }
  const r = whatSection.getBoundingClientRect();
  const travel = Math.max(1, r.height - innerHeight);
  const progress = Math.max(0, Math.min(1, -r.top / travel));
  const scaled = progress >= 1 ? 3 : progress * 3;
  const stage = Math.min(2, Math.floor(scaled));
  const localProgress = progress >= 1 ? 1 : scaled - stage;
  setWhatStage(stage);

  capabilityClusters.forEach((cluster, groupIndex) => {
    const chips = $$('.capability-chip', cluster);
    chips.forEach((chip, i) => {
      let reveal = 0;
      if (groupIndex === stage) {
        const start = i * .085;
        reveal = Math.max(0, Math.min(1, (localProgress - start) / .24));
      }
      chip.style.setProperty('--reveal', reveal.toFixed(3));
    });
  });

  if (whatProgress) whatProgress.style.transform = `scaleX(${progress})`;
  whatTicking = false;
}
function requestWhatUpdate() {
  if (!whatTicking) { requestAnimationFrame(updateWhatWeDo); whatTicking = true; }
}
if (whatSection) {
  addEventListener('scroll', requestWhatUpdate, { passive: true });
  addEventListener('resize', requestWhatUpdate);
  updateWhatWeDo();
}

// Process line animation
const processTrack = $('.process-track');
if (processTrack && 'IntersectionObserver' in window) {
  new IntersectionObserver(([e], o) => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      o.disconnect();
    }
  }, { threshold: .25 }).observe(processTrack);
}

// FAQ: keep one open at a time
$$('.faq-item').forEach(item => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    $$('.faq-item').forEach(other => {
      if (other !== item) other.open = false;
    });
  });
});

// Hero spotlight and mesh pointer
const hero = $('.hero');
hero?.addEventListener('pointermove', e => {
  const r = hero.getBoundingClientRect();
  hero.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
  hero.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
}, { passive: true });

// Interactive hero mesh
const meshCanvas = $('#meshCanvas');
const mctx = meshCanvas?.getContext('2d');
let meshPts = [], pointer = { x: -9999, y: -9999 }, meshRAF = 0, lastMeshFrame = 0;
function cssRGB(name, fallback) {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}
function resizeMesh() {
  if (!meshCanvas) return;
  const dpr = Math.min(devicePixelRatio || 1, 2), r = meshCanvas.getBoundingClientRect();
  meshCanvas.width = r.width * dpr;
  meshCanvas.height = r.height * dpr;
  mctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const cols = Math.min(22, Math.max(11, Math.floor(r.width / 105))), rows = Math.min(14, Math.max(7, Math.floor(r.height / 100)));
  meshPts = [];
  for (let y = 0; y <= rows; y++) {
    for (let x = 0; x <= cols; x++) {
      meshPts.push({ x: x * r.width / cols + (Math.sin(x * 7 + y) * 28), y: y * r.height / rows + (Math.cos(y * 5 + x) * 22), ox: 0, oy: 0, phase: (x + y) * .73 });
    }
  }
}
function drawMesh(t = 0) {
  if (!meshCanvas || document.hidden) return;
  if (!reduced && t - lastMeshFrame < 30) { meshRAF = requestAnimationFrame(drawMesh); return; }
  lastMeshFrame = t;
  const r = meshCanvas.getBoundingClientRect(), rgb = cssRGB('--mesh-rgb', '8,45,104'), rrgb = cssRGB('--red-rgb', '224,16,24');
  mctx.clearRect(0, 0, r.width, r.height);
  meshPts.forEach(p => {
    const dx = p.x - pointer.x, dy = p.y - pointer.y, d = Math.hypot(dx, dy);
    let tx = Math.sin(t * .00055 + p.phase) * 2.4, ty = Math.cos(t * .00045 + p.phase) * 2.1;
    if (d < 190) {
      const f = (1 - d / 190) * 13;
      tx += dx / (d || 1) * f;
      ty += dy / (d || 1) * f;
    }
    p.ox += (tx - p.ox) * .065;
    p.oy += (ty - p.oy) * .065;
  });
  mctx.lineWidth = .9;
  for (let i = 0; i < meshPts.length; i++) {
    for (let j = i + 1; j < meshPts.length; j++) {
      const a = meshPts[i], b = meshPts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < 128) {
        const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2, pd = Math.hypot(mx - pointer.x, my - pointer.y), hot = pd < 145;
        const fade = Math.max(0, 1 - d / 128) * (hot ? .48 : .22);
        mctx.strokeStyle = hot ? `rgba(${rrgb},${fade})` : `rgba(${rgb},${fade})`;
        mctx.beginPath();
        mctx.moveTo(a.x + a.ox, a.y + a.oy);
        mctx.lineTo(b.x + b.ox, b.y + b.oy);
        mctx.stroke();
      }
    }
  }
  meshPts.forEach(p => {
    const d = Math.hypot(p.x - pointer.x, p.y - pointer.y), hot = d < 115;
    mctx.fillStyle = hot ? `rgba(${rrgb},.82)` : `rgba(${rgb},.28)`;
    mctx.beginPath();
    mctx.arc(p.x + p.ox, p.y + p.oy, hot ? 2.8 : 2.2, 0, Math.PI * 2);
    mctx.fill();
  });
  if (!reduced && !document.hidden) meshRAF = requestAnimationFrame(drawMesh);
}
if (meshCanvas) {
  resizeMesh();
  drawMesh();
  addEventListener('resize', resizeMesh);
  hero?.addEventListener('pointermove', e => {
    const r = meshCanvas.getBoundingClientRect();
    pointer = { x: e.clientX - r.left, y: e.clientY - r.top };
  });
  hero?.addEventListener('pointerleave', () => pointer = { x: -9999, y: -9999 });
}

// FEA visual canvas
const feaCanvas = $('#feaCanvas');
const fctx = feaCanvas?.getContext('2d');
let feaPts = [];
function resizeFEA() {
  if (!feaCanvas) return;
  const r = feaCanvas.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2);
  feaCanvas.width = r.width * dpr;
  feaCanvas.height = r.height * dpr;
  fctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  feaPts = [];
  const cols = 7, rows = 7;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const px = (x + .8) * r.width / (cols + .6), py = (y + .7) * r.height / (rows + .4);
      feaPts.push({ x: px + (y % 2 ? 18 : 0) + Math.sin((x + 1) * (y + 2)) * 8, y: py + Math.cos((x + 2) * (y + 1)) * 8 });
    }
  }
  drawFEA();
}
function drawFEA() {
  if (!feaCanvas || !fctx) return;
  const r = feaCanvas.getBoundingClientRect();
  if (!r.width || !r.height) return;
  const navy = getComputedStyle(document.documentElement).getPropertyValue('--navy').trim() || '#082d68';
  const red = getComputedStyle(document.documentElement).getPropertyValue('--red').trim() || '#e01018';
  fctx.clearRect(0, 0, r.width, r.height);
  const stressX = r.width * .72, stressY = r.height * .38;
  for (let i = 0; i < feaPts.length; i++) {
    for (let j = i + 1; j < feaPts.length; j++) {
      const a = feaPts[i], b = feaPts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < r.width / 6) {
        const s = 1 - Math.min(1, Math.hypot((a.x + b.x) / 2 - stressX, (a.y + b.y) / 2 - stressY) / (r.width * .42));
        fctx.globalAlpha = .18 + s * .62;
        fctx.strokeStyle = s > .52 ? red : navy;
        fctx.lineWidth = 1.15;
        fctx.beginPath();
        fctx.moveTo(a.x, a.y);
        fctx.lineTo(b.x, b.y);
        fctx.stroke();
      }
    }
  }
  fctx.globalAlpha = 1;
  feaPts.forEach(p => {
    const s = 1 - Math.min(1, Math.hypot(p.x - stressX, p.y - stressY) / (r.width * .42));
    fctx.fillStyle = s > .55 ? red : navy;
    fctx.beginPath();
    fctx.arc(p.x, p.y, 3.3, 0, Math.PI * 2);
    fctx.fill();
  });
}
if (feaCanvas) {
  resizeFEA();
  feaReady = true;
  addEventListener('resize', resizeFEA);
}

// 3D tilt for visual card
const tiltCard = $('.tilt-card');
if (tiltCard && !reduced && matchMedia('(pointer:fine)').matches) {
  tiltCard.addEventListener('pointermove', e => {
    const r = tiltCard.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    tiltCard.style.setProperty('--ry', `${x * 4.5}deg`);
    tiltCard.style.setProperty('--rx', `${y * -4.5}deg`);
  });
  tiltCard.addEventListener('pointerleave', () => {
    tiltCard.style.setProperty('--ry', '0deg');
    tiltCard.style.setProperty('--rx', '0deg');
  });
}

// Magnetic controls
if (!reduced && matchMedia('(pointer:fine)').matches) {
  $$('.magnetic').forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect(), x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * .08}px,${y * .12}px)`;
    });
    el.addEventListener('pointerleave', () => el.style.transform = '');
  });
}

// Native cursor is intentionally used for better cross-browser stability.

// General budgeting estimator
const workTabs = $$('.work-tab');
const complexityTabs = $$('.complexity-tabs button');
const hoursSlider = $('#hoursSlider');
const hoursOutput = $('#hoursOutput');
const estimateValue = $('#estimateValue');
const estimateRate = $('#estimateRate');
const estimateVisuals = $$('.estimate-visual');
let estimateWork = 'cad';
let estimateFactor = 1.25;
function updateEstimate() {
  if (!hoursSlider || !estimateValue || !estimateRate) return;
  const hours = Number(hoursSlider.value || 1);
  const baseRate = estimateWork === 'simulation' ? 45 : 20;
  const total = Math.round(baseRate * hours * estimateFactor);
  if (hoursOutput) hoursOutput.textContent = `${hours} h`;
  estimateValue.textContent = `€${total.toLocaleString('en-US')}`;
  estimateRate.textContent = `€${baseRate}/h × ${hours} h × ${estimateFactor.toFixed(2)}`;
  const pct = ((hours - Number(hoursSlider.min)) / (Number(hoursSlider.max) - Number(hoursSlider.min))) * 100;
  hoursSlider.style.setProperty('--range', `${pct}%`);
}
workTabs.forEach(btn => btn.addEventListener('click', () => {
  estimateWork = btn.dataset.work;
  workTabs.forEach(b => b.classList.toggle('active', b === btn));
  estimateVisuals.forEach(v => v.classList.toggle('active', v.dataset.estimateVisual === estimateWork));
  updateEstimate();
}));
complexityTabs.forEach(btn => btn.addEventListener('click', () => {
  estimateFactor = Number(btn.dataset.factor || 1);
  complexityTabs.forEach(b => b.classList.toggle('active', b === btn));
  updateEstimate();
}));
hoursSlider?.addEventListener('input', updateEstimate);
updateEstimate();

// Contact form: open a pre-addressed email in the visitor's mail app.
$('#contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const form = e.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const message = String(data.get('message') || '').trim();
  const subject = `DIRLOSAN website enquiry${name ? ` — ${name}` : ''}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    message,
    '',
    `Website language: ${currentLang.toUpperCase()}`
  ].join('\n');
  const note = $('#formNote');
  if (note) {
    note.textContent = translations[currentLang].formSuccess;
    note.removeAttribute('data-i18n');
    note.style.color = 'var(--navy)';
  }
  window.location.href = `mailto:dirlosan@bdengineering.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

// Pause the expensive canvas animation whenever the tab is not visible.
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (meshRAF) cancelAnimationFrame(meshRAF);
    meshRAF = 0;
    clearInterval(serviceCycleTimer);
    serviceCycleTimer = 0;
    return;
  }
  if (meshCanvas && !reduced && !meshRAF) {
    lastMeshFrame = 0;
    meshRAF = requestAnimationFrame(drawMesh);
  }
  restartServiceCycle();
});
