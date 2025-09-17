// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw'

function sortAsc(key: string) {
    return (a: Record<string, any>, b: Record<string, any>) => {
        if (a[key] < b[key]) { return -1; }
        if (a[key] > b[key]) { return 1; }
        return 0;
    }
}

function sortDesc(key: string) {
    return (a: Record<string, any>, b: Record<string, any>) => {
        if (a[key] > b[key]) { return -1; }
        if (a[key] < b[key]) { return 1; }
        return 0;
    }
}

const companies = [
    {
        "name": "Zieme - Reichel",
        "catchPhrase": "Upgradable 24 hour benchmark",
        "buzzPhrase": "envisioneer rich initiatives"
    },
    {
        "name": "Bosco and Sons",
        "catchPhrase": "Digitized fault-tolerant focus group",
        "buzzPhrase": "whiteboard 24/365 methodologies"
    },
    {
        "name": "Stamm - Johnston",
        "catchPhrase": "Fully-configurable needs-based interface",
        "buzzPhrase": "aggregate magnetic experiences"
    },
    {
        "name": "Balistreri LLC",
        "catchPhrase": "Progressive uniform Graphical User Interface",
        "buzzPhrase": "brand efficient supply-chains"
    },
    {
        "name": "Weimann Inc",
        "catchPhrase": "Robust responsive paradigm",
        "buzzPhrase": "redefine wireless action-items"
    },
    {
        "name": "Pouros LLC",
        "catchPhrase": "Synergized systemic superstructure",
        "buzzPhrase": "revolutionize revolutionary e-business"
    },
    {
        "name": "Goodwin Inc",
        "catchPhrase": "Balanced system-worthy moratorium",
        "buzzPhrase": "evolve distributed supply-chains"
    },
    {
        "name": "Williamson, Jenkins and Lesch",
        "catchPhrase": "Distributed needs-based encoding",
        "buzzPhrase": "envisioneer intuitive deliverables"
    },
    {
        "name": "Skiles, Jerde and Auer",
        "catchPhrase": "Assimilated optimizing middleware",
        "buzzPhrase": "recontextualize world-class schemas"
    },
    {
        "name": "Goyette and Sons",
        "catchPhrase": "Seamless context-sensitive artificial intelligence",
        "buzzPhrase": "optimize bleeding-edge relationships"
    },
    {
        "name": "Boyer, Greenholt and Turner",
        "catchPhrase": "Face to face bandwidth-monitored benchmark",
        "buzzPhrase": "synthesize value-added partnerships"
    },
    {
        "name": "Von, Effertz and Vandervort",
        "catchPhrase": "Expanded disintermediate initiative",
        "buzzPhrase": "engage proactive e-commerce"
    },
    {
        "name": "Morar - Corkery",
        "catchPhrase": "User-friendly maximized data-warehouse",
        "buzzPhrase": "visualize 24/7 infrastructures"
    },
    {
        "name": "Jerde - Wiegand",
        "catchPhrase": "Quality-focused human-resource Graphical User Interface",
        "buzzPhrase": "deliver proactive networks"
    },
    {
        "name": "Bayer - Ondricka",
        "catchPhrase": "Customer-focused incremental project",
        "buzzPhrase": "matrix value-added systems"
    },
    {
        "name": "Turner, Lindgren and Conn",
        "catchPhrase": "Monitored bifurcated success",
        "buzzPhrase": "engineer dynamic content"
    },
    {
        "name": "Cummerata - O'Hara",
        "catchPhrase": "Up-sized executive forecast",
        "buzzPhrase": "incubate out-of-the-box models"
    },
    {
        "name": "Cassin, Tillman and Pollich",
        "catchPhrase": "Pre-emptive multimedia pricing structure",
        "buzzPhrase": "facilitate virtual networks"
    },
    {
        "name": "Hermiston Group",
        "catchPhrase": "Reverse-engineered global structure",
        "buzzPhrase": "productize clicks-and-mortar mindshare"
    },
    {
        "name": "Mueller - Bins",
        "catchPhrase": "Cross-group regional throughput",
        "buzzPhrase": "streamline bleeding-edge niches"
    },
    {
        "name": "Weissnat - Jast",
        "catchPhrase": "Implemented contextually-based process improvement",
        "buzzPhrase": "iterate integrated e-commerce"
    },
    {
        "name": "Abernathy Group",
        "catchPhrase": "Polarised bottom-line firmware",
        "buzzPhrase": "incubate back-end synergies"
    },
    {
        "name": "Quitzon, Hermiston and Kovacek",
        "catchPhrase": "Triple-buffered real-time middleware",
        "buzzPhrase": "grow value-added solutions"
    },
    {
        "name": "Sipes, Pollich and Lubowitz",
        "catchPhrase": "Vision-oriented analyzing challenge",
        "buzzPhrase": "grow innovative schemas"
    },
    {
        "name": "Dicki, Predovic and Kohler",
        "catchPhrase": "Business-focused contextually-based pricing structure",
        "buzzPhrase": "syndicate enterprise eyeballs"
    },
    {
        "name": "Beatty, Rath and Leannon",
        "catchPhrase": "Cross-platform client-driven adapter",
        "buzzPhrase": "disintermediate value-added infrastructures"
    },
    {
        "name": "Langosh Inc",
        "catchPhrase": "Configurable systematic encoding",
        "buzzPhrase": "deliver 24/7 e-markets"
    },
    {
        "name": "Spinka, Gottlieb and Casper",
        "catchPhrase": "Enterprise-wide directional archive",
        "buzzPhrase": "engage front-end blockchains"
    },
    {
        "name": "MacGyver - Hilll",
        "catchPhrase": "Advanced secondary projection",
        "buzzPhrase": "empower 24/7 users"
    },
    {
        "name": "Moore, Howell and Kautzer",
        "catchPhrase": "Synergistic optimizing portal",
        "buzzPhrase": "strategize efficient supply-chains"
    },
    {
        "name": "Hettinger Inc",
        "catchPhrase": "Decentralized bandwidth-monitored task-force",
        "buzzPhrase": "integrate ubiquitous infrastructures"
    },
    {
        "name": "Fahey, Morissette and Ratke",
        "catchPhrase": "Assimilated leading edge monitoring",
        "buzzPhrase": "implement innovative markets"
    },
    {
        "name": "Wisoky and Sons",
        "catchPhrase": "Organic didactic concept",
        "buzzPhrase": "optimize end-to-end initiatives"
    },
    {
        "name": "Crooks, Dietrich and Weimann",
        "catchPhrase": "Persevering explicit toolset",
        "buzzPhrase": "streamline cutting-edge schemas"
    },
    {
        "name": "Gusikowski and Sons",
        "catchPhrase": "Diverse mobile website",
        "buzzPhrase": "revolutionize customized initiatives"
    },
    {
        "name": "Auer, O'Conner and Bernier",
        "catchPhrase": "Assimilated human-resource protocol",
        "buzzPhrase": "maximize enterprise e-commerce"
    },
    {
        "name": "Hamill - Lemke",
        "catchPhrase": "Visionary background leverage",
        "buzzPhrase": "enable dynamic architectures"
    },
    {
        "name": "Emmerich - Rodriguez",
        "catchPhrase": "Universal multi-tasking implementation",
        "buzzPhrase": "incentivize innovative markets"
    },
    {
        "name": "Hilpert, Effertz and Murphy",
        "catchPhrase": "Centralized composite archive",
        "buzzPhrase": "unleash strategic markets"
    },
    {
        "name": "Gibson - Boyer",
        "catchPhrase": "Self-enabling bifurcated complexity",
        "buzzPhrase": "cultivate turn-key e-commerce"
    },
    {
        "name": "Spencer - Walsh",
        "catchPhrase": "Pre-emptive demand-driven firmware",
        "buzzPhrase": "streamline bricks-and-clicks schemas"
    },
    {
        "name": "Rutherford - Rippin",
        "catchPhrase": "Triple-buffered clear-thinking system engine",
        "buzzPhrase": "visualize clicks-and-mortar supply-chains"
    },
    {
        "name": "Rempel LLC",
        "catchPhrase": "Reverse-engineered value-added Graphic Interface",
        "buzzPhrase": "productize plug-and-play e-markets"
    },
    {
        "name": "Von Inc",
        "catchPhrase": "Profit-focused upward-trending functionalities",
        "buzzPhrase": "empower interactive initiatives"
    },
    {
        "name": "Bailey - Lowe",
        "catchPhrase": "Multi-channelled upward-trending protocol",
        "buzzPhrase": "cultivate viral content"
    },
    {
        "name": "Windler - Barton",
        "catchPhrase": "Devolved even-keeled benchmark",
        "buzzPhrase": "optimize innovative deliverables"
    },
    {
        "name": "Ankunding - Bahringer",
        "catchPhrase": "Multi-channelled value-added time-frame",
        "buzzPhrase": "revolutionize frictionless synergies"
    },
    {
        "name": "Dare - Braun",
        "catchPhrase": "Fundamental hybrid benchmark",
        "buzzPhrase": "e-enable wireless interfaces"
    },
    {
        "name": "Grady - Weimann",
        "catchPhrase": "Grass-roots logistical superstructure",
        "buzzPhrase": "transition 24/7 e-business"
    },
    {
        "name": "Ullrich Group",
        "catchPhrase": "Multi-channelled global intranet",
        "buzzPhrase": "harness impactful e-commerce"
    },
    {
        "name": "Cassin and Sons",
        "catchPhrase": "User-friendly methodical extranet",
        "buzzPhrase": "implement collaborative systems"
    },
    {
        "name": "Kerluke Inc",
        "catchPhrase": "Self-enabling systemic extranet",
        "buzzPhrase": "enhance customized metrics"
    },
    {
        "name": "Little - Denesik",
        "catchPhrase": "Distributed regional matrices",
        "buzzPhrase": "maximize proactive markets"
    },
    {
        "name": "Johnston Inc",
        "catchPhrase": "Progressive foreground synergy",
        "buzzPhrase": "incubate clicks-and-mortar functionalities"
    },
    {
        "name": "Schaden, Hodkiewicz and Funk",
        "catchPhrase": "Virtual asymmetric matrix",
        "buzzPhrase": "orchestrate transparent eyeballs"
    },
    {
        "name": "Johnson - Murphy",
        "catchPhrase": "Future-proofed directional open system",
        "buzzPhrase": "engage cross-media schemas"
    },
    {
        "name": "Stiedemann Inc",
        "catchPhrase": "Reverse-engineered regional open system",
        "buzzPhrase": "iterate user-centric synergies"
    },
    {
        "name": "Gislason LLC",
        "catchPhrase": "Multi-lateral heuristic frame",
        "buzzPhrase": "seize 24/7 content"
    },
    {
        "name": "Jacobs LLC",
        "catchPhrase": "Fully-configurable bi-directional middleware",
        "buzzPhrase": "mesh killer initiatives"
    },
    {
        "name": "Jones, Pagac and Paucek",
        "catchPhrase": "Distributed didactic hardware",
        "buzzPhrase": "implement virtual communities"
    },
    {
        "name": "Bartoletti, Thompson and Weber",
        "catchPhrase": "Triple-buffered reciprocal monitoring",
        "buzzPhrase": "synthesize global synergies"
    },
    {
        "name": "Gusikowski Group",
        "catchPhrase": "Optimized intangible standardization",
        "buzzPhrase": "engineer mission-critical e-commerce"
    },
    {
        "name": "Reynolds Inc",
        "catchPhrase": "Open-architected grid-enabled product",
        "buzzPhrase": "utilize efficient markets"
    },
    {
        "name": "Schroeder - Heathcote",
        "catchPhrase": "Proactive actuating product",
        "buzzPhrase": "seize cross-media partnerships"
    },
    {
        "name": "Wunsch Inc",
        "catchPhrase": "Digitized directional protocol",
        "buzzPhrase": "exploit user-centric markets"
    },
    {
        "name": "Olson, Marks and Dibbert",
        "catchPhrase": "De-engineered incremental implementation",
        "buzzPhrase": "iterate virtual relationships"
    },
    {
        "name": "Stamm LLC",
        "catchPhrase": "Streamlined dynamic budgetary management",
        "buzzPhrase": "iterate real-time web services"
    },
    {
        "name": "Gerhold - Erdman",
        "catchPhrase": "Cross-group grid-enabled complexity",
        "buzzPhrase": "grow dot-com portals"
    },
    {
        "name": "Altenwerth, Durgan and Lakin",
        "catchPhrase": "Ergonomic multi-tasking solution",
        "buzzPhrase": "streamline killer initiatives"
    },
    {
        "name": "Moen - Feest",
        "catchPhrase": "Fully-configurable attitude-oriented success",
        "buzzPhrase": "syndicate impactful relationships"
    },
    {
        "name": "Cremin Inc",
        "catchPhrase": "Pre-emptive national intranet",
        "buzzPhrase": "orchestrate world-class architectures"
    },
    {
        "name": "Yundt Group",
        "catchPhrase": "Customizable context-sensitive analyzer",
        "buzzPhrase": "synthesize customized applications"
    },
    {
        "name": "Bahringer, Hagenes and Hane",
        "catchPhrase": "Integrated system-worthy architecture",
        "buzzPhrase": "generate virtual e-markets"
    },
    {
        "name": "Streich LLC",
        "catchPhrase": "User-centric cohesive secured line",
        "buzzPhrase": "benchmark cutting-edge portals"
    },
    {
        "name": "Beahan LLC",
        "catchPhrase": "Re-contextualized next generation pricing structure",
        "buzzPhrase": "maximize best-of-breed applications"
    },
    {
        "name": "Barton, McDermott and Russel",
        "catchPhrase": "Versatile object-oriented encryption",
        "buzzPhrase": "incentivize granular ROI"
    },
    {
        "name": "Nader LLC",
        "catchPhrase": "Future-proofed reciprocal project",
        "buzzPhrase": "syndicate magnetic bandwidth"
    },
    {
        "name": "Bayer, Zboncak and King",
        "catchPhrase": "Front-line well-modulated budgetary management",
        "buzzPhrase": "facilitate customized e-markets"
    },
    {
        "name": "Jenkins - Wolf",
        "catchPhrase": "Versatile motivating concept",
        "buzzPhrase": "recontextualize rich e-markets"
    },
    {
        "name": "Leffler - Schowalter",
        "catchPhrase": "Customer-focused high-level forecast",
        "buzzPhrase": "e-enable value-added interfaces"
    },
    {
        "name": "Mayert LLC",
        "catchPhrase": "Universal 4th generation extranet",
        "buzzPhrase": "facilitate bricks-and-clicks functionalities"
    },
    {
        "name": "Pouros, Kshlerin and Pollich",
        "catchPhrase": "Multi-tiered coherent software",
        "buzzPhrase": "deploy efficient e-commerce"
    },
    {
        "name": "Zboncak and Sons",
        "catchPhrase": "Diverse didactic customer loyalty",
        "buzzPhrase": "architect global models"
    },
    {
        "name": "Waelchi, Koch and Dooley",
        "catchPhrase": "Balanced system-worthy installation",
        "buzzPhrase": "brand sticky users"
    },
    {
        "name": "Gutmann, Gulgowski and Kuhn",
        "catchPhrase": "Ameliorated cohesive matrices",
        "buzzPhrase": "evolve next-generation initiatives"
    },
    {
        "name": "Kuvalis - Rohan",
        "catchPhrase": "Seamless impactful superstructure",
        "buzzPhrase": "deliver one-to-one blockchains"
    },
    {
        "name": "Schneider, Gerhold and Bartoletti",
        "catchPhrase": "Organic next generation benchmark",
        "buzzPhrase": "brand dynamic methodologies"
    },
    {
        "name": "Ernser LLC",
        "catchPhrase": "Expanded neutral architecture",
        "buzzPhrase": "brand killer niches"
    },
    {
        "name": "Schultz LLC",
        "catchPhrase": "Automated scalable functionalities",
        "buzzPhrase": "visualize bleeding-edge networks"
    },
    {
        "name": "Heaney, Vandervort and Stamm",
        "catchPhrase": "Extended global secured line",
        "buzzPhrase": "revolutionize world-class bandwidth"
    },
    {
        "name": "Conroy LLC",
        "catchPhrase": "Centralized methodical access",
        "buzzPhrase": "whiteboard robust e-commerce"
    },
    {
        "name": "Marvin - Bruen",
        "catchPhrase": "Horizontal 3rd generation time-frame",
        "buzzPhrase": "unleash rich content"
    },
    {
        "name": "Rogahn - Smith",
        "catchPhrase": "Multi-channelled zero defect hierarchy",
        "buzzPhrase": "engage interactive mindshare"
    },
    {
        "name": "Bogan - Schmitt",
        "catchPhrase": "Vision-oriented foreground productivity",
        "buzzPhrase": "iterate rich paradigms"
    },
    {
        "name": "Ryan - Bashirian",
        "catchPhrase": "Cross-platform non-volatile middleware",
        "buzzPhrase": "visualize clicks-and-mortar systems"
    },
    {
        "name": "Breitenberg - Abernathy",
        "catchPhrase": "Face to face web-enabled product",
        "buzzPhrase": "iterate visionary applications"
    },
    {
        "name": "Volkman - Rau",
        "catchPhrase": "Customizable analyzing capacity",
        "buzzPhrase": "maximize mission-critical e-business"
    },
    {
        "name": "Predovic - Ullrich",
        "catchPhrase": "Optional zero defect standardization",
        "buzzPhrase": "repurpose out-of-the-box schemas"
    },
    {
        "name": "Vandervort Group",
        "catchPhrase": "Intuitive local customer loyalty",
        "buzzPhrase": "expedite e-business architectures"
    },
    {
        "name": "Towne Group",
        "catchPhrase": "Synergized bifurcated solution",
        "buzzPhrase": "incentivize world-class metrics"
    }
]

export const handlers = [
    http.get('https://api.example.com/companies', ({ request }) => {
        const url = new URL(request.url);
        const sort = url.searchParams.get('sort');
        const mutatedCompanies = [...companies];
        if (sort) {
            const sorter = sort === "asc" ? sortAsc('name') : sortDesc('name');
            mutatedCompanies.sort(sorter);
        }


        return HttpResponse.json(mutatedCompanies)
    }),
]