const APP_DATA = {

  /* ── META ───────────────────────────────────────────────────── */
  "meta": {
    "title": "IT Alignment Portal",
    "subtitle": "Vår gemensamma karta för hur IT prioriterar, bygger och utvecklas.",
    "label": "IT-strategi 2025",
    "opening": "Vi har förutsättningarna för en stark IT-organisation.\nMen vi drar inte alltid åt samma håll.",
    "onboarding": [
      { "number": "1", "text": "Förstå vår gemensamma riktning" },
      { "number": "2", "text": "Läs hur modellen fungerar" },
      { "number": "3", "text": "Utforska principerna" },
      { "number": "4", "text": "Hitta din avdelning" }
    ]
  },

  /* ── PROBLEM (compact) ───────────────────────────────────────── */
  "problem": {
    "symptoms": [
      "Olika bilder av vart IT är på väg",
      "Beslut som styrs av befintliga system snarare än riktning",
      "Lokala optimeringar istället för helhet",
      "Otydlig prioritering vid resurskonflikter"
    ],
    "consequences": [
      "Onödig friktion och dubbelarbete",
      "Långsammare förändringstakt",
      "Svårare att ta in ny teknik (t.ex. AI)",
      "Otydlig riktning för medarbetare"
    ],
    "core_message": "Vi har kompetens, men saknar en gemensam riktning."
  },

  /* ── NORTH STAR ─────────────────────────────────────────────── */
  "north_star": {
    "purpose": "IT är en strategisk möjliggörare som driver affärsvärde genom säkra, skalbara och datadrivna lösningar",
    "direction": "Vi bygger en modern, sammanhållen IT-plattform som gör det enkelt för verksamheten att innovera snabbt och säkert. Det innebär att vi prioriterar förmågor som skapar värde för verksamheten framför tekniska lösningar för sin egen skull.",
    "optimize_for": [
      "Leveranshastighet",
      "Driftstabilitet",
      "Datadriven insikt",
      "Säkerhet och regelefterlevnad"
    ],
    "scope": "Syfte: 1-2 meningar · Riktning: 2-3 meningar · Prioriteringstaggar: 3-5 st · Totalt: max halv sida"
  },

  /* ── PRINCIPLES ─────────────────────────────────────────────── */
  "principles": [
    {
      "name": "API-first",
      "means": "Alla tjänster exponeras via väldefinierade API:er. API:et är kontraktet, stabilt, versionerat och dokumenterat. Integration sker aldrig direkt mot databaser.",
      "not_means": "Att befintliga direktkopplingar i legacy-system måste rivas omedelbart. Under migrationer är pragmatism tillåten om den är tidssatt."
    },
    {
      "name": "Säkerhet by design",
      "means": "Säkerhet byggs in från start i varje lösning. Varje driftsättning genomgår säkerhetsgranskning. Minsta möjliga behörighet (least privilege) tillämpas alltid.",
      "not_means": "Att säkerhetsgranskning ska bromsa leverans. Det ska vara en integrerad del av leveransen, inte en grindvakt efter."
    },
    {
      "name": "Cloud-native",
      "means": "Vi designar för molnet med automatisk skalning, containerisering och infrastruktur som kod. Molntjänsternas inbyggda resiliens utnyttjas fullt ut.",
      "not_means": "Att allt måste till molnet omedelbart. Befintliga on-premise-lösningar hanteras pragmatiskt med en tydlig migreringsplan."
    },
    {
      "name": "Datadrivet beslutsfattande",
      "means": "Beslut fattas baserade på data. Varje system ska kunna mätas. Mätvärden, loggar och händelser är en del av leveransen, inte ett tillägg.",
      "not_means": "Att vi väntar på perfekt data innan vi agerar. Tillräckligt god data är tillräcklig för att fatta välgrundade beslut och handla."
    },
    {
      "name": "Enkelhet framför komplexitet",
      "means": "Den enklaste lösningen som löser problemet är den rätta lösningen. En lösning är klar när det inte finns mer att ta bort, inte när det inte finns mer att lägga till.",
      "not_means": "Att vi aldrig bygger avancerade system. Enkelt för användaren är målet. Implementationen kan vara komplex om det krävs, men aldrig i onödan."
    },
    {
      "name": "Hållbar teknologiskuld",
      "means": "Vi väljer teknik medvetet och dokumenterar varför. Tekniska beslut utvärderas regelbundet. Föråldrade system fasas ut i ordnad takt.",
      "not_means": "Att teknisk skuld aldrig är tillåten. Skuld är acceptabel om den är synlig, dokumenterad och kopplad till en konkret plan."
    }
  ],

  /* ── FOCUS AREAS ────────────────────────────────────────────── */
  "focus_areas": [
    {
      "name": "Plattform & Infrastruktur",
      "icon": "server",
      "description": "En stabil, skalbar och automatiserad teknisk grund som alla team kan bygga på, med CI/CD, observabilitet och självbetjäning i centrum."
    },
    {
      "name": "Data & Insikt",
      "icon": "barChart",
      "description": "Data tillgänglig, pålitlig och förståelig för hela verksamheten, från rådata till beslutsstöd och analys."
    },
    {
      "name": "Digitala tjänster",
      "icon": "monitor",
      "description": "Moderna, användarvänliga upplevelser för interna medarbetare och externa kunder, levererade snabbt och med hög kvalitet."
    },
    {
      "name": "Säkerhet & Compliance",
      "icon": "shield",
      "description": "IT-miljön uppfyller regulatoriska krav och interna riktlinjer, med proaktiv riskhantering och tydlig ansvarsfördelning."
    }
  ],

  /* ── DEPARTMENTS ────────────────────────────────────────────── */
  "departments": [
    {
      "name": "IT styrning",
      "icon": "server",
      "short_role": "Sätter ramarna och styr riktningen",
      "focus_areas": ["Plattform & Infrastruktur", "Säkerhet & Compliance"],
      "mission": "Tillhandahålla styrning, riktlinjer och uppföljning som säkerställer att IT:s resurser och initiativ bidrar till verksamhetens mål.",
      "current_state": "Fragmenterad infrastruktur med manuella driftsättningsprocesser. Hög beroende av enskilda individers kunskap. Begränsad observabilitet och larm.",
      "target_state": "Fullt automatiserad CI/CD-pipeline. Infrastruktur som kod (IaC) för all miljö. Centraliserad observabilitet med realtidsövervakning och automatiska larm.",
      "initiatives": [
        "Migrera alla applikationer till Kubernetes-kluster",
        "Implementera GitOps-arbetsflöde med Argo CD",
        "Bygga centralt observabilitetsplattform (Grafana + Prometheus)",
        "Introducera intern developer portal (Backstage)"
      ],
      "dependencies": ["Säkerhet & Compliance", "IT utveckling och förvaltning"]
    },
    {
      "name": "IT utveckling och förvaltning",
      "icon": "barChart",
      "short_role": "Utvecklar och förvaltar IT-lösningar",
      "focus_areas": ["Data & Insikt", "Digitala tjänster"],
      "mission": "Leverera, utveckla och förvalta IT-lösningar som möter verksamhetens behov med hög kvalitet och hållbar förvaltning.",
      "current_state": "Datapipelines är manuella och svåra att underhålla. Datastyrning saknas formellt. Analytiker spenderar mer tid på att hämta data än att analysera den.",
      "target_state": "Modern dataplattform med automatiserade pipelines, datakatalog och self-service BI. Tydliga datadomäner med utsedda dataägare per område.",
      "initiatives": [
        "Etablera data mesh-arkitektur med tydliga datadomäner",
        "Migrera till molnbaserat datalager (Snowflake/BigQuery)",
        "Implementera datakatalog med lineage-spårning",
        "Lansera self-service BI-portal för verksamheten"
      ],
      "dependencies": ["IT styrning", "IT drift och infrastruktur"]
    },
    {
      "name": "IT drift och infrastruktur",
      "icon": "layers",
      "short_role": "Driver och säkrar IT-miljön",
      "focus_areas": ["Plattform & Infrastruktur", "Säkerhet & Compliance"],
      "mission": "Säkerställa stabil, säker och skalbar drift av IT-infrastrukturen som hela verksamheten är beroende av.",
      "current_state": "Heterogen applikationsportfölj med många point-to-point-integrationer. Hög underhållskostnad. Låg grad av återanvändning och standardisering.",
      "target_state": "API-driven integrationsarkitektur med ett API-gateway som centralt nav. Moderniserad applikationsportfölj med tydliga livscykelbeslut per system.",
      "initiatives": [
        "Implementera enterprise API-gateway (Kong/Azure APIM)",
        "Kartlägga och prioritera applikationsportföljens moderniseringsbehov",
        "Migrera 3 legacy-system till molnbaserade SaaS-alternativ",
        "Etablera integrationsmönster och riktlinjer för hela organisationen"
      ],
      "dependencies": ["IT styrning", "Säkerhet & Compliance"]
    },
    {
      "name": "Informationsförvaltning",
      "icon": "gitBranch",
      "short_role": "Säkrar informationsflödet",
      "focus_areas": ["Data & Insikt", "Säkerhet & Compliance"],
      "mission": "Säkerställa att verksamhetens information är korrekt klassificerad, tillgänglig och skyddad, i enlighet med regulatoriska krav och interna riktlinjer.",
      "current_state": "Informationshantering sker fragmenterat utan enhetliga riktlinjer. Klassificering och ägarskap är otydliga. Risker kopplade till informationsflöden är otillräckligt kartlagda.",
      "target_state": "Enhetligt ramverk för informationsklassificering och styrning. Tydliga informationsägare per domän. Automatiserade kontroller för efterlevnad.",
      "initiatives": [
        "Etablera informationsklassificeringsmodell för hela verksamheten",
        "Kartlägga kritiska informationsflöden och beroenden",
        "Implementera styrningsprocess för informationsägarskap",
        "Integrera informationssäkerhet i leveransprocesserna"
      ],
      "dependencies": ["IT styrning", "IT utveckling och förvaltning"]
    },
    {
      "name": "Fastigheter",
      "icon": "shield",
      "short_role": "Förvaltar den fysiska IT-miljön",
      "focus_areas": ["Plattform & Infrastruktur", "Säkerhet & Compliance"],
      "mission": "Säkerställa att den fysiska IT-miljön, serverhallar, nätverk och arbetsplatsutrustning, är robust, säker och anpassad till verksamhetens behov.",
      "current_state": "Fysisk infrastruktur är delvis föråldrad. Livscykelhantering sker reaktivt. Begränsad samordning mellan fysisk och logisk säkerhet.",
      "target_state": "Proaktiv livscykelhantering av fysisk infrastruktur. Tydlig samordning med logisk säkerhet. Standardiserade miljöer för arbetsplatser och serverrum.",
      "initiatives": [
        "Uppgradera och standardisera serverrumsmiljöer",
        "Implementera livscykelplan för arbetsplatsutrustning",
        "Stärka samordningen mellan fysisk och logisk säkerhet",
        "Etablera plan för energieffektivisering av IT-miljöer"
      ],
      "dependencies": ["IT styrning", "Informationsförvaltning"]
    }
  ],

  /* ── LIFECYCLE ──────────────────────────────────────────────── */
  "lifecycle": {
    "intro": [
      "Polstjärnan fungerar bara om den används.",
      "Riktning är inte något vi säger en gång, det är något vi förstärker över tid."
    ],
    "steps": [
      {
        "icon": "refresh",
        "title": "Repetera riktningen",
        "text": "Ledningen återkopplar kontinuerligt till varför vi finns och vart vi är på väg."
      },
      {
        "icon": "compass",
        "title": "Tillämpa principerna",
        "text": "Beslut tas utifrån våra principer, inte enbart utifrån befintliga system eller historik."
      },
      {
        "icon": "layers",
        "title": "Uppdatera avdelningarnas bidrag",
        "text": "Varje avdelning ser regelbundet över sitt nuläge, sina initiativ och hur de bidrar till helheten."
      },
      {
        "icon": "zap",
        "title": "Justera och förstärk",
        "text": "Principer, prioriteringar och riktning justeras vid behov, och förstärks i organisationen."
      }
    ],
    "rhythm": [
      { "cadence": "Kontinuerligt", "text": "CIO och avdelningschefer refererar aktivt till Polstjärnan vid beslut, prioriteringskonflikter och budgetdialog. Riktningen är inte ett dokument att läsa en gång, utan ett aktivt verktyg." },
      { "cadence": "Månadsvis",     "text": "CIO lyfter riktningsfrågor på IT-ledningens ordinarie möte. Varje avdelningschef kommunicerar vad riktningen konkret innebär för det egna teamets arbete." },
      { "cadence": "Kvartalsvis",   "text": "Varje avdelningschef lämnar en uppdaterad bild av nuläge, pågående initiativ och beroenden. Underlaget sammanställs och gås igenom på IT-ledningens kvartalsmöte." },
      { "cadence": "Halvårsvis",    "text": "Chefsarkitekten genomför en strukturerad genomgång av de vägledande principerna. Eventuella justeringar beslutas av IT-ledningen och kommuniceras till samtliga avdelningar." },
      { "cadence": "Årligen",       "text": "CIO och IT-ledningen genomför en strategisk genomlysning av Polstjärnan och fokusområdena. Förändringar i verksamhetens behov, omvärld och tekniklandskap vägs in. Reviderad Polstjärna förankras i organisationen." }
    ],
    "roles": [
      { "role": "IT-ledning",          "responsibility": "Sätter riktning och repeterar varför." },
      { "role": "Chefsarkitekt",       "responsibility": "Sätter och utvecklar principer." },
      { "role": "Avdelningschef",      "responsibility": "Säkerställer bidrag, uppdatering och förankring." },
      { "role": "Team och medarbetare","responsibility": "Tillämpar riktning och principer i vardagen." }
    ]
  },

  /* ── CTA ────────────────────────────────────────────────────── */
  "cta": {
    "headline": "Uppdrag till alla avdelningschefer",
    "quote": "Beskriv hur er del av organisationen bidrar till vår gemensamma riktning.",
    "tasks": ["Nuläge (ärligt)", "Målbild", "Gap", "3–5 initiativ"],
    "constraints": "Max 2 sidor · Fokus på riktning, inte detaljer"
  },

  /* ── CLOSING ────────────────────────────────────────────────── */
  "closing": {
    "quote": "Vi kommer aldrig ha samma system, samma historik eller samma utmaningar.\nMen vi kan ha samma riktning.\nOch det är det vi skapar nu.",
    "punch": "Det här är inte ett initiativ. Det är hur vi kommer att arbeta framåt."
  },

  /* ── FÖRDJUPNING (secondary, collapsible) ───────────────────── */
  "fordj": [
    {
      "id": "fordj-bakgrund",
      "title": "Bakgrunden, varför vi gör detta",
      "intro": "Det här är inte ett ihopkok. Det är en syntes av hur världens ledande techorganisationer faktiskt styrs.",
      "credibility": [
        {
          "source": "Gartner",
          "tag": "Composable Enterprise",
          "quote": "Organisationer som separerar strategisk riktning från taktisk exekvering är 3× mer anpassningsbara vid marknadsförändringar.",
          "url": "https://www.gartner.com/en/doc/465932-future-of-applications-delivering-the-composable-enterprise"
        },
        {
          "source": "McKinsey & Company",
          "tag": "Tech:Forward",
          "quote": "Vinnande techorganisationer kombinerar en tydlig riktning med ett starkt execution backbone, riktning och leverans i balans.",
          "url": "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-tech-forward-recipe-for-a-successful-technology-transformation"
        },
        {
          "source": "Spotify Model",
          "tag": "Autonomi + Alignment",
          "quote": "Hög autonomi kräver hög alignment. Utan gemensam riktning leder självständighet till kaos, inte innovation.",
          "url": "https://engineering.atspotify.com/2014/03/spotify-engineering-culture-part-1/"
        },
        {
          "source": "Team Topologies",
          "tag": "Tydliga gränssnitt",
          "quote": "Organisationsstrukturen måste spegla den önskade arkitekturen, tydliga ägarskap och väldefinierade beroenden minskar kognitiv belastning.",
          "url": "https://teamtopologies.com/key-concepts"
        }
      ],
      "synthesis": "Strategisk riktning + Vägledande principer + Decentraliserat ansvar = Hur moderna techorganisationer styrs"
    },
    {
      "id": "fordj-resiliens",
      "title": "Resiliens, säkerhet och proaktiv IT",
      "intro": "En IT-organisation som ständigt hanterar incidenter kan aldrig driva verksamheten framåt. Resiliens är grunden, proaktivitet är målet.",
      "pillars": [
        {
          "icon": "shield",
          "title": "Stå emot",
          "desc": "Infrastrukturen är byggd för att absorbera påfrestningar, cyberattacker, systemfel och oväntade toppar, utan att kollabsa."
        },
        {
          "icon": "refresh",
          "title": "Anpassa sig",
          "desc": "Vid förändrade förutsättningar, nya krav, ny affärsmodell, geopolitiska händelser, kan IT ställa om utan att börja om från noll."
        },
        {
          "icon": "trendingUp",
          "title": "Återhämta sig",
          "desc": "Incidenter är oundvikliga. Det avgörande är hur snabbt vi är tillbaka. Testade återhämtningsplaner ger trygghet, inte panik."
        }
      ],
      "security_title": "Säkerhet är inte ett lager, det är ryggraden",
      "security_desc": "Säkerhet by design innebär att säkerhet genomsyrar varje arkitekturellt beslut, varje integration, varje driftsättning. I en hybrid infrastruktur, där on-premise möter moln, är en robust säkerhetsryggrad det som håller ihop helheten.",
      "security_points": [
        "Zero trust som grundprincip, lita aldrig, verifiera alltid",
        "Kryptering end-to-end, i transit och i vila",
        "Kontinuerlig övervakning och hotdetektering",
        "Tydlig ansvarsfördelning och åtkomststyrning"
      ]
    },
    {
      "id": "fordj-explore",
      "title": "Säkra vägar till det nya",
      "intro": "Verksamheten ska kunna utforska och testa det senaste, utan friktion, utan rädsla. IT:s roll är att göra det möjligt, inte att vara grindvakt.",
      "statement": "Vi blockerar inte ny teknik. Vi bygger säkra vägar till den.",
      "capabilities": [
        {
          "icon": "flask",
          "title": "Sandlåda för nya idéer",
          "desc": "Isolerade testmiljöer där team fritt kan prova AI-verktyg, ny infrastruktur och nya plattformar, utan att påverka produktion."
        },
        {
          "icon": "unlock",
          "title": "Förhandsgodkänd teknik",
          "desc": "En kuraterad katalog av säkerhetsgranskade verktyg och tjänster redo att använda, utan köande för godkännande varje gång."
        },
        {
          "icon": "grid",
          "title": "Anpassat efter mognad",
          "desc": "Olika delar av verksamheten har olika förutsättningar. Miljöerna anpassas efter varje teams faktiska situation."
        },
        {
          "icon": "arrowUp",
          "title": "Från test till skala",
          "desc": "Det som fungerar skalas upp systematiskt. Det som inte fungerar avvecklas snabbt. Lärdomar delas, inte begravs."
        }
      ]
    }
  ]
};
