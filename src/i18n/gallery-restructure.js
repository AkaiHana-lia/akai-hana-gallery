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
      photoLabel: "PHOTO",
      photoDescription: "Retratos digitales y composiciones fotográficas con identidad, atmósfera y acabado editorial.",
      brandLabel: "BRAND DESIGN",
      brandDescription: "Identidades visuales, aplicaciones de marca y sistemas gráficos con dirección premium.",
      memoryLabel: "MEMORY ART",
      memoryDescription: "Recuerdos, personas y relatos personales convertidos en piezas visuales para conservar y compartir.",
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
      photoLabel: "PHOTO",
      photoDescription: "Digital portraits and photographic compositions with identity, atmosphere and an editorial finish.",
      brandLabel: "BRAND DESIGN",
      brandDescription: "Visual identities, brand applications and graphic systems with premium art direction.",
      memoryLabel: "MEMORY ART",
      memoryDescription: "Memories, people and personal stories transformed into visual pieces to preserve and share.",
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
      category.id !== "avatar-3d" && category.id !== "brand-design" && category.id !== "world-symbols"
    ));
    const customIndex = retainedCategories.findIndex((category) => category.id === "custom-creations");
    retainedCategories.splice(customIndex + 1, 0, { id: "world-symbols", label: text.worldLabel });
    dictionary.categories = retainedCategories;

    gallery.items.forEach((item) => {
      if (item.categoryId === "avatar-3d") {
        item.categoryId = "custom-creations";
        item.familyId = "photo";
        item.category = text.photoCategory;
        item.collectionLabel = text.photoLabel;
        delete item.isCover;
      } else if (item.categoryId === "brand-design") {
        item.categoryId = "custom-creations";
        item.familyId = "brand-design";
        item.category = text.brandCategory;
        item.collectionLabel = text.brandLabel;
        delete item.isCover;
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
    gallery.items = gallery.items.filter((item) => item.id !== worldCover.id).concat(worldCover);

    gallery.customCreations = gallery.customCreations || {};
    gallery.customCreations.families = [
      {
        id: "wallpapers",
        label: "WALLPAPERS",
        description: locale === "es"
          ? "Fondos cinematográficos creados para escritorio, móvil y formatos digitales."
          : "Cinematic backgrounds created for desktop, mobile and digital formats.",
        coverItemId: "WP-001"
      },
      { id: "photo", label: text.photoLabel, description: text.photoDescription, coverItemId: "AV-000" },
      { id: "brand-design", label: text.brandLabel, description: text.brandDescription, coverItemId: "TD-006" },
      { id: "memory-art", label: text.memoryLabel, description: text.memoryDescription, coverItemId: "CC-002" }
    ];

    return dictionary;
  }

  window.AKAI_HANA_RESTRUCTURE_GALLERY = applyGalleryRestructure;

  for (const locale of ["es", "en"]) {
    applyGalleryRestructure(locales[locale], locale);
  }
})();
