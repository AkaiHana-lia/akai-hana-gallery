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
    { id: "anime-manga", label: { es: "Anime & Manga", en: "Anime & Manga" } },
    { id: "cinema", label: { es: "Cine", en: "Cinema" } },
    { id: "pokemon", label: { es: "Pokémon", en: "Pokémon" } }
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
        es: "Las conexiones pop culture se añadirán cuando haya referencias verificadas.",
        en: "Pop-culture connections will be added after verified references are provided."
      },
      entries: []
    },
    {
      id: "ryu",
      number: "03",
      title: "Ryu",
      kanji: "龍",
      image: "./assets/images/story-card-ryu-tattoo.png",
      icon: "./assets/images/story-ryu-cover.png",
      intro: {
        es: "Las conexiones pop culture se añadirán cuando haya referencias verificadas.",
        en: "Pop-culture connections will be added after verified references are provided."
      },
      entries: []
    },
    {
      id: "hannya",
      number: "04",
      title: "Hannya",
      kanji: "般若",
      image: "./assets/images/story-card-hannya-tattoo.png",
      icon: "./assets/images/story-hannya-cover.png",
      intro: {
        es: "Las conexiones pop culture se añadirán cuando haya referencias verificadas.",
        en: "Pop-culture connections will be added after verified references are provided."
      },
      entries: []
    },
    {
      id: "yuki-onna",
      number: "05",
      title: "Yuki-onna",
      kanji: "雪女",
      image: "./assets/images/story-card-yuki-onna.png",
      icon: "./assets/images/story-yuki-onna-cover.png",
      intro: {
        es: "Las conexiones pop culture se añadirán cuando haya referencias verificadas.",
        en: "Pop-culture connections will be added after verified references are provided."
      },
      entries: []
    },
    {
      id: "baku",
      number: "06",
      title: "Baku",
      kanji: "獏",
      image: "./assets/images/story-card-baku-tattoo.png",
      icon: "./assets/images/story-baku-cover.png",
      intro: {
        es: "Las conexiones pop culture se añadirán cuando haya referencias verificadas.",
        en: "Pop-culture connections will be added after verified references are provided."
      },
      entries: []
    },
    {
      id: "tsuru",
      number: "07",
      title: "Tsuru",
      kanji: "鶴",
      image: "./assets/images/story-card-tsuru-tattoo.png",
      icon: "./assets/images/story-tsuru-cover.png",
      intro: {
        es: "Las conexiones pop culture se añadirán cuando haya referencias verificadas.",
        en: "Pop-culture connections will be added after verified references are provided."
      },
      entries: []
    }
  ]
};
