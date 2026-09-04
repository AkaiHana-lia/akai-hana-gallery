(function addRaijinAndFujinStories() {
  const locales = window.AKAI_HANA_LOCALES;
  if (!locales?.es?.stories?.items || !locales?.en?.stories?.items) return;

  // Text follows the supplied editorial panels; artwork stays unmodified.
  const content = {
    raijin: {
      number: "23", title: "Raijin", japaneseName: "雷神",
      sizes: { card: [1086, 1448], banner: [1672, 941], lore: [1055, 1491] },
      es: {
        romanized: "El dios del trueno",
        lead: "Poder, tormenta y protección. Cuando el cielo ruge, el espíritu despierta.",
        keywords: ["raijin", "trueno", "rayos", "tormenta", "tambores", "protección", "雷神"],
        alt: "Raijin de cabello blanco rodeado de tambores, relámpagos y nubes oscuras.",
        sections: [
          { eyebrow: "Historia y leyenda", title: "El poder del cielo", paragraphs: ["Raijin es el dios japonés del trueno, los rayos y las tormentas. Su figura está asociada al poder del cielo y a la fuerza desatada de la naturaleza.", "Golpea sus tambores para crear el trueno y viaja entre nubes y tormentas. A menudo aparece junto a Fūjin, dios del viento: juntos representan la fuerza y el movimiento del cielo."] },
          { eyebrow: "Significados", title: "La fuerza para atravesar la tormenta", paragraphs: ["Su presencia puede ser temida, pero también respetada como fuerza protectora. En esta interpretación simboliza la energía interior para afrontar cambios y seguir adelante.", "Raijin acompaña a quienes buscan un emblema de determinación, transformación y respeto por la naturaleza."], list: ["Poder", "Energía", "Protección", "Fuerza interior", "Superar tormentas", "Determinación", "Respeto por la naturaleza"] },
          { eyebrow: "Colores y simbolismo", title: "Tambores, rayos y energía", paragraphs: ["Los tambores, el rayo, las nubes oscuras y el círculo de energía construyen su lenguaje visual: ritmo, movimiento y fuerza natural.", "En la ficha, negro expresa misterio y profundidad; rojo, energía y pasión; dorado, divinidad y autoridad; azul oscuro, tormenta e introspección; blanco, claridad y equilibrio."] },
          { eyebrow: "En el arte del tatuaje", title: "Una composición llena de movimiento", paragraphs: ["Raijin se adapta a espalda, pecho, manga o pierna. Sus tambores, rayos y nubes permiten composiciones dinámicas, con contraste y una presencia poderosa.", "Su imagen representa energía, protección y la fuerza para avanzar a través de las tormentas de la vida."] }
        ],
        quote: "Cuando el cielo ruge, el espíritu despierta."
      },
      en: {
        romanized: "The thunder god",
        lead: "Power, storm and protection. When the sky roars, the spirit awakens.",
        keywords: ["raijin", "thunder", "lightning", "storm", "drums", "protection", "雷神"],
        alt: "White-haired Raijin surrounded by drums, lightning and dark clouds.",
        sections: [
          { eyebrow: "History and legend", title: "The power of the sky", paragraphs: ["Raijin is the Japanese god of thunder, lightning and storms. His figure is associated with the power of the sky and the unleashed strength of nature.", "He strikes his drums to create thunder and travels among storm clouds. He often appears alongside Fūjin, the wind god: together they embody the sky's force and movement."] },
          { eyebrow: "Meanings", title: "The strength to weather the storm", paragraphs: ["His presence may inspire fear, but also respect as a protective force. In this interpretation, he symbolizes the inner energy to face change and keep moving forward.", "Raijin accompanies those seeking an emblem of determination, transformation and respect for nature."], list: ["Power", "Energy", "Protection", "Inner strength", "Weathering storms", "Determination", "Respect for nature"] },
          { eyebrow: "Colors and symbolism", title: "Drums, lightning and energy", paragraphs: ["Drums, lightning, dark clouds and a circle of energy form his visual language: rhythm, movement and natural force.", "In the panel, black expresses mystery and depth; red, energy and passion; gold, divinity and authority; dark blue, storms and introspection; white, clarity and balance."] },
          { eyebrow: "In tattoo art", title: "A composition full of movement", paragraphs: ["Raijin adapts to the back, chest, sleeve or leg. His drums, lightning and clouds allow dynamic compositions with contrast and a powerful presence.", "His image represents energy, protection and the strength to move through life's storms."] }
        ],
        quote: "When the sky roars, the spirit awakens."
      }
    },
    fujin: {
      number: "24", title: "Fūjin", japaneseName: "風神",
      sizes: { card: [1024, 1536], banner: [1774, 887], lore: [1024, 1535] },
      es: {
        romanized: "El dios del viento",
        lead: "Libertad, cambio, movimiento y adaptación. Fluye, adáptate, libérate.",
        keywords: ["fujin", "fūjin", "viento", "libertad", "cambio", "adaptación", "saco", "風神"],
        alt: "Fūjin de piel verde y cabello blanco con su saco de los vientos entre nubes y hojas.",
        sections: [
          { eyebrow: "Historia y significado", title: "El guardián de los vientos", paragraphs: ["Fūjin es el guardián de los vientos y las corrientes de aire. Viaja por el cielo con su gran saco de los vientos, trayendo cambio, movimiento y nuevos caminos.", "Su figura aparece junto a Raijin como complemento de la tormenta. En esta lectura simboliza el cambio inevitable y la capacidad de fluir con la vida."] },
          { eyebrow: "Significados", title: "Aprender a volar con el viento", paragraphs: ["No podemos detener el viento, pero podemos aprender a volar con él. Fūjin invita a encontrar libertad en la adaptación, en lugar de resistirse a todo cambio.", "Su movimiento abre rutas hacia nuevas oportunidades y recuerda que la vida está en transformación constante."], list: ["Libertad", "Cambio", "Movimiento", "Adaptación", "Nuevos caminos"] },
          { eyebrow: "Colores y elementos", title: "El saco de los vientos", paragraphs: ["Su gran saco contiene los vientos; nubes, hojas, pétalos y remolinos hacen visibles las corrientes que lo acompañan.", "En la ficha, verde esmeralda expresa naturaleza y crecimiento; azul profundo, cielo y libertad; blanco, aire y pureza; dorado, sabiduría y energía divina; gris o plata, niebla y transición."] },
          { eyebrow: "En el arte del tatuaje", title: "Flujo y dinamismo", paragraphs: ["Fūjin se adapta a mangas completas, espalda, pecho o piernas. Su cabello, su saco y las corrientes crean composiciones llenas de flujo y movimiento.", "Puede acompañar a Raijin en una composición de viento y trueno o protagonizar una pieza sobre libertad, cambio y adaptación."] }
        ],
        quote: "El viento no tiene forma, pero puede moldear montañas."
      },
      en: {
        romanized: "The wind god",
        lead: "Freedom, change, movement and adaptation. Flow, adapt, break free.",
        keywords: ["fujin", "fūjin", "wind", "freedom", "change", "adaptation", "wind bag", "風神"],
        alt: "Green-skinned, white-haired Fūjin carrying his wind bag among clouds and leaves.",
        sections: [
          { eyebrow: "History and meaning", title: "The guardian of the winds", paragraphs: ["Fūjin is the guardian of winds and air currents. He travels across the sky with his great wind bag, bringing change, movement and new paths.", "His figure appears alongside Raijin as a counterpart within the storm. In this reading, he symbolizes inevitable change and the ability to flow with life."] },
          { eyebrow: "Meanings", title: "Learning to fly with the wind", paragraphs: ["We cannot stop the wind, but we can learn to fly with it. Fūjin invites us to find freedom through adaptation rather than resisting every change.", "His movement opens routes towards new opportunities and reminds us that life is constantly transforming."], list: ["Freedom", "Change", "Movement", "Adaptation", "New paths"] },
          { eyebrow: "Colors and elements", title: "The wind bag", paragraphs: ["His great bag holds the winds; clouds, leaves, petals and whirlwinds make the accompanying currents visible.", "In the panel, emerald green expresses nature and growth; deep blue, sky and freedom; white, air and purity; gold, wisdom and divine energy; gray or silver, mist and transition."] },
          { eyebrow: "In tattoo art", title: "Flow and dynamism", paragraphs: ["Fūjin adapts to full sleeves, the back, chest or legs. His hair, bag and air currents create compositions full of flow and movement.", "He can accompany Raijin in a wind-and-thunder composition or stand alone in a piece about freedom, change and adaptation."] }
        ],
        quote: "The wind has no shape, yet it can sculpt mountains."
      }
    }
  };

  for (const locale of ["es", "en"]) {
    const incoming = Object.entries(content).map(([id, definition]) => {
      const text = definition[locale];
      const asset = (kind) => ({
        src: kind === "card" ? `./assets/images/stories/cards/${id}.png` : `./assets/images/story-${id}-${kind}.png`,
        width: definition.sizes[kind][0], height: definition.sizes[kind][1],
        alt: kind === "lore" ? `${definition.title} — ${locale === "es" ? "ficha ilustrada con historia, significados y tatuaje" : "illustrated panel with history, meanings and tattoo"}.` : text.alt
      });
      return {
        id, number: definition.number, title: definition.title, cardTitle: definition.title,
        japaneseName: definition.japaneseName,
        eyebrow: locale === "es" ? "Deidades y leyendas de Japón" : "Deities and legends of Japan",
        romanized: text.romanized, lead: text.lead,
        categories: ["legends", "symbols"], keywords: text.keywords, isNew: true,
        cardImage: { ...asset("card"), position: "50% 40%" },
        heroImage: { ...asset("banner"), position: "left center" },
        sections: text.sections,
        galleryTitle: locale === "es" ? `Galería de ${definition.title}` : `${definition.title} gallery`,
        gallery: [asset("banner"), asset("lore"), asset("card")], quote: text.quote
      };
    });
    locales[locale].stories.items = locales[locale].stories.items
      .filter((story) => !Object.hasOwn(content, story.id))
      .map((story) => ({ ...story, isNew: false }))
      .concat(incoming);
  }
})();
