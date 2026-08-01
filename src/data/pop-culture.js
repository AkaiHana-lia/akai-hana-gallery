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
      title: "Red Spider Lily",
      kanji: "彼岸花",
      image: "./assets/images/story-card-higanbana-tattoo.png",
      icon: "./assets/images/story-higanbana-cover.png",
      intro: {
        es: "La higanbana, o red spider lily, conecta duelo, despedida, recuerdo y el limite entre la vida y la muerte. Estas referencias se presentan con lenguaje prudente cuando no existe confirmacion explicita de autor.",
        en: "The higanbana, or red spider lily, connects mourning, farewell, remembrance and the boundary between life and death. These references use cautious wording when no explicit creator confirmation has been found."
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
            es: "Tras el enfrentamiento final de Zenitsu con Kaigaku, su vinculo emocional con su maestro fallecido Jigoro queda representado mediante una imagen llena de red spider lilies. La ilustracion oficial de primer aniversario de Ufotable para Infinity Castle, titulada Zenitsu and Grandpa, coloca a ambos personajes en un campo de higanbana.",
            en: "Following Zenitsu's final confrontation with Kaigaku, his emotional connection with his deceased master Jigoro is represented through imagery filled with red spider lilies. Ufotable's official first-anniversary artwork for Infinity Castle, titled Zenitsu and Grandpa, places the two characters within a field of higanbana."
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
    }
  ]
};
