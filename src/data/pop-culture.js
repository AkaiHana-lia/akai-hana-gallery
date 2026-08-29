window.AKAI_HANA_POP_CULTURE = {
  defaultTheme: "red-spider-lily",
  ui: {
    title: {
      es: "POP CULTURE",
      en: "POP CULTURE"
    },
    lead: {
      es: "Explora ecos culturales modernos conectados con cada historia de Akaihana.",
      en: "Explore modern cultural echoes connected to each Akaihana Story."
    },
    exploreByStory: {
      es: "Explorar por historia",
      en: "Explore by story"
    },
    paginationLabel: {
      es: "Paginación de Stories",
      en: "Stories pagination"
    },
    previousPage: {
      es: "Página anterior de Stories",
      en: "Previous Stories page"
    },
    nextPage: {
      es: "Página siguiente de Stories",
      en: "Next Stories page"
    },
    pageLabel: {
      es: "Página {page} de Stories",
      en: "Stories page {page}"
    },
    hint: {
      es: "Selecciona una historia para explorar sus conexiones pop culture.",
      en: "Select a story to explore its pop-culture connections."
    },
    empty: {
      es: "Las conexiones pop culture de esta historia se añadirán cuando haya referencias verificadas.",
      en: "Pop-culture entries for this theme will be added after verified references are provided."
    },
    developmentNote: {
      es: "Nuestra biblioteca Pop Culture está actualmente en desarrollo. Se están añadiendo nuevas conexiones verificadas progresivamente.",
      en: "Our Pop Culture library is currently in development. New verified connections are being added progressively."
    },
    sourceFallback: {
      es: "Fuente oficial",
      en: "Official source"
    },
    secondarySourceFallback: {
      es: "Ver fuente oficial",
      en: "View official source"
    }
  },
  categories: [
    { id: "cultural-origin", label: { es: "Origen cultural", en: "Cultural Origin" } },
    { id: "anime-manga", label: { es: "Anime & Manga", en: "Anime & Manga" } },
    { id: "cinema", label: { es: "Cine", en: "Cinema" } },
    { id: "pokemon", label: { es: "Pokémon", en: "Pokémon" } },
    { id: "video-games", label: { es: "Videojuegos", en: "Video Games" } },
    { id: "other-pop-culture", label: { es: "Otra pop culture", en: "Other Pop Culture" } }
  ],
  themes: [
    {
      id: "red-spider-lily",
      number: "01",
      title: "Higanbana",
      kanji: "彼岸花",
      image: "./assets/images/story-card-higanbana-tattoo.png",
      icon: "./assets/images/story-higanbana-cover.png",
      intro: {
        es: "La Higanbana conecta duelo, despedida, recuerdo y el limite entre la vida y la muerte. Estas referencias se presentan con lenguaje prudente cuando no existe confirmacion explicita de autor.",
        en: "Higanbana connects mourning, farewell, remembrance and the boundary between life and death. These references use cautious wording when no explicit creator confirmation has been found."
      },
      entries: [
        {
          id: "red-spider-lily-demon-slayer-infinity-castle",
          categoryId: "anime-manga",
          title: {
            es: "Demon Slayer: Infinity Castle - Zenitsu y Jigoro",
            en: "Demon Slayer: Infinity Castle - Zenitsu and Jigoro"
          },
          franchise: {
            es: "Anime / Cine",
            en: "Anime / Cinema"
          },
          year: "2025",
          classification: {
            es: "Uso simbolico probable fuerte",
            en: "Strong Probable Symbolic Use"
          },
          image: "./assets/images/pop-red-spider-lily-demon-slayer-zenitsu-jigoro.png?v=red-spider-lily-pop-01",
          imageFit: "contain",
          shortDescription: {
            es: "La imagen oficial de aniversario de Ufotable situa a Zenitsu y Jigoro dentro de un campo de higanbana, reforzando despedida, memoria y frontera entre vivos y muertos.",
            en: "Ufotable's official anniversary artwork places Zenitsu and Jigoro within a field of higanbana, reinforcing farewell, memory and the boundary between the living and the dead."
          },
          fullDescription: {
            es: "Tras el enfrentamiento final de Zenitsu con Kaigaku, su vinculo emocional con su maestro fallecido Jigoro queda representado mediante una imagen llena de Higanbana. La ilustracion oficial de primer aniversario de Ufotable para Infinity Castle, titulada Zenitsu and Grandpa, coloca a ambos personajes en un campo de Higanbana.",
            en: "Following Zenitsu's final confrontation with Kaigaku, his emotional connection with his deceased master Jigoro is represented through imagery filled with Higanbana. Ufotable's official first-anniversary artwork for Infinity Castle, titled Zenitsu and Grandpa, places the two characters within a field of Higanbana."
          },
          context: {
            es: "Las flores refuerzan los temas de muerte, despedida, recuerdo y el limite entre los vivos y los muertos. No se ha localizado una declaracion oficial del creador que explique explicitamente el simbolismo floral, por lo que esta conexion se presenta como uso simbolico probable fuerte, no como inspiracion oficialmente confirmada.",
            en: "The flowers reinforce the scene's themes of death, farewell, remembrance and the boundary between the living and the dead. No official creator statement explicitly explaining the flower symbolism has been located, so this connection is presented as strong probable symbolic use rather than officially confirmed inspiration."
          },
          sourceLabel: {
            es: "Ver en Crunchyroll",
            en: "Watch on Crunchyroll"
          },
          sourceUrl: "https://www.crunchyroll.com/es-es/series/G8DHV7809/demon-slayer-kimetsu-no-yaiba-infinity-castle-i"
        }
      ]
    },
    {
      id: "kitsune",
      number: "02",
      title: "Kitsune",
      kanji: "狐",
      image: "./assets/images/story-card-kitsune-tattoo.png",
      icon: "./assets/images/story-kitsune-mask-sharp.png",
      intro: {
        es: "Obras modernas verificadas donde el kitsune o el folclore japonés de zorros sobrenaturales forma parte real de la obra.",
        en: "Verified modern works where kitsune or directly related Japanese supernatural fox folklore is part of the work."
      },
      entries: [
        {
          id: "kitsune-ghost-of-yotei-legends",
          categoryId: "video-games",
          title: "Ghost of Yōtei — Legends",
          franchise: {
            es: "Videojuego · PlayStation",
            en: "Video Game · PlayStation"
          },
          classification: {
            es: "Reinterpretación sobrenatural oficial",
            en: "Official Supernatural Reinterpretation"
          },
          image: "./assets/images/pop-ghost-of-yotei-legends.png",
          imageFit: "contain",
          shortDescription: {
            es: "Legends reinterpreta a Kitsune como una figura sobrenatural dentro de su versión oscura de los Wild Six.",
            en: "Legends reimagines Kitsune as a supernatural figure within its dark retelling of the Wild Six."
          },
          fullDescription: {
            es: "PlayStation presenta Legends como una reinterpretación sobrenatural de los Wild Six. En ella, Kitsune se transforma en una de las figuras sobrenaturales que protagonizan esta versión alternativa.",
            en: "PlayStation presents Legends as a supernatural retelling of the Wild Six. In it, Kitsune becomes one of the supernatural figures at the center of this alternate version."
          },
          context: {
            es: "La denominación oficial y el tratamiento sobrenatural confirman una reinterpretación moderna del kitsune, no una simple semejanza visual.",
            en: "The official naming and supernatural treatment confirm a modern kitsune reinterpretation rather than a merely visual resemblance."
          },
          sourceLabel: {
            es: "Ghost of Yōtei — página oficial",
            en: "Ghost of Yōtei — Official Page"
          },
          sourceUrl: "https://www.playstation.com/games/ghost-of-yotei/"
        },
        {
          id: "kitsune-kamisama-kiss",
          categoryId: "anime-manga",
          title: "Kamisama Kiss",
          franchise: "Kamisama Hajimemashita",
          classification: {
            es: "Referencia explícita",
            en: "Explicit Reference"
          },
          image: "./assets/images/pop-kitsune-kamisama-kiss.png",
          shortDescription: {
            es: "Tomoe es un espíritu zorro sobrenatural y yokai cuya identidad es central para su personaje y para la historia.",
            en: "Tomoe is a supernatural fox spirit and yokai whose identity is central to both his character and the story."
          },
          fullDescription: {
            es: "Tomoe es un espíritu zorro sobrenatural y yokai cuya identidad es central tanto para su personaje como para la historia. Como antiguo familiar conectado al santuario Mikage, existe dentro de un mundo profundamente arraigado en kami, yokai y tradiciones sobrenaturales japonesas.",
            en: "Tomoe is a supernatural fox spirit and yokai whose identity is central to both his character and the story. As a former familiar connected to the Mikage Shrine, he exists within a world deeply rooted in kami, yokai and Japanese supernatural traditions."
          },
          context: {
            es: "Es una representación moderna directa de la tradición del espíritu zorro sobrenatural, no solo un personaje con parecido visual a un zorro.",
            en: "This is a direct modern representation of the supernatural fox spirit tradition rather than a character who simply resembles a fox."
          },
          sourceLabel: {
            es: "Fuente oficial - VIZ Media",
            en: "Official Source - VIZ Media"
          },
          sourceUrl: "https://www.viz.com/kamisama-kiss"
        },
        {
          id: "kitsune-senko-san",
          categoryId: "anime-manga",
          title: {
            es: "The Helpful Fox Senko-san",
            en: "The Helpful Fox Senko-san"
          },
          franchise: "Sewayaki Kitsune no Senko-san",
          classification: {
            es: "Referencia explícita",
            en: "Explicit Reference"
          },
          image: "./assets/images/pop-kitsune-senko-san.png",
          shortDescription: {
            es: "Senko es un espíritu zorro sobrenatural antiguo cuya naturaleza divina es fundamental para la historia.",
            en: "Senko is an ancient supernatural fox spirit whose divine nature is fundamental to the story."
          },
          fullDescription: {
            es: "Senko es un espíritu zorro sobrenatural antiguo cuya naturaleza divina es fundamental para la historia. La serie construye directamente a su personaje central alrededor de la tradición japonesa de seres zorro sobrenaturales y sagrados.",
            en: "Senko is an ancient supernatural fox spirit whose divine nature is fundamental to the story. The series directly builds its central character around the Japanese tradition of supernatural and sacred fox beings."
          },
          context: {
            es: "Senko se presenta como un zorro sobrenatural conectado con lo divino, no simplemente como un personaje humano con rasgos de zorro.",
            en: "Senko is presented as a supernatural fox connected to the divine rather than simply a human character with fox-like features."
          },
          sourceLabel: {
            es: "Web oficial japonesa",
            en: "Official Japanese Website"
          },
          sourceUrl: "https://senkosan.com/character/"
        },
        {
          id: "kitsune-kurosawa-dreams",
          categoryId: "cinema",
          title: {
            es: "Sunshine Through the Rain",
            en: "Sunshine Through the Rain"
          },
          franchise: "Akira Kurosawa's Dreams",
          year: "1990",
          classification: {
            es: "Referencia folclórica explícita",
            en: "Explicit Folklore Reference"
          },
          image: "./assets/images/pop-kitsune-kurosawa-dreams.png",
          shortDescription: {
            es: "Una misteriosa procesión de boda de zorros conecta directamente con el motivo folclórico kitsune no yomeiri.",
            en: "A mysterious fox wedding procession draws directly from the folkloric motif kitsune no yomeiri."
          },
          fullDescription: {
            es: "En el segmento 'Sunshine Through the Rain' de Akira Kurosawa's Dreams, un niño presencia en secreto una misteriosa procesión de boda realizada por zorros en un bosque. La secuencia bebe directamente del motivo folclórico japonés conocido como kitsune no yomeiri, la 'boda del zorro'. Esto la convierte en una representación cinematográfica real del folclore asociado a los zorros sobrenaturales en la cultura japonesa.",
            en: "In the segment 'Sunshine Through the Rain' from Akira Kurosawa's Dreams, a young boy secretly witnesses a mysterious wedding procession performed by foxes in a forest. The sequence draws directly upon the traditional Japanese folkloric motif known as kitsune no yomeiri - the 'fox wedding'. This makes it a genuine cinematic representation of folklore associated with supernatural foxes in Japanese culture."
          },
          context: {
            es: "No es simplemente una aparición visual de zorros. La historia utiliza una tradición folclórica japonesa establecida relacionada con una procesión sobrenatural de boda de zorros.",
            en: "This is not merely a visual appearance of foxes. The story uses an established Japanese folkloric tradition involving a supernatural fox wedding procession."
          },
          sourceLabel: {
            es: "Fuente - The Criterion Collection",
            en: "Source - The Criterion Collection"
          },
          sourceUrl: "https://www.criterion.com/films/28700-akira-kurosawa-s-dreams"
        },
        {
          id: "kitsune-yako-crayon-shinchan-2026",
          categoryId: "cinema",
          title: {
            es: "Yako · Crayon Shin-chan: Kiki Kaikai! Ora no Yōkai Vacation",
            en: "Yako · Crayon Shin-chan: Kiki Kaikai! Ora no Yōkai Vacation"
          },
          franchise: {
            es: "Cine / Anime · Crayon Shin-chan 2026",
            en: "Cinema / Anime · Crayon Shin-chan 2026"
          },
          year: "2026",
          classification: {
            es: "Referencia oficial explícita",
            en: "Explicit Official Reference"
          },
          image: "./assets/images/pop-kitsune-yako-crayon-shinchan.png?v=kitsune-yako-01",
          imageFit: "contain",
          shortDescription: {
            es: "La web oficial identifica a Yako como una 九尾の狐の妖怪: una yōkai zorro de nueve colas capaz de adoptar forma humana.",
            en: "The official website identifies Yako as a 九尾の狐の妖怪: a nine-tailed fox yōkai capable of assuming human form."
          },
          fullDescription: {
            es: "En la película de 2026, Yako es una poderosa yōkai zorro vinculada al Reino de los Yōkai. La ficha oficial explica que tiene 500 años, posee una gran fuerza sobrenatural, puede transformarse en humana y actúa como una figura importante entre los yōkai. Durante la historia guía a Shinnosuke y a sus amigos por ese mundo.",
            en: "In the 2026 film, Yako is a powerful fox yōkai connected to the Yōkai Kingdom. Her official profile states that she is 500 years old, possesses strong supernatural power, can transform into human form and is an important figure among the yōkai. During the story, she guides Shinnosuke and his friends through that world."
          },
          context: {
            es: "Pasa el filtro Akaihana porque la franquicia la define expresamente como un zorro sobrenatural de nueve colas y confirma su capacidad de transformación. No se presenta como adaptación confirmada de una leyenda clásica concreta, sino como una representación moderna explícita de la tradición kitsune.",
            en: "It passes the Akaihana filter because the franchise explicitly defines her as a supernatural nine-tailed fox and confirms her transformation ability. She is not presented as a confirmed adaptation of one specific classical legend, but as an explicit modern representation of the Kitsune tradition."
          },
          sourceLabel: {
            es: "Película oficial · Perfil de Yako",
            en: "Official Film · Yako Profile"
          },
          sourceUrl: "https://shinchan-movie.com/2026/20260604/guest/",
          secondarySourceLabel: {
            es: "TV Asahi · Noticia oficial",
            en: "TV Asahi · Official News"
          },
          secondarySourceUrl: "https://www.tv-asahi.co.jp/shinchan/news/0362/index.html"
        },
        {
          id: "kitsune-ninetales",
          categoryId: "pokemon",
          title: "Ninetales",
          franchise: {
            es: "Pokémon #0038 · Tipo fuego · Pokémon zorro",
            en: "Pokémon #0038 · Fire-type · Fox Pokémon"
          },
          classification: {
            es: "Inspiración probable",
            en: "Probable Inspiration"
          },
          image: "./assets/images/pop-kitsune-ninetales.png",
          shortDescription: {
            es: "Ninetales está clasificado oficialmente como Pokémon zorro y se reconoce por sus nueve colas fluidas, su pelaje dorado y su aura mística.",
            en: "Ninetales is officially classified as a Fox Pokémon and is known for nine flowing tails, golden fur and a mystical aura."
          },
          fullDescription: {
            es: "Ninetales está clasificado oficialmente como Pokémon zorro. Es conocido por sus nueve colas fluidas, su pelaje dorado y su aura mística. Según el lore oficial de la Pokédex, se dice que vive 1.000 años, y las leyendas dentro del mundo Pokémon cuentan que cada una de sus nueve colas posee un poder místico diferente.",
            en: "Ninetales is officially classified as a Fox Pokémon. It is known for its nine flowing tails, its golden fur and its mystical aura. According to official Pokédex lore, it is said to live for 1,000 years, and legends within the Pokémon world say that each of its nine tails possesses a different mystical power."
          },
          context: {
            es: "Estos rasgos crean una conexión muy fuerte con el folclore kitsune: un zorro sobrenatural, múltiples colas, poderes místicos y una longevidad extraordinaria. Esta entrada se clasifica como Inspiración probable y no como Confirmado oficialmente, porque la fuente Pokémon citada describe las características de Ninetales pero no identifica explícitamente la mitología kitsune como su fuente directa de diseño.",
            en: "These traits create a very strong connection with kitsune folklore: a supernatural fox, multiple tails, mystical powers and extraordinary longevity. This entry is classified as Probable Inspiration rather than Officially Confirmed, because the referenced Pokémon source describes Ninetales' characteristics but does not explicitly identify kitsune mythology as its direct design source."
          },
          sourceLabel: {
            es: "Pokédex oficial de Pokémon",
            en: "Official Pokémon Pokédex"
          },
          sourceUrl: "https://www.pokemon.com/us/pokedex/ninetales"
        }
      ]
    },
    {
      id: "koi",
      number: "03",
      title: "Koi",
      kanji: "鯉",
      image: "./assets/images/story-card-koi-tattoo.png",
      icon: "./assets/images/story-koi-cover.png",
      intro: {
        es: "El koi es más que un pez: representa perseverancia, transformación y ascenso, desde la carpa que sube la cascada hasta la leyenda que se convierte en dragón.",
        en: "The koi is more than a fish: it represents perseverance, transformation and ascension, from the carp climbing the waterfall to the legend that becomes a dragon."
      },
      entries: [
        {
          id: "koi-one-piece-wano",
          categoryId: "anime-manga",
          title: {
            es: "One Piece - Wano",
            en: "One Piece - Wano"
          },
          franchise: {
            es: "Episodio 891 · Wano Country Arc",
            en: "Episode 891 · Wano Country Arc"
          },
          classification: {
            es: "Conexión fuerte",
            en: "Strong Connection"
          },
          image: "./assets/images/pop-koi-one-piece-wano.png",
          shortDescription: {
            es: "En el arco de Wano, enormes koi aparecen subiendo una cascada para entrar en el país de Wano.",
            en: "In the Wano arc, huge koi are seen climbing a waterfall to enter Wano."
          },
          fullDescription: {
            es: "En el episodio 891 de One Piece, el Thousand Sunny se acerca al país de Wano y encuentra enormes koi que nadan contra la corriente y ascienden una cascada. La escena conecta de forma muy clara con la leyenda japonesa de la carpa que sube la cascada, conocida como koi no taki-nobori, y con la idea del pez que supera la corriente antes de transformarse en dragón.",
            en: "In One Piece episode 891, the Thousand Sunny approaches Wano Country and encounters huge koi swimming against the current and climbing a waterfall. The scene creates a very clear connection with the Japanese legend of the carp climbing the waterfall, known as koi no taki-nobori, and with the idea of the fish that overcomes the current before transforming into a dragon."
          },
          context: {
            es: "La conexión no depende solo de que aparezcan peces: la escena usa explícitamente el motivo visual del ascenso por una cascada, uno de los símbolos más reconocibles de la leyenda del koi.",
            en: "The connection is not based only on fish appearing on screen: the scene explicitly uses the visual motif of climbing a waterfall, one of the most recognisable symbols of the koi legend."
          },
          sourceLabel: {
            es: "Fuente oficial - ONE PIECE.com",
            en: "Official Source - ONE PIECE.com"
          },
          sourceUrl: "https://one-piece.com/anime/o5085/index.html",
          secondarySourceLabel: {
            es: "Ver episodio en Crunchyroll",
            en: "Watch episode on Crunchyroll"
          },
          secondarySourceUrl: "https://www.crunchyroll.com/watch/GYVDQ7M3Y/climbing-up-a-waterfall-a-great-journey-through-the-land-of-wanos-sea-zone"
        },
        {
          id: "koi-magikarp-gyarados",
          categoryId: "pokemon",
          title: {
            es: "Magikarp → Gyarados",
            en: "Magikarp → Gyarados"
          },
          franchise: {
            es: "Pokémon #0129 → #0130",
            en: "Pokémon #0129 → #0130"
          },
          classification: {
            es: "Inspiración probable",
            en: "Probable Inspiration"
          },
          image: "./assets/images/pop-koi-pokemon-evolution-card.png?v=official-pokemon-evolution-02",
          imageFit: "contain",
          shortDescription: {
            es: "Magikarp, un pez débil, evoluciona en Gyarados, una criatura poderosa con forma de dragón.",
            en: "Magikarp, a seemingly weak fish, evolves into Gyarados, a powerful dragon-like creature."
          },
          fullDescription: {
            es: "Magikarp está presentado oficialmente como un Pokémon pez que evoluciona en Gyarados. Esa evolución, de una criatura aparentemente débil a una forma poderosa y dracónica, refleja de manera muy cercana la antigua leyenda del koi que vence la adversidad, asciende la cascada y se transforma en dragón.",
            en: "Magikarp is officially presented as a fish Pokémon that evolves into Gyarados. That evolution, from an apparently weak creature into a powerful dragon-like form, closely mirrors the ancient legend of the koi that overcomes adversity, climbs the waterfall and transforms into a dragon."
          },
          context: {
            es: "La entrada se clasifica como Inspiración probable porque la relación simbólica es muy fuerte, pero las fuentes oficiales citadas confirman la evolución Magikarp → Gyarados sin declarar explícitamente la leyenda del koi como origen directo del diseño.",
            en: "This entry is classified as Probable Inspiration because the symbolic relationship is very strong, but the cited official sources confirm the Magikarp → Gyarados evolution without explicitly naming the koi legend as the direct origin of the design."
          },
          sourceLabel: {
            es: "Pokédex oficial - Magikarp",
            en: "Official Pokédex - Magikarp"
          },
          sourceUrl: "https://www.pokemon.com/us/pokedex/magikarp",
          secondarySourceLabel: {
            es: "Pokédex oficial - Gyarados",
            en: "Official Pokédex - Gyarados"
          },
          secondarySourceUrl: "https://www.pokemon.com/us/pokedex/gyarados"
        }
      ]
    },
    {
      id: "ryu",
      number: "04",
      title: "Ryu",
      kanji: "\u9F8D",
      image: "./assets/images/story-card-ryu-tattoo.png",
      icon: "./assets/images/story-ryu-cover.png",
      intro: {
        es: "El ryu, o tatsu, une poder, agua y proteccion en el imaginario japones. Estas referencias muestran su origen cultural y sus ecos modernos en anime, cine y videojuegos.",
        en: "The ryu, or tatsu, connects power, water and protection in Japanese visual culture. These references show its cultural origin and its modern echoes in anime, film and video games."
      },
      entries: [
        {
          id: "ryu-japan-foundation-tatsu",
          categoryId: "cultural-origin",
          title: {
            es: "TATSU - Dragones en el arte japones",
            en: "TATSU - Dragons in Japanese Art"
          },
          franchise: {
            es: "Japan Foundation - Origen cultural",
            en: "Japan Foundation - Cultural Origin"
          },
          classification: {
            es: "Base cultural documentada",
            en: "Documented Cultural Source"
          },
          image: "./assets/images/pop-ryu-japan-foundation-tatsu-official.png?v=ryu-cultural-origin-03",
          imageFit: "contain",
          shortDescription: {
            es: "Japan Foundation documenta el tatsu/ryu como una figura esencial del arte japones, asociada a poder, proteccion, agua y autoridad espiritual.",
            en: "The Japan Foundation documents tatsu/ryu as an essential figure in Japanese art, associated with power, protection, water and spiritual authority."
          },
          fullDescription: {
            es: "La referencia cultural de Japan Foundation situa al dragon japones, tambien llamado ryu o tatsu, dentro de una larga historia visual en Japon. En el arte japones, el dragon no se presenta solo como una criatura fantastica: aparece como simbolo de fuerza, proteccion, energia espiritual y relacion con el agua, la lluvia y los ciclos naturales.",
            en: "The Japan Foundation cultural reference places the Japanese dragon, also called ryu or tatsu, within a long visual history in Japan. In Japanese art, the dragon is not presented only as a fantasy creature: it appears as a symbol of strength, protection, spiritual energy and a relationship with water, rain and natural cycles."
          },
          context: {
            es: "Este bloque funciona como origen cultural para leer las referencias modernas de Ryu. Haku y el Dragon Divino de Sekiro heredan esa idea del dragon como presencia sagrada, protectora y conectada con el agua o la naturaleza.",
            en: "This block works as the cultural origin for reading Ryu's modern references. Haku and Sekiro's Divine Dragon inherit the idea of the dragon as a sacred, protective presence connected with water or nature."
          },
          sourceLabel: {
            es: "Fuente - Japan Foundation",
            en: "Source - Japan Foundation"
          },
          sourceUrl: "https://www.jflalc.org/event-details.php/152/tatsu-depictions-of-dragons-in-japanese-art"
        },
        {
          id: "ryu-spirited-away-haku",
          categoryId: "anime-manga",
          title: {
            es: "Spirited Away - Haku",
            en: "Spirited Away - Haku"
          },
          franchise: {
            es: "Studio Ghibli - El viaje de Chihiro",
            en: "Studio Ghibli - Spirited Away"
          },
          classification: {
            es: "Conexion fuerte",
            en: "Strong Connection"
          },
          image: "./assets/images/pop-ryu-haku-original.png?v=ryu-haku-02",
          imageFit: "contain",
          shortDescription: {
            es: "Haku es un espiritu de rio que adopta forma de dragon y encarna proteccion, guia y poder del agua.",
            en: "Haku is a river spirit who takes the form of a dragon and embodies protection, guidance and the power of water."
          },
          fullDescription: {
            es: "En Spirited Away, Haku esta ligado al rio Kohaku y aparece en forma de dragon blanco. Su papel une varios rasgos del ryu japones: una presencia espiritual, protectora y conectada con el agua. No es un monstruo destructor, sino una figura ambigua, sagrada y guia dentro del viaje de Chihiro.",
            en: "In Spirited Away, Haku is tied to the Kohaku River and appears in the form of a white dragon. His role brings together several traits of the Japanese ryu: a spiritual, protective presence connected with water. He is not a destructive monster, but an ambiguous, sacred guide within Chihiro's journey."
          },
          context: {
            es: "La conexion es fuerte porque Studio Ghibli presenta oficialmente materiales de Haku en su forma de dragon y la pelicula revela su identidad como espiritu del rio.",
            en: "The connection is strong because Studio Ghibli officially presents material of Haku in dragon form and the film reveals his identity as a river spirit."
          },
          sourceLabel: {
            es: "Fuente oficial - Studio Ghibli",
            en: "Official Source - Studio Ghibli"
          },
          sourceUrl: "https://www.ghibli.jp/works/chihiro/"
        },
        {
          id: "ryu-sekiro-divine-dragon",
          categoryId: "video-games",
          title: {
            es: "Sekiro - Divine Dragon",
            en: "Sekiro - Divine Dragon"
          },
          franchise: {
            es: "Sekiro: Shadows Die Twice",
            en: "Sekiro: Shadows Die Twice"
          },
          classification: {
            es: "Conexion fuerte",
            en: "Strong Connection"
          },
          image: "./assets/images/pop-ryu-sekiro-original.png?v=ryu-sekiro-02",
          imageFit: "contain",
          shortDescription: {
            es: "El Dragon Divino, Sakura Dragon, es una entidad antigua y celestial ligada a la inmortalidad y al imaginario japones del dragon sagrado.",
            en: "The Divine Dragon, Sakura Dragon, is an ancient celestial entity tied to immortality and the Japanese image of the sacred dragon."
          },
          fullDescription: {
            es: "En Sekiro: Shadows Die Twice, el Divine Dragon o Sakura Dragon aparece como una presencia celestial y antigua. Su diseno combina cuerpo serpentino, energia sagrada, vegetacion y una escala monumental, conectando con la idea japonesa del dragon como ser protector, espiritual y vinculado a la naturaleza.",
            en: "In Sekiro: Shadows Die Twice, the Divine Dragon or Sakura Dragon appears as an ancient celestial presence. Its design combines a serpentine body, sacred energy, vegetation and monumental scale, connecting with the Japanese idea of the dragon as a protective, spiritual being linked to nature."
          },
          context: {
            es: "La conexion se clasifica como fuerte porque el propio nombre, Sakura Dragon, y la puesta en escena del juego lo conectan con una reinterpretacion fantastica del dragon sagrado en un Japon mitico.",
            en: "The connection is classified as strong because the name Sakura Dragon and the game's presentation connect it with a fantasy reinterpretation of the sacred dragon in a mythic Japan."
          },
          sourceLabel: {
            es: "Fuente oficial - FromSoftware",
            en: "Official Source - FromSoftware"
          },
          sourceUrl: "https://www.sekirothegame.com/"
        }
      ]
    },
    {
      id: "hannya",
      number: "05",
      title: "Hannya",
      kanji: "\u822C\u82E5",
      image: "./assets/images/story-card-hannya-tattoo.png",
      icon: "./assets/images/story-hannya-cover.png",
      intro: {
        es: "La mascara Hannya transforma belleza, celos, rabia y dolor en una imagen poderosa del folclore japones, el teatro Noh y la cultura visual moderna.",
        en: "The Hannya mask transforms beauty, jealousy, rage and pain into a powerful image from Japanese folklore, Noh theatre and modern visual culture."
      },
      entries: [
        {
          id: "hannya-ghostwire-tokyo",
          categoryId: "video-games",
          title: {
            es: "Ghostwire: Tokyo - Hannya",
            en: "Ghostwire: Tokyo - Hannya"
          },
          franchise: "Ghostwire: Tokyo",
          classification: {
            es: "Conexion fuerte",
            en: "Strong Connection"
          },
          image: "./assets/images/pop-hannya-ghostwire-tokyo.png?v=hannya-ghostwire-01",
          imageFit: "contain",
          shortDescription: {
            es: "Hannya es el antagonista principal de Ghostwire: Tokyo, un hombre misterioso enmascarado cuya identidad toma directamente el nombre y la iconografia de la mascara japonesa.",
            en: "Hannya is the main antagonist of Ghostwire: Tokyo, a mysterious masked man whose identity directly takes the name and iconography of the Japanese mask."
          },
          fullDescription: {
            es: "En Ghostwire: Tokyo, Hannya aparece como el antagonista central y figura en material oficial del juego con una mascara inspirada en la tradicion Hannya. Su nombre, presencia visual e iconografia conectan de forma directa con la mascara japonesa asociada a celos, dolor, obsesion y transformacion emocional.",
            en: "In Ghostwire: Tokyo, Hannya appears as the central antagonist and is shown in official game material wearing a mask inspired by the Hannya tradition. His name, visual presence and iconography directly connect with the Japanese mask associated with jealousy, pain, obsession and emotional transformation."
          },
          context: {
            es: "La conexion es fuerte porque no se trata solo de una mascara parecida: el personaje se llama Hannya y utiliza esa imagen como eje de su identidad dentro del juego.",
            en: "The connection is strong because this is not only a similar-looking mask: the character is named Hannya and uses that image as the core of his identity within the game."
          },
          sourceLabel: {
            es: "Fuente oficial - Bethesda",
            en: "Official Source - Bethesda"
          },
          sourceUrl: "https://bethesda.net/en/game/ghostwire-tokyo"
        },
        {
          id: "hannya-british-museum",
          categoryId: "cultural-origin",
          title: {
            es: "British Museum - Mascara Hannya",
            en: "British Museum - Hannya Mask"
          },
          franchise: {
            es: "British Museum Collection Online",
            en: "British Museum Collection Online"
          },
          classification: {
            es: "Fuente cultural documentada",
            en: "Documented Cultural Source"
          },
          image: "./assets/images/pop-hannya-british-museum.png?v=hannya-british-museum-01",
          imageFit: "contain",
          shortDescription: {
            es: "El British Museum describe la mascara Hannya como una figura femenina transformada por celos, ira y dolor dentro del teatro Noh.",
            en: "The British Museum describes the Hannya mask as a female figure transformed by jealousy, anger and pain within Noh theatre."
          },
          fullDescription: {
            es: "La referencia del British Museum conecta la Hannya con el teatro Noh y con la transformacion emocional de una mujer consumida por celos y rabia. Esta lectura cultural ayuda a entender por que la mascara no representa solo terror, sino una mezcla compleja de dolor humano, obsesion y perdida de control.",
            en: "The British Museum reference connects Hannya with Noh theatre and with the emotional transformation of a woman consumed by jealousy and rage. This cultural reading helps explain why the mask does not represent only horror, but a complex mix of human pain, obsession and loss of control."
          },
          context: {
            es: "Este bloque funciona como base cultural para leer el simbolo Hannya antes de ver sus reinterpretaciones modernas en videojuegos, tatuaje y cultura visual.",
            en: "This block works as a cultural base for reading the Hannya symbol before its modern reinterpretations in video games, tattooing and visual culture."
          },
          sourceLabel: {
            es: "Fuente - British Museum",
            en: "Source - British Museum"
          },
          sourceUrl: "https://www.britishmuseum.org/collection/object/A_1946-1216-2"
        },
        {
          id: "hannya-met-museum",
          categoryId: "cultural-origin",
          title: {
            es: "The Met - Mascara Hannya",
            en: "The Met - Hannya Mask"
          },
          franchise: {
            es: "The Metropolitan Museum of Art",
            en: "The Metropolitan Museum of Art"
          },
          classification: {
            es: "Fuente cultural documentada",
            en: "Documented Cultural Source"
          },
          image: "./assets/images/pop-hannya-met-museum.png?v=hannya-met-museum-01",
          imageFit: "contain",
          shortDescription: {
            es: "The Met conserva una mascara Hannya japonesa del periodo Edo, vinculada al teatro Noh y a expresiones de dolor, ira y celos.",
            en: "The Met preserves a Japanese Hannya mask from the Edo period, linked to Noh theatre and expressions of pain, anger and jealousy."
          },
          fullDescription: {
            es: "La mascara Hannya conservada por The Met muestra la fuerza visual del arquetipo: cuernos, boca abierta y una expresion que puede leerse como furia o sufrimiento. Esa ambiguedad es esencial para Hannya, porque representa una emocion humana llevada al limite hasta adquirir forma demonica.",
            en: "The Hannya mask preserved by The Met shows the visual force of the archetype: horns, an open mouth and an expression that can be read as fury or suffering. That ambiguity is essential to Hannya, because it represents a human emotion pushed to the limit until it takes a demonic form."
          },
          context: {
            es: "Junto al British Museum, esta fuente refuerza que Hannya pertenece a una tradicion artistica y teatral real, no solo a una estetica moderna de terror.",
            en: "Together with the British Museum, this source reinforces that Hannya belongs to a real artistic and theatrical tradition, not only to a modern horror aesthetic."
          },
          sourceLabel: {
            es: "Fuente - The Met Collection",
            en: "Source - The Met Collection"
          },
          sourceUrl: "https://www.metmuseum.org/art/collection/search/59715"
        }
      ]
    },
    {
      id: "yuki-onna",
      number: "06",
      title: "Yuki-onna",
      kanji: "\u96EA\u5973",
      image: "./assets/images/story-card-yuki-onna.png",
      icon: "./assets/images/story-yuki-onna-cover.png",
      intro: {
        es: "Yuki-onna, la mujer de la nieve, une belleza, peligro, invierno y misterio. Estas referencias muestran su origen folclorico y sus adaptaciones modernas verificadas.",
        en: "Yuki-onna, the Woman of the Snow, connects beauty, danger, winter and mystery. These references show her folkloric origin and verified modern adaptations."
      },
      entries: [
        {
          id: "yuki-onna-ghost-of-yotei-legends",
          categoryId: "video-games",
          title: "Ghost of Yōtei — Legends",
          franchise: {
            es: "Videojuego · PlayStation",
            en: "Video Game · PlayStation"
          },
          classification: {
            es: "Referencia oficial explícita",
            en: "Explicit Official Reference"
          },
          image: "./assets/images/pop-ghost-of-yotei-legends.png",
          imageFit: "contain",
          shortDescription: {
            es: "Legends presenta a Snow-Woman con poderes de hielo y frío, identificada oficialmente en japonés como Yuki-onna.",
            en: "Legends features Snow-Woman with frost and cold abilities, officially identified in Japanese as Yuki-onna."
          },
          fullDescription: {
            es: "PlayStation describe Legends como una reinterpretación sobrenatural de los Wild Six. Una de sus figuras se convierte en Snow-Woman, emplea habilidades de hielo y frío, y el material oficial japonés la nombra explícitamente Yuki-onna.",
            en: "PlayStation describes Legends as a supernatural retelling of the Wild Six. One of its figures becomes Snow-Woman, uses frost and cold abilities, and is explicitly named Yuki-onna in official Japanese material."
          },
          context: {
            es: "El nombre oficial y sus poderes invernales establecen una referencia directa a la mujer de la nieve del folclore japonés.",
            en: "The official name and her wintry abilities establish a direct reference to the snow woman of Japanese folklore."
          },
          sourceLabel: {
            es: "Ghost of Yōtei — página oficial",
            en: "Ghost of Yōtei — Official Page"
          },
          sourceUrl: "https://www.playstation.com/games/ghost-of-yotei/"
        },
        {
          id: "yuki-onna-kwaidan",
          categoryId: "cinema",
          title: {
            es: "Kwaidan - La mujer de la nieve",
            en: "Kwaidan - The Woman of the Snow"
          },
          franchise: {
            es: "Masaki Kobayashi - Kwaidan (1964)",
            en: "Masaki Kobayashi - Kwaidan (1964)"
          },
          year: "1964",
          classification: {
            es: "Adaptacion directa confirmada",
            en: "Confirmed Direct Adaptation"
          },
          image: "./assets/images/pop-yuki-onna-kwaidan.png?v=yuki-onna-kwaidan-01",
          shortDescription: {
            es: "Kwaidan adapta directamente la historia de Yuki-onna dentro de su antologia de relatos fantasmales japoneses.",
            en: "Kwaidan directly adapts the Yuki-onna story within its anthology of Japanese ghost tales."
          },
          fullDescription: {
            es: "Kwaidan, dirigida por Masaki Kobayashi en 1964, es una antologia cinematografica basada en relatos japoneses recopilados por Lafcadio Hearn. Su segundo segmento, 'The Woman of the Snow', adapta directamente la leyenda de Yuki-onna: una figura bella, fria y sobrenatural que aparece en la nieve y deja una marca de misterio, deseo y amenaza.",
            en: "Kwaidan, directed by Masaki Kobayashi in 1964, is a film anthology based on Japanese tales collected by Lafcadio Hearn. Its second segment, 'The Woman of the Snow', directly adapts the Yuki-onna legend: a beautiful, cold and supernatural figure who appears in the snow and leaves a trace of mystery, desire and danger."
          },
          context: {
            es: "La conexion es directa porque la pelicula identifica el relato como 'The Woman of the Snow' y lo desarrolla como una adaptacion del folclore japones asociado a Yuki-onna.",
            en: "The connection is direct because the film identifies the tale as 'The Woman of the Snow' and develops it as an adaptation of Japanese folklore associated with Yuki-onna."
          },
          sourceLabel: {
            es: "Fuente oficial - Janus Films",
            en: "Official Source - Janus Films"
          },
          sourceUrl: "https://www.janusfilms.com/films/1122",
          secondarySourceLabel: {
            es: "The Criterion Collection - Kwaidan",
            en: "The Criterion Collection - Kwaidan"
          },
          secondarySourceUrl: "https://www.criterion.com/films/629-kwaidan"
        },
        {
          id: "yuki-onna-hyoketsu-2026",
          categoryId: "cinema",
          title: {
            es: "氷血 / HYOKETSU",
            en: "氷血 / HYOKETSU"
          },
          franchise: {
            es: "Cine japones de horror",
            en: "Japanese Horror Cinema"
          },
          year: "2026",
          classification: {
            es: "Conexion moderna verificada",
            en: "Verified Modern Connection"
          },
          image: "./assets/images/pop-yuki-onna-hyoketsu-poster.png?v=yuki-hyoketsu-01",
          imageFit: "contain",
          shortDescription: {
            es: "HYOKETSU reinterpreta Yuki-onna desde una lectura cinematografica moderna confirmada por su director.",
            en: "HYOKETSU reinterprets Yuki-onna through a modern cinematic reading confirmed by its director."
          },
          fullDescription: {
            es: "氷血 / HYOKETSU funciona como una conexion contemporanea de Yuki-onna porque el director Eiji Naito habla de releer la Yuki-onna de Lafcadio Hearn al desarrollar la pelicula. La reinterpretacion desplaza el mito hacia expectativas familiares modernas, roles de genero y una mujer vinculada a la nieve que puede ser salvada.",
            en: "氷血 / HYOKETSU works as a contemporary Yuki-onna connection because director Eiji Naito discusses rereading Lafcadio Hearn's Yuki-onna while developing the film. The reinterpretation reframes the myth through modern family expectations, gender roles and a snow-bound woman who can ultimately be saved."
          },
          context: {
            es: "Pasa el filtro Akaihana porque no es solo una estetica de mujer en la nieve: la conexion con Yuki-onna se confirma desde material oficial y una entrevista del director.",
            en: "It passes the Akaihana filter because it is not just a woman-in-snow aesthetic: the Yuki-onna connection is confirmed through official material and a director interview."
          },
          sourceLabel: {
            es: "Web oficial - HYOKETSU",
            en: "Official Film Site - HYOKETSU"
          },
          sourceUrl: "https://hyoketsu-movie.jp/",
          secondarySourceLabel: {
            es: "Entrevista - reinterpretacion de Yuki-onna",
            en: "Interview - Yuki-onna reinterpretation"
          },
          secondarySourceUrl: "https://www.audio-technica.co.jp/always-listening/articles/hyoketsu-sound-design/"
        },
        {
          id: "yuki-onna-gegege-no-kitaro",
          categoryId: "anime-manga",
          title: {
            es: "GeGeGe no Kitaro - Yuki-onna",
            en: "GeGeGe no Kitaro - Yuki-onna"
          },
          franchise: {
            es: "Toei Animation - GeGeGe no Kitaro",
            en: "Toei Animation - GeGeGe no Kitaro"
          },
          classification: {
            es: "Referencia explicita oficial",
            en: "Official Explicit Reference"
          },
          image: "./assets/images/pop-yuki-onna-gegege-kitaro.png?v=yuki-onna-gegege-01",
          imageFit: "contain",
          shortDescription: {
            es: "La web oficial de Toei Animation registra directamente a Yuki-onna / Yuki entre los yokai de GeGeGe no Kitaro.",
            en: "Toei Animation's official website directly lists Yuki-onna / Yuki among the yokai characters in GeGeGe no Kitaro."
          },
          fullDescription: {
            es: "GeGeGe no Kitaro es una franquicia centrada en yokai, por eso la aparicion de Yuki-onna / Yuki funciona como una referencia explicita y no como una inspiracion vaga. La pagina oficial de Toei Animation la identifica literalmente como Yuki-onna/Yuki, una yokai con apariencia de mujer hermosa y poder para manipular la nieve.",
            en: "GeGeGe no Kitaro is a franchise centered on yokai, so the appearance of Yuki-onna / Yuki works as an explicit reference rather than a vague inspiration. Toei Animation's official page literally identifies her as Yuki-onna/Yuki, a yokai with the appearance of a beautiful woman and the power to control snow."
          },
          context: {
            es: "Esta entrada pasa el filtro porque la obra nombra directamente a Yuki-onna dentro de una serie construida alrededor del folclore yokai japones.",
            en: "This entry passes the filter because the work directly names Yuki-onna within a series built around Japanese yokai folklore."
          },
          sourceLabel: {
            es: "Fuente oficial - Toei Animation",
            en: "Official Source - Toei Animation"
          },
          sourceUrl: "https://www.toei-anim.co.jp/kitaro/character/yokai.php"
        },
        {
          id: "yuki-onna-unsociable-widow",
          categoryId: "anime-manga",
          title: {
            es: "The Unsociable Widow Yuki-Onna",
            en: "The Unsociable Widow Yuki-Onna"
          },
          franchise: {
            es: "AnimeFesta - anime",
            en: "AnimeFesta - Anime"
          },
          year: "2026",
          classification: {
            es: "Referencia explicita oficial",
            en: "Official Explicit Reference"
          },
          image: "./assets/images/pop-yuki-onna-unsociable-widow.png?v=yuki-widow-01",
          imageFit: "contain",
          shortDescription: {
            es: "La web oficial identifica a Yukino Mifuyu como una Yuki-onna que controla el frio y el hielo.",
            en: "The official site identifies Yukino Mifuyu as a Yuki-onna who controls cold and ice."
          },
          fullDescription: {
            es: "The Unsociable Widow Yuki-Onna presenta a Yukino Mifuyu como una mujer de nieve vinculada al frio y al hielo. La entrada se incluye como referencia folklorica explicita porque el propio material oficial usa Yuki-onna como identidad del personaje.",
            en: "The Unsociable Widow Yuki-Onna presents Yukino Mifuyu as a snow woman connected with cold and ice. This entry is included as an explicit folkloric reference because the official material uses Yuki-onna as the character identity."
          },
          context: {
            es: "La conexion es valida por nombrar directamente a Yuki-onna, aunque se mantiene una lectura editorial prudente por el tono adulto-romance de la obra.",
            en: "The connection is valid because it directly names Yuki-onna, while keeping cautious editorial wording because of the work's adult-romance tone."
          },
          sourceLabel: {
            es: "Fuente oficial - AnimeFesta",
            en: "Official Source - AnimeFesta"
          },
          sourceUrl: "https://anime-yukionna.af-original.com/"
        },
        {
          id: "yuki-onna-nichibunken-traditions",
          categoryId: "cultural-origin",
          title: {
            es: "Nichibunken - Tradiciones de Yuki-onna",
            en: "Nichibunken - Yuki-onna Folktales"
          },
          franchise: {
            es: "Base de tradiciones yokai",
            en: "Folktales of Strange Phenomena and Yokai"
          },
          classification: {
            es: "Fuente cultural documentada",
            en: "Documented Cultural Source"
          },
          image: "./assets/images/story-yuki-onna-cover.png",
          shortDescription: {
            es: "Nichibunken conserva registros documentales especificos de Yuki-onna procedentes de estudios folkloricos japoneses y tradiciones regionales.",
            en: "Nichibunken preserves specific documentary records of Yuki-onna from Japanese folklore studies and regional traditions."
          },
          fullDescription: {
            es: "El International Research Center for Japanese Studies, Nichibunken, incluye a Yuki-onna en su base de tradiciones de fenomenos extranos y yokai. Uno de sus registros documenta la aparicion de una mujer muerta en la nieve cuyo espiritu aparece como Yuki-onna; otros conservan relatos ligados a grandes nevadas, caminos de nieve y apariciones regionales.",
            en: "The International Research Center for Japanese Studies, Nichibunken, includes Yuki-onna in its database of strange phenomena and yokai traditions. One record documents the apparition of a woman who died in the snow and appears as Yuki-onna; others preserve accounts connected with heavy snowfall, snowy roads and regional apparitions."
          },
          context: {
            es: "Esta entrada sustituye las fuentes culturales anteriores y funciona como base folklorica principal para leer las adaptaciones modernas de Yuki-onna.",
            en: "This entry replaces the previous cultural sources and works as the main folkloric base for reading modern Yuki-onna adaptations."
          },
          sourceLabel: {
            es: "Fuente - Nichibunken YoukaiDB",
            en: "Source - Nichibunken YoukaiDB"
          },
          sourceUrl: "https://www.nichibun.ac.jp/cgi-bin/YoukaiDB3/youkai_card.cgi?ID=1231386"
        },
        {
          id: "yuki-onna-nichibunken-image-archive",
          categoryId: "cultural-origin",
          title: {
            es: "Nichibunken - Archivo visual de Yuki-onna",
            en: "Nichibunken - Yuki-onna Image Archive"
          },
          franchise: {
            es: "Pinturas de fenomenos extra?os y yokai",
            en: "Paintings of Strange Phenomena and Yokai"
          },
          classification: {
            es: "Archivo visual institucional",
            en: "Institutional Visual Archive"
          },
          image: "./assets/images/pop-yuki-onna-nichibunken-archive.png?v=yuki-onna-nichibunken-01",
          imageFit: "contain",
          shortDescription: {
            es: "La base visual de Nichibunken devuelve varias piezas de Yuki-onna e identifica la imagen como \u96EA\u5973\uFF1B\u30E6\u30AD\u30AA\u30F3\u30CA.",
            en: "Nichibunken's visual database returns several Yuki-onna pieces and identifies the image as \u96EA\u5973\uFF1B\u30E6\u30AD\u30AA\u30F3\u30CA."
          },
          fullDescription: {
            es: "La base de imagenes de yokai de Nichibunken conserva representaciones historicas de Yuki-onna y Yuki-joro. La ficha de la pieza la identifica expresamente como \u96EA\u5973\uFF1B\u30E6\u30AD\u30AA\u30F3\u30CA y describe una figura blanca, de cabello largo, sin pies y flotando ligeramente sobre la nieve.",
            en: "Nichibunken's yokai image database preserves historical representations of Yuki-onna and Yuki-joro. The record explicitly identifies the piece as \u96EA\u5973\uFF1B\u30E6\u30AD\u30AA\u30F3\u30CA and describes a white figure with long hair, no feet and a slight floating presence above the snow."
          },
          context: {
            es: "La imagen se usa aqui como referencia cultural institucional de Nichibunken. No se marca como Public Domain ni CC0, porque la propia pagina indica derechos de la institucion.",
            en: "The image is used here as a Nichibunken institutional cultural reference. It is not marked as Public Domain or CC0, because the page itself states institutional rights."
          },
          sourceLabel: {
            es: "Fuente - Nichibunken Image Archive",
            en: "Source - Nichibunken Image Archive"
          },
          sourceUrl: "https://www.nichibun.ac.jp/cgi-bin/YoukaiGazou/search.cgi?query=NILL&yname=%E9%9B%AA%E5%A5%B3%EF%BC%9B%E3%83%A6%E3%82%AD%E3%82%AA%E3%83%B3%E3%83%8A"
        }
      ]
    },
    {
      id: "baku",
      number: "07",
      title: "Baku",
      kanji: "\u734F",
      image: "./assets/images/story-card-baku-tattoo.png",
      icon: "./assets/images/story-baku-cover.png",
      intro: {
        es: "En el folclore japones, el Baku es un espiritu devorador de suenos asociado a absorber pesadillas. Estas conexiones modernas lo reinterpretan desde criaturas digitales hasta videojuegos contemporaneos.",
        en: "In Japanese folklore, the Baku is a dream-eating spirit associated with devouring nightmares. These modern connections reinterpret it through digital creatures, Pokemon and contemporary games."
      },
      entries: [
        {
          id: "baku-digimon-bakumon",
          categoryId: "anime-manga",
          title: {
            es: "Digimon - Bakumon / Tapirmon",
            en: "Digimon - Bakumon / Tapirmon"
          },
          franchise: "Digimon",
          classification: {
            es: "Conexion oficial confirmada",
            en: "Confirmed Official Connection"
          },
          image: "./assets/images/pop-baku-digimon-bakumon.png?v=baku-digimon-01",
          imageFit: "contain",
          shortDescription: {
            es: "Materiales oficiales de Digimon comparan explicitamente a Bakumon con el baku folclorico japones y lo vinculan con absorber pesadillas.",
            en: "Official Digimon materials explicitly compare Bakumon with the Japanese folkloric baku and connect it with absorbing nightmares."
          },
          fullDescription: {
            es: "Bakumon, tambien conocido como Tapirmon, es una criatura de Digimon cuyo perfil oficial lo conecta directamente con el baku del folclore japones. La referencia es fuerte porque no se basa solo en su apariencia de tapir: los materiales oficiales explican que absorbe y elimina pesadillas, una funcion central del Baku tradicional.",
            en: "Bakumon, also known as Tapirmon, is a Digimon creature whose official profile directly connects it with the baku of Japanese folklore. The reference is strong because it is not based only on its tapir-like appearance: official materials explain that it absorbs and removes nightmares, a core function of the traditional Baku."
          },
          context: {
            es: "Esta entrada pasa el filtro Akaihana porque existe una comparacion oficial y textual con el Baku, ademas de la funcion narrativa de devorar pesadillas.",
            en: "This entry passes the Akaihana filter because there is an official textual comparison with the Baku, alongside the narrative function of devouring nightmares."
          },
          sourceLabel: {
            es: "Fuente oficial - Digimon Reference Book",
            en: "Official Source - Digimon Reference Book"
          },
          sourceUrl: "https://digimon.net/reference_en/detail.php?directory_name=bakumon",
          secondarySourceLabel: {
            es: "Fuente oficial - Digimon Profile",
            en: "Official Source - Digimon Profile"
          },
          secondarySourceUrl: "https://digimon.net/profile/report024/"
        },
        {
          id: "baku-pokemon-drowzee",
          categoryId: "pokemon",
          title: "Drowzee",
          franchise: {
            es: "Pokemon #0096",
            en: "Pokemon #0096"
          },
          classification: {
            es: "Conexion oficial",
            en: "Official Connection"
          },
          image: "./assets/images/pop-baku-pokemon-drowzee.png?v=baku-drowzee-01",
          imageFit: "contain",
          shortDescription: {
            es: "El material oficial de Pokemon afirma que Drowzee come sue?os, y una carta oficial lo identifica como descendiente del legendario Baku devorador de sue?os.",
            en: "Official Pokemon material states that Drowzee eats dreams, and an official card identifies it as a descendant of the legendary dream-eating Baku."
          },
          fullDescription: {
            es: "Drowzee esta presentado oficialmente como un Pokemon que come sue?os. La conexion con Baku se refuerza por texto oficial de cartas Pokemon, donde se le identifica como descendiente del legendario Baku devorador de sue?os. Por eso su relacion no es solo visual: une forma de tapir, funcion de sue?o y referencia textual directa.",
            en: "Drowzee is officially presented as a Pokemon that eats dreams. The Baku connection is reinforced by official Pokemon card text, where it is identified as a descendant of the legendary dream-eating Baku. Its relationship is therefore not only visual: it combines tapir-like form, dream function and direct textual reference."
          },
          context: {
            es: "La entrada se clasifica como conexion oficial porque Pokemon documenta la relacion de Drowzee con los sue?os y conserva una referencia textual al Baku legendario.",
            en: "This entry is classified as an official connection because Pokemon documents Drowzee's relationship with dreams and preserves a textual reference to the legendary Baku."
          },
          sourceLabel: {
            es: "Pokedex oficial - Drowzee",
            en: "Official Pokedex - Drowzee"
          },
          sourceUrl: "https://www.pokemon.com/us/pokedex/drowzee",
          secondarySourceLabel: {
            es: "Carta oficial Pokemon TCG - Evolutions #49",
            en: "Official Pokemon TCG Card - Evolutions #49"
          },
          secondarySourceUrl: "https://www.pokemon.com/us/pokemon-tcg/pokemon-cards/series/xy12/49/"
        },
        {
          id: "baku-genshin-yumemizuki-mizuki",
          categoryId: "video-games",
          title: {
            es: "Genshin Impact - Yumemizuki Mizuki",
            en: "Genshin Impact - Yumemizuki Mizuki"
          },
          franchise: "Genshin Impact",
          classification: {
            es: "Conexion oficial confirmada",
            en: "Confirmed Official Connection"
          },
          image: "./assets/images/pop-baku-genshin-mizuki.png?v=baku-genshin-01",
          imageFit: "contain",
          shortDescription: {
            es: "HoYoverse identifica oficialmente a Yumemizuki Mizuki como parte del clan yumekui-baku de Inazuma y la llama Nightmare Devourer.",
            en: "HoYoverse officially identifies Yumemizuki Mizuki as part of Inazuma's yumekui-baku clan and calls her a Nightmare Devourer."
          },
          fullDescription: {
            es: "Yumemizuki Mizuki conecta con Baku de forma directa porque HoYoverse la presenta dentro del clan yumekui-baku de Inazuma y la asocia con la idea de devorar pesadillas. El termino yumekui-baku significa literalmente baku devorador de sue?os, lo que enlaza al personaje con el nucleo folklorico del espiritu que consume malos sue?os.",
            en: "Yumemizuki Mizuki connects directly with Baku because HoYoverse presents her as part of Inazuma's yumekui-baku clan and associates her with devouring nightmares. The term yumekui-baku literally means dream-eating baku, linking the character to the folkloric core of the spirit that consumes bad dreams."
          },
          context: {
            es: "Esta conexion se marca como confirmada porque la fuente oficial usa el vocabulario de Baku y la funcion de Nightmare Devourer, no solo una estetica parecida.",
            en: "This connection is marked as confirmed because the official source uses Baku vocabulary and the Nightmare Devourer function, not just a similar aesthetic."
          },
          sourceLabel: {
            es: "Fuente oficial - HoYoverse",
            en: "Official Source - HoYoverse"
          },
          sourceUrl: "https://genshin.hoyoverse.com/en/news/detail/129627",
          secondarySourceLabel: {
            es: "Fuente oficial - Character Introduction",
            en: "Official Source - Character Introduction"
          },
          secondarySourceUrl: "https://genshin.hoyoverse.com/en/news/detail/154285"
        }
      ]
    },
    {
      id: "tsuru",
      number: "08",
      title: "Tsuru",
      kanji: "鶴",
      image: "./assets/images/story-card-tsuru-tattoo.png",
      icon: "./assets/images/story-tsuru-cover.png",
      intro: {
        es: "Tsuru no Ongaeshi, la gratitud de la grulla, habla de bondad, sacrificio y promesas. Estas conexiones muestran como la leyenda sigue reapareciendo en anime, videojuegos, musica y drama CD.",
        en: "Tsuru no Ongaeshi, the Crane's Gratitude, speaks of kindness, sacrifice and promises. These connections show how the legend keeps reappearing in anime, video games, music and drama CDs."
      },
      entries: [
        {
          id: "tsuru-chibi-maruko-chan",
          categoryId: "anime-manga",
          title: {
            es: "Chibi Maruko-chan - Tsuru no Ongaeshi",
            en: "Chibi Maruko-chan - Tsuru no Ongaeshi"
          },
          franchise: {
            es: "Maruko no Tsuru no Ongaeshi - Episodio #1204",
            en: "Maruko no Tsuru no Ongaeshi - Episode #1204"
          },
          year: "2019",
          classification: {
            es: "Adaptacion directa",
            en: "Direct Adaptation"
          },
          image: "./assets/images/pop-tsuru-chibi-maruko.png?v=tsuru-maruko-01",
          shortDescription: {
            es: "Chibi Maruko-chan adapta la leyenda de Tsuru no Ongaeshi en un formato familiar y directo.",
            en: "Chibi Maruko-chan adapts the Tsuru no Ongaeshi legend in a direct, family-friendly format."
          },
          fullDescription: {
            es: "El episodio #1204 de Chibi Maruko-chan, emitido el 7 de julio de 2019, retoma la leyenda clasica de Tsuru no Ongaeshi. Maruko observa una historia sobre un hombre que salva a una grulla; despues, una mujer misteriosa aparece, vive con el y teje una tela hermosa con sus propias plumas.",
            en: "Episode #1204 of Chibi Maruko-chan, broadcast on July 7, 2019, retells the classic Tsuru no Ongaeshi legend. Maruko watches a story about a man who saves a crane; later, a mysterious woman appears, lives with him and weaves a beautiful cloth with her own feathers."
          },
          context: {
            es: "La conexion es clara porque el propio episodio esta identificado como Maruko no Tsuru no Ongaeshi y adapta la estructura principal de la leyenda: la grulla salvada, la gratitud y la tela tejida con plumas.",
            en: "The connection is clear because the episode is identified as Maruko no Tsuru no Ongaeshi and adapts the core structure of the legend: the rescued crane, gratitude and the cloth woven from feathers."
          },
          sourceLabel: {
            es: "Fuente oficial - Chibi Maruko-chan",
            en: "Official Source - Chibi Maruko-chan"
          },
          sourceUrl: "https://www.chibimaru.tv/about/story/2019/"
        },
        {
          id: "tsuru-fate-grand-order-miss-crane",
          categoryId: "video-games",
          title: {
            es: "Fate/Grand Order - Miss Crane",
            en: "Fate/Grand Order - Miss Crane"
          },
          franchise: {
            es: "GraIL Live - Tsuru no Idol's Return of Favor",
            en: "GraIL Live - Tsuru no Idol's Return of Favor"
          },
          year: "2021",
          classification: {
            es: "Conexion fuerte",
            en: "Strong Connection"
          },
          image: "./assets/images/pop-tsuru-fgo-grail-live.png?v=tsuru-fgo-01",
          imageFit: "contain",
          shortDescription: {
            es: "Miss Crane es una Servant central del evento de Fate/Grand Order cuyo titulo usa Tsuru no Ongaeshi de forma explicita.",
            en: "Miss Crane is a central Servant in a Fate/Grand Order event whose title explicitly uses Tsuru no Ongaeshi."
          },
          fullDescription: {
            es: "En Fate/Grand Order, Miss Crane aparece como Caster de 5 estrellas dentro del evento Grail Live. El titulo oficial del evento, Tsuru no Idol's Return of Favor, referencia directamente Tsuru no Ongaeshi, la devolucion del favor de la grulla, y convierte la leyenda en una reinterpretacion moderna ligada a escenario, musica e identidad de personaje.",
            en: "In Fate/Grand Order, Miss Crane appears as a 5-star Caster Servant in the Grail Live event. The event's official title, Tsuru no Idol's Return of Favor, directly references Tsuru no Ongaeshi, the Crane's Return of Favor, turning the legend into a modern reinterpretation tied to stage performance, music and character identity."
          },
          context: {
            es: "La entrada se clasifica como conexion fuerte porque el evento usa el nombre de la leyenda y Miss Crane encarna la figura de la grulla que devuelve un favor.",
            en: "This entry is classified as a strong connection because the event uses the legend's name and Miss Crane embodies the crane figure who returns a favor."
          },
          sourceLabel: {
            es: "Fuente oficial - Fate/Grand Order Event",
            en: "Official Source - Fate/Grand Order Event"
          },
          sourceUrl: "https://news.fate-go.jp/2021/grailive/",
          secondarySourceLabel: {
            es: "Fuente oficial - Pickup Summon",
            en: "Official Source - Pickup Summon"
          },
          secondarySourceUrl: "https://news.fate-go.jp/2021/grailive_pu/"
        },
        {
          id: "tsuru-puyo-puyo-drama-cd",
          categoryId: "other-pop-culture",
          title: {
            es: "Puyo Puyo Drama CD Vol. 5 - Tsuru no Ongaeshi",
            en: "Puyo Puyo Drama CD Vol. 5 - Tsuru no Ongaeshi"
          },
          franchise: {
            es: "Puyo Puyo Folktale Series #5",
            en: "Puyo Puyo Folktale Series #5"
          },
          classification: {
            es: "Adaptacion oficial dramatizada",
            en: "Official Dramatized Adaptation"
          },
          image: "./assets/images/pop-tsuru-puyo-drama-cd.png?v=tsuru-puyo-01",
          shortDescription: {
            es: "SEGA adapta la leyenda clasica Tsuru no Ongaeshi dentro del universo Puyo Puyo en un drama CD oficial.",
            en: "SEGA adapts the classic Tsuru no Ongaeshi legend within the Puyo Puyo universe in an official drama CD."
          },
          fullDescription: {
            es: "Puyo Puyo Drama CD Vol. 5 pertenece a una serie de cuentos dramatizados de SEGA. Su episodio Tsuru no Ongaeshi reinterpreta la leyenda de la grulla agradecida con personajes de Puyo Puyo, manteniendo el nucleo del relato tradicional dentro de un formato ligero y familiar.",
            en: "Puyo Puyo Drama CD Vol. 5 belongs to a series of dramatized folktales from SEGA. Its Tsuru no Ongaeshi episode reinterprets the grateful crane legend with Puyo Puyo characters, preserving the core of the traditional tale in a light, family-friendly format."
          },
          context: {
            es: "La conexion es oficial porque SEGA presenta el producto como parte de la serie de cuentos Puyo Puyo y nombra directamente Tsuru no Ongaeshi.",
            en: "The connection is official because SEGA presents the product as part of the Puyo Puyo folktale series and directly names Tsuru no Ongaeshi."
          },
          sourceLabel: {
            es: "Fuente oficial - SEGA Puyo Puyo Portal",
            en: "Official Source - SEGA Puyo Puyo Portal"
          },
          sourceUrl: "https://puyo.sega.jp/portal/topics/goods/20140125_000849/"
        },
        {
          id: "tsuru-myuk-yukiuta",
          categoryId: "other-pop-culture",
          title: {
            es: "MYUK - 雪唄 - yukiuta",
            en: "MYUK - 雪唄 - yukiuta"
          },
          franchise: {
            es: "Musica · Sony Music",
            en: "Music · Sony Music"
          },
          classification: {
            es: "Conexion oficial confirmada",
            en: "Confirmed Official Connection"
          },
          image: "./assets/images/pop-tsuru-myuk-yukuta-art.png?v=tsuru-myuk-01",
          imageFit: "contain",
          shortDescription: {
            es: "Sony Music identifica oficialmente la cancion como inspirada en el cuento japones Tsuru no Ongaeshi.",
            en: "Sony Music officially identifies the song as inspired by the Japanese folktale Tsuru no Ongaeshi."
          },
          fullDescription: {
            es: "La ficha oficial de Sony Music para 雪唄 - yukiuta indica que la cancion esta inspirada en el cuento japones Tsuru no Ongaeshi. Es una conexion musical moderna confirmada directamente por una fuente oficial, no una asociacion visual o tematica general.",
            en: "Sony Music's official page for 雪唄 - yukiuta states that the song was inspired by the Japanese folktale Tsuru no Ongaeshi. It is a confirmed modern music connection from an official source, not a broad visual or thematic association."
          },
          context: {
            es: "La entrada queda en Otra pop culture porque conecta la leyenda con musica contemporanea y conserva la fuente oficial como criterio principal.",
            en: "This entry remains in Other Pop Culture because it connects the legend with contemporary music while keeping the official source as the main standard."
          },
          sourceLabel: {
            es: "Sony Music · discografia oficial",
            en: "Sony Music · Official Discography"
          },
          sourceUrl: "https://www.sonymusic.co.jp/artist/myuk/discography/AIXX02840B01A"
        },
        {
          id: "tsuru-ballet-return-of-favor",
          categoryId: "other-pop-culture",
          title: {
            es: "with Love: Ballet - Tsuru no Ongaeshi",
            en: "with Love: Ballet - Tsuru no Ongaeshi"
          },
          franchise: {
            es: "Escena / ballet / taiko",
            en: "Stage / Ballet / Taiko"
          },
          year: "2026",
          classification: {
            es: "Adaptacion directa oficial",
            en: "Official Direct Adaptation"
          },
          image: "./assets/images/pop-tsuru-ballet-love.png?v=tsuru-ballet-01",
          imageFit: "contain",
          shortDescription: {
            es: "PASONA y Sunrise Tokyo presentan una obra de ballet y taiko basada directamente en Tsuru no Ongaeshi.",
            en: "PASONA and Sunrise Tokyo present a ballet and taiko stage work based directly on Tsuru no Ongaeshi."
          },
          fullDescription: {
            es: "with Love: Ballet - Tsuru no Ongaeshi lleva la leyenda de la grulla agradecida al escenario mediante ballet y percusion japonesa. La informacion oficial la vincula directamente con el cuento japones Tsuru no Ongaeshi y su tema de gratitud.",
            en: "with Love: Ballet - Tsuru no Ongaeshi brings the grateful crane legend to the stage through ballet and Japanese percussion. Official information directly connects it with the Japanese folktale Tsuru no Ongaeshi and its theme of gratitude."
          },
          context: {
            es: "Se clasifica como adaptacion directa porque la obra usa el titulo de la leyenda y la presenta como base explicita del montaje escenico.",
            en: "It is classified as a direct adaptation because the work uses the legend title and presents it as the explicit basis for the stage production."
          },
          sourceLabel: {
            es: "Fuente oficial - Sunrise Tokyo",
            en: "Official Source - Sunrise Tokyo"
          },
          sourceUrl: "https://sunrisetokyo.com/detail/34923/",
          secondarySourceLabel: {
            es: "Fuente oficial - Awaji Ballet",
            en: "Official Source - Awaji Ballet"
          },
          secondarySourceUrl: "https://awajiballet.com/tsurunooongaeshi"
        }
      ]
    },
    {
      id: "akai-ito",
      number: "09",
      title: "Akai Ito",
      kanji: "\u8D64\u3044\u7CF8",
      image: "./assets/images/story-card-akai-ito-tattoo.png",
      icon: "./assets/images/pop-akai-ito-icon.png",
      intro: {
        es: "Akai Ito, el hilo rojo del destino, conecta almas destinadas a encontrarse sin importar el tiempo, el lugar o las circunstancias.",
        en: "Akai Ito, the red thread of fate, connects souls destined to meet, no matter time, place or circumstances."
      },
      entries: [
        {
          id: "akai-ito-kimi-no-na-wa",
          categoryId: "anime-manga",
          title: {
            es: "Your Name / Kimi no Na wa.",
            en: "Your Name / Kimi no Na wa."
          },
          franchise: {
            es: "Kumihimo y simbolismo del destino",
            en: "Kumihimo and destiny symbolism"
          },
          classification: {
            es: "Simbolismo explicito del hilo del destino",
            en: "Explicit Destiny-Thread Symbolism"
          },
          image: "./assets/images/pop-akai-ito-kimi-no-na-wa.png?v=akai-ito-pop-01",
          shortDescription: {
            es: "El cordon kumihimo conecta a Mitsuha y Taki como objeto clave de destino, memoria y encuentro.",
            en: "The kumihimo cord connects Mitsuha and Taki as a key object of destiny, memory and meeting."
          },
          fullDescription: {
            es: "En Your Name, el kumihimo funciona como un lazo fisico y simbolico entre Mitsuha y Taki. La historia utiliza ese cordon como objeto de memoria, destino y conexion entre dos personas separadas por tiempo, distancia y circunstancias imposibles.",
            en: "In Your Name, the kumihimo works as both a physical and symbolic bond between Mitsuha and Taki. The story uses that cord as an object of memory, destiny and connection between two people separated by time, distance and impossible circumstances."
          },
          context: {
            es: "La conexion con Akai Ito no depende solo de una cuerda roja literal: el cordon representa el vinculo invisible entre dos personas destinadas a encontrarse.",
            en: "The Akai Ito connection is not based only on a literal red cord: the cord represents the invisible bond between two people destined to meet."
          },
          sourceLabel: {
            es: "Web oficial - Kimi no Na wa.",
            en: "Official Website - Kimi no Na wa."
          },
          sourceUrl: "https://www.kiminona.com/",
          secondarySourceLabel: {
            es: "Producto oficial - TOHO",
            en: "Official Product - TOHO"
          },
          secondarySourceUrl: "https://tohoentertainmentonline.com/shop/g/gTASG00231/"
        },
        {
          id: "akai-ito-fuji-movie",
          categoryId: "cinema",
          title: "Akai Ito",
          franchise: {
            es: "Fuji TV - Pelicula de 2008",
            en: "Fuji TV - 2008 Film"
          },
          year: "2008",
          classification: {
            es: "Uso explicito del concepto",
            en: "Explicit Use of the Concept"
          },
          image: "./assets/images/pop-akai-ito-movie.png?v=akai-ito-pop-01",
          shortDescription: {
            es: "La pelicula gira alrededor de dos protagonistas unidos por el hilo rojo del destino.",
            en: "The film revolves around two protagonists joined by the red thread of destiny."
          },
          fullDescription: {
            es: "Akai Ito es una adaptacion de Fuji TV basada en la novela de Mei. La historia desarrolla directamente la idea de dos personas guiadas por el hilo rojo, con el destino y el reencuentro como eje romantico.",
            en: "Akai Ito is a Fuji TV adaptation based on Mei's novel. The story directly develops the idea of two people guided by the red thread, with destiny and reunion as its romantic core."
          },
          context: {
            es: "Es una referencia directa porque el propio titulo de la obra es Akai Ito y la trama utiliza el hilo rojo como idea central.",
            en: "This is a direct reference because the work itself is titled Akai Ito and uses the red thread as its central idea."
          },
          sourceLabel: {
            es: "Fuji TV - Web oficial de la pelicula",
            en: "Fuji TV - Movie Official Website"
          },
          sourceUrl: "https://www.fujitv.co.jp/movie/01movie/20080000_11_M00.html",
          secondarySourceLabel: {
            es: "Fuji TV - Drama oficial",
            en: "Fuji TV - Official Drama"
          },
          secondarySourceUrl: "https://www.fujitv.co.jp/b_hp/akai-ito/"
        },
        {
          id: "akai-ito-success-game",
          categoryId: "video-games",
          title: {
            es: "Akai Ito",
            en: "Akai Ito"
          },
          franchise: {
            es: "SUCCESS - Aventura japonesa",
            en: "SUCCESS - Japanese Adventure Game"
          },
          classification: {
            es: "Destino explicito / simbolismo enishi",
            en: "Explicit Fate / Enishi Thread Symbolism"
          },
          image: "./assets/images/pop-akai-ito-success-game.png?v=akai-ito-pop-01",
          shortDescription: {
            es: "El juego describe como los hilos del enishi se enredan y conectan personas, dioses y yokai.",
            en: "The game describes how threads of enishi become tangled and connect people, gods and yokai."
          },
          fullDescription: {
            es: "Akai Ito, de SUCCESS, es una aventura japonesa cuyo propio nombre remite al hilo rojo. Su descripcion oficial habla de los hilos del enishi que se entrelazan, y de una rueda del destino que empieza a girar entre personas, dioses y yokai.",
            en: "Akai Ito by SUCCESS is a Japanese adventure game whose title itself refers to the red thread. Its official description speaks of threads of enishi becoming intertwined, and of a wheel of fate beginning to turn between people, gods and yokai."
          },
          context: {
            es: "La conexion es fuerte porque la obra usa Akai Ito como titulo y desarrolla el destino como una red de hilos entrelazados.",
            en: "The connection is strong because the work uses Akai Ito as its title and develops destiny as a network of interwoven threads."
          },
          sourceLabel: {
            es: "Web oficial - SUCCESS",
            en: "Official Website - SUCCESS"
          },
          sourceUrl: "https://akaao.success-corp.co.jp/",
          secondarySourceLabel: {
            es: "Info del juego y mundo",
            en: "Game Info and World View"
          },
          secondarySourceUrl: "https://akaao.success-corp.co.jp/world/"
        },
        {
          id: "akai-ito-music-kobukuro-yui-aragaki",
          categoryId: "other-pop-culture",
          title: {
            es: "Akai Ito - Kobukuro / Yui Aragaki",
            en: "Akai Ito - Kobukuro / Yui Aragaki"
          },
          franchise: {
            es: "Musica y campaña En-musubi",
            en: "Music and En-musubi Campaign"
          },
          classification: {
            es: "Uso explicito y conexion en-musubi",
            en: "Explicit Use + En-musubi Connection"
          },
          image: "./assets/images/pop-akai-ito-music.png?v=akai-ito-pop-01",
          shortDescription: {
            es: "La cancion Akai Ito cuenta una historia de espera, destino y amor unido por el hilo rojo.",
            en: "The song Akai Ito tells a story of waiting, destiny and love joined by the red thread."
          },
          fullDescription: {
            es: "La cancion Akai Ito de Kobukuro y la version de Yui Aragaki construyen una historia romantica alrededor de dos personas separadas por el tiempo y unidas por un hilo rojo en el corazon. La campaña vinculada a Jishu-jinja refuerza la idea de en-musubi, el acto de atar vinculos y relaciones.",
            en: "Kobukuro's song Akai Ito and Yui Aragaki's version build a romantic story around two people separated by time and joined by a red thread in their hearts. The campaign connected to Jishu-jinja reinforces the idea of en-musubi, the tying of bonds and relationships."
          },
          context: {
            es: "Funciona como conexion musical porque el titulo, la letra y la campaña giran alrededor del hilo rojo, el destino y los vinculos afectivos.",
            en: "It works as a musical connection because the title, lyrics and campaign revolve around the red thread, destiny and emotional bonds."
          },
          sourceLabel: {
            es: "Kobukuro - Akai Ito",
            en: "Kobukuro - Akai Ito"
          },
          sourceUrl: "https://wmg.jp/kobukuro/my/",
          secondarySourceLabel: {
            es: "Yui Aragaki - Akai Ito",
            en: "Yui Aragaki - Akai Ito"
          },
          secondarySourceUrl: "https://wmg.jp/gakky/news/11056/"
        },
        {
          id: "akai-ito-no-onna",
          categoryId: "other-pop-culture",
          title: {
            es: "Akai Ito no Onna",
            en: "Akai Ito no Onna"
          },
          franchise: {
            es: "Fuji TV - Serie de 2012",
            en: "Fuji TV - 2012 TV Series"
          },
          year: "2012",
          classification: {
            es: "Reinterpretacion del concepto",
            en: "Reinterpretation of the Concept"
          },
          image: "./assets/images/pop-akai-ito-tv-series.png?v=akai-ito-pop-01",
          shortDescription: {
            es: "Una version mas oscura del hilo rojo como destino, obsesion y vinculo inevitable.",
            en: "A darker version of the red thread as fate, obsession and an inescapable bond."
          },
          fullDescription: {
            es: "Akai Ito no Onna explora el hilo rojo desde un tono mas intenso y oscuro. La serie utiliza el concepto como vinculo de destino entre mujeres, mostrando una cara obsesiva, dramatica y destructiva de la conexion.",
            en: "Akai Ito no Onna explores the red thread through a darker and more intense tone. The series uses the concept as a bond of fate between women, showing an obsessive, dramatic and destructive side of connection."
          },
          context: {
            es: "Esta entrada amplia Akai Ito hacia una lectura dramatica: el hilo no solo une de forma romantica, tambien puede atrapar, obsesionar y marcar vidas.",
            en: "This entry expands Akai Ito into a dramatic reading: the thread does not only unite romantically, it can also trap, obsess and mark lives."
          },
          sourceLabel: {
            es: "Fuji TV - Akai Ito no Onna",
            en: "Fuji TV - Akai Ito no Onna"
          },
          sourceUrl: "https://www.fujitv.co.jp/b_hp/akaiito/"
        }
      ]
    },
    {
      id: "shuten-doji",
      number: "10",
      title: "Shuten-dōji",
      kanji: "酒呑童子",
      image: "./assets/images/story-card-shuten-doji-tattoo.png",
      icon: "./assets/images/story-shuten-doji-cover.png",
      intro: {
        es: "Shuten-dōji, el rey demonio del monte Ōe, une oni, caos, sake y coraje. Sus conexiones pop culture se añadiran cuando esten verificadas.",
        en: "Shuten-dōji, the demon king of Mount Ōe, brings together oni, chaos, sake and courage. Its pop-culture connections will be added once verified."
      },
      entries: [
        {
          id: "shuten-british-museum",
          categoryId: "cultural-origin",
          title: {
            es: "British Museum - Shuten-dōji",
            en: "British Museum - Shuten-dōji"
          },
          franchise: {
            es: "Museo / origen cultural",
            en: "Museum / Cultural Origin"
          },
          classification: {
            es: "Fuente cultural primaria",
            en: "Primary Cultural Source"
          },
          image: "./assets/images/pop-shuten-nmaa-handscroll.png?v=shuten-pop-01",
          imageFit: "contain",
          shortDescription: {
            es: "El British Museum registra a Shuten-dōji como el legendario oni de Ōeyama derrotado por Minamoto no Yorimitsu.",
            en: "The British Museum records Shuten-dōji as the legendary oni of Ōeyama defeated by Minamoto no Yorimitsu."
          },
          fullDescription: {
            es: "La ficha del British Museum resume a Shuten-dōji como una figura legendaria vinculada a Ōeyama / Ōe, el rapto de mujeres de la capital y su derrota a manos de Minamoto no Yorimitsu, tambien conocido como Raikō.",
            en: "The British Museum entry summarizes Shuten-dōji as a legendary figure connected with Ōeyama / Ōe, the abduction of women from the capital and his defeat by Minamoto no Yorimitsu, also known as Raikō."
          },
          context: {
            es: "Sirve como segunda fuente cultural porque fija los elementos clave del mito: oni, monte Ōe, violencia legendaria, sake y derrota heroica.",
            en: "It serves as a second cultural source because it anchors the myth's key elements: oni, Mount Ōe, legendary violence, sake and heroic defeat."
          },
          sourceLabel: {
            es: "British Museum Collection",
            en: "British Museum Collection"
          },
          sourceUrl: "https://www.britishmuseum.org/collection/term/BIOG6052"
        },
        {
          id: "shuten-onimusha-way-of-the-sword",
          categoryId: "video-games",
          title: {
            es: "Onimusha: Way of the Sword - Shuten Doji",
            en: "Onimusha: Way of the Sword - Shuten Doji"
          },
          franchise: {
            es: "Capcom / PlayStation",
            en: "Capcom / PlayStation"
          },
          classification: {
            es: "Referencia explicita a la leyenda",
            en: "Explicit Legend Reference"
          },
          image: "./assets/images/pop-shuten-onimusha.png?v=shuten-pop-01",
          shortDescription: {
            es: "Material oficial de PlayStation / Capcom situa a Shuten Doji en el monte Ōe y lo presenta reclamando ser el oni legendario.",
            en: "Official PlayStation / Capcom material places Shuten Doji at Mount Ōe and presents him as claiming to be the legendary oni."
          },
          fullDescription: {
            es: "Onimusha: Way of the Sword recupera a Shuten Doji como una presencia de videojuego directamente ligada al monte Ōe. La conexion es fuerte porque usa el nombre folklorico, el territorio legendario y la identidad oni como parte del material oficial.",
            en: "Onimusha: Way of the Sword recovers Shuten Doji as a video-game presence directly tied to Mount Ōe. The connection is strong because it uses the folkloric name, legendary territory and oni identity as part of official material."
          },
          context: {
            es: "Pasa el filtro Akaihana porque no es un demonio generico: la fuente lo nombra como Shuten Doji y lo conecta con el lugar central de la leyenda.",
            en: "It passes the Akaihana filter because this is not a generic demon: the source names him as Shuten Doji and connects him with the legend's central location."
          },
          sourceLabel: {
            es: "PlayStation Blog",
            en: "PlayStation Blog"
          },
          sourceUrl: "https://blog.es.playstation.com/2026/06/02/onimusha-way-of-the-sword-llega-el-25-de-septiembre-a-ps5-y-su-demo-hoy/"
        },
        {
          id: "shuten-fate-grand-order",
          categoryId: "video-games",
          title: {
            es: "Fate/Grand Order - Shuten-Dōji",
            en: "Fate/Grand Order - Shuten-Dōji"
          },
          franchise: {
            es: "Assassin SSR limitada",
            en: "Limited SSR Assassin"
          },
          classification: {
            es: "Referencia explicita de personaje",
            en: "Explicit Character Reference"
          },
          image: "./assets/images/pop-shuten-fgo.png?v=shuten-pop-01",
          imageFit: "contain",
          shortDescription: {
            es: "Fate/Grand Order lista oficialmente a 酒呑童子 como servant Assassin, una reinterpretacion moderna directa de la figura folklorica.",
            en: "Fate/Grand Order officially lists 酒呑童子 as an Assassin servant, a direct modern reinterpretation of the folkloric figure."
          },
          fullDescription: {
            es: "La version de Fate/Grand Order convierte a Shuten-Dōji en una servant jugable, manteniendo el nombre japones y el imaginario de oni, sake y carisma peligroso que rodea a la leyenda.",
            en: "Fate/Grand Order turns Shuten-Dōji into a playable servant, keeping the Japanese name and the oni, sake and dangerous charisma imagery around the legend."
          },
          context: {
            es: "La conexion es explicita porque el personaje conserva el nombre de la figura folklorica y reinterpreta sus rasgos dentro de una franquicia contemporanea.",
            en: "The connection is explicit because the character keeps the folkloric figure's name and reinterprets its traits inside a contemporary franchise."
          },
          sourceLabel: {
            es: "Fate/Grand Order - Servants",
            en: "Fate/Grand Order - Servants"
          },
          sourceUrl: "https://www.fate-go.jp/trajectory/servant/"
        },
        {
          id: "shuten-onmyoji-card-game",
          categoryId: "video-games",
          title: {
            es: "Onmyoji: The Card Game - Shuten Doji",
            en: "Onmyoji: The Card Game - Shuten Doji"
          },
          franchise: {
            es: "NetEase / Onmyoji",
            en: "NetEase / Onmyoji"
          },
          classification: {
            es: "Referencia explicita de personaje",
            en: "Explicit Character Reference"
          },
          image: "./assets/images/pop-shuten-onmyoji.png?v=shuten-pop-01",
          shortDescription: {
            es: "NetEase presenta oficialmente a Shuten Doji como antiguo lider de demonios, con alcohol e iconografia de botella como parte de su identidad.",
            en: "NetEase officially presents Shuten Doji as a former leader of demons, with alcohol and bottle imagery as part of his identity."
          },
          fullDescription: {
            es: "Onmyoji: The Card Game utiliza a Shuten Doji como personaje nombrado dentro de su universo de shikigami y yokai. La relacion con el mito se apoya en el nombre, el liderazgo demonico y la estetica ligada al sake.",
            en: "Onmyoji: The Card Game uses Shuten Doji as a named character within its shikigami and yokai universe. The myth connection rests on the name, demonic leadership and sake-related aesthetic."
          },
          context: {
            es: "Esta entrada se clasifica como referencia explicita porque la obra no solo toma rasgos sueltos: conserva el nombre Shuten Doji dentro de un marco sobrenatural japones.",
            en: "This entry is classified as an explicit reference because the work does not only borrow loose traits: it keeps the Shuten Doji name inside a Japanese supernatural frame."
          },
          sourceLabel: {
            es: "Onmyoji: The Card Game - Noticia oficial",
            en: "Onmyoji: The Card Game - Official News"
          },
          sourceUrl: "https://www.onmyoji-card.com/news/official/20201019/33833_910805.html"
        },
        {
          id: "shuten-gegege-no-kitaro-ibukimaru",
          categoryId: "anime-manga",
          title: {
            es: "GeGeGe no Kitarō - Ibukimaru",
            en: "GeGeGe no Kitarō - Ibukimaru"
          },
          franchise: {
            es: "Anime / yokai",
            en: "Anime / Yokai"
          },
          classification: {
            es: "Conexion yokai en investigacion",
            en: "Yokai Connection Under Review"
          },
          image: "./assets/images/pop-shuten-gegege-kitaro.png?v=shuten-pop-01",
          shortDescription: {
            es: "Ibukimaru se presenta dentro del universo yokai de GeGeGe no Kitarō con una presencia oni que dialoga visualmente con Shuten-dōji.",
            en: "Ibukimaru appears inside GeGeGe no Kitarō's yokai universe with an oni presence that visually echoes Shuten-dōji."
          },
          fullDescription: {
            es: "Esta entrada queda marcada como conexion en investigacion: encaja en el territorio de yokai y oni de GeGeGe no Kitarō, pero se mantiene con cautela hasta cerrar una fuente oficial mas directa para Shuten-dōji.",
            en: "This entry is marked as under review: it fits GeGeGe no Kitarō's yokai and oni territory, but remains cautious until a more direct official Shuten-dōji source is confirmed."
          },
          context: {
            es: "La dejamos visible para investigacion de Pop Culture sin presentarla como adaptacion directa definitiva.",
            en: "It remains visible for Pop Culture research without presenting it as a final direct adaptation."
          }
        }
      ]
    },
    {
      id: "kuchisake-onna",
      number: "11",
      title: "Kuchisake-onna",
      kanji: "口裂け女",
      image: "./assets/images/story-card-kuchisake-onna-tattoo.png",
      icon: "./assets/images/story-kuchisake-onna-banner.png",
      intro: {
        es: "Kuchisake-onna, la mujer de la boca cortada, es una de las leyendas urbanas japonesas más reconocibles. Estas referencias muestran cómo su pregunta, su máscara y su figura siguen apareciendo en manga, cine y videojuegos.",
        en: "Kuchisake-onna, the slit-mouthed woman, is one of Japan's most recognisable urban legends. These references show how her question, mask and figure continue to appear across manga, cinema and video games."
      },
      entries: [
        {
          id: "kuchisake-kamui-episode-4",
          categoryId: "anime-manga",
          title: {
            es: "Ushiro no Shomen Kamui-san · Episodio 4",
            en: "Ushiro no Shomen Kamui-san · Episode 4"
          },
          franchise: {
            es: "Anime · Zero-G / ZG-R",
            en: "Anime · Zero-G / ZG-R"
          },
          classification: {
            es: "Referencia explícita oficial",
            en: "Official Explicit Reference"
          },
          image: "./assets/images/pop-kuchisake-kamui-episode-4.jpg?v=kuchisake-kamui-01",
          imageFit: "contain",
          shortDescription: {
            es: "El episodio 4 presenta directamente a Kuchisake-onna y construye su encuentro alrededor de la pregunta «¿Soy bonita?».",
            en: "Episode 4 directly features Kuchisake-onna and builds her encounter around the question, “Am I beautiful?”"
          },
          fullDescription: {
            es: "La web oficial identifica el episodio 4 como «Kuchisake-onna / Rokurokubi». En la historia, Kuchisake-onna se acerca a Shizuka con su pregunta característica y la persigue hasta una escuela vacía, convirtiendo la leyenda urbana en una parte central del episodio.",
            en: "The official website identifies Episode 4 as “Kuchisake-onna / Rokurokubi.” In the story, Kuchisake-onna approaches Shizuka with her characteristic question and pursues her into an empty school, making the urban legend central to the episode."
          },
          context: {
            es: "Pasa el filtro Akaihana porque la fuente oficial nombra a Kuchisake-onna, muestra al personaje y basa una de las dos historias del episodio directamente en su leyenda.",
            en: "It passes the Akaihana filter because the official source names Kuchisake-onna, shows the character and bases one of the episode's two stories directly on her legend."
          },
          sourceLabel: {
            es: "Sitio oficial del anime · Episodio 4",
            en: "Official Anime Site · Episode 4"
          },
          sourceUrl: "https://kamuisan.deregula.com/story/"
        },
        {
          id: "kuchisake-even-if-you-slit-my-mouth",
          categoryId: "anime-manga",
          title: {
            es: "Even If You Slit My Mouth",
            en: "Even If You Slit My Mouth"
          },
          franchise: {
            es: "Manga · Shueisha",
            en: "Manga · Shueisha"
          },
          classification: {
            es: "Reinterpretación directa",
            en: "Direct Reinterpretation"
          },
          image: "./assets/images/pop-kuchisake-even-if-you-slit-my-mouth.png?v=kuchisake-pop-02",
          imageFit: "contain",
          shortDescription: {
            es: "Shueisha describe a Miroku explícitamente como Kuchisake-onna dentro de una comedia romántica sobrenatural.",
            en: "Shueisha describes Miroku explicitly as Kuchisake-onna inside a supernatural romantic comedy."
          },
          fullDescription: {
            es: "Even If You Slit My Mouth construye su premisa alrededor de una reinterpretación moderna de Kuchisake-onna. La conexión es directa porque la obra identifica a Miroku como la leyenda urbana de la mujer de la boca cortada y convierte ese mito en parte central de la historia.",
            en: "Even If You Slit My Mouth builds its premise around a modern reinterpretation of Kuchisake-onna. The connection is direct because the work identifies Miroku as the slit-mouthed woman urban legend and makes that myth central to the story."
          },
          context: {
            es: "Pasa el filtro Akaihana porque no es una inspiración visual suelta: la fuente oficial conserva el nombre y la identidad de Kuchisake-onna.",
            en: "It passes the Akaihana filter because it is not a loose visual inspiration: the official source preserves Kuchisake-onna's name and identity."
          },
          sourceLabel: {
            es: "Shueisha · ficha oficial",
            en: "Shueisha · Official Page"
          },
          sourceUrl: "https://www.shueisha.co.jp/books/items/contents.html?isbn=978-4-08-883761-1"
        },
        {
          id: "kuchisake-mob-psycho-100",
          categoryId: "anime-manga",
          title: {
            es: "Mob Psycho 100 Vol. 7",
            en: "Mob Psycho 100 Vol. 7"
          },
          franchise: {
            es: "Manga · Shogakukan",
            en: "Manga · Shogakukan"
          },
          classification: {
            es: "Referencia explícita",
            en: "Explicit Reference"
          },
          image: "./assets/images/pop-kuchisake-mob-psycho-100.png?v=kuchisake-pop-02",
          imageFit: "contain",
          shortDescription: {
            es: "La sinopsis oficial menciona una investigación sobre leyendas urbanas, incluyendo Jinmenken y Kuchisake-onna.",
            en: "The official synopsis mentions an investigation into urban legends, including Jinmenken and Kuchisake-onna."
          },
          fullDescription: {
            es: "Mob Psycho 100 Vol. 7 incluye a Kuchisake-onna dentro de un episodio narrativo de leyendas urbanas. La referencia es explícita porque la fuente oficial de Shogakukan nombra la leyenda como parte del contenido del volumen.",
            en: "Mob Psycho 100 Vol. 7 includes Kuchisake-onna inside an urban-legend narrative episode. The reference is explicit because Shogakukan's official source names the legend as part of the volume's content."
          },
          context: {
            es: "Esta ficha conecta con el lado urbano de Kuchisake-onna: rumor moderno, aparición inquietante y miedo cotidiano.",
            en: "This entry connects with Kuchisake-onna's urban side: modern rumour, unsettling appearance and everyday fear."
          },
          sourceLabel: {
            es: "Shogakukan · ficha oficial",
            en: "Shogakukan · Official Page"
          },
          sourceUrl: "https://shogakukan-comic.jp/book?isbn=9784091251299"
        },
        {
          id: "kuchisake-jujutsu-kaisen",
          categoryId: "anime-manga",
          title: {
            es: "Jujutsu Kaisen · Kuchisake-onna",
            en: "Jujutsu Kaisen · Kuchisake-onna"
          },
          franchise: {
            es: "Weekly Shonen Jump · Shueisha",
            en: "Weekly Shonen Jump · Shueisha"
          },
          classification: {
            es: "Personaje nombrado explícitamente",
            en: "Explicit Named Character"
          },
          image: "./assets/images/pop-kuchisake-jujutsu-kaisen.png?v=kuchisake-pop-02",
          imageFit: "contain",
          shortDescription: {
            es: "Material oficial de Weekly Shonen Jump lista una entidad llamada Kuchisake-onna dentro del universo de Jujutsu Kaisen.",
            en: "Official Weekly Shonen Jump material lists an entity named Kuchisake-onna inside the Jujutsu Kaisen universe."
          },
          fullDescription: {
            es: "Jujutsu Kaisen incorpora una entidad nombrada como Kuchisake-onna dentro de su imaginario de maldiciones, miedos y figuras sobrenaturales. La conexión se mantiene como explícita porque el material oficial conserva el nombre de la leyenda urbana.",
            en: "Jujutsu Kaisen incorporates an entity named Kuchisake-onna inside its world of curses, fears and supernatural figures. The connection remains explicit because the official material preserves the urban legend's name."
          },
          context: {
            es: "Funciona especialmente bien dentro de Jujutsu Kaisen porque la leyenda nace del miedo colectivo y de una pregunta que se vuelve amenaza.",
            en: "It works especially well inside Jujutsu Kaisen because the legend is born from collective fear and from a question that becomes a threat."
          },
          sourceLabel: {
            es: "Shonen Jump · fuente oficial",
            en: "Shonen Jump · Official Source"
          },
          sourceUrl: "https://www.shonenjump.com/j/vote_jujutsu_kaisen/"
        },
        {
          id: "kuchisake-ghostwire-tokyo",
          categoryId: "video-games",
          title: {
            es: "Ghostwire: Tokyo",
            en: "Ghostwire: Tokyo"
          },
          franchise: {
            es: "PlayStation / Bethesda",
            en: "PlayStation / Bethesda"
          },
          classification: {
            es: "Basado oficialmente en la leyenda",
            en: "Officially Based on the Legend"
          },
          image: "./assets/images/pop-kuchisake-ghostwire-tokyo.png?v=kuchisake-pop-02",
          imageFit: "contain",
          shortDescription: {
            es: "PlayStation explica que la Visitante Kuchisake nace de la leyenda urbana real de Kuchisake-onna.",
            en: "PlayStation explains that the Visitor Kuchisake comes from the real Kuchisake-onna urban legend."
          },
          fullDescription: {
            es: "Ghostwire: Tokyo adapta a Kuchisake como una Visitante inspirada directamente en la leyenda urbana japonesa. La fuente oficial explica que el equipo parte del mito real y lo transforma en una presencia de videojuego dentro del Tokio sobrenatural del juego.",
            en: "Ghostwire: Tokyo adapts Kuchisake as a Visitor directly inspired by the Japanese urban legend. The official source explains that the team starts from the real myth and turns it into a video-game presence inside the game's supernatural Tokyo."
          },
          context: {
            es: "La conexión es fuerte porque la obra no solo usa una estética de terror japonés: nombra Kuchisake y explica su origen en la leyenda urbana.",
            en: "The connection is strong because the work does not only use a Japanese horror aesthetic: it names Kuchisake and explains her origin in the urban legend."
          },
          sourceLabel: {
            es: "PlayStation Blog Japón",
            en: "PlayStation Blog Japan"
          },
          sourceUrl: "https://blog.ja.playstation.com/2022/03/22/20220322-ghostwire/"
        },
        {
          id: "kuchisakeonna-returns",
          categoryId: "cinema",
          title: {
            es: "Kuchisakeonna Returns",
            en: "Kuchisakeonna Returns"
          },
          franchise: {
            es: "Cine japonés · 2012",
            en: "Japanese Cinema · 2012"
          },
          year: "2012",
          classification: {
            es: "Reinterpretación cinematográfica directa",
            en: "Direct Film Reinterpretation"
          },
          image: "./assets/images/pop-kuchisake-returns.png?v=kuchisake-pop-02",
          imageFit: "contain",
          shortDescription: {
            es: "JFDB describe la película como una nueva versión de la famosa leyenda urbana de los años setenta.",
            en: "JFDB describes the film as a new take on the famous 1970s slit-mouthed woman urban legend."
          },
          fullDescription: {
            es: "Kuchisakeonna Returns recupera la leyenda para una reinterpretación cinematográfica contemporánea. La conexión es directa porque la ficha oficial la vincula con la figura popular de Kuchisake-onna y su lugar dentro del terror urbano japonés.",
            en: "Kuchisakeonna Returns brings the legend into a contemporary film reinterpretation. The connection is direct because the official entry links it with the popular figure of Kuchisake-onna and her place inside Japanese urban horror."
          },
          context: {
            es: "Esta entrada conserva la faceta clásica de Kuchisake-onna como mito de cine de terror: aparición, persecución y amenaza urbana.",
            en: "This entry preserves Kuchisake-onna's classic horror-film side: appearance, pursuit and urban threat."
          },
          sourceLabel: {
            es: "JFDB · ficha oficial",
            en: "JFDB · Official Page"
          },
          sourceUrl: "https://jfdb.jp/title/3345"
        },
        {
          id: "kuchisake-sensei-2023",
          categoryId: "cinema",
          title: {
            es: "Sensei! Kuchisake-onna desu!",
            en: "Sensei! Kuchisake-onna desu!"
          },
          franchise: {
            es: "Uden Flame Works · 2023",
            en: "Uden Flame Works · 2023"
          },
          year: "2023",
          classification: {
            es: "Reinterpretación moderna directa",
            en: "Direct Modern Reinterpretation"
          },
          image: "./assets/images/pop-kuchisake-sensei.png?v=kuchisake-pop-02",
          imageFit: "contain",
          shortDescription: {
            es: "La producción identifica a la mujer enmascarada como la legendaria Kuchisake-onna y sitúa el mito en una lectura moderna.",
            en: "The production identifies the masked woman as the legendary Kuchisake-onna and places the myth in a modern reading."
          },
          fullDescription: {
            es: "Sensei! Kuchisake-onna desu! traslada la leyenda a un registro contemporáneo de acción y terror. La ficha conserva el nombre de la leyenda y la figura de la mujer enmascarada como eje del conflicto.",
            en: "Sensei! Kuchisake-onna desu! moves the legend into a contemporary action-horror register. The entry preserves the legend's name and the masked woman as the centre of the conflict."
          },
          context: {
            es: "La conexión funciona porque no es una referencia lateral: el título y la trama giran alrededor de Kuchisake-onna.",
            en: "The connection works because it is not a side reference: the title and plot revolve around Kuchisake-onna."
          },
          sourceLabel: {
            es: "Uden Flame Works · obra oficial",
            en: "Uden Flame Works · Official Work"
          },
          sourceUrl: "https://udenflameworks.com/works/%E5%85%88%E7%94%9F%EF%BC%81%E5%8F%A3%E8%A3%82%E3%81%91%E5%A5%B3%E3%81%A7%E3%81%99%EF%BC%81/"
        },
        {
          id: "kuchisake-kaidan-kanojo-2",
          categoryId: "other-pop-culture",
          title: {
            es: "Kaidan Kanojo 2 · Kuchisake-onna",
            en: "Kaidan Kanojo 2 · Kuchisake-onna"
          },
          franchise: {
            es: "JUMP j BOOKS · Shueisha",
            en: "JUMP j BOOKS · Shueisha"
          },
          classification: {
            es: "Aparición directa",
            en: "Direct Appearance"
          },
          image: "./assets/images/pop-kuchisake-kaidan-kanojo.png?v=kuchisake-pop-02",
          imageFit: "contain",
          shortDescription: {
            es: "JUMP j BOOKS presenta a Kuchisake-onna como una entidad sobrenatural vinculada al pasado del protagonista.",
            en: "JUMP j BOOKS presents Kuchisake-onna as a supernatural entity connected to the protagonist's past."
          },
          fullDescription: {
            es: "Kaidan Kanojo 2 utiliza a Kuchisake-onna dentro de su imaginario de apariciones, entidades sobrenaturales y pasado inquietante. La conexión es directa porque el título y la ficha oficial la identifican como parte de la obra.",
            en: "Kaidan Kanojo 2 uses Kuchisake-onna inside its world of apparitions, supernatural entities and unsettling past. The connection is direct because the title and official page identify her as part of the work."
          },
          context: {
            es: "La entrada amplía la presencia de Kuchisake-onna fuera del manga y el cine, llevándola al terreno de la novela ligera y el terror sobrenatural.",
            en: "This entry expands Kuchisake-onna's presence beyond manga and cinema, bringing her into light-novel territory and supernatural horror."
          },
          sourceLabel: {
            es: "JUMP j BOOKS · Shueisha",
            en: "JUMP j BOOKS · Shueisha"
          },
          sourceUrl: "https://j-books.shueisha.co.jp/books/kaidankanojo_02_kutisakeonna.html"
        }
      ]
    },
    {
      id: "nure-onna",
      number: "12",
      title: "Nure-onna",
      kanji: "濡女",
      image: "./assets/images/story-card-nure-onna-tattoo.png",
      icon: "./assets/images/story-nure-onna-banner.png",
      intro: {
        es: "Nure-onna, la mujer mojada, une belleza, agua, serpiente y peligro oculto. Estas conexiones verificadas muestran su presencia moderna en anime, manga, cine, live action, novelas ligeras y videojuegos.",
        en: "Nure-onna, the wet woman, brings together beauty, water, serpent imagery and hidden danger. These verified connections show her modern presence across anime, manga, cinema, live action, light novels and video games."
      },
      entries: [
        {
          id: "nure-kakuriyo-shizuna",
          categoryId: "anime-manga",
          title: {
            es: "Kakuriyo no Yadomeshi - Shizuna",
            en: "Kakuriyo no Yadomeshi - Shizuna"
          },
          franchise: {
            es: "Anime",
            en: "Anime"
          },
          classification: {
            es: "Personaje Nure-onna explícito",
            en: "Explicit Nure-onna Character"
          },
          image: "./assets/images/pop-nure-kakuriyo-shizuna.png?v=nure-pop-01",
          imageFit: "contain",
          shortDescription: {
            es: "La página oficial del anime identifica a Shizuna directamente como Nure-onna.",
            en: "The official anime character page identifies Shizuna directly as Nure-onna."
          },
          fullDescription: {
            es: "Kakuriyo no Yadomeshi incorpora a Shizuna como una figura Nure-onna dentro de su universo sobrenatural. La conexión es directa porque la fuente oficial la presenta con ese nombre y la sitúa como responsable de los baños termales de Tenjin-ya.",
            en: "Kakuriyo no Yadomeshi includes Shizuna as a Nure-onna figure inside its supernatural world. The connection is direct because the official source presents her under that name and places her as Tenjin-ya's bathkeeper."
          },
          context: {
            es: "La entrada conecta con el agua, los baños y la presencia femenina sobrenatural de la leyenda original.",
            en: "This entry connects with water, bathing spaces and the supernatural feminine presence of the original legend."
          },
          sourceLabel: {
            es: "Kakuriyo no Yadomeshi - ficha oficial",
            en: "Kakuriyo no Yadomeshi - Official Page"
          },
          sourceUrl: "https://kakuriyo-anime.com/character/shizuna/"
        },
        {
          id: "nure-fairy-tail-100-years-quest",
          categoryId: "anime-manga",
          title: {
            es: "Fairy Tail: 100 Years Quest - Chapter 74",
            en: "Fairy Tail: 100 Years Quest - Chapter 74"
          },
          franchise: {
            es: "Manga · Comic DAYS / Kodansha",
            en: "Manga · Comic DAYS / Kodansha"
          },
          classification: {
            es: "Referencia explícita",
            en: "Explicit Reference"
          },
          image: "./assets/images/pop-nure-fairy-tail-100yq.png?v=nure-pop-01",
          imageFit: "contain",
          shortDescription: {
            es: "Comic DAYS titula oficialmente el capítulo 74 como Yokai Nure-onna.",
            en: "Comic DAYS officially titles chapter 74 as Yokai Nure-onna."
          },
          fullDescription: {
            es: "Fairy Tail: 100 Years Quest utiliza la referencia a Nure-onna de forma explícita en el título del capítulo. La conexión queda marcada como directa porque la propia ficha oficial conserva el nombre del yokai.",
            en: "Fairy Tail: 100 Years Quest uses the Nure-onna reference explicitly in the chapter title. The connection is marked as direct because the official listing keeps the yokai's name."
          },
          context: {
            es: "Funciona como eco moderno del mito dentro de un universo de fantasía y criaturas sobrenaturales.",
            en: "It works as a modern echo of the myth inside a fantasy world of supernatural beings."
          },
          sourceLabel: {
            es: "Comic DAYS · Kodansha",
            en: "Comic DAYS · Kodansha"
          },
          sourceUrl: "https://comic-days.com/episode/14079602755426661224"
        },
        {
          id: "nure-bake-sekien-chapter-18",
          categoryId: "anime-manga",
          title: {
            es: "Bake-e!: Sekien Yokai Banashi - Chapter 18",
            en: "Bake-e!: Sekien Yokai Banashi - Chapter 18"
          },
          franchise: {
            es: "Manga · Comic DAYS / Kodansha",
            en: "Manga · Comic DAYS / Kodansha"
          },
          classification: {
            es: "Referencia explícita",
            en: "Explicit Reference"
          },
          image: "./assets/images/pop-nure-bake-sekien.png?v=nure-pop-01",
          imageFit: "contain",
          shortDescription: {
            es: "Comic DAYS lista oficialmente el capítulo 18 como Nure-onna.",
            en: "Comic DAYS officially lists chapter 18 as Nure-onna."
          },
          fullDescription: {
            es: "Bake-e!: Sekien Yokai Banashi conecta con Nure-onna desde un manga centrado en Toriyama Sekien y la tradición visual de los yokai. La referencia es explícita porque el capítulo aparece identificado oficialmente con ese nombre.",
            en: "Bake-e!: Sekien Yokai Banashi connects with Nure-onna through a manga centred on Toriyama Sekien and yokai illustration. The reference is explicit because the chapter is officially identified by that name."
          },
          context: {
            es: "Esta ficha mantiene el vínculo entre la cultura popular moderna y la genealogía clásica de los yokai ilustrados.",
            en: "This entry keeps the link between modern pop culture and the classic lineage of illustrated yokai."
          },
          sourceLabel: {
            es: "Comic DAYS · Kodansha",
            en: "Comic DAYS · Kodansha"
          },
          sourceUrl: "https://comic-days.com/episode/4856001361087506888"
        },
        {
          id: "nure-nioh-2",
          categoryId: "video-games",
          title: {
            es: "Nioh 2 - Nure-onna",
            en: "Nioh 2 - Nure-onna"
          },
          franchise: {
            es: "Videojuego · Koei Tecmo",
            en: "Video Game · Koei Tecmo"
          },
          classification: {
            es: "Enemigo Nure-onna oficial",
            en: "Official Nure-onna Enemy"
          },
          image: "./assets/images/pop-nure-nioh-2.png?v=nure-pop-01",
          imageFit: "contain",
          shortDescription: {
            es: "Koei Tecmo dedica una página oficial al yokai Nure-onna dentro de Nioh 2.",
            en: "Koei Tecmo has an official yokai page devoted to Nure-onna in Nioh 2."
          },
          fullDescription: {
            es: "Nioh 2 adapta a Nure-onna como un enemigo yokai con rostro femenino y cuerpo serpentino. La fuente oficial la describe vinculada al agua, la lluvia y los lugares húmedos, conservando los rasgos esenciales de la leyenda.",
            en: "Nioh 2 adapts Nure-onna as a yokai enemy with a woman's face and serpentine body. The official source links her to water, rain and wet places, preserving the legend's essential traits."
          },
          context: {
            es: "La conexión es fuerte porque traduce el miedo acuático de Nure-onna a una presencia jugable y visualmente reconocible.",
            en: "The connection is strong because it turns Nure-onna's water-bound fear into a playable and visually recognisable presence."
          },
          sourceLabel: {
            es: "Koei Tecmo · página oficial",
            en: "Koei Tecmo · Official Page"
          },
          sourceUrl: "https://www.gamecity.ne.jp/nioh2/youkai/youkai-18.html"
        },
        {
          id: "nure-gegege-millennium-curse-song",
          categoryId: "cinema",
          title: {
            es: "GeGeGe no Kitaro: Millennium Curse Song",
            en: "GeGeGe no Kitaro: Millennium Curse Song"
          },
          franchise: {
            es: "Cine · Fuji TV",
            en: "Cinema · Fuji TV"
          },
          year: "2008",
          classification: {
            es: "Personaje Nure-onna explícito",
            en: "Explicit Nure-onna Character"
          },
          image: "./assets/images/pop-nure-gegege-millennium.png?v=nure-pop-01",
          imageFit: "contain",
          shortDescription: {
            es: "La ficha oficial de Fuji TV lista a Nure-onna e indica que está interpretada por Shinobu Terajima.",
            en: "Fuji TV's official film page lists Nure-onna and notes that she is played by Shinobu Terajima."
          },
          fullDescription: {
            es: "GeGeGe no Kitaro: Millennium Curse Song incorpora a Nure-onna dentro de su galería de yokai cinematográficos. La fuente oficial la nombra como personaje y la describe como una figura que se enamoró de un humano.",
            en: "GeGeGe no Kitaro: Millennium Curse Song includes Nure-onna within its cinematic yokai cast. The official source names her as a character and describes her as a figure who fell in love with a human."
          },
          context: {
            es: "La entrada conserva la lectura trágica de Nure-onna: belleza, deseo, agua y frontera entre humanidad y monstruo.",
            en: "This entry preserves Nure-onna's tragic reading: beauty, desire, water and the boundary between human and monster."
          },
          sourceLabel: {
            es: "Fuji TV · ficha oficial",
            en: "Fuji TV · Official Page"
          },
          sourceUrl: "https://www.fujitv.co.jp/movie/01movie/20080000_08_M00.html"
        },
        {
          id: "nure-gegege-yokai-kiden",
          categoryId: "cinema",
          title: {
            es: "GeGeGe no Kitaro: Yokai Kiden - Magic Flute Eloim Essaim",
            en: "GeGeGe no Kitaro: Yokai Kiden - Magic Flute Eloim Essaim"
          },
          franchise: {
            es: "Live action · Toei Video",
            en: "Live Action · Toei Video"
          },
          classification: {
            es: "Personaje Nure-onna explícito",
            en: "Explicit Nure-onna Character"
          },
          image: "./assets/images/pop-nure-gegege-yokai-kiden.png?v=nure-pop-01",
          imageFit: "contain",
          shortDescription: {
            es: "Toei Video destaca oficialmente a Nure-onna dentro de esta producción live action de Kitaro.",
            en: "Toei Video officially highlights Nure-onna inside this live-action Kitaro production."
          },
          fullDescription: {
            es: "GeGeGe no Kitaro: Yokai Kiden - Magic Flute Eloim Essaim lleva a Nure-onna al live action japonés. La conexión es directa porque la página oficial la identifica como parte de la obra y señala su interpretación por Kimiko Yo.",
            en: "GeGeGe no Kitaro: Yokai Kiden - Magic Flute Eloim Essaim brings Nure-onna into Japanese live action. The connection is direct because the official page identifies her as part of the work and notes Kimiko Yo's performance."
          },
          context: {
            es: "La ficha amplía su presencia audiovisual más allá del anime y el manga, dentro de una adaptación con raíces yokai.",
            en: "This entry expands her audiovisual presence beyond anime and manga, inside an adaptation rooted in yokai culture."
          },
          sourceLabel: {
            es: "Toei Video · ficha oficial",
            en: "Toei Video · Official Page"
          },
          sourceUrl: "https://shop.toei-video.co.jp/products/dutd02730"
        },
        {
          id: "nure-c-cube-v",
          categoryId: "other-pop-culture",
          title: {
            es: "C3 / C-Cube V",
            en: "C3 / C-Cube V"
          },
          franchise: {
            es: "Novela ligera · Dengeki Bunko / KADOKAWA",
            en: "Light Novel · Dengeki Bunko / KADOKAWA"
          },
          classification: {
            es: "Referencia explícita",
            en: "Explicit Reference"
          },
          image: "./assets/images/pop-nure-c-cube-v.png?v=nure-pop-01",
          imageFit: "contain",
          shortDescription: {
            es: "La página oficial de Dengeki Bunko menciona un rumor escolar sobre un yokai misterioso llamado Nure-onna.",
            en: "Dengeki Bunko's official page mentions a school rumour about a mysterious yokai called Nure-onna."
          },
          fullDescription: {
            es: "C3 / C-Cube V utiliza a Nure-onna como referencia sobrenatural dentro de una novela ligera. La fuente oficial conserva el nombre del yokai al describir un rumor que circula por la escuela.",
            en: "C3 / C-Cube V uses Nure-onna as a supernatural reference inside a light novel. The official source keeps the yokai's name while describing a rumour spreading through the school."
          },
          context: {
            es: "La conexión funciona como ejemplo de cómo Nure-onna sigue viva en relatos escolares, rumores modernos y cultura pop escrita.",
            en: "The connection works as an example of how Nure-onna remains alive in school stories, modern rumours and written pop culture."
          },
          sourceLabel: {
            es: "Dengeki Bunko · KADOKAWA",
            en: "Dengeki Bunko · KADOKAWA"
          },
          sourceUrl: "https://dengekibunko.jp/product/c3/200811000243.html"
        }
      ]
    },
    {
      id: "tengu",
      number: "13",
      title: "Tengu",
      kanji: "\u5929\u72D7",
      image: "./assets/images/story-tengu-card.png",
      icon: "./assets/images/story-tengu-card.png",
      intro: {
        es: "Tengu, guardian y espiritu de la montana, aparece en la cultura pop moderna como yokai, mentor severo, criatura alada y simbolo de disciplina.",
        en: "Tengu, guardian and mountain spirit, appears in modern pop culture as yokai, stern mentor, winged creature and symbol of discipline."
      },
      entries: [
        {
          id: "tengu-witch-watch-kanshi",
          categoryId: "anime-manga",
          title: { es: "WITCH WATCH - Kanshi Kazamatsuri", en: "WITCH WATCH - Kanshi Kazamatsuri" },
          franchise: { es: "Anime", en: "Anime" },
          classification: { es: "Referencia oficial explicita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-tengu-witch-watch.png",
          shortDescription: {
            es: "La web oficial identifica a Kanshi Kazamatsuri directamente como un Tengu.",
            en: "The official anime site identifies Kanshi Kazamatsuri directly as a Tengu."
          },
          fullDescription: {
            es: "WITCH WATCH incluye a Kanshi Kazamatsuri como una referencia moderna clara al Tengu. La conexion no depende de una lectura visual: la fuente oficial lo identifica directamente como Tengu.",
            en: "WITCH WATCH includes Kanshi Kazamatsuri as a clear modern Tengu reference. The connection does not depend on visual interpretation: the official source directly identifies him as Tengu."
          },
          context: {
            es: "Pasa el filtro Akaihana porque es una referencia nominal explicita, no una asociacion estetica o una suposicion.",
            en: "It passes the Akaihana filter because it is an explicit named reference, not an aesthetic association or a guess."
          },
          sourceLabel: { es: "WITCH WATCH - personajes", en: "WITCH WATCH - Characters" },
          sourceUrl: "https://witchwatch-anime.com/character/"
        },
        {
          id: "tengu-digimon-tengumon",
          categoryId: "anime-manga",
          title: { es: "Digimon - Tengumon", en: "Digimon - Tengumon" },
          franchise: { es: "Anime / videojuegos", en: "Anime / Games" },
          classification: { es: "Referencia oficial explicita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-tengu-digimon-tengumon.png",
          shortDescription: {
            es: "La Digimon Encyclopedia describe a Tengumon como un gran Digimon Tengu que vive en las montanas.",
            en: "The Digimon Encyclopedia describes Tengumon as a great Tengu Digimon living in the mountains."
          },
          fullDescription: {
            es: "Tengumon convierte la figura del Tengu en criatura digital dentro de Digimon. La identidad es explicita en la propia franquicia, que lo define como un gran Tengu Digimon vinculado a las montanas.",
            en: "Tengumon turns the Tengu figure into a digital creature within Digimon. The identity is explicit inside the franchise itself, which defines it as a great Tengu Digimon tied to the mountains."
          },
          context: {
            es: "La conexion es fuerte porque mantiene el nombre, el tipo de criatura y el territorio montanoso asociado al folclore.",
            en: "The connection is strong because it keeps the name, creature type and mountainous territory associated with the folklore."
          },
          sourceLabel: { es: "Digimon Encyclopedia", en: "Digimon Encyclopedia" },
          sourceUrl: "https://digimon.net/reference_en/detail.php?directory_name=tengumon"
        },
        {
          id: "tengu-crayon-shinchan-2026",
          categoryId: "cinema",
          title: { es: "Crayon Shin-chan 2026 - Tengu Shin-chan", en: "Crayon Shin-chan 2026 - Tengu Shin-chan" },
          franchise: { es: "Pelicula / anime", en: "Movie / Anime" },
          year: "2026",
          classification: { es: "Referencia oficial explicita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-tengu-shinchan-2026.png",
          shortDescription: {
            es: "Material oficial presenta a Shin-chan en forma Tengu dentro del mundo yokai.",
            en: "Official materials present Shin-chan in a Tengu form inside the yokai world."
          },
          fullDescription: {
            es: "Crayon Shin-chan 2026 usa el Tengu como transformacion juguetona y reconocible dentro de un contexto yokai. La referencia aparece en materiales oficiales de la pelicula.",
            en: "Crayon Shin-chan 2026 uses Tengu as a playful and recognisable transformation inside a yokai context. The reference appears in official movie materials."
          },
          context: {
            es: "La entrada se marca como reinterpretacion directa y ludica del Tengu moderno.",
            en: "This entry is marked as a direct and playful reinterpretation of modern Tengu."
          },
          sourceLabel: { es: "Crayon Shin-chan Movie 2026", en: "Crayon Shin-chan Movie 2026" },
          sourceUrl: "https://www.shinchan-movie.com/2026/20260220/news/"
        },
        {
          id: "tengu-no-daidokoro",
          categoryId: "anime-manga",
          title: { es: "Tengu no Daidokoro", en: "Tengu no Daidokoro" },
          franchise: { es: "Manga / live action", en: "Manga / Live Action" },
          classification: { es: "Reinterpretacion explicita", en: "Explicit Reinterpretation" },
          image: "./assets/images/pop-tengu-daidokoro.png",
          shortDescription: {
            es: "Kodansha presenta una historia contemporanea sobre una familia descendiente de Tengu.",
            en: "Kodansha presents a contemporary story about a family descended from Tengu."
          },
          fullDescription: {
            es: "Tengu no Daidokoro lleva el folclore Tengu a una lectura domestica y contemporanea. La obra no usa solo iconografia: su concepto gira alrededor de una familia vinculada directamente a los Tengu.",
            en: "Tengu no Daidokoro brings Tengu folklore into a domestic and contemporary reading. The work does not only use iconography: its concept revolves around a family directly connected to Tengu."
          },
          context: {
            es: "Es una reinterpretacion moderna de la herencia Tengu dentro de manga y adaptacion live action.",
            en: "It is a modern reinterpretation of Tengu lineage within manga and live action."
          },
          sourceLabel: { es: "Kodansha Afternoon", en: "Kodansha Afternoon" },
          sourceUrl: "https://afternoon.kodansha.co.jp/c/tengunodaidokoro/"
        },
        {
          id: "tengu-tosen",
          categoryId: "anime-manga",
          title: { es: "Tengu Tosen / \u5929\u72D7\u5200\u6226", en: "Tengu Tosen / \u5929\u72D7\u5200\u6226" },
          franchise: { es: "Proyecto anime", en: "Anime Project" },
          classification: { es: "Reinterpretacion explicita", en: "Explicit Reinterpretation" },
          image: "./assets/images/pop-tengu-tosen-episode-update.png?v=tengu-tosen-update-01",
          imageFit: "contain",
          shortDescription: {
            es: "El proyecto oficial usa Tengu, Daitengu y Kurama Tengu directamente en su concepto y ya cuenta con episodio 1 publicado.",
            en: "The official project uses Tengu, Daitengu and Kurama Tengu directly in its concept and now has Episode 1 released."
          },
          fullDescription: {
            es: "Tengu Tosen, proyecto de Bandai Namco y Plott, toma el Tengu como nucleo conceptual. La publicacion oficial del episodio 1 refuerza la ficha porque la obra usa Tengu, Daitengu y Kurama Tengu como parte directa de su identidad narrativa.",
            en: "Tengu Tosen, a Bandai Namco and Plott project, uses Tengu as its conceptual core. The official Episode 1 release strengthens the entry because the work uses Tengu, Daitengu and Kurama Tengu as a direct part of its narrative identity."
          },
          context: {
            es: "Se clasifica como reinterpretacion explicita y actualizacion de fuente por su uso directo del vocabulario Tengu y por el lanzamiento oficial del primer episodio.",
            en: "It is classified as an explicit reinterpretation and source update because it directly uses Tengu vocabulary and now has an official first-episode release."
          },
          sourceLabel: { es: "PR Times - episodio 1", en: "PR Times - Episode 1" },
          sourceUrl: "https://prtimes.jp/main/html/rd/p/000000221.000047837.html",
          secondarySourceLabel: { es: "YouTube oficial - Tengu Tosen", en: "Official YouTube - Tengu Tosen" },
          secondarySourceUrl: "https://www.youtube.com/@tengutosen"
        },
        {
          id: "tengu-demon-slayer-urokodaki",
          categoryId: "anime-manga",
          title: { es: "Demon Slayer - Sakonji Urokodaki", en: "Demon Slayer - Sakonji Urokodaki" },
          franchise: { es: "Anime", en: "Anime" },
          classification: { es: "Iconografia Tengu", en: "Tengu Iconography" },
          image: "./assets/images/pop-tengu-urokodaki.png",
          shortDescription: {
            es: "Urokodaki esta definido oficialmente por su mascara Tengu dentro de una franquicia anime mayor.",
            en: "Urokodaki is officially defined through his Tengu mask inside a major anime franchise."
          },
          fullDescription: {
            es: "Sakonji Urokodaki incorpora el rostro Tengu como iconografia central de personaje. En esta ficha se incluye como presencia visual oficial del Tengu, no como adaptacion completa de la leyenda.",
            en: "Sakonji Urokodaki incorporates the Tengu face as central character iconography. This entry includes him as official visual Tengu presence, not as a full adaptation of the legend."
          },
          context: {
            es: "La formulacion se mantiene prudente: Tengu como mascara e iconografia explicita dentro de Demon Slayer.",
            en: "The wording remains cautious: Tengu as explicit mask and iconography inside Demon Slayer."
          },
          sourceLabel: { es: "Kimetsu no Yaiba - personajes", en: "Kimetsu no Yaiba - Characters" },
          sourceUrl: "https://kimetsu.com/anime/risshihen/character/?chara=urokodaki"
        },
        {
          id: "tengu-eccentric-family",
          categoryId: "anime-manga",
          title: { es: "The Eccentric Family / Uchoten Kazoku", en: "The Eccentric Family / Uchoten Kazoku" },
          franchise: { es: "Anime", en: "Anime" },
          classification: { es: "Referencia oficial explicita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-tengu-eccentric-family.png",
          shortDescription: {
            es: "El mundo oficial del anime incluye a los Tengu como uno de sus grupos sobrenaturales centrales en Kioto.",
            en: "The official anime world includes Tengu as one of its core supernatural groups in Kyoto."
          },
          fullDescription: {
            es: "The Eccentric Family integra Tengu en su mapa sobrenatural de Kioto junto a otros seres del folclore. La conexion es clara porque la obra los trata como grupo dentro de su mundo narrativo.",
            en: "The Eccentric Family integrates Tengu into its supernatural map of Kyoto alongside other folkloric beings. The connection is clear because the work treats them as a group inside its narrative world."
          },
          context: {
            es: "Funciona como uso moderno fuerte de mitologia Tengu dentro de una serie anime contemporanea.",
            en: "It works as a strong modern use of Tengu mythology inside a contemporary anime series."
          },
          sourceLabel: { es: "Uchoten Kazoku - personajes", en: "Uchoten Kazoku - Characters" },
          sourceUrl: "https://uchoten-anime.com/season1/character/"
        }
      ]
    },
    {
      id: "kaguya-hime",
      number: "14",
      title: "Kaguya-hime",
      kanji: "\u304B\u3050\u3084\u59EB",
      image: "./assets/images/story-kaguya-hime-card.png",
      icon: "./assets/images/story-kaguya-hime-card.png",
      intro: {
        es: "Kaguya-hime, la princesa de la luna, conecta belleza imposible, bambu, origen celestial y despedida. Estas referencias muestran su presencia en cine, anime, videojuegos y manga.",
        en: "Kaguya-hime, the moon princess, connects impossible beauty, bamboo, celestial origin and farewell. These references show her presence across cinema, anime, games and manga."
      },
      entries: [
        {
          id: "kaguya-cosmic-princess",
          categoryId: "cinema",
          title: { es: "Cosmic Princess Kaguya!", en: "Cosmic Princess Kaguya!" },
          franchise: { es: "Netflix Anime Film", en: "Netflix Anime Film" },
          year: "2026",
          classification: { es: "Reinterpretacion oficial", en: "Official Reinterpretation" },
          image: "./assets/images/pop-kaguya-cosmic-princess.png?v=kaguya-cosmic-01",
          imageFit: "contain",
          shortDescription: {
            es: "La web oficial presenta la historia mas antigua de Japon renacida a traves de una puesta en escena moderna.",
            en: "The official site frames Japan's oldest tale as reborn through a modern stage story."
          },
          fullDescription: {
            es: "Cosmic Princess Kaguya! reinterpreta Kaguya-hime desde una lectura contemporanea de anime y espectaculo escenico. El material oficial la conecta con Taketori Monogatari y con la princesa Kaguya como base del relato.",
            en: "Cosmic Princess Kaguya! reinterprets Kaguya-hime through a contemporary anime and stage-performance lens. Official material connects it with Taketori Monogatari and Princess Kaguya as the story foundation."
          },
          context: {
            es: "La entrada se marca como reinterpretacion oficial porque los materiales enlazan directamente la pelicula con Taketori Monogatari y Kaguya-hime.",
            en: "This entry is marked as an official reinterpretation because the materials directly link the film with Taketori Monogatari and Kaguya-hime."
          },
          sourceLabel: { es: "Web oficial - Cosmic Princess Kaguya!", en: "Official Site - Cosmic Princess Kaguya!" },
          sourceUrl: "https://cho-kaguyahime.com/",
          secondarySourceLabel: { es: "Netflix - anuncio oficial", en: "Netflix - Official Announcement" },
          secondarySourceUrl: "https://about.netflix.com/ja/news/cosmic-princess-kaguya-main-trailer"
        },
        {
          id: "kaguya-ghibli-princess-kaguya",
          categoryId: "cinema",
          title: { es: "The Tale of the Princess Kaguya", en: "The Tale of the Princess Kaguya" },
          franchise: { es: "Pelicula / anime", en: "Movie / Anime" },
          classification: { es: "Adaptacion oficial confirmada", en: "Confirmed Official Adaptation" },
          image: "./assets/images/pop-kaguya-ghibli.png",
          shortDescription: {
            es: "Studio Ghibli identifica la pelicula como basada en Taketori Monogatari, El cuento del cortador de bambu.",
            en: "Studio Ghibli identifies the film as based on Taketori Monogatari, The Tale of the Bamboo Cutter."
          },
          fullDescription: {
            es: "The Tale of the Princess Kaguya es una adaptacion moderna directa de Kaguya-hime. Studio Ghibli la presenta oficialmente como obra basada en Taketori Monogatari, el relato clasico de la princesa encontrada dentro del bambu.",
            en: "The Tale of the Princess Kaguya is a direct modern adaptation of Kaguya-hime. Studio Ghibli officially presents it as a work based on Taketori Monogatari, the classic tale of the princess found inside bamboo."
          },
          context: {
            es: "Es la referencia cinematografica principal porque adapta de forma frontal la estructura, origen y despedida del mito.",
            en: "It is the main cinematic reference because it directly adapts the structure, origin and farewell of the myth."
          },
          sourceLabel: { es: "Studio Ghibli - ficha oficial", en: "Studio Ghibli - Official Page" },
          sourceUrl: "https://www.ghibli.jp/works/kaguyahime/"
        },
        {
          id: "kaguya-digimon-kaguyamon",
          categoryId: "anime-manga",
          title: { es: "Digimon - Kaguyamon", en: "Digimon - Kaguyamon" },
          franchise: { es: "Anime / videojuegos", en: "Anime / Games" },
          classification: { es: "Referencia oficial confirmada", en: "Confirmed Official Reference" },
          image: "./assets/images/pop-kaguya-digimon-kaguyamon.png",
          shortDescription: {
            es: "La Digimon Encyclopedia vincula a Kaguyamon con una antigua princesa japonesa y elementos de luna y bambu.",
            en: "The Digimon Encyclopedia connects Kaguyamon with an ancient Japanese princess and moon and bamboo elements."
          },
          fullDescription: {
            es: "Kaguyamon reinterpreta a Kaguya-hime dentro del universo Digimon. La fuente oficial la relaciona con una antigua leyenda de princesa japonesa y refuerza el vinculo con bambu, luna y ataques nombrados.",
            en: "Kaguyamon reinterprets Kaguya-hime inside the Digimon universe. The official source connects her with an ancient Japanese princess legend and reinforces the link through bamboo, moon and named attacks."
          },
          context: {
            es: "La conexion es explicita porque combina nombre, simbolos lunares y bambu, todos centrales en Kaguya-hime.",
            en: "The connection is explicit because it combines name, lunar symbols and bamboo, all central to Kaguya-hime."
          },
          sourceLabel: { es: "Digimon Encyclopedia", en: "Digimon Encyclopedia" },
          sourceUrl: "https://digimon.net/reference/detail.php?directory_name=kaguyamon"
        },
        {
          id: "kaguya-okami",
          categoryId: "video-games",
          title: { es: "Okami - Kaguya", en: "Okami - Kaguya" },
          franchise: { es: "Videojuego", en: "Video Game" },
          classification: { es: "Referencia oficial confirmada", en: "Confirmed Official Reference" },
          image: "./assets/images/pop-kaguya-okami.png",
          shortDescription: {
            es: "El manual oficial presenta a Kaguya, la Moonlight Beauty, junto al cortador de bambu.",
            en: "The official manual presents Kaguya, the Moonlight Beauty, alongside the bamboo cutter."
          },
          fullDescription: {
            es: "Okami recupera a Kaguya como figura lunar y la acerca al relato tradicional mediante su relacion con el cortador de bambu. La conexion con Kaguya-hime aparece dentro del propio material oficial del juego.",
            en: "Okami recovers Kaguya as a lunar figure and keeps her close to the traditional tale through her bond with the bamboo cutter. The Kaguya-hime connection appears inside the game's official material."
          },
          context: {
            es: "Es una reinterpretacion de videojuego muy cercana al mito por su origen lunar y su relacion con Taketori.",
            en: "It is a game reinterpretation very close to the myth through lunar origin and the Taketori bond."
          },
          sourceLabel: { es: "Capcom - manual oficial de Okami", en: "Capcom - Okami Official Manual" },
          sourceUrl: "https://static.capcom.com/okami/manuals/Wii_Okami_Manual.pdf"
        },
        {
          id: "kaguya-doraemon-dora-kaguya",
          categoryId: "anime-manga",
          title: { es: "Doraemon - Dora Kaguya", en: "Doraemon - Dora Kaguya" },
          franchise: { es: "Anime", en: "Anime" },
          classification: { es: "Adaptacion / parodia explicita", en: "Explicit Adaptation / Parody" },
          image: "./assets/images/pop-kaguya-doraemon.png",
          shortDescription: {
            es: "Doraemon Channel presenta un relato ludico que entra directamente en Taketori Monogatari.",
            en: "Doraemon Channel presents a playful retelling that directly enters Taketori Monogatari."
          },
          fullDescription: {
            es: "Dora Kaguya reinterpreta Kaguya-hime desde el tono comico de Doraemon. La fuente oficial lo vincula directamente con Taketori Monogatari, transformando el cuento en una adaptacion familiar.",
            en: "Dora Kaguya reinterprets Kaguya-hime through Doraemon's comic tone. The official source links it directly with Taketori Monogatari, turning the tale into a family-friendly adaptation."
          },
          context: {
            es: "La conexion es clara porque no es solo una princesa lunar generica: la obra entra en el relato de Taketori.",
            en: "The connection is clear because this is not just a generic moon princess: the work enters the Taketori tale."
          },
          sourceLabel: { es: "Doraemon Channel", en: "Doraemon Channel" },
          sourceUrl: "https://dora-world.com/contents/1569"
        },
        {
          id: "kaguya-tonikawa",
          categoryId: "anime-manga",
          title: { es: "Fly Me to the Moon / Tonikawa", en: "Fly Me to the Moon / Tonikawa" },
          franchise: { es: "Manga / anime", en: "Manga / Anime" },
          classification: { es: "Reinterpretacion explicita", en: "Explicit Reinterpretation" },
          image: "./assets/images/pop-kaguya-tonikawa.png",
          shortDescription: {
            es: "Material oficial revisita la leyenda de la princesa Kaguya y sus motivos lunares.",
            en: "Official material revisits the legend of Princess Kaguya and its lunar motifs."
          },
          fullDescription: {
            es: "Tonikawa incorpora a Kaguya y elementos del relato clasico: origen lunar, pretendientes, pruebas imposibles y destino ligado a la Luna. La obra convierte el mito en una reinterpretacion romantica moderna.",
            en: "Tonikawa includes Kaguya and elements of the classic tale: lunar origin, suitors, impossible tasks and destiny tied to the Moon. The work turns the myth into a modern romantic reinterpretation."
          },
          context: {
            es: "La entrada funciona como puente entre cuento clasico, romance contemporaneo y misterio lunar.",
            en: "This entry works as a bridge between classic tale, contemporary romance and lunar mystery."
          },
          sourceLabel: { es: "Tonikawa - personaje Kaguya Gekko", en: "Tonikawa - Kaguya Gekko Character" },
          sourceUrl: "https://tonikawa.com/character/kaguya-gekko/"
        },
        {
          id: "kaguya-sailor-moon-princess-kaguya",
          categoryId: "anime-manga",
          title: { es: "Sailor Moon - Princess Kaguya's Lover", en: "Sailor Moon - Princess Kaguya's Lover" },
          franchise: { es: "Anime / musical", en: "Anime / Musical" },
          classification: { es: "Referencia oficial explicita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-kaguya-sailor-moon.png",
          shortDescription: {
            es: "El musical oficial usa el titulo Princess Kaguya's Lover y la figura Princess Snow Kaguya.",
            en: "The official musical uses the title Princess Kaguya's Lover and the figure Princess Snow Kaguya."
          },
          fullDescription: {
            es: "Sailor Moon reinterpreta el imaginario de Kaguya dentro de su mitologia lunar mediante Princess Kaguya's Lover y Princess Snow Kaguya. La conexion es explicita en el titulo y el material oficial.",
            en: "Sailor Moon reinterprets Kaguya imagery inside its lunar mythology through Princess Kaguya's Lover and Princess Snow Kaguya. The connection is explicit in the title and official material."
          },
          context: {
            es: "La entrada se mantiene en anime y musical porque vincula la princesa lunar con un universo pop profundamente asociado a la Luna.",
            en: "This entry remains in anime and musical because it links the moon princess with a pop universe deeply associated with the Moon."
          },
          sourceLabel: { es: "Sailor Moon - musical oficial", en: "Sailor Moon - Official Musical" },
          sourceUrl: "https://sailormoon-official.com/stage/information/musical_0401.php"
        },
        {
          id: "kaguya-warriors-orochi-3",
          categoryId: "video-games",
          title: { es: "Warriors Orochi 3 Ultimate - Kaguya", en: "Warriors Orochi 3 Ultimate - Kaguya" },
          franchise: { es: "Videojuego", en: "Video Game" },
          classification: { es: "Reinterpretacion explicita", en: "Explicit Reinterpretation" },
          image: "./assets/images/pop-kaguya-warriors-orochi.png",
          shortDescription: {
            es: "Koei Tecmo presenta a Kaguya como princesa lunar cuyos poderes envian heroes al pasado.",
            en: "Koei Tecmo presents Kaguya as a moon princess whose powers send heroes to the past."
          },
          fullDescription: {
            es: "Warriors Orochi 3 Ultimate traslada a Kaguya-hime al terreno de la fantasia historica y la accion. Su identidad como princesa lunar y su poder de alterar el tiempo crean una relectura pop clara del arquetipo.",
            en: "Warriors Orochi 3 Ultimate moves Kaguya-hime into historical fantasy and action. Her identity as a moon princess and her power to alter time create a clear pop reinterpretation of the archetype."
          },
          context: {
            es: "La conexion se marca como reinterpretacion explicita por conservar a Kaguya como princesa lunar dentro de una narrativa moderna.",
            en: "The connection is marked as an explicit reinterpretation because it keeps Kaguya as a moon princess inside a modern narrative."
          },
          sourceLabel: { es: "Koei Tecmo - noticia oficial", en: "Koei Tecmo - Official News" },
          sourceUrl: "https://www.koeitecmoamerica.com/news/warriors-orochi-3-ultimate-definitive-edition-slashes-its-way-onto-pc-via-steam/"
        }
      ]
    },
    {
      id: "jorogumo",
      number: "15",
      title: "Jorogumo",
      kanji: "\u7d61\u65b0\u5a66",
      image: "./assets/images/story-card-jorogumo-tattoo.png",
      icon: "./assets/images/story-card-jorogumo-tattoo.png",
      detailImageLayout: "landscape",
      intro: {
        es: "Jorogumo, la mujer arana del folclore japones, reaparece en anime, videojuegos y proyectos culturales como una figura seductora, paciente y peligrosa.",
        en: "Jorogumo, the spider woman of Japanese folklore, reappears across anime, games and cultural projects as a seductive, patient and dangerous figure."
      },
      entries: [
        {
          id: "jorogumo-kakuriyo-suzuran",
          categoryId: "anime-manga",
          title: { es: "Kakuriyo no Yadomeshi - Suzuran", en: "Kakuriyo no Yadomeshi - Suzuran" },
          franchise: { es: "Anime", en: "Anime" },
          classification: { es: "Referencia oficial explicita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-jorogumo-kakuriyo-suzuran.png",
          imageFit: "contain",
          shortDescription: {
            es: "El perfil oficial identifica a Suzuran como Jorogumo y la presenta como una geisha de la capital.",
            en: "The official profile identifies Suzuran as Jorogumo and presents her as a geisha in the capital."
          },
          fullDescription: {
            es: "Kakuriyo no Yadomeshi incorpora de forma directa a Jorogumo mediante Suzuran. Su identidad sobrenatural y su elegante apariencia humana mantienen la dualidad tradicional de la mujer arana.",
            en: "Kakuriyo no Yadomeshi directly incorporates Jorogumo through Suzuran. Her supernatural identity and elegant human appearance preserve the spider woman's traditional duality."
          },
          context: {
            es: "Conexion explicita porque el perfil oficial emplea el nombre Jorogumo.",
            en: "An explicit connection because the official profile uses the name Jorogumo."
          },
          sourceLabel: { es: "Kakuriyo - personaje oficial", en: "Kakuriyo - Official Character" },
          sourceUrl: "https://kakuriyo-anime.com/1st/sp/character/chara13.php"
        },
        {
          id: "jorogumo-yokai-watch",
          categoryId: "anime-manga",
          title: { es: "Yo-kai Watch Shadowside / Yo-kai Watch 4", en: "Yo-kai Watch Shadowside / Yo-kai Watch 4" },
          franchise: { es: "Anime / Videojuego", en: "Anime / Game" },
          classification: { es: "Referencia oficial explicita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-jorogumo-yokai-watch.png",
          imageFit: "contain",
          shortDescription: {
            es: "El episodio oficial y el material de Yo-kai Watch 4 nombran directamente a Jorogumo.",
            en: "The official episode and Yo-kai Watch 4 material directly name Jorogumo."
          },
          fullDescription: {
            es: "La franquicia utiliza a Jorogumo tanto en animacion como en videojuego, conservando su naturaleza aracnida y su capacidad de transformacion como amenaza sobrenatural.",
            en: "The franchise uses Jorogumo in both animation and games, retaining her arachnid nature and shapeshifting role as a supernatural threat."
          },
          context: {
            es: "Referencia nominal explicita documentada en materiales oficiales.",
            en: "An explicit named reference documented in official materials."
          },
          sourceLabel: { es: "TV Tokyo - episodio oficial", en: "TV Tokyo - Official Episode" },
          sourceUrl: "https://www.tv-tokyo.co.jp/broad_tvtokyo/program/detail/201811/24907_201811091825.html"
        },
        {
          id: "jorogumo-for-honor",
          categoryId: "video-games",
          title: { es: "For Honor - Rise / Web of the Jorogumo", en: "For Honor - Rise / Web of the Jorogumo" },
          franchise: { es: "Videojuego", en: "Video Game" },
          classification: { es: "Evento explicito de Ubisoft", en: "Explicit Ubisoft Event" },
          image: "./assets/images/pop-jorogumo-for-honor.png",
          imageFit: "contain",
          shortDescription: {
            es: "Ubisoft nombra su evento de Halloween y a su jefa aracnida como Jorogumo.",
            en: "Ubisoft names its Halloween event and mythic arachnid boss after Jorogumo."
          },
          fullDescription: {
            es: "Web of the Jorogumo traslada la leyenda a un evento de combate oscuro, donde la criatura conserva la telarana, la emboscada y la figura de reina arana.",
            en: "Web of the Jorogumo moves the legend into a dark combat event where the creature retains the web, ambush and spider-queen imagery."
          },
          context: {
            es: "Uso oficial y explicito del nombre dentro del evento de Ubisoft.",
            en: "Official and explicit use of the name within Ubisoft's event."
          },
          sourceLabel: { es: "Ubisoft - For Honor", en: "Ubisoft - For Honor" },
          sourceUrl: "https://www.ubisoft.com/en-us/game/for-honor/news-updates"
        },
        {
          id: "jorogumo-monster-girl-doctor",
          categoryId: "anime-manga",
          title: { es: "Monster Girl Doctor - Arachne", en: "Monster Girl Doctor - Arachne" },
          franchise: { es: "Anime", en: "Anime" },
          classification: { es: "Reinterpretacion explicita", en: "Explicit Reinterpretation" },
          image: "./assets/images/pop-jorogumo-monster-girl-doctor.png",
          imageFit: "contain",
          shortDescription: {
            es: "El bestiario oficial relaciona la especie Arachne con Jorogumo y describe sus rasgos de mujer arana.",
            en: "The official bestiary links the Arachne species to Jorogumo and describes its spider-woman traits."
          },
          fullDescription: {
            es: "Monster Girl Doctor transforma el arquetipo en una especie fantastica contemporanea. Conserva el cuerpo aracnido, los hilos, el veneno y la fuerza sobrenatural.",
            en: "Monster Girl Doctor turns the archetype into a contemporary fantasy species while retaining the arachnid body, threads, venom and supernatural strength."
          },
          context: {
            es: "Reinterpretacion explicita respaldada por el bestiario oficial de la serie.",
            en: "An explicit reinterpretation supported by the series' official bestiary."
          },
          sourceLabel: { es: "Monster Girl Doctor - bestiario", en: "Monster Girl Doctor - Bestiary" },
          sourceUrl: "https://mon-isha-anime.com/character/zukan/n07.html"
        },
        {
          id: "jorogumo-aki-kono",
          categoryId: "other-pop-culture",
          title: { es: "Aki Kono - Jorogumo", en: "Aki Kono - Jorogumo" },
          franchise: { es: "Animacion / Proyecto cultural", en: "Animation / Cultural Project" },
          classification: { es: "Animacion cultural oficial", en: "Official Cultural Animation" },
          image: "./assets/images/pop-jorogumo-aki-kono.png",
          imageFit: "contain",
          shortDescription: {
            es: "La Agencia para Asuntos Culturales de Japon presenta una animacion donde una arana se convierte en una mujer bella.",
            en: "Japan's Agency for Cultural Affairs presents an animation in which a spider becomes a beautiful woman."
          },
          fullDescription: {
            es: "La pieza revisita la tradicion de Jorogumo desde la animacion moderna y conserva el nucleo del relato: belleza, seduccion y transformacion aracnida.",
            en: "The piece revisits the Jorogumo tradition through modern animation and preserves the tale's core: beauty, seduction and arachnid transformation."
          },
          context: {
            es: "Proyecto cultural oficial dedicado directamente a Jorogumo.",
            en: "An official cultural project directly dedicated to Jorogumo."
          },
          sourceLabel: { es: "Agencia para Asuntos Culturales", en: "Agency for Cultural Affairs" },
          sourceUrl: "https://creators.j-mediaarts.bunka.go.jp/project/jorogumo"
        },
        {
          id: "jorogumo-sega-kotonoha",
          categoryId: "video-games",
          title: { es: "SEGA - Kotonoha Project", en: "SEGA - Kotonoha Project" },
          franchise: { es: "Videojuegos / Novela / Musica", en: "Games / Novel / Music" },
          classification: { es: "Referencia oficial explicita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-jorogumo-sega-kotonoha.png",
          imageFit: "contain",
          shortDescription: {
            es: "La historia oficial de SEGA nombra a la criatura como Jorogumo y describe su descendencia aracnida.",
            en: "SEGA's official story names the creature as Jorogumo and describes her arachnid offspring."
          },
          fullDescription: {
            es: "Kotonoha Project integra el mito en una narrativa multimedia y conserva la identidad de mujer arana y su linaje sobrenatural.",
            en: "Kotonoha Project integrates the myth into a multimedia narrative while preserving the spider-woman identity and supernatural lineage."
          },
          context: {
            es: "La conexion es explicita en el texto narrativo oficial de SEGA.",
            en: "The connection is explicit in SEGA's official narrative text."
          },
          sourceLabel: { es: "SEGA - Kotonoha Project", en: "SEGA - Kotonoha Project" },
          sourceUrl: "https://maimai.sega.jp/kotonoha/1st/novel2_1b.html"
        }
      ]
    },
    {
      id: "yatagarasu",
      number: "16",
      title: "Yatagarasu",
      kanji: "\u516b\u54ab\u70cf",
      image: "./assets/images/story-card-yatagarasu-tattoo.png",
      icon: "./assets/images/story-card-yatagarasu-tattoo.png",
      intro: {
        es: "Yatagarasu, el cuervo divino de tres patas, sigue apareciendo en novelas, anime y videojuegos como guia celestial, mensajero y simbolo de direccion.",
        en: "Yatagarasu, the divine three-legged crow, continues to appear across novels, anime and games as a celestial guide, messenger and symbol of direction."
      },
      entries: [
        {
          id: "yatagarasu-legendary-birds",
          categoryId: "anime-manga",
          title: { es: "Yatagarasu: The Legendary Birds", en: "Yatagarasu: The Legendary Birds" },
          franchise: { es: "Novelas / Manga", en: "Novels / Manga" },
          classification: { es: "Serie oficial basada en el mito", en: "Official Myth-Based Series" },
          image: "./assets/images/pop-yatagarasu-legendary-birds.png",
          shortDescription: {
            es: "La web oficial presenta una serie sobre los cuervos legendarios Yatagarasu, capaces de adoptar forma humana.",
            en: "The official site presents a series about legendary Yatagarasu ravens capable of taking human form."
          },
          fullDescription: {
            es: "La saga convierte la tradicion del cuervo de tres patas en una sociedad fantastica compleja. Mantiene su naturaleza sobrenatural y su relacion con el poder, el linaje y la guia.",
            en: "The saga turns the three-legged crow tradition into a complex fantasy society while retaining its supernatural nature and links to power, lineage and guidance."
          },
          context: {
            es: "Serie oficial construida expresamente alrededor del nombre y el mito de Yatagarasu.",
            en: "An official series built expressly around the Yatagarasu name and myth."
          },
          sourceLabel: { es: "Bungeishunju - web oficial", en: "Bungeishunju - Official Site" },
          sourceUrl: "https://books.bunshun.jp/sp/karasu_e"
        },
        {
          id: "yatagarasu-raven-master",
          categoryId: "anime-manga",
          title: { es: "The Raven Does Not Choose Its Master", en: "The Raven Does Not Choose Its Master" },
          franchise: { es: "Anime", en: "Anime" },
          classification: { es: "Adaptacion oficial explicita", en: "Explicit Official Adaptation" },
          image: "./assets/images/pop-yatagarasu-raven-master.png",
          shortDescription: {
            es: "La adaptacion oficial lleva al anime la corte de Yamauchi y sus cuervos de tres patas que toman forma humana.",
            en: "The official adaptation brings Yamauchi's court and its human-shifting three-legged ravens to anime."
          },
          fullDescription: {
            es: "El anime adapta directamente la serie Yatagarasu y convierte su mitologia en un drama palaciego de alianzas, linajes y transformaciones.",
            en: "The anime directly adapts the Yatagarasu series, turning its mythology into a court drama of alliances, lineages and transformations."
          },
          context: {
            es: "Adaptacion explicita del universo literario Yatagarasu.",
            en: "An explicit adaptation of the literary Yatagarasu universe."
          },
          sourceLabel: { es: "NHK - web oficial", en: "NHK - Official Site" },
          sourceUrl: "https://nhk-character.com/karasu/"
        },
        {
          id: "yatagarasu-digimon",
          categoryId: "anime-manga",
          title: { es: "Digimon - Yatagaramon", en: "Digimon - Yatagaramon" },
          franchise: { es: "Anime / Videojuegos", en: "Anime / Games" },
          classification: { es: "Referencia oficial explicita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-yatagarasu-digimon-yatagaramon.png",
          imageFit: "contain",
          shortDescription: {
            es: "La enciclopedia oficial describe a Yatagaramon como un ave misteriosa de tres patas que guia a los elegidos.",
            en: "The official encyclopedia describes Yatagaramon as a mysterious three-legged bird that guides chosen people."
          },
          fullDescription: {
            es: "Digimon conserva los rasgos esenciales del mito: tres patas, caracter sagrado y funcion de guia. El nombre hace explicita la referencia a Yatagarasu.",
            en: "Digimon preserves the myth's essential traits: three legs, sacred character and a guiding role. The name makes the Yatagarasu reference explicit."
          },
          context: {
            es: "Referencia nominal y visual confirmada por la enciclopedia oficial de Digimon.",
            en: "A named and visual reference confirmed by the official Digimon encyclopedia."
          },
          sourceLabel: { es: "Digimon Encyclopedia", en: "Digimon Encyclopedia" },
          sourceUrl: "https://digimon.net/reference_en/detail.php?directory_name=yatagaramon"
        },
        {
          id: "yatagarasu-touhou-utsuho",
          categoryId: "video-games",
          title: { es: "Touhou - Utsuho Reiuji", en: "Touhou - Utsuho Reiuji" },
          franchise: { es: "Videojuego", en: "Game" },
          classification: { es: "Referencia oficial explicita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-yatagarasu-touhou-utsuho.png",
          imageFit: "contain",
          shortDescription: {
            es: "El material oficial de Danmaku Kagura identifica a Utsuho como una hell raven que alberga el poder de Yatagarasu.",
            en: "Official Danmaku Kagura material identifies Utsuho as a hell raven who houses Yatagarasu's power."
          },
          fullDescription: {
            es: "Utsuho reinterpreta la energia solar del cuervo divino mediante fusion nuclear. Su tercer ojo y su poder del sol trasladan el simbolismo celestial al universo Touhou.",
            en: "Utsuho reinterprets the divine crow's solar energy through nuclear fusion. Her third eye and power of the sun move the celestial symbolism into the Touhou universe."
          },
          context: {
            es: "Conexion explicita porque el material oficial nombra directamente a Yatagarasu como fuente de su poder.",
            en: "An explicit connection because official material directly names Yatagarasu as the source of her power."
          },
          sourceLabel: { es: "Danmaku Kagura - personaje", en: "Danmaku Kagura - Character" },
          sourceUrl: "https://danmaku.jp/archive/character/c072/"
        },
        {
          id: "yatagarasu-soul-hackers-2",
          categoryId: "video-games",
          title: { es: "Soul Hackers 2 - Yatagarasu", en: "Soul Hackers 2 - Yatagarasu" },
          franchise: { es: "Videojuego", en: "Video Game" },
          classification: { es: "Nombre oficial explicito", en: "Explicit Official Name" },
          image: "./assets/images/pop-yatagarasu-soul-hackers-2.png",
          shortDescription: {
            es: "Atlus presenta a Yatagarasu como una de las facciones de invocadores de demonios de Soul Hackers 2.",
            en: "Atlus presents Yatagarasu as one of the demon-summoner factions in Soul Hackers 2."
          },
          fullDescription: {
            es: "El juego reutiliza el nombre de Yatagarasu para una sociedad secreta vinculada al orden y la proteccion de Japon, manteniendo su funcion de guia y autoridad.",
            en: "The game reuses the Yatagarasu name for a secret society tied to order and the protection of Japan, preserving its role as guide and authority."
          },
          context: {
            es: "Uso oficial del nombre para una organizacion central del videojuego.",
            en: "Official use of the name for a central organization in the game."
          },
          sourceLabel: { es: "Soul Hackers 2 - web oficial", en: "Soul Hackers 2 - Official Site" },
          sourceUrl: "https://soulhackers2.atlus.com/"
        }
      ]
    },
    {
      id: "nekomata",
      number: "17",
      title: "Nekomata",
      kanji: "猫又",
      image: "./assets/images/story-nekomata-art.png",
      icon: "./assets/images/story-nekomata-art.png",
      intro: {
        es: "Referencias modernas verificadas que identifican de forma explícita al Nekomata: el gato yōkai de dos colas vinculado con la transformación y el mundo espiritual.",
        en: "Verified modern references that explicitly identify the Nekomata: the two-tailed cat yōkai associated with transformation and the spirit world."
      },
      entries: [
        {
          id: "nekomata-genshin-kirara",
          categoryId: "video-games",
          title: "Genshin Impact - Kirara",
          franchise: { es: "Videojuego", en: "Video Game" },
          classification: { es: "Referencia oficial explícita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-nekomata-genshin-kirara.png",
          imageFit: "contain",
          shortDescription: {
            es: "HoYoverse identifica directamente a Kirara como una nekomata que trabaja como mensajera en Inazuma.",
            en: "HoYoverse directly identifies Kirara as a nekomata working as a courier in Inazuma."
          },
          fullDescription: {
            es: "El perfil oficial de Kirara la presenta como una nekomata de Inazuma y vincula su identidad sobrenatural con sus dos colas, su agilidad y su trabajo para Komaniya Express.",
            en: "Kirara's official profile presents her as an Inazuman nekomata and connects her supernatural identity with her two tails, agility and work for Komaniya Express."
          },
          context: {
            es: "La conexión es textual y oficial; no se deduce únicamente de su apariencia felina.",
            en: "The connection is textual and official rather than inferred from feline imagery alone."
          },
          sourceLabel: { es: "HoYoverse - perfil oficial", en: "HoYoverse - Official Profile" },
          sourceUrl: "https://genshin.hoyoverse.com/en/news/detail/111514"
        },
        {
          id: "nekomata-ghostwire-tokyo",
          categoryId: "video-games",
          title: "Ghostwire: Tokyo - Nekomata",
          franchise: { es: "Videojuego", en: "Video Game" },
          classification: { es: "Referencia oficial explícita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-nekomata-ghostwire-tokyo.png",
          shortDescription: {
            es: "Bethesda presenta a los Nekomata como gatos yōkai de dos colas que gestionan tiendas y coleccionan reliquias por Tokio.",
            en: "Bethesda presents Nekomata as two-tailed cat yōkai who run shops and collect relics across Tokyo."
          },
          fullDescription: {
            es: "En Ghostwire: Tokyo, los Nekomata son comerciantes sobrenaturales que recompensan al jugador por recuperar reliquias y objetos curiosos de la ciudad.",
            en: "In Ghostwire: Tokyo, Nekomata are supernatural shopkeepers who reward the player for recovering relics and unusual objects around the city."
          },
          context: {
            es: "Una reinterpretación moderna que conserva nombre, dos colas, naturaleza yōkai e inteligencia humana.",
            en: "A modern reinterpretation preserving the name, two tails, yōkai nature and human-like intelligence."
          },
          sourceLabel: { es: "Bethesda - guía oficial", en: "Bethesda - Official Guide" },
          sourceUrl: "https://bethesda.net/en-US/news/ghostwire-tokyo-visitors-and-yokai-guide"
        },
        {
          id: "nekomata-oni-no-hanayome-tokichi",
          categoryId: "anime-manga",
          title: "Oni no Hanayome - Tōkichi Nekota",
          franchise: { es: "Anime / Acción real · 2026", en: "Anime / Live Action · 2026" },
          classification: { es: "Referencia oficial explícita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-nekomata-oni-no-hanayome.png",
          imageFit: "contain",
          shortDescription: {
            es: "El perfil oficial del anime identifica a Tōkichi Nekota como un ayakashi Nekomata.",
            en: "The official anime profile identifies Tōkichi Nekota as a Nekomata ayakashi."
          },
          fullDescription: {
            es: "La ficha oficial del personaje utiliza de forma explícita la identidad Nekomata dentro del mundo de ayakashi de Oni no Hanayome.",
            en: "The official character profile explicitly uses the Nekomata identity within Oni no Hanayome's world of ayakashi."
          },
          context: {
            es: "Es una referencia contemporánea confirmada por el material oficial de la producción.",
            en: "This is a contemporary reference confirmed by the production's official material."
          },
          sourceLabel: { es: "Oni no Hanayome - personajes", en: "Oni no Hanayome - Characters" },
          sourceUrl: "https://onihana-anime.com/chara/"
        },
        {
          id: "nekomata-kurobei",
          categoryId: "anime-manga",
          title: "Nekomata Kurobei",
          franchise: { es: "Manga · 2026", en: "Manga · 2026" },
          classification: { es: "Reinterpretación directa", en: "Direct Reinterpretation" },
          image: "./assets/images/pop-nekomata-kurobei.png",
          imageFit: "contain",
          shortDescription: {
            es: "La sinopsis de Akita Shoten presenta a Kurobei, un Nekomata que viaja por el Edo sobrenatural.",
            en: "Akita Shoten's synopsis stars Kurobei, a Nekomata travelling through supernatural Edo."
          },
          fullDescription: {
            es: "Kurobei recorre Edo enfrentándose a posesiones y sucesos sobrenaturales. El propio título y la sinopsis oficial definen su naturaleza Nekomata.",
            en: "Kurobei travels through Edo while exorcising possessions and supernatural incidents. The title and official synopsis directly define his Nekomata nature."
          },
          context: {
            es: "La criatura folclórica es el protagonista explícito de la obra, no una asociación visual secundaria.",
            en: "The folkloric creature is the explicit protagonist of the work, not a secondary visual association."
          },
          sourceLabel: { es: "Akita Shoten - ficha oficial", en: "Akita Shoten - Official Page" },
          sourceUrl: "https://www.akitashoten.co.jp/comics/4253010652"
        },
        {
          id: "nekomata-yokai-watch-4",
          categoryId: "video-games",
          title: "Yo-kai Watch 4 - Nekomata",
          franchise: { es: "Anime / Videojuego", en: "Anime / Video Game" },
          classification: { es: "Referencia oficial explícita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-nekomata-yokai-watch-4.png",
          imageFit: "contain",
          shortDescription: {
            es: "Level-5 describe a Nekomata como un gato que se convirtió en yōkai tras vivir durante muchos años.",
            en: "Level-5 describes Nekomata as a cat that became a yōkai after living for a very long time."
          },
          fullDescription: {
            es: "La descripción oficial recupera directamente el concepto clásico: un gato longevo que adquiere naturaleza y poderes sobrenaturales.",
            en: "The official description directly uses the classic concept: a long-lived cat that gains supernatural nature and powers."
          },
          context: {
            es: "Nombre, origen y transformación coinciden de forma explícita con la tradición del Nekomata.",
            en: "Name, origin and transformation explicitly match the Nekomata tradition."
          },
          sourceLabel: { es: "Yo-kai Watch 4 - web oficial", en: "Yo-kai Watch 4 - Official Site" },
          sourceUrl: "https://www.youkai-watch.jp/yw4/game/game04.html"
        },
        {
          id: "nekomata-terrified-teacher-tamao",
          categoryId: "anime-manga",
          title: "A Terrified Teacher - Tamao Akisame",
          franchise: { es: "Anime", en: "Anime" },
          classification: { es: "Referencia oficial explícita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-nekomata-terrified-teacher.png",
          imageFit: "contain",
          shortDescription: {
            es: "El perfil oficial identifica a Tamao Akisame como un Nekomata.",
            en: "The official character profile identifies Tamao Akisame as a Nekomata."
          },
          fullDescription: {
            es: "La web de la serie presenta a Tamao Akisame dentro del elenco de yōkai y confirma expresamente su identidad Nekomata.",
            en: "The series website presents Tamao Akisame among its yōkai cast and expressly confirms his Nekomata identity."
          },
          context: {
            es: "La clasificación se apoya en la identidad declarada por la franquicia, no solo en la apariencia.",
            en: "The classification relies on the identity stated by the franchise, not appearance alone."
          },
          sourceLabel: { es: "Web oficial - personajes", en: "Official Site - Characters" },
          sourceUrl: "https://youkaigakkou.com/character/"
        },
        {
          id: "nekomata-nioh",
          categoryId: "video-games",
          title: "Nioh - Nekomata",
          franchise: { es: "Videojuego", en: "Video Game" },
          classification: { es: "Referencia oficial explícita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-nekomata-nioh.png",
          shortDescription: {
            es: "Koei Tecmo incluye a Nekomata entre los espíritus guardianes de Nioh: Dragon of the North.",
            en: "Koei Tecmo lists Nekomata among the Guardian Spirits in Nioh: Dragon of the North."
          },
          fullDescription: {
            es: "Nekomata aparece como espíritu guardián y más tarde regresa dentro de la franquicia, conservando su nombre y naturaleza sobrenatural felina.",
            en: "Nekomata appears as a Guardian Spirit and later returns within the franchise, preserving the name and supernatural feline nature."
          },
          context: {
            es: "Uso oficial y nominal del Nekomata dentro de una reinterpretación de los yōkai japoneses.",
            en: "An official named use of the Nekomata within a reinterpretation of Japanese yōkai."
          },
          sourceLabel: { es: "Koei Tecmo - Nioh", en: "Koei Tecmo - Nioh" },
          sourceUrl: "https://www.gamecity.ne.jp/nioh/dlc.html"
        },
        {
          id: "nekomata-disgaea",
          categoryId: "video-games",
          title: "Disgaea - Nekomata",
          franchise: { es: "Videojuego · Referencia secundaria", en: "Video Game · Secondary Reference" },
          classification: { es: "Clase o raza con nombre explícito", en: "Explicit Named Race / Class" },
          image: "./assets/images/pop-nekomata-disgaea.png",
          shortDescription: {
            es: "NIS utiliza Nekomata como clase o raza demoníaca explícita dentro de la franquicia Disgaea.",
            en: "NIS uses Nekomata as an explicit demon class or race within the Disgaea franchise."
          },
          fullDescription: {
            es: "La franquicia incorpora Nekomata a su sistema de criaturas y clases, utilizando directamente el nombre folclórico.",
            en: "The franchise incorporates Nekomata into its creature and class system, directly using the folkloric name."
          },
          context: {
            es: "Se presenta como referencia pop culture secundaria por su adaptación al sistema de clases del videojuego.",
            en: "It is presented as a secondary pop-culture reference because the concept is adapted into the game's class system."
          },
          sourceLabel: { es: "NIS America - sistema", en: "NIS America - System" },
          sourceUrl: "https://nisamerica.com/disgaea/d5-complete/sp/system.html"
        }
      ]
    },
    {
      id: "kappa",
      number: "18",
      title: "Kappa",
      kanji: "河童",
      image: "./assets/images/story-card-kappa-tattoo.png",
      icon: "./assets/images/story-card-kappa-tattoo.png",
      intro: {
        es: "Conexiones modernas verificadas que presentan al Kappa de forma explícita: el yōkai acuático asociado con ríos, platos de agua, pepinos, astucia y respeto.",
        en: "Verified modern connections that explicitly present the Kappa: the aquatic yōkai associated with rivers, water dishes, cucumbers, cunning and respect."
      },
      entries: [
        {
          id: "kappa-sarazanmai-keppi",
          categoryId: "anime-manga",
          title: "Sarazanmai - Keppi",
          franchise: { es: "Anime", en: "Anime" },
          classification: { es: "Referencia oficial explícita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-kappa-sarazanmai-keppi.png",
          imageFit: "contain",
          shortDescription: {
            es: "Los materiales oficiales sitúan a Keppi y al Reino Kappa en el centro de la serie.",
            en: "Official materials place Keppi and the Kappa Kingdom at the centre of the series."
          },
          fullDescription: {
            es: "Sarazanmai construye su historia alrededor de Keppi, príncipe heredero del Reino Kappa, y de humanos transformados en kappas.",
            en: "Sarazanmai builds its story around Keppi, crown prince of the Kappa Kingdom, and humans transformed into kappas."
          },
          context: {
            es: "La identidad Kappa es explícita y estructural dentro de la narrativa, no una semejanza visual.",
            en: "The Kappa identity is explicit and structural to the narrative, not a visual resemblance."
          },
          sourceLabel: { es: "Sarazanmai - personaje oficial", en: "Sarazanmai - Official Character" },
          sourceUrl: "https://sarazanmai.com/april/chara/keppi.html"
        },
        {
          id: "kappa-yokai-watch-4",
          categoryId: "video-games",
          title: "Yo-kai Watch 4 - Kappa",
          franchise: { es: "Videojuego / Anime", en: "Game / Anime Franchise" },
          classification: { es: "Referencia oficial explícita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-kappa-yokai-watch-4.png",
          imageFit: "contain",
          shortDescription: {
            es: "Level-5 identifica directamente al personaje como 河童, un Kappa que vive integrado en la sociedad humana.",
            en: "Level-5 directly identifies the character as 河童, a Kappa now living inside human society."
          },
          fullDescription: {
            es: "Yo-kai Watch 4 adapta la figura del Kappa al mundo moderno manteniendo su nombre, plato craneal y naturaleza yōkai.",
            en: "Yo-kai Watch 4 adapts the Kappa to the modern world while retaining its name, head dish and yōkai nature."
          },
          context: {
            es: "Una reinterpretación oficial y explícita del Kappa folclórico.",
            en: "An official and explicit reinterpretation of the folkloric Kappa."
          },
          sourceLabel: { es: "Yo-kai Watch 4 - web oficial", en: "Yo-kai Watch 4 - Official Site" },
          sourceUrl: "https://www.youkai-watch.jp/yw4/game/game04.html"
        },
        {
          id: "kappa-onmyoji",
          categoryId: "video-games",
          title: "Onmyoji - Kappa",
          franchise: { es: "Videojuego", en: "Video Game" },
          classification: { es: "Referencia oficial explícita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-kappa-onmyoji.png",
          imageFit: "contain",
          shortDescription: {
            es: "NetEase incluye a Kappa como shikigami oficial y utiliza directamente el nombre del yōkai.",
            en: "NetEase lists Kappa as an official shikigami and directly uses the yōkai name."
          },
          fullDescription: {
            es: "Onmyoji convierte al Kappa en un shikigami jugable dentro de su reinterpretación de espíritus y criaturas japonesas.",
            en: "Onmyoji turns Kappa into a playable shikigami within its reinterpretation of Japanese spirits and creatures."
          },
          context: {
            es: "La identidad del personaje está confirmada por el listado oficial de la franquicia.",
            en: "The character's identity is confirmed by the franchise's official roster."
          },
          sourceLabel: { es: "Onmyoji - shikigami oficial", en: "Onmyoji - Official Shikigami" },
          sourceUrl: "https://en.onmyojigame.com/m/shikigami/209.html"
        },
        {
          id: "kappa-summer-days-with-coo",
          categoryId: "cinema",
          title: { es: "El verano de Coo", en: "Summer Days with Coo" },
          franchise: { es: "Película de anime", en: "Anime Film" },
          classification: { es: "Reinterpretación directa del Kappa", en: "Direct Kappa Reinterpretation" },
          image: "./assets/images/pop-kappa-summer-days-coo.png",
          imageFit: "contain",
          shortDescription: {
            es: "Shochiku presenta la película como la historia de un niño y un joven Kappa llamado Coo.",
            en: "Shochiku presents the film as the story of a boy and a young Kappa named Coo."
          },
          fullDescription: {
            es: "Coo es recuperado de una piedra y llevado a la vida contemporánea, donde la película explora la supervivencia de una criatura folclórica en el mundo moderno.",
            en: "Coo is recovered from stone and brought into contemporary life, where the film explores a folkloric creature surviving in the modern world."
          },
          context: {
            es: "Una reinterpretación cinematográfica directa y central del Kappa.",
            en: "A direct cinematic reinterpretation in which the Kappa is central."
          },
          sourceLabel: { es: "Shochiku - ficha de la película", en: "Shochiku - Film Page" },
          sourceUrl: "https://www.shochiku.co.jp/cinema/database/04664/"
        },
        {
          id: "kappa-animal-crossing-kappn",
          categoryId: "video-games",
          title: "Animal Crossing - Kapp'n",
          franchise: { es: "Videojuego", en: "Video Game" },
          classification: { es: "Kappa confirmado por el desarrollador", en: "Developer-confirmed Kappa" },
          image: "./assets/images/pop-kappa-animal-crossing-kappn.png",
          imageFit: "contain",
          shortDescription: {
            es: "Nintendo identifica explícitamente a Kapp'n como un Kappa conectado con la tradición sobrenatural japonesa.",
            en: "Nintendo explicitly identifies Kapp'n as a Kappa connected to Japanese supernatural tradition."
          },
          fullDescription: {
            es: "Kapp'n transforma al Kappa en un marinero amable y musical, conservando el plato craneal y la identidad de la criatura.",
            en: "Kapp'n transforms the Kappa into a friendly musical sailor while retaining the head dish and the creature's identity."
          },
          context: {
            es: "La conexión ha sido identificada explícitamente por Nintendo en material oficial.",
            en: "The connection has been explicitly identified by Nintendo in official material."
          },
          sourceLabel: { es: "Nintendo Play - Kapp'n", en: "Nintendo Play - Kapp'n" },
          sourceUrl: "https://play.nintendo.com/themes/friends/kappn/"
        },
        {
          id: "kappa-natsume-book-of-friends",
          categoryId: "anime-manga",
          title: { es: "Natsume Yūjin-chō - Kappa", en: "Natsume's Book of Friends - Kappa" },
          franchise: { es: "Anime", en: "Anime" },
          classification: { es: "Referencia oficial explícita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-kappa-natsume.png",
          imageFit: "contain",
          shortDescription: {
            es: "La página oficial identifica al personaje como 河童の妖怪, un yōkai Kappa ayudado por Natsume.",
            en: "The official character page identifies him as 河童の妖怪, a Kappa yōkai rescued by Natsume."
          },
          fullDescription: {
            es: "Tras ser auxiliado en un caluroso día de verano, el Kappa llama a Natsume su jefe y permanece dentro del grupo de yōkai recurrentes de la serie.",
            en: "After being rescued on a hot summer day, the Kappa calls Natsume his boss and remains among the series' recurring yōkai."
          },
          context: {
            es: "La web oficial utiliza directamente el nombre y la clasificación yōkai.",
            en: "The official website directly uses the name and yōkai classification."
          },
          sourceLabel: { es: "Natsume Yūjin-chō - personaje", en: "Natsume's Book of Friends - Character" },
          sourceUrl: "https://www.natsume-anime.jp/character/%E6%B2%B3%E7%AB%A5"
        },
        {
          id: "kappa-hanakappa",
          categoryId: "anime-manga",
          title: "Hanakappa",
          franchise: { es: "Anime infantil", en: "TV Anime / Children's Media" },
          classification: { es: "Obra Kappa explícita", en: "Explicit Kappa Media" },
          image: "./assets/images/pop-kappa-hanakappa.png",
          imageFit: "contain",
          shortDescription: {
            es: "El anime oficial está protagonizado por Hanakappa y su familia Kappa.",
            en: "The official long-running anime centres on Hanakappa and his Kappa family."
          },
          fullDescription: {
            es: "Hanakappa transforma al Kappa en un universo infantil luminoso, manteniendo la identidad de la criatura en el nombre y la familia protagonista.",
            en: "Hanakappa reworks the Kappa into a bright children's character world while retaining the creature's identity in the name and central family."
          },
          context: {
            es: "Una adaptación explícita de la figura Kappa para público infantil.",
            en: "An explicit adaptation of the Kappa figure for children's media."
          },
          sourceLabel: { es: "Hanakappa - web oficial", en: "Hanakappa - Official Site" },
          sourceUrl: "https://www.hanakappa.jp/"
        },
        {
          id: "kappa-shabake",
          categoryId: "anime-manga",
          title: "Shabake - Aka Kappa & Ao Kappa",
          franchise: { es: "Anime", en: "Anime" },
          classification: { es: "Referencia oficial explícita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-kappa-shabake.png",
          shortDescription: {
            es: "La sección oficial de personajes presenta a Aka Kappa y Ao Kappa como habitantes Kappa del mundo yōkai de Shabake.",
            en: "The official character section presents Aka Kappa and Ao Kappa as Kappa living in Shabake's yōkai world."
          },
          fullDescription: {
            es: "Shabake incorpora dos Kappa reconocibles por el plato de agua y su identidad acuática dentro del universo sobrenatural de la obra.",
            en: "Shabake includes two Kappa recognizable by their water dishes and aquatic identity within the work's supernatural universe."
          },
          context: {
            es: "Los nombres de los personajes y su naturaleza Kappa aparecen en el material oficial.",
            en: "The characters' names and Kappa nature appear in official material."
          },
          sourceLabel: { es: "Shabake - web oficial", en: "Shabake - Official Site" },
          sourceUrl: "https://shabake-official.com/"
        },
        {
          id: "kappa-sanrio-kappy",
          categoryId: "other-pop-culture",
          title: "Sanrio - Kappa no Kappy",
          franchise: { es: "Personaje / Pop Culture", en: "Character / Pop Culture" },
          classification: { es: "Personaje Kappa oficial", en: "Official Kappa Character" },
          image: "./assets/images/pop-kappa-sanrio-kappy.png",
          imageFit: "contain",
          shortDescription: {
            es: "El perfil oficial de Sanrio presenta a Kappa no Kappy como un Kappa amistoso con plato en la cabeza y amor por los pepinos.",
            en: "Sanrio's official profile presents Kappa no Kappy as a friendly Kappa with a dish on his head and a love of cucumbers."
          },
          fullDescription: {
            es: "Sanrio adapta los rasgos clásicos del Kappa a un personaje amable: plato craneal, color verde y predilección por los pepinos.",
            en: "Sanrio adapts the Kappa's classic traits into a friendly character: head dish, green coloring and fondness for cucumbers."
          },
          context: {
            es: "Una reinterpretación oficial del Kappa dentro del diseño de personajes y la cultura popular japonesa.",
            en: "An official Kappa reinterpretation within Japanese character design and popular culture."
          },
          sourceLabel: { es: "Sanrio - perfil oficial", en: "Sanrio - Official Profile" },
          sourceUrl: "https://www.sanrio.co.jp/characters/kappanokappy/"
        },
        {
          id: "kappa-one-piece-kawamatsu",
          categoryId: "anime-manga",
          title: "One Piece - Kawamatsu",
          franchise: { es: "Anime / Manga", en: "Anime / Manga" },
          classification: { es: "Referencia oficial explícita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-kappa-one-piece-kawamatsu.png",
          imageFit: "contain",
          shortDescription: {
            es: "El perfil oficial de One Piece presenta a Kawamatsu con el sobrenombre Kappa no Kawamatsu.",
            en: "The official One Piece character profile gives Kawamatsu the epithet Kappa no Kawamatsu."
          },
          fullDescription: {
            es: "Kawamatsu es un gyojin vinculado explícitamente al Kappa mediante su sobrenombre oficial y su estilo de espada Kappa-ryu dentro del arco del País de Wano.",
            en: "Kawamatsu is a fish-man explicitly connected to the Kappa through his official epithet and his Kappa-ryu sword style in the Wano Country arc."
          },
          context: {
            es: "Es una referencia oficial explícita al Kappa, no una adaptación literal del yōkai folclórico.",
            en: "This is an explicit official Kappa reference, not a literal adaptation of the folkloric yōkai."
          },
          sourceLabel: { es: "One Piece - perfil oficial de Kawamatsu", en: "One Piece - Official Kawamatsu Profile" },
          sourceUrl: "https://one-piece.com/character/kawamatsu/index.html"
        }
      ]
    },
    {
      id: "ho-o",
      number: "19",
      title: "Hō-ō",
      kanji: "鳳凰",
      image: "./assets/images/story-card-ho-o-tattoo.png",
      icon: "./assets/images/stories/cards/ho-o.png",
      intro: {
        es: "El Hō-ō reaparece en la cultura popular como ave sagrada, símbolo de renacimiento y figura vinculada al fuego, la luz y la prosperidad.",
        en: "The Hō-ō reappears in pop culture as a sacred bird and a symbol of rebirth, fire, light and prosperity."
      },
      entries: [
        {
          id: "ho-o-pokemon-ho-oh",
          categoryId: "pokemon",
          title: "Pokémon — Ho-Oh",
          franchise: { es: "Anime / Videojuego", en: "Anime / Video Game" },
          classification: { es: "Inspiración directa", en: "Direct Inspiration" },
          image: "./assets/images/pop-ho-o-pokemon.png",
          imageFit: "contain",
          shortDescription: {
            es: "Ho-Oh traslada al universo Pokémon la silueta majestuosa, el color y la dimensión auspiciosa del Hō-ō.",
            en: "Ho-Oh brings the Hō-ō's majestic silhouette, color and auspicious nature into the Pokémon world."
          },
          fullDescription: {
            es: "El Pokémon arcoíris conserva la imagen del gran pájaro celestial y la asociación con la felicidad, la renovación y una presencia casi divina.",
            en: "The Rainbow Pokémon preserves the image of a great celestial bird and its association with happiness, renewal and an almost divine presence."
          },
          context: {
            es: "Una de las reinterpretaciones modernas más reconocibles del ave fénix de Asia oriental.",
            en: "One of the most recognizable modern reinterpretations of the East Asian phoenix."
          },
          sourceLabel: { es: "Pokémon — ficha oficial de Ho-Oh", en: "Pokémon — Official Ho-Oh Profile" },
          sourceUrl: "https://www.pokemon.com/uk/pokedex/ho-oh"
        },
        {
          id: "ho-o-digimon-hououmon",
          categoryId: "anime-manga",
          title: "Digimon — Hououmon",
          franchise: { es: "Anime / Videojuego", en: "Anime / Video Game" },
          classification: { es: "Referencia explícita", en: "Explicit Reference" },
          image: "./assets/images/pop-ho-o-digimon.png",
          imageFit: "contain",
          shortDescription: {
            es: "Hououmon convierte al Hō-ō en un Digimon sagrado de cuatro alas doradas y gran poder purificador.",
            en: "Hououmon turns the Hō-ō into a sacred Digimon with four golden wings and immense purifying power."
          },
          fullDescription: {
            es: "Su nombre japonés, su apariencia y su jerarquía entre las aves sagradas establecen una conexión directa con el Hō-ō tradicional.",
            en: "Its Japanese name, appearance and status among sacred birds establish a direct connection to the traditional Hō-ō."
          },
          context: {
            es: "La referencia está integrada tanto en el nombre como en el diseño oficial del personaje.",
            en: "The reference is embedded in both the name and the official character design."
          },
          sourceLabel: { es: "Digimon Encyclopedia — Hououmon", en: "Digimon Encyclopedia — Hououmon" },
          sourceUrl: "https://digimon.net/reference_en/detail.php?directory_name=hououmon"
        },
        {
          id: "ho-o-nioh-2",
          categoryId: "video-games",
          title: "Nioh 2 — Hō-ō",
          franchise: { es: "Videojuego", en: "Video Game" },
          classification: { es: "Referencia explícita", en: "Explicit Reference" },
          image: "./assets/images/pop-ho-o-nioh2.png",
          shortDescription: {
            es: "Nioh 2 incorpora al Hō-ō como espíritu guardián dentro de su universo de mitología y yōkai japoneses.",
            en: "Nioh 2 includes the Hō-ō as a Guardian Spirit within its world of Japanese mythology and yōkai."
          },
          fullDescription: {
            es: "La figura del ave sagrada se adapta al lenguaje del juego como presencia protectora vinculada a la luz y al poder espiritual.",
            en: "The sacred bird is adapted to the game's language as a protective presence tied to light and spiritual power."
          },
          context: {
            es: "Una incorporación directa del nombre y el imaginario del Hō-ō al videojuego.",
            en: "A direct incorporation of the Hō-ō's name and imagery into the video game."
          },
          sourceLabel: { es: "Nioh 2 — web oficial", en: "Nioh 2 — Official Site" },
          sourceUrl: "https://teamninja-studio.com/nioh2/en-uk/"
        },
        {
          id: "ho-o-kusunoki-garden-of-gods",
          categoryId: "anime-manga",
          title: { es: "Kusunoki's Garden of Gods — Hō-ō", en: "Kusunoki's Garden of Gods — Hō-ō" },
          franchise: { es: "Anime / Novela", en: "Anime / Novel" },
          classification: { es: "Referencia oficial explícita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-ho-o-kusunoki.png",
          imageFit: "contain",
          shortDescription: {
            es: "La obra presenta al Hō-ō como una de sus bestias sagradas, alternando entre una forma pequeña y su verdadera apariencia divina.",
            en: "The work presents the Hō-ō as one of its sacred beasts, shifting between a small form and its true divine appearance."
          },
          fullDescription: {
            es: "El personaje conserva el nombre 鳳凰 y su condición de ave sagrada dentro del jardín habitado por seres espirituales.",
            en: "The character retains the name 鳳凰 and its identity as a sacred bird within the garden inhabited by spiritual beings."
          },
          context: {
            es: "Una aparición oficial y literal del Hō-ō dentro de la narrativa.",
            en: "An official and literal appearance of the Hō-ō within the story."
          },
          sourceLabel: { es: "Kusunoki's Garden of Gods — personaje oficial", en: "Kusunoki's Garden of Gods — Official Character" },
          sourceUrl: "https://kusunokitei.com/chara/09.html"
        }
      ]
    },
    {
      id: "tora",
      number: "20",
      title: "Tora",
      kanji: "虎",
      image: "./assets/images/story-card-tora-tattoo.png",
      icon: "./assets/images/stories/cards/tora.png",
      intro: {
        es: "El tigre japonés aparece en la cultura popular como emblema de fuerza, coraje, protección, independencia y voluntad indomable.",
        en: "The Japanese tiger appears throughout pop culture as an emblem of strength, courage, protection, independence and indomitable will."
      },
      entries: [
        {
          id: "tora-monster-hunter-rise-magnamalo",
          categoryId: "video-games",
          title: "Monster Hunter Rise — Magnamalo",
          franchise: { es: "Videojuego", en: "Video Game" },
          classification: { es: "Eco visual del tigre", en: "Tiger Visual Echo" },
          image: "./assets/images/pop-tora-magnamalo.png",
          imageFit: "contain",
          shortDescription: {
            es: "Magnamalo combina una anatomía felina, colmillos y una presencia acorazada que evocan la ferocidad protectora del tigre.",
            en: "Magnamalo combines feline anatomy, fangs and an armored presence that evoke the tiger's protective ferocity."
          },
          fullDescription: {
            es: "Su diseño de gran depredador y su energía explosiva conectan visualmente con el Tora sin convertirlo en una adaptación literal.",
            en: "Its apex-predator design and explosive energy visually connect it with Tora without making it a literal adaptation."
          },
          context: {
            es: "Se presenta como paralelismo visual y simbólico, no como equivalencia folclórica confirmada.",
            en: "Presented as a visual and symbolic parallel, not as a confirmed folkloric equivalence."
          },
          sourceLabel: { es: "Monster Hunter Rise — Magnamalo oficial", en: "Monster Hunter Rise — Official Magnamalo" },
          sourceUrl: "https://www.monsterhunter.com/rise/us/monster/"
        },
        {
          id: "tora-tiger-and-bunny-wild-tiger",
          categoryId: "anime-manga",
          title: "Tiger & Bunny — Wild Tiger",
          franchise: { es: "Anime", en: "Anime" },
          classification: { es: "Referencia nominal explícita", en: "Explicit Naming Reference" },
          image: "./assets/images/pop-tora-wild-tiger.png",
          imageFit: "contain",
          shortDescription: {
            es: "Wild Tiger utiliza directamente al tigre como identidad heroica y símbolo de fuerza al servicio de los demás.",
            en: "Wild Tiger directly uses the tiger as a heroic identity and a symbol of strength in service of others."
          },
          fullDescription: {
            es: "Kotetsu Kaburagi adopta el nombre Wild Tiger y proyecta tenacidad, coraje y protección mediante su identidad de héroe.",
            en: "Kotetsu Kaburagi takes the name Wild Tiger and projects tenacity, courage and protection through his heroic identity."
          },
          context: {
            es: "Una referencia explícita al tigre construida desde el nombre y la función heroica.",
            en: "An explicit tiger reference built through both the name and heroic role."
          },
          sourceLabel: { es: "Tiger & Bunny 2 — Wild Tiger oficial", en: "Tiger & Bunny 2 — Official Wild Tiger" },
          sourceUrl: "https://www.tigerandbunny.net/TB2/character/hero.php?id=0"
        },
        {
          id: "tora-toradora-taiga-aisaka",
          categoryId: "anime-manga",
          title: "Toradora! — Taiga Aisaka",
          franchise: { es: "Anime / Manga", en: "Anime / Manga" },
          classification: { es: "Referencia nominal y simbólica", en: "Naming and Symbolic Reference" },
          image: "./assets/images/pop-tora-taiga-aisaka.png",
          imageFit: "contain",
          shortDescription: {
            es: "Taiga es conocida como la «Tigre de Bolsillo», un apodo que une su nombre y su temperamento feroz con la imagen del tigre.",
            en: "Taiga is known as the 'Palmtop Tiger,' linking her name and fierce temperament with the image of the tiger."
          },
          fullDescription: {
            es: "La serie transforma el simbolismo del tigre en un contraste cómico entre su pequeña estatura y una personalidad intensa e indomable.",
            en: "The series turns tiger symbolism into a comic contrast between her small stature and intense, indomitable personality."
          },
          context: {
            es: "El vínculo aparece expresamente en el apodo oficial del personaje.",
            en: "The connection appears explicitly in the character's official nickname."
          },
          sourceLabel: { es: "Toradora! — perfil oficial de Taiga", en: "Toradora! — Official Taiga Profile" },
          sourceUrl: "https://king-cr.jp/special/toradora/character.html"
        },
        {
          id: "tora-tiger-mask-w",
          categoryId: "anime-manga",
          title: "Tiger Mask W",
          franchise: { es: "Anime", en: "Anime" },
          classification: { es: "Referencia explícita", en: "Explicit Reference" },
          image: "./assets/images/pop-tora-tiger-mask-w.png",
          shortDescription: {
            es: "Tiger Mask convierte la máscara y el nombre del tigre en una identidad de combate asociada al valor y la determinación.",
            en: "Tiger Mask turns the tiger mask and name into a fighting identity associated with courage and determination."
          },
          fullDescription: {
            es: "La iconografía del tigre se integra en el héroe, su atuendo y el lenguaje visual del ring como emblema de fuerza indomable.",
            en: "Tiger iconography is embedded in the hero, costume and visual language of the ring as an emblem of indomitable strength."
          },
          context: {
            es: "Una utilización directa y central de la identidad del tigre.",
            en: "A direct and central use of tiger identity."
          },
          sourceLabel: { es: "Tiger Mask W — web oficial", en: "Tiger Mask W — Official Site" },
          sourceUrl: "https://www.toei-anim.co.jp/tv/tigermask_w/"
        },
        {
          id: "tora-ushio-and-tora",
          categoryId: "anime-manga",
          title: "Ushio & Tora — Tora",
          franchise: { es: "Anime / Manga", en: "Anime / Manga" },
          classification: { es: "Referencia explícita", en: "Explicit Reference" },
          image: "./assets/images/pop-tora-ushio-tora.png",
          imageFit: "contain",
          shortDescription: {
            es: "Tora es un poderoso yōkai de aspecto felino cuyo nombre y ferocidad remiten directamente al tigre.",
            en: "Tora is a powerful feline yōkai whose name and ferocity directly evoke the tiger."
          },
          fullDescription: {
            es: "La obra convierte al tigre en un compañero sobrenatural: feroz, orgulloso y protector a medida que crece su vínculo con Ushio.",
            en: "The story turns the tiger into a supernatural companion: fierce, proud and increasingly protective as his bond with Ushio grows."
          },
          context: {
            es: "La referencia es explícita en el nombre y en la construcción visual del personaje.",
            en: "The reference is explicit in both the name and visual construction of the character."
          },
          sourceLabel: { es: "Shogakukan — Ushio & Tora", en: "Shogakukan — Ushio & Tora" },
          sourceUrl: "https://e-comi.shogakukan.co.jp/books/091224810000d0000000"
        }
      ]
    },
    {
      id: "hebi",
      number: "21",
      title: "Hebi",
      kanji: "蛇",
      image: "./assets/images/stories/cards/hebi.png",
      icon: "./assets/images/story-hebi-banner.png",
      intro: {
        es: "La serpiente aparece en la cultura popular japonesa como imagen de transformación, renovación, peligro, conocimiento y poder oculto.",
        en: "The serpent appears throughout Japanese pop culture as an image of transformation, renewal, danger, knowledge and hidden power."
      },
      entries: [
        {
          id: "hebi-naruto-orochimaru",
          categoryId: "anime-manga",
          title: "Naruto — Orochimaru",
          franchise: { es: "Anime / Manga", en: "Anime / Manga" },
          classification: { es: "Conexión oficial fuerte", en: "Strong Official Connection" },
          image: "./assets/images/pop-hebi-naruto-orochimaru.jpg",
          imageFit: "contain",
          shortDescription: {
            es: "La web oficial de Naruto vincula directamente a Orochimaru con la serpiente blanca, la muda del cuerpo y el renacimiento mediante nuevos recipientes.",
            en: "Naruto's official site directly links Orochimaru with the white serpent, shedding the body and rebirth through new vessels."
          },
          fullDescription: {
            es: "En el episodio oficial «Ojo de Halcón», Orochimaru abandona su antiguo cuerpo y adopta la forma de una serpiente blanca mientras intenta apoderarse del cuerpo de Sasuke. Su técnica de inmortalidad prolonga esa idea mediante la transferencia de su conciencia a nuevos cuerpos.",
            en: "In the official episode 'Eye of the Hawk,' Orochimaru sheds his old body and takes the form of a white serpent while attempting to claim Sasuke's body. His immortality technique extends that idea through the transfer of his consciousness into new bodies."
          },
          context: {
            es: "La conexión es explícita en el material oficial: serpiente, piel abandonada, transformación corporal y reaparición forman parte central de la construcción del personaje.",
            en: "The connection is explicit in official material: serpent imagery, cast-off skin, bodily transformation and recurring return are central to the character."
          },
          sourceLabel: { es: "Naruto — episodio oficial", en: "Naruto — Official Episode" },
          sourceUrl: "https://naruto-official.com/en/anime/naruto2/list/01_558",
          secondarySourceLabel: { es: "Naruto — perfil oficial de Orochimaru", en: "Naruto — Official Orochimaru Profile" },
          secondarySourceUrl: "https://naruto-official.com/en/news/01_1629"
        },
        {
          id: "hebi-demon-slayer-obanai-iguro",
          categoryId: "anime-manga",
          title: "Demon Slayer — Obanai Iguro",
          franchise: { es: "Anime / Manga", en: "Anime / Manga" },
          classification: { es: "Referencia oficial explícita", en: "Explicit Official Reference" },
          image: "./assets/images/pop-hebi-demon-slayer-obanai.jpg",
          imageFit: "contain",
          shortDescription: {
            es: "El perfil oficial presenta a Obanai como Serpent Hashira y destaca que siempre está acompañado por su serpiente.",
            en: "The official profile presents Obanai as the Serpent Hashira and highlights that he is accompanied by his snake."
          },
          fullDescription: {
            es: "Obanai integra la serpiente en su rango, su silueta y su identidad visual. El título de Pilar de la Serpiente y la presencia constante del animal convierten el motivo en una referencia narrativa y gráfica directa.",
            en: "Obanai integrates the serpent into his rank, silhouette and visual identity. His title as the Serpent Hashira and the constant presence of the animal make the motif a direct narrative and graphic reference."
          },
          context: {
            es: "No es una asociación interpretativa: la denominación oficial del personaje y su descripción confirman expresamente el vínculo con la serpiente.",
            en: "This is not an interpretive association: the character's official title and description expressly confirm the serpent connection."
          },
          sourceLabel: { es: "Demon Slayer — personaje oficial", en: "Demon Slayer — Official Character" },
          sourceUrl: "https://demonslayer-anime.com/infinitycastle/character/",
          secondarySourceLabel: { es: "Kimetsu no Yaiba — perfil oficial japonés", en: "Kimetsu no Yaiba — Official Japanese Profile" },
          secondarySourceUrl: "https://kimetsu.com/anime/risshihen/character/?chara=obanai"
        }
      ]
    }
  ]
};
