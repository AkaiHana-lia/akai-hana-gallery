(function addHebiAndSakuraStories() {
  const locales = window.AKAI_HANA_LOCALES;
  if (!locales?.es?.stories?.items || !locales?.en?.stories?.items) return;

  const stories = {
    es: [
      {
        id: "hebi",
        number: "21",
        title: "Hebi",
        cardTitle: "Hebi",
        eyebrow: "Criaturas y símbolos de Japón",
        japaneseName: "蛇",
        romanized: "La serpiente japonesa",
        lead: "Transformación, protección y renacimiento. Hebi muda su piel y recuerda que todo cambio puede convertirse en una nueva forma de poder.",
        categories: ["creatures", "legends", "symbols"],
        keywords: ["hebi", "serpiente", "snake", "muda", "renacimiento", "transformación", "protección", "benzaiten", "蛇"],
        isNew: true,
        cardImage: {
          src: "./assets/images/stories/cards/hebi.png",
          width: 1024,
          height: 1536,
          alt: "Serpiente japonesa negra entre peonías, arces rojos, bambú, luna y un torii.",
          position: "50% 48%"
        },
        heroImage: {
          src: "./assets/images/story-hebi-banner.png",
          width: 1916,
          height: 821,
          alt: "Banner de Hebi con serpiente japonesa, luna, torii, bambú y peonías.",
          position: "left center"
        },
        sections: [
          {
            eyebrow: "Historia y leyenda",
            title: "La piel cae; el espíritu permanece",
            paragraphs: [
              "Hebi significa serpiente en japonés. En el folklore y en el arte del tatuaje representa transformación, renovación, protección, sabiduría y poder oculto.",
              "La serpiente está asociada al cambio porque muda su piel y renace. En algunas tradiciones japonesas, las serpientes blancas son consideradas sagradas y están vinculadas a Benzaiten, diosa de la prosperidad, el arte y la buena fortuna."
            ]
          },
          {
            eyebrow: "Significados",
            title: "Transformación y poder silencioso",
            paragraphs: [
              "Hebi acompaña a quienes han sobrevivido al cambio, buscan protección o desean abrazar el renacer con elegancia y profundidad.",
              "Su imagen puede ser temida por su fuerza, pero también respetada como guardiana ancestral, protectora y portadora de conocimiento."
            ],
            list: ["Transformación", "Renacimiento", "Protección", "Sabiduría", "Energía femenina", "Poder oculto"]
          },
          {
            eyebrow: "Colores y simbolismo",
            title: "Naturaleza, misterio y energía sagrada",
            paragraphs: [
              "Negro expresa misterio y protección; rojo, pasión, fuerza y peligro; blanco, pureza y espíritu sagrado; verde, renovación y naturaleza; dorado, fortuna, valor y energía divina.",
              "La muda de piel habla de renacer. Colmillos y lengua bífida evocan defensa e intuición; luna, agua y olas representan ciclos y fluidez; peonías o crisantemos aportan belleza, honor y equilibrio."
            ]
          },
          {
            eyebrow: "En el arte del tatuaje",
            title: "Movimiento que se adapta al cuerpo",
            paragraphs: [
              "Hebi funciona de maravilla en mangas completas, piezas de espalda, pecho, muslo o composiciones completas.",
              "Su cuerpo se adapta con fluidez a la anatomía y combina a la perfección con flores, luna, agua, humo y bambú, transmitiendo sensualidad, movimiento y un simbolismo poderoso."
            ]
          }
        ],
        galleryTitle: "Galería de Hebi",
        gallery: [
          { src: "./assets/images/story-hebi-banner.png", width: 1916, height: 821, alt: "Banner artístico de Hebi con serpiente, flores y paisaje japonés." },
          { src: "./assets/images/story-hebi-lore.png", width: 1122, height: 1402, alt: "Panel completo de Hebi con historia, significados, simbolismo y ejemplo de tatuaje." },
          { src: "./assets/images/story-hebi-concepts.png", width: 1122, height: 1402, alt: "Seis conceptos de tatuaje japonés inspirados en Hebi." },
          { src: "./assets/images/stories/cards/hebi.png", width: 1024, height: 1536, alt: "Ilustración vertical de Hebi entre peonías, arces, bambú y luna." }
        ],
        quote: "Quien teme la muda, no conoce el renacer."
      },
      {
        id: "sakura",
        number: "22",
        title: "Sakura",
        cardTitle: "Sakura",
        eyebrow: "Flores y símbolos de Japón",
        japaneseName: "桜",
        romanized: "La belleza de lo efímero",
        lead: "Vida, belleza, cambio e impermanencia. Sakura recuerda que la verdadera belleza reside en lo fugaz y que cada caída anuncia un nuevo comienzo.",
        categories: ["symbols"],
        keywords: ["sakura", "flor de cerezo", "cherry blossom", "mono no aware", "belleza", "vida", "cambio", "impermanencia", "renacimiento", "桜"],
        isNew: true,
        cardImage: {
          src: "./assets/images/stories/cards/sakura.png",
          width: 1024,
          height: 1536,
          alt: "Mujer japonesa con kimono negro bajo los cerezos en flor y una luna rosa.",
          position: "50% 44%"
        },
        heroImage: {
          src: "./assets/images/story-sakura-banner.png",
          width: 1774,
          height: 887,
          alt: "Banner de Sakura con mujer japonesa, cerezos, luna rosa, torii y pagoda.",
          position: "left center"
        },
        sections: [
          {
            eyebrow: "Historia y significado",
            title: "La belleza vive precisamente porque no es eterna",
            paragraphs: [
              "El sakura, la flor del cerezo, ocupa un lugar especial en la cultura japonesa desde hace siglos y simboliza la naturaleza transitoria de la vida.",
              "Representa el concepto de mono no aware: la sensibilidad ante la belleza efímera. Cada primavera, su floración celebra la vida sabiendo que pronto caerán sus pétalos y nos invita a vivir el presente."
            ]
          },
          {
            eyebrow: "Significados",
            title: "Belleza, memoria y esperanza",
            paragraphs: [
              "Sakura expresa la belleza más pura de la naturaleza, la impermanencia y el renacimiento que comienza con cada caída.",
              "También guarda amor y memoria —recuerdos que florecen en el corazón— y la esperanza de nuevos comienzos."
            ],
            list: ["Belleza", "Impermanencia", "Renacimiento", "Amor y memoria", "Esperanza"]
          },
          {
            eyebrow: "Colores y elementos",
            title: "Delicadeza, claridad y fuerza vital",
            paragraphs: [
              "Rosa representa delicadeza, amor, feminidad y ternura; blanco, pureza, claridad, verdad y nuevos comienzos; rojo, pasión, fuerza vital, energía y protección.",
              "Negro o gris aporta equilibrio, sobriedad, contraste y profundidad; oro expresa luz, espiritualidad, valor y sabiduría. Sakura combina especialmente bien con dragón, koi, Hebi, Tora y Hō-ō."
            ]
          },
          {
            eyebrow: "En el arte del tatuaje",
            title: "Una flor que acompaña cualquier composición",
            paragraphs: [
              "El sakura es uno de los motivos más populares del tatuaje japonés y se adapta a cualquier estilo, tamaño y parte del cuerpo.",
              "Sus pétalos aportan elegancia, movimiento y significado profundo, tanto en una rama minimalista como en grandes composiciones de Irezumi."
            ]
          }
        ],
        galleryTitle: "Galería de Sakura",
        gallery: [
          { src: "./assets/images/story-sakura-banner.png", width: 1774, height: 887, alt: "Banner artístico de Sakura bajo una luna rosa y cerezos en flor." },
          { src: "./assets/images/story-sakura-lore.png", width: 1024, height: 1536, alt: "Panel completo de Sakura con historia, significados, colores y ejemplo de tatuaje." },
          { src: "./assets/images/story-sakura-concepts.png", width: 1122, height: 1402, alt: "Seis conceptos de tatuaje inspirados en la flor de Sakura." },
          { src: "./assets/images/stories/cards/sakura.png", width: 1024, height: 1536, alt: "Ilustración vertical de una mujer con kimono entre flores de Sakura." }
        ],
        quote: "Como los pétalos del sakura, nuestra vida es bella porque no es eterna."
      }
    ],
    en: [
      {
        id: "hebi",
        number: "21",
        title: "Hebi",
        cardTitle: "Hebi",
        eyebrow: "Creatures and symbols of Japan",
        japaneseName: "蛇",
        romanized: "The Japanese serpent",
        lead: "Transformation, protection and rebirth. Hebi sheds its skin and reminds us that every change can become a new form of power.",
        categories: ["creatures", "legends", "symbols"],
        keywords: ["hebi", "serpent", "snake", "shedding", "rebirth", "transformation", "protection", "benzaiten", "蛇"],
        isNew: true,
        cardImage: { src: "./assets/images/stories/cards/hebi.png", width: 1024, height: 1536, alt: "Black Japanese serpent among peonies, red maples, bamboo, moon and a torii.", position: "50% 48%" },
        heroImage: { src: "./assets/images/story-hebi-banner.png", width: 1916, height: 821, alt: "Hebi banner with Japanese serpent, moon, torii, bamboo and peonies.", position: "left center" },
        sections: [
          { eyebrow: "History and legend", title: "The skin falls; the spirit remains", paragraphs: ["Hebi means serpent in Japanese. In folklore and tattoo art it represents transformation, renewal, protection, wisdom and hidden power.", "The serpent is associated with change because it sheds its skin and is reborn. In some Japanese traditions, white snakes are sacred and linked to Benzaiten, goddess of prosperity, art and good fortune."] },
          { eyebrow: "Meanings", title: "Transformation and silent power", paragraphs: ["Hebi accompanies those who have survived change, seek protection or wish to embrace rebirth with elegance and depth.", "Its image may be feared for its strength, yet it is also respected as an ancestral guardian, protector and bearer of knowledge."], list: ["Transformation", "Rebirth", "Protection", "Wisdom", "Feminine energy", "Hidden power"] },
          { eyebrow: "Colors and symbolism", title: "Nature, mystery and sacred energy", paragraphs: ["Black expresses mystery and protection; red, passion, strength and danger; white, purity and sacred spirit; green, renewal and nature; gold, fortune, courage and divine energy.", "Shedding skin speaks of rebirth. Fangs and a forked tongue evoke defense and intuition; moon, water and waves represent cycles and fluidity; peonies or chrysanthemums add beauty, honor and balance."] },
          { eyebrow: "In tattoo art", title: "Movement shaped around the body", paragraphs: ["Hebi works beautifully in full sleeves, back pieces, chest, thigh or complete compositions.", "Its body flows naturally with the anatomy and combines perfectly with flowers, moon, water, smoke and bamboo, conveying sensuality, movement and powerful symbolism."] }
        ],
        galleryTitle: "Hebi gallery",
        gallery: [
          { src: "./assets/images/story-hebi-banner.png", width: 1916, height: 821, alt: "Artistic Hebi banner with serpent, flowers and Japanese landscape." },
          { src: "./assets/images/story-hebi-lore.png", width: 1122, height: 1402, alt: "Complete Hebi panel with history, meanings, symbolism and tattoo example." },
          { src: "./assets/images/story-hebi-concepts.png", width: 1122, height: 1402, alt: "Six Japanese tattoo concepts inspired by Hebi." },
          { src: "./assets/images/stories/cards/hebi.png", width: 1024, height: 1536, alt: "Vertical Hebi illustration among peonies, maples, bamboo and moon." }
        ],
        quote: "Those who fear the shedding have never known rebirth."
      },
      {
        id: "sakura",
        number: "22",
        title: "Sakura",
        cardTitle: "Sakura",
        eyebrow: "Flowers and symbols of Japan",
        japaneseName: "桜",
        romanized: "The beauty of impermanence",
        lead: "Life, beauty, change and impermanence. Sakura reminds us that true beauty lies in what is fleeting and that every fall announces a new beginning.",
        categories: ["symbols"],
        keywords: ["sakura", "cherry blossom", "mono no aware", "beauty", "life", "change", "impermanence", "rebirth", "桜"],
        isNew: true,
        cardImage: { src: "./assets/images/stories/cards/sakura.png", width: 1024, height: 1536, alt: "Japanese woman in a black kimono beneath cherry blossoms and a pink moon.", position: "50% 44%" },
        heroImage: { src: "./assets/images/story-sakura-banner.png", width: 1774, height: 887, alt: "Sakura banner with Japanese woman, cherry blossoms, pink moon, torii and pagoda.", position: "left center" },
        sections: [
          { eyebrow: "History and meaning", title: "Beauty lives precisely because it is not eternal", paragraphs: ["Sakura, the cherry blossom, has held a special place in Japanese culture for centuries and symbolizes the transitory nature of life.", "It represents mono no aware: sensitivity to fleeting beauty. Each spring, its bloom celebrates life in the knowledge that the petals will soon fall, inviting us to live in the present."] },
          { eyebrow: "Meanings", title: "Beauty, memory and hope", paragraphs: ["Sakura expresses nature's purest beauty, impermanence and the rebirth that begins with every fall.", "It also holds love and memory—remembrances that bloom in the heart—and the hope of new beginnings."], list: ["Beauty", "Impermanence", "Rebirth", "Love and memory", "Hope"] },
          { eyebrow: "Colors and elements", title: "Delicacy, clarity and vital strength", paragraphs: ["Pink represents delicacy, love, femininity and tenderness; white, purity, clarity, truth and new beginnings; red, passion, vital strength, energy and protection.", "Black or gray brings balance, sobriety, contrast and depth; gold expresses light, spirituality, courage and wisdom. Sakura pairs especially well with dragon, koi, Hebi, Tora and Hō-ō."] },
          { eyebrow: "In tattoo art", title: "A flower that accompanies any composition", paragraphs: ["Sakura is one of the most popular motifs in Japanese tattooing and adapts to any style, size and part of the body.", "Its petals bring elegance, movement and deep meaning, from a minimalist branch to large Irezumi compositions."] }
        ],
        galleryTitle: "Sakura gallery",
        gallery: [
          { src: "./assets/images/story-sakura-banner.png", width: 1774, height: 887, alt: "Artistic Sakura banner beneath a pink moon and cherry blossoms." },
          { src: "./assets/images/story-sakura-lore.png", width: 1024, height: 1536, alt: "Complete Sakura panel with history, meanings, colors and tattoo example." },
          { src: "./assets/images/story-sakura-concepts.png", width: 1122, height: 1402, alt: "Six tattoo concepts inspired by Sakura blossoms." },
          { src: "./assets/images/stories/cards/sakura.png", width: 1024, height: 1536, alt: "Vertical illustration of a kimono-clad woman among Sakura blossoms." }
        ],
        quote: "Like sakura petals, our lives are beautiful because they are not eternal."
      }
    ]
  };

  for (const locale of ["es", "en"]) {
    const items = locales[locale].stories.items;
    const incomingIds = new Set(stories[locale].map((story) => story.id));
    locales[locale].stories.items = items.filter((story) => !incomingIds.has(story.id)).concat(stories[locale]);
  }
})();
