window.AKAI_HANA_POP_CULTURE = {
  defaultTheme: "kitsune",
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
      id: "kitsune",
      number: "01",
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
      number: "02",
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
      number: "03",
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
      number: "04",
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
      number: "05",
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
      number: "06",
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
      number: "07",
      title: "Tsuru",
      kanji: "鶴",
      image: "./assets/images/story-card-tsuru-tattoo.png",
      icon: "./assets/images/story-tsuru-cover.png",
      intro: {
        es: "Tsuru no Ongaeshi, la gratitud de la grulla, habla de bondad, sacrificio y promesas. Estas conexiones muestran como la leyenda sigue reapareciendo en anime, videojuegos y drama CD.",
        en: "Tsuru no Ongaeshi, the Crane's Gratitude, speaks of kindness, sacrifice and promises. These connections show how the legend keeps reappearing in anime, video games and drama CDs."
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
    }
  ]
};
