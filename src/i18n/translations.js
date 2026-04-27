// All site copy lives here. Keys mirror component names for easy navigation.
// Default locale is Hungarian (hu); English (en) is provided as a fallback.

export const translations = {
  hu: {
    nav: {
      services: 'Szolgáltatások',
      process: 'Folyamat',
      work: 'Munkáink',
      clients: 'Ügyfelek',
      cta: 'Hívás foglalása',
    },
    hero: {
      eyebrow: 'AI · Automatizálás · Designstúdió',
      titleAccent: 'Intelligens rendszerek',
      titleRest: 'ambiciózus csapatoknak.',
      sub: 'A Nyra egy AI-automatizálási, digitalizációs és designügynökség. A manuális munkafolyamatokat autonóm termékekké alakítjuk — egyedi AI-mérnökséget brand-szintű designnal párosítva, hogy az eredmény könnyen használható és lehetetlen ne észrevenni.',
      ctaPrimary: 'Projekt indítása',
      ctaSecondary: 'Reel megtekintése',
      meta: {
        a: { value: '40+', label: 'leszállított automatizáció' },
        b: { value: '12', label: 'kiszolgált ország' },
        c: { value: '98%', label: 'megtartási arány' },
      },
      scroll: 'Görgess',
    },
    marquee: {
      label: 'Olyan csapatok bíznak bennünk, akik a jövőt építik',
    },
    services: {
      eyebrow: 'Amit csinálunk',
      titleAccent: 'Hat szakterület.',
      titleRest: 'Egy stúdió.',
      sub: 'Senior mérnököket, dizájnereket és stratégákat párosítunk kis csapatokban. Nincs átadás, nincs ügynökségi hízás — minden projekt hetek alatt indul, nem negyedévek alatt.',
      items: [
        {
          title: 'AI-automatizálás',
          desc: 'Egyedi ágensek, RAG-rendszerek és munkafolyamat-orkesztráció, amelyek leváltják az ismétlődő munkát — az értékesítéstől a belső eszközökig.',
          bullets: ['LLM-ágensek és tool use', 'RAG / vektoros keresés', 'Munkafolyamat-orkesztráció'],
        },
        {
          title: 'Digitalizáció',
          desc: 'Feltérképezzük az analóg és örökölt folyamatokat, majd modern, mérhető, API-first rendszerként építjük újra őket — olyanokat, amelyeket a csapatod tényleg szeret használni.',
          bullets: ['Folyamatauditálás és térképezés', 'Egyedi dashboardok', 'Belső eszközök és portálok'],
        },
        {
          title: 'Brand- és terméktervezés',
          desc: 'Identitás, web és termék-UI, amelyek olyan intelligensnek látszanak, mint amilyen a mögöttük futó technológia. Pixelpontos kivitelezés, soha nem dekoráció.',
          bullets: ['Brand-identitásrendszerek', 'Termék UI/UX', 'Magas konverziós weboldalak'],
        },
        {
          title: 'AI-stratégia és tanácsadás',
          desc: 'Vezetői csapatoknak: világos, priorizált útiterv arról, hol billenti meg az AI az eredményeidet — és hol nem.',
          bullets: ['Lehetőségek felmérése', 'Build-vs-buy elemzés', 'Gyakorlati felkészítés'],
        },
        {
          title: 'Egyedi szoftver',
          desc: 'Amikor a kész megoldás kevés — production-szintű webalkalmazások, integrációk és adatfolyamatok, pontosan a specifikációd szerint.',
          bullets: ['Full-stack mérnökség', 'Adatfolyamatok és ETL', 'Felhő-infrastruktúra'],
        },
        {
          title: 'Folyamatos optimalizálás',
          desc: 'Az indulás után sem hagyunk magadra. Negyedéves felülvizsgálatok, monitoring és iteráció — hogy az AI-stacked tovább kamatozzon.',
          bullets: ['Eval és monitoring', 'Negyedéves útitervek', 'Költség- és minőséghangolás'],
        },
      ],
    },
    process: {
      eyebrow: 'Hogyan dolgozunk',
      titleA: 'Az első hívástól',
      accentA: 'a produkcióig',
      titleB: '60 napon belül.',
      sub: 'Megismételhető, átlátható folyamat, amely bizonyítékokra épül — nem vélemények­re. Minden fázisnak van olyan szállítmánya, amit a board előtt is meg tudsz mutatni.',
      steps: [
        { t: 'Felfedezés', d: 'Két hetes sprint a munkafolyamatok feltérképezésére, érintettek meghallgatására és a lehetőség számszerűsítésére. Egy priorizált AI-útitervvel távozol — akkor is, ha nem dolgozunk tovább együtt.' },
        { t: 'Tervezés', d: 'Architektúra, adatfolyam és brand-szintű UX. A kritikus utat kódban prototipizáljuk, nem diákban — így a kockázat korán mutatkozik meg, nem a launch napján.' },
        { t: 'Építés', d: 'Senior mérnökök kéthetes inkrementumokban szállítanak, heti demókkal. Az evalek a nulladik naptól futnak. Valós metrikákat látsz, nem haladásjelzőket.' },
        { t: 'Üzemeltetés', d: 'Átadás, képzés, monitoring. Frakcionált AI-csapatként maradunk — negyedéves felülvizsgálatok, modellfrissítések és funkció-iteráció bekalkulálva.' },
      ],
    },
    showcase: {
      eyebrow: 'Válogatott munkák',
      title: 'Eredmények,',
      accent: 'nem szállítmányok.',
      sub: 'Egy kis ízelítő a közelmúlt projektjeiből. Minden esettanulmány mért üzleti eredmény, nem egy UI képernyőképe.',
      readCase: 'Esettanulmány elolvasása',
      items: [
        {
          client: 'Helix Logistics',
          title: 'Autonóm diszpécser-ágens egy 1 400 sofőrös flottához',
          tags: ['AI-automatizálás', 'Üzemeltetés'],
          metric: '38%-kal gyorsabb útvonalazás',
        },
        {
          client: 'Northwind Health',
          title: 'AI-triázs asszisztens 24 klinikán élesben',
          tags: ['Egészségügyi AI', 'Termék'],
          metric: '6,4× gyorsabb betegfelvétel',
        },
        {
          client: 'Kallio Capital',
          title: 'Befektetői szintű kutatási dashboard, teljesen újratervezve',
          tags: ['Digitalizáció', 'Design'],
          metric: '92 → 14 óra / riport',
        },
        {
          client: 'Polaris Studios',
          title: 'Brandrendszer + AI-támogatott tartalommotor',
          tags: ['Brand', 'AI-tartalom'],
          metric: '11× publikálási volumen',
        },
      ],
    },
    stats: [
      { v: '42M$', l: 'mért ügyfél-megtakarítás', s: '28 aktív projekten keresztül' },
      { v: '14 nap', l: 'átlag az első AI-prototípusig', s: 'kickoff-tól működő demóig' },
      { v: '3,8×', l: 'átlagos csapat-produktivitás növekedés', s: '90 nappal a launch után mérve' },
      { v: '0', l: 'félbehagyott projekt', s: 'a stúdió alapítása óta' },
    ],
    testimonials: {
      eyebrow: 'Ügyfelek',
      title: 'Olyan partnerség,',
      accent: 'amire emlékeznek.',
      items: [
        {
          q: 'A Nyra öt hét alatt egy egyedi AI-ágens köré építette át a betegfelvételi folyamatunkat. Két full-time pozíciót váltottunk ki, és az ügyfélélmény drámaian jobb.',
          name: 'Léa Marchetti',
          role: 'COO, Northwind Health',
        },
        {
          q: 'Ugyanúgy otthon vannak a tárgyalóban, mint a kódbázisunkban. Az általuk leszállított útiterv a legjobb stratégiai dokumentum, amit évek óta olvastam.',
          name: 'Dániel Tóth',
          role: 'CEO, Kallio Capital',
        },
        {
          q: 'A polírozottság szintje, amit egy alapvetően belső eszközre raknak, olyat más stúdiótól nem láttam. A csapatunk tényleg kéri, hogy használhassa a dashboardokat.',
          name: 'Priya Raghavan',
          role: 'VP Product, Helix Logistics',
        },
      ],
    },
    cta: {
      eyebrow: 'Most foglalunk Q3-as projekteket',
      title: 'Építsünk valamit,',
      accent: 'ami szédítően jó.',
      sub: 'Mesélj arról a munkafolyamatról, aminek nem kéne léteznie. Egy munkanapon belül válaszolunk egy 30 perces felfedező hívással és írott első reakcióval.',
      placeholder: 'te@ceged.com',
      submit: 'Kezdjük el a beszélgetést',
      small: 'Nincs spam. Nincs hírlevél. Csak egy válasz egy alapítótól.',
      thanks: 'Köszönjük — hamarosan jelentkezünk.',
    },
    footer: {
      tagline: 'AI-automatizálási, digitalizációs és designstúdió, amely intelligens rendszereket épít ambiciózus csapatoknak.',
      cols: {
        studio: { h: 'Stúdió', services: 'Szolgáltatások', process: 'Folyamat', work: 'Esettanulmányok', clients: 'Ügyfelek' },
        company: { h: 'Cég', about: 'Rólunk', careers: 'Karrier', press: 'Sajtó', contact: 'Kapcsolat' },
        connect: { h: 'Kapcsolódj' },
      },
      rights: 'Minden jog fenntartva.',
      legal: { privacy: 'Adatvédelem', terms: 'Feltételek', cookies: 'Sütik' },
    },
  },

  en: {
    nav: {
      services: 'Services',
      process: 'Process',
      work: 'Work',
      clients: 'Clients',
      cta: 'Book a call',
    },
    hero: {
      eyebrow: 'AI · Automation · Design Studio',
      titleAccent: 'Intelligent systems',
      titleRest: 'for ambitious teams.',
      sub: 'Nyra is an AI automation, digitalization and design agency. We turn manual workflows into autonomous products — pairing custom AI engineering with brand-grade design so the result feels effortless to use, and impossible to ignore.',
      ctaPrimary: 'Start a project',
      ctaSecondary: 'Watch reel',
      meta: {
        a: { value: '40+', label: 'shipped automations' },
        b: { value: '12', label: 'countries served' },
        c: { value: '98%', label: 'retention rate' },
      },
      scroll: 'Scroll',
    },
    marquee: {
      label: 'Trusted by teams shipping the future',
    },
    services: {
      eyebrow: 'What we do',
      titleAccent: 'Six disciplines.',
      titleRest: 'One studio.',
      sub: 'We pair senior engineers, designers and strategists in small teams. No handoffs, no agency bloat — every project ships in weeks, not quarters.',
      items: [
        {
          title: 'AI Automation',
          desc: 'Custom agents, RAG systems and workflow orchestration that replace repetitive work — from sales ops to internal tooling.',
          bullets: ['LLM agents & tool use', 'RAG / vector search', 'Workflow orchestration'],
        },
        {
          title: 'Digitalization',
          desc: 'We map analog and legacy processes, then rebuild them as modern, measurable, API-first systems your team actually wants to use.',
          bullets: ['Process audit & mapping', 'Custom dashboards', 'Internal tools & portals'],
        },
        {
          title: 'Brand & Product Design',
          desc: 'Identity, web, and product UI built to look as intelligent as what runs underneath. Pixel-grade craft, never decorative.',
          bullets: ['Brand identity systems', 'Product UI/UX', 'High-converting websites'],
        },
        {
          title: 'AI Strategy & Advisory',
          desc: 'For leadership teams: a clear, prioritized roadmap of where AI moves the needle and where it does not.',
          bullets: ['Opportunity mapping', 'Build-vs-buy analysis', 'Hands-on enablement'],
        },
        {
          title: 'Custom Software',
          desc: 'When off-the-shelf falls short — production-grade web apps, integrations and data pipelines, built to your exact spec.',
          bullets: ['Full-stack engineering', 'Data pipelines & ETL', 'Cloud infrastructure'],
        },
        {
          title: 'Continuous Optimization',
          desc: 'Once it ships, we don’t leave. Quarterly reviews, monitoring, and iteration so your AI stack keeps compounding value.',
          bullets: ['Eval & monitoring', 'Quarterly roadmaps', 'Cost & quality tuning'],
        },
      ],
    },
    process: {
      eyebrow: 'How we work',
      titleA: 'From',
      accentA: 'first call',
      titleB: 'to production in 60 days.',
      sub: 'A repeatable, transparent process built around evidence — not opinions. Every phase has a deliverable you can show your board.',
      steps: [
        { t: 'Discover', d: 'A two-week sprint to map workflows, interview stakeholders and quantify the opportunity. You leave with a prioritized AI roadmap whether or not we keep working together.' },
        { t: 'Design', d: 'Architecture, data flow, and brand-grade UX. We prototype the critical path in code, not slides — so risk shows up early, not at launch.' },
        { t: 'Build', d: 'Senior engineers ship in two-week increments with weekly demos. Evals run from day one. You see real metrics, not progress bars.' },
        { t: 'Operate', d: 'Hand-off, training, monitoring. We stay on as a fractional AI team — quarterly reviews, model updates, and feature iteration baked in.' },
      ],
    },
    showcase: {
      eyebrow: 'Selected work',
      title: 'Outcomes,',
      accent: 'not deliverables.',
      sub: 'A small sample of recent engagements. Every case study is a measured business outcome, not a screenshot of a UI.',
      readCase: 'Read case study',
      items: [
        {
          client: 'Helix Logistics',
          title: 'Autonomous dispatch agent for a 1,400-driver fleet',
          tags: ['AI Automation', 'Operations'],
          metric: '38% faster routing',
        },
        {
          client: 'Northwind Health',
          title: 'AI triage assistant deployed across 24 clinics',
          tags: ['Healthcare AI', 'Product'],
          metric: '6.4× faster intake',
        },
        {
          client: 'Kallio Capital',
          title: 'Investor-grade research dashboard, fully redesigned',
          tags: ['Digitalization', 'Design'],
          metric: '92 → 14 hours / report',
        },
        {
          client: 'Polaris Studios',
          title: 'Brand system + AI-assisted content engine',
          tags: ['Brand', 'AI Content'],
          metric: '11× publishing volume',
        },
      ],
    },
    stats: [
      { v: '$42M', l: 'measured client savings', s: 'across 28 active engagements' },
      { v: '14 days', l: 'average to first AI prototype', s: 'from kickoff to working demo' },
      { v: '3.8×', l: 'average team productivity gain', s: 'measured 90 days post-launch' },
      { v: '0', l: 'ghosted projects', s: 'since the studio was founded' },
    ],
    testimonials: {
      eyebrow: 'Clients',
      title: 'The kind of partnership',
      accent: 'people remember.',
      items: [
        {
          q: 'Nyra rebuilt our intake process around a custom AI agent in five weeks. We replaced two full-time roles and the experience for our customers is dramatically better.',
          name: 'Léa Marchetti',
          role: 'COO, Northwind Health',
        },
        {
          q: 'They are equally at home in a board room and in our codebase. The roadmap they delivered is the most useful strategic document I have read in years.',
          name: 'Daniel Þórsson',
          role: 'CEO, Kallio Capital',
        },
        {
          q: 'The level of design polish on what is essentially internal tooling is something I have not seen from any other studio. Our team actually asks to use the dashboards.',
          name: 'Priya Raghavan',
          role: 'VP Product, Helix Logistics',
        },
      ],
    },
    cta: {
      eyebrow: 'Now booking Q3 engagements',
      title: 'Let’s build something',
      accent: 'unreasonably good.',
      sub: 'Tell us about the workflow that should not exist. We will respond within one business day with a 30-minute discovery call and a written first-look.',
      placeholder: 'you@company.com',
      submit: 'Start the conversation',
      small: 'No spam. No newsletters. Just a reply from a founder.',
      thanks: 'Thanks — we will be in touch.',
    },
    footer: {
      tagline: 'An AI automation, digitalization and design studio building intelligent systems for ambitious teams.',
      cols: {
        studio: { h: 'Studio', services: 'Services', process: 'Process', work: 'Case studies', clients: 'Clients' },
        company: { h: 'Company', about: 'About', careers: 'Careers', press: 'Press', contact: 'Contact' },
        connect: { h: 'Connect' },
      },
      rights: 'All rights reserved.',
      legal: { privacy: 'Privacy', terms: 'Terms', cookies: 'Cookies' },
    },
  },
};

export const DEFAULT_LOCALE = 'hu';
export const SUPPORTED_LOCALES = ['hu', 'en'];
export const LOCALE_LABEL = { hu: 'Magyar', en: 'English' };
export const LOCALE_SHORT = { hu: 'HU', en: 'EN' };
