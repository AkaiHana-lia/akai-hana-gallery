(function restructureGalleryCollections() {
  const locales = window.AKAI_HANA_LOCALES;
  if (!locales) return;

  const copy = {
    es: {
      worldLabel: "World Symbols",
      worldCategory: "Símbolos del mundo",
      worldStyle: "Iconografía universal, geometría simbólica y archivo cultural",
      worldShort: "Un archivo visual dedicado a símbolos que atraviesan culturas, épocas y formas de entender el mundo.",
      worldDescription: "Colección editorial de símbolos universales reinterpretados mediante tinta, grabado, geometría y una dirección visual negra, carmesí y dorada.",
      worldIncludes: "Investigación visual, composición simbólica, arte digital y archivo en alta resolución.",
      worldUses: "Ilustración, referencia artística, póster, portada y exploración cultural.",
      worldExamples: "Símbolos solares, lunares, naturales, protectores y geométricos.",
      worldAlt: "Composición negra, carmesí y dorada con símbolos universales del sol, la luna, el agua, la naturaleza y la geometría.",
      worldProjects: [
        {
          title: "Ankh",
          style: "Simbolismo egipcio y composición ornamental",
          shortDescription: "El símbolo egipcio de la vida, la eternidad y la continuidad del alma.",
          description: "Una interpretación editorial del Ankh en negro, carmesí y oro, acompañada por iconografía inspirada en el antiguo Egipto.",
          includes: "Composición vertical, ornamentación simbólica y acabado de metal dorado.",
          uses: "Referencia artística, póster, portada e inspiración para tatuaje.",
          examples: "Ankh, escarabajo, alas e iconografía egipcia.",
          tags: ["Egipto", "vida", "eternidad"]
        },
        {
          title: "Eye of Horus",
          style: "Iconografía egipcia y geometría protectora",
          shortDescription: "Símbolo egipcio de protección, visión y poder espiritual.",
          description: "El Ojo de Horus reinterpretado como emblema ceremonial con líneas doradas, piedra carmesí y detalles inspirados en el loto.",
          includes: "Composición vertical, emblema central y marco ornamental.",
          uses: "Referencia artística, póster, portada e inspiración para tatuaje.",
          examples: "Ojo de Horus, loto, alas y geometría circular.",
          tags: ["Egipto", "protección", "visión"]
        },
        {
          title: "Sak Yant",
          style: "Geometría ritual y arte tradicional tailandés",
          shortDescription: "Tatuaje sagrado tailandés asociado a protección, intención y fuerza espiritual.",
          description: "Composición inspirada en la tradición Sak Yant, con tigres guardianes, geometría ritual y trazos ornamentales dorados.",
          includes: "Ilustración vertical, simetría ceremonial y detalle lineal.",
          uses: "Archivo visual, estudio simbólico y referencia artística respetuosa.",
          examples: "Tigres guardianes, geometría yantra y flor de loto.",
          tags: ["Tailandia", "protección", "fuerza"]
        },
        {
          title: "Valknut",
          style: "Simbolismo nórdico y ornamentación rúnica",
          shortDescription: "Símbolo nórdico asociado al honor, la memoria y el vínculo entre vida y muerte.",
          description: "Interpretación del Valknut rodeada de cuervos, nudos nórdicos y una composición rúnica en oro envejecido.",
          includes: "Ilustración vertical, nudos ornamentales y marco simbólico.",
          uses: "Referencia artística, póster, portada e inspiración para tatuaje.",
          examples: "Valknut, cuervos, runas y nudos nórdicos.",
          tags: ["Nórdico", "memoria", "honor"]
        },
        {
          title: "Hamsa",
          style: "Ornamentación mediterránea y geometría protectora",
          shortDescription: "Símbolo de protección, intuición y energía positiva.",
          description: "La mano Hamsa convertida en una pieza ornamental de gran detalle, con ojo central, motivos botánicos y acentos carmesí.",
          includes: "Composición vertical, filigrana dorada y geometría simbólica.",
          uses: "Referencia artística, póster, portada e inspiración para tatuaje.",
          examples: "Mano Hamsa, ojo protector, lunas y motivos florales.",
          tags: ["protección", "intuición", "equilibrio"]
        },
        {
          title: "Dreamcatcher",
          style: "Composición espiritual inspirada en el atrapasueños",
          shortDescription: "Protección, sabiduría, equilibrio y conexión con el mundo de los sueños.",
          description: "Una composición visual centrada en el atrapasueños, con lobo, luna, plumas y una atmósfera nocturna de carácter ceremonial.",
          includes: "Ilustración vertical, retrato animal y ornamentación detallada.",
          uses: "Archivo visual, referencia artística y exploración simbólica respetuosa.",
          examples: "Atrapasueños, lobo, plumas, luna y bosque.",
          tags: ["sueños", "protección", "sabiduría"]
        }
      ],
      photoLabel: "PHOTO",
      photoDescription: "Retratos digitales y composiciones fotográficas con identidad, atmósfera y acabado editorial.",
      brandLabel: "BRAND DESIGN",
      brandDescription: "Identidades visuales, aplicaciones de marca y sistemas gráficos con dirección premium.",
      memoryLabel: "MEMORY ART",
      memoryDescription: "Recuerdos, personas y relatos personales convertidos en piezas visuales para conservar y compartir.",
      wallpapersLabel: "Wallpapers",
      wallpapersCategory: "Wallpapers",
      photoCategory: "Foto",
      brandCategory: "Brand Design",
      memoryCategory: "Memory Art"
    },
    en: {
      worldLabel: "World Symbols",
      worldCategory: "World Symbols",
      worldStyle: "Universal iconography, symbolic geometry and cultural archive",
      worldShort: "A visual archive devoted to symbols that travel across cultures, eras and ways of understanding the world.",
      worldDescription: "An editorial collection of universal symbols reimagined through ink, engraving, geometry and a black, crimson and gold art direction.",
      worldIncludes: "Visual research, symbolic composition, digital artwork and a high-resolution archive.",
      worldUses: "Illustration, artistic reference, posters, covers and cultural exploration.",
      worldExamples: "Solar, lunar, natural, protective and geometric symbols.",
      worldAlt: "Black, crimson and gold composition with universal symbols of the sun, moon, water, nature and geometry.",
      worldProjects: [
        {
          title: "Ankh",
          style: "Egyptian symbolism and ornamental composition",
          shortDescription: "The Egyptian symbol of life, eternity and the continuity of the soul.",
          description: "An editorial interpretation of the Ankh in black, crimson and gold, accompanied by iconography inspired by ancient Egypt.",
          includes: "Vertical composition, symbolic ornament and a polished gold-metal finish.",
          uses: "Art reference, poster, cover and tattoo inspiration.",
          examples: "Ankh, scarab, wings and Egyptian iconography.",
          tags: ["Egypt", "life", "eternity"]
        },
        {
          title: "Eye of Horus",
          style: "Egyptian iconography and protective geometry",
          shortDescription: "An Egyptian symbol of protection, vision and spiritual power.",
          description: "The Eye of Horus reimagined as a ceremonial emblem with gold lines, a crimson stone and lotus-inspired details.",
          includes: "Vertical composition, central emblem and ornamental frame.",
          uses: "Art reference, poster, cover and tattoo inspiration.",
          examples: "Eye of Horus, lotus, wings and circular geometry.",
          tags: ["Egypt", "protection", "vision"]
        },
        {
          title: "Sak Yant",
          style: "Ritual geometry and traditional Thai art",
          shortDescription: "Sacred Thai tattoo art associated with protection, intention and spiritual strength.",
          description: "A composition inspired by the Sak Yant tradition, featuring guardian tigers, ritual geometry and ornate gold linework.",
          includes: "Vertical illustration, ceremonial symmetry and detailed linework.",
          uses: "Visual archive, symbolic study and respectful artistic reference.",
          examples: "Guardian tigers, yantra geometry and lotus flower.",
          tags: ["Thailand", "protection", "strength"]
        },
        {
          title: "Valknut",
          style: "Norse symbolism and runic ornament",
          shortDescription: "A Norse symbol associated with honor, memory and the bond between life and death.",
          description: "An interpretation of the Valknut surrounded by ravens, Norse knots and an aged-gold runic composition.",
          includes: "Vertical illustration, ornamental knots and symbolic framing.",
          uses: "Art reference, poster, cover and tattoo inspiration.",
          examples: "Valknut, ravens, runes and Norse knots.",
          tags: ["Norse", "memory", "honor"]
        },
        {
          title: "Hamsa",
          style: "Mediterranean ornament and protective geometry",
          shortDescription: "A symbol of protection, intuition and positive energy.",
          description: "The Hamsa hand transformed into a highly detailed ornamental piece with a central eye, botanical motifs and crimson accents.",
          includes: "Vertical composition, gold filigree and symbolic geometry.",
          uses: "Art reference, poster, cover and tattoo inspiration.",
          examples: "Hamsa hand, protective eye, moons and floral motifs.",
          tags: ["protection", "intuition", "balance"]
        },
        {
          title: "Dreamcatcher",
          style: "Spiritual composition inspired by the dreamcatcher",
          shortDescription: "Protection, wisdom, balance and a connection to the world of dreams.",
          description: "A visual composition centred on the dreamcatcher, with a wolf, moon, feathers and a ceremonial nocturnal atmosphere.",
          includes: "Vertical illustration, animal portrait and detailed ornament.",
          uses: "Visual archive, artistic reference and respectful symbolic exploration.",
          examples: "Dreamcatcher, wolf, feathers, moon and forest.",
          tags: ["dreams", "protection", "wisdom"]
        }
      ],
      photoLabel: "PHOTO",
      photoDescription: "Digital portraits and photographic compositions with identity, atmosphere and an editorial finish.",
      brandLabel: "BRAND DESIGN",
      brandDescription: "Visual identities, brand applications and graphic systems with premium art direction.",
      memoryLabel: "MEMORY ART",
      memoryDescription: "Memories, people and personal stories transformed into visual pieces to preserve and share.",
      wallpapersLabel: "Wallpapers",
      wallpapersCategory: "Wallpapers",
      photoCategory: "Photo",
      brandCategory: "Brand Design",
      memoryCategory: "Memory Art"
    }
  };

  function applyGalleryRestructure(dictionary, locale) {
    const gallery = dictionary?.gallery;
    if (!gallery?.items || !Array.isArray(dictionary.categories)) return dictionary;
    const text = copy[locale];

    const retainedCategories = dictionary.categories.filter((category) => (
      category.id !== "avatar-3d"
      && category.id !== "brand-design"
      && category.id !== "world-symbols"
      && category.id !== "wallpapers"
    ));
    const customIndex = retainedCategories.findIndex((category) => category.id === "custom-creations");
    retainedCategories.splice(customIndex + 1, 0, { id: "world-symbols", label: text.worldLabel });
    const animeIndex = retainedCategories.findIndex((category) => category.id === "anime");
    retainedCategories.splice(animeIndex + 1, 0, { id: "wallpapers", label: text.wallpapersLabel });
    const wallpapersIndex = retainedCategories.findIndex((category) => category.id === "wallpapers");
    retainedCategories.splice(wallpapersIndex + 1, 0, { id: "brand-design", label: text.brandCategory });
    dictionary.categories = retainedCategories;

    gallery.items.forEach((item) => {
      if (item.categoryId === "custom-creations" && item.familyId === "wallpapers") {
        item.categoryId = "wallpapers";
        item.category = text.wallpapersCategory;
        delete item.familyId;
      } else if (item.categoryId === "avatar-3d") {
        item.categoryId = "custom-creations";
        item.familyId = "photo";
        item.category = text.photoCategory;
        item.collectionLabel = text.photoLabel;
        delete item.isCover;
      } else if (item.categoryId === "brand-design" || item.familyId === "brand-design") {
        item.categoryId = "brand-design";
        item.category = text.brandCategory;
        delete item.familyId;
        delete item.collectionLabel;
        if (item.id === "TD-006") {
          item.isCover = true;
        } else {
          delete item.isCover;
        }
      } else if (item.categoryId === "custom-creations" && item.familyId && item.familyId !== "wallpapers") {
        item.familyId = "memory-art";
        item.category = text.memoryCategory;
        item.collectionLabel = text.memoryLabel;
      }
    });

    const worldCover = {
      id: "WS-000",
      title: text.worldLabel,
      isCover: true,
      categoryId: "world-symbols",
      category: text.worldCategory,
      style: text.worldStyle,
      shortDescription: text.worldShort,
      description: text.worldDescription,
      includes: text.worldIncludes,
      uses: text.worldUses,
      examples: text.worldExamples,
      tags: ["symbols", "culture", "iconography"],
      image: {
        src: "./assets/images/gallery/world-symbols-cover.png",
        width: 1086,
        height: 1448,
        alt: text.worldAlt
      }
    };
    const worldAltText = locale === "es"
      ? [
          "Ankh ornamental en negro, carmesí y oro.",
          "Ojo de Horus ornamental en negro, carmesí y oro.",
          "Composición Sak Yant con tigres guardianes y geometría ritual.",
          "Valknut dorado rodeado de cuervos, runas y nudos nórdicos.",
          "Mano Hamsa ornamental con ojo protector y detalles florales.",
          "Atrapasueños con lobo, plumas y luna en una composición nocturna."
        ]
      : [
          "Ornamental Ankh in black, crimson and gold.",
          "Ornamental Eye of Horus in black, crimson and gold.",
          "Sak Yant composition with guardian tigers and ritual geometry.",
          "Golden Valknut surrounded by ravens, runes and Norse knots.",
          "Ornamental Hamsa hand with a protective eye and floral details.",
          "Dreamcatcher with a wolf, feathers and moon in a nocturnal composition."
        ];
    const worldImages = [
      { src: "./assets/images/gallery/world-symbol-ankh.png", width: 1122, height: 1402 },
      { src: "./assets/images/gallery/world-symbol-eye-of-horus.png", width: 1122, height: 1402 },
      { src: "./assets/images/gallery/world-symbol-sak-yant.png", width: 1024, height: 1536 },
      { src: "./assets/images/gallery/world-symbol-valknut.png", width: 1024, height: 1536 },
      { src: "./assets/images/gallery/world-symbol-hamsa.png", width: 1024, height: 1536 },
      { src: "./assets/images/gallery/world-symbol-dreamcatcher.png", width: 1024, height: 1536 }
    ];
    const worldProjects = text.worldProjects.map((project, index) => ({
      id: `WS-00${index + 1}`,
      ...project,
      categoryId: "world-symbols",
      category: text.worldCategory,
      collectionLabel: "WORLD SYMBOLS",
      image: { ...worldImages[index], alt: worldAltText[index] }
    }));
    const worldProjectIds = new Set([worldCover.id, ...worldProjects.map((project) => project.id)]);
    gallery.items = gallery.items
      .filter((item) => !worldProjectIds.has(item.id))
      .concat(worldCover, ...worldProjects);

    gallery.customCreations = gallery.customCreations || {};
    gallery.customCreations.families = [
      { id: "photo", label: text.photoLabel, description: text.photoDescription, coverItemId: "AV-000" },
      { id: "memory-art", label: text.memoryLabel, description: text.memoryDescription, coverItemId: "CC-002" }
    ];

    return dictionary;
  }

  window.AKAI_HANA_RESTRUCTURE_GALLERY = applyGalleryRestructure;

  for (const locale of ["es", "en"]) {
    applyGalleryRestructure(locales[locale], locale);
  }
})();
