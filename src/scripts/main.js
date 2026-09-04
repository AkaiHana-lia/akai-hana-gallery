const supportedLocales = ["es", "en"];
const defaultLocale = "es";
const siteOrigin = "https://akaihanagallery.com";
const discordInviteUrl = "https://discord.gg/95FXa8zfA";
const designRequestEmail = "akaihanadesing@gmail.com";

const body = document.body;
const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const languageButtons = Array.from(document.querySelectorAll("[data-lang]"));
const galleryCount = document.querySelector("[data-gallery-count]");
const contactSection = document.querySelector("#contact");
const contactForm = document.querySelector("[data-contact-form]");
const customDesignForm = document.querySelector("[data-custom-design-form]");
const messageField = document.querySelector("[data-message]");
const interestField = document.querySelector("[data-interest]");
const formStatus = document.querySelector("[data-form-status]");
const tattooFormStatus = document.querySelector("[data-tattoo-form-status]");
const schemaData = document.querySelector("#schema-data");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxPlaceholder = document.querySelector("[data-lightbox-placeholder]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxTitle = document.querySelector("[data-lightbox-title]");
const lightboxDescription = document.querySelector("[data-lightbox-description]");
const lightboxCategory = document.querySelector("[data-lightbox-category]");
const lightboxStyle = document.querySelector("[data-lightbox-style]");
const lightboxDetails = document.querySelector("[data-lightbox-details]");
const lightboxTags = document.querySelector("[data-lightbox-tags]");
const lightboxDiscordCta = document.querySelector("[data-lightbox-discord-cta]");
const lightboxCloseButtons = Array.from(document.querySelectorAll("[data-lightbox-close]"));
const lightboxPrevButton = document.querySelector("[data-lightbox-prev]");
const lightboxNextButton = document.querySelector("[data-lightbox-next]");

const mountPoints = {
  heroValues: document.querySelector("[data-hero-values]"),
  customDesignTags: document.querySelector("[data-custom-design-tags]"),
  filterBar: document.querySelector("[data-filter-bar]"),
  galleryGrid: document.querySelector("[data-gallery-grid]"),
  galleryCategoryHeader: document.querySelector("[data-gallery-category-header]"),
  storiesIndex: document.querySelector("[data-stories-index]"),
  storyReader: document.querySelector("[data-story-reader]"),
  storyDetail: document.querySelector("[data-story-detail]"),
  storyBack: document.querySelector("[data-story-back]"),
  popCultureThemes: document.querySelector("[data-pop-culture-themes]"),
  popCulturePagination: document.querySelector("[data-pop-culture-pagination]"),
  popCultureCurrent: document.querySelector("[data-pop-culture-current]"),
  popCultureTabs: document.querySelector("[data-pop-culture-tabs]"),
  popCultureConnections: document.querySelector("[data-pop-culture-connections]"),
  popCultureEmpty: document.querySelector("[data-pop-culture-empty]"),
  popCultureDetail: document.querySelector("[data-pop-culture-detail]"),
  popCultureDetailBody: document.querySelector("[data-pop-culture-detail-body]"),
  designOptions: document.querySelector("[data-design-options]"),
  collectionGrid: document.querySelector("[data-collection-grid]"),
  howItWorksList: document.querySelector("[data-how-it-works-list]"),
  metricsGrid: document.querySelector("[data-metrics-grid]"),
  merchList: document.querySelector("[data-merch-list]"),
  faqList: document.querySelector("[data-faq-list]")
};

let locale = getInitialLocale();
let dictionary = {};
let activeFilter = "all";
let activeGalleryFamily = null;
let catalogById = new Map();
let revealObserver = null;
let lightboxProjectId = null;
let lastFocusedElement = null;
let activeStoryId = null;
let activeStoryFilter = "all";
let visibleStoryCount = 24;
let activePopCultureThemeId = window.AKAI_HANA_POP_CULTURE?.defaultTheme || "kitsune";
let activePopCultureCategoryId = null;
const popCulturePageSize = 16;
let activePopCulturePage = getPopCulturePageFromUrl();

const storyLibraryFilters = ["all", "yokai", "creatures", "legends", "symbols"];
const storyCardImages = {
  higanbana: { src: "./assets/images/stories/cards/higanbana.png", width: 941, height: 1672 },
  kitsune: { src: "./assets/images/stories/cards/kitsune.png", width: 941, height: 1672 },
  koi: { src: "./assets/images/stories/cards/koi.png", width: 941, height: 1672 },
  ryu: { src: "./assets/images/stories/cards/ryu.png", width: 941, height: 1672 },
  hannya: { src: "./assets/images/stories/cards/hannya.png", width: 941, height: 1672 },
  "yuki-onna": { src: "./assets/images/stories/cards/yuki-onna.png", width: 941, height: 1672 },
  baku: { src: "./assets/images/stories/cards/baku.png", width: 941, height: 1672 },
  "tsuru-no-ongaeshi": { src: "./assets/images/stories/cards/tsuru-no-ongaeshi.png", width: 941, height: 1672 },
  "akai-ito": { src: "./assets/images/stories/cards/akai-ito.png", width: 941, height: 1672 },
  "shuten-doji": { src: "./assets/images/stories/cards/shuten-doji.png", width: 1024, height: 1536 },
  "kuchisake-onna": { src: "./assets/images/stories/cards/kuchisake-onna.png", width: 1023, height: 1537 },
  "nure-onna": { src: "./assets/images/stories/cards/nure-onna.png", width: 1023, height: 1537 },
  tengu: { src: "./assets/images/stories/cards/tengu.png", width: 1023, height: 1537 },
  "kaguya-hime": { src: "./assets/images/stories/cards/kaguya-hime.png", width: 1023, height: 1537 },
  jorogumo: { src: "./assets/images/stories/cards/jorogumo.png", width: 941, height: 1672 },
  yatagarasu: { src: "./assets/images/stories/cards/yatagarasu.png", width: 941, height: 1672 },
  nekomata: { src: "./assets/images/stories/cards/nekomata.png", width: 941, height: 1672 },
  kappa: { src: "./assets/images/stories/cards/kappa.png", width: 1023, height: 1537 },
  "ho-o": { src: "./assets/images/stories/cards/ho-o.png", width: 1023, height: 1537 },
  tora: { src: "./assets/images/stories/cards/tora.png", width: 1023, height: 1537 }
};
const storyLibraryMeta = {
  higanbana: {
    categories: ["symbols"],
    keywords: ["red spider lily", "spider lily", "higanbana", "lycoris", "flower", "death", "farewell", "memory", "symbol"]
  },
  kitsune: {
    categories: ["yokai", "creatures"],
    keywords: ["kitsune", "fox", "nine tails", "nine-tailed", "inari", "yokai", "creature", "transformation", "狐"]
  },
  koi: {
    categories: ["creatures", "symbols"],
    keywords: ["koi", "carp", "fish", "waterfall", "dragon gate", "perseverance", "transformation", "symbol", "鯉"]
  },
  ryu: {
    categories: ["creatures", "symbols"],
    keywords: ["ryu", "ryū", "dragon", "tatsu", "water", "protection", "power", "creature", "symbol", "龍"]
  },
  hannya: {
    categories: ["yokai", "symbols"],
    keywords: ["hannya", "mask", "noh", "oni", "jealousy", "pain", "rage", "symbol", "般若"]
  },
  "yuki-onna": {
    categories: ["yokai", "legends"],
    keywords: ["yuki-onna", "yuki onna", "snow", "winter", "woman of snow", "ghost", "yokai", "legend", "雪女"]
  },
  baku: {
    categories: ["yokai", "creatures"],
    keywords: ["baku", "dream", "nightmare", "eater", "tapir", "yokai", "creature", "獏"]
  },
  "tsuru-no-ongaeshi": {
    categories: ["legends", "creatures"],
    keywords: ["tsuru", "crane", "ongaeshi", "gratitude", "weaving", "legend", "creature", "鶴"]
  },
  "akai-ito": {
    categories: ["legends", "symbols"],
    keywords: ["akai ito", "red thread", "thread of fate", "destiny", "love", "bond", "legend", "symbol", "赤い糸"]
  },
  "shuten-doji": {
    categories: ["yokai", "legends"],
    keywords: ["shuten-doji", "shuten dōji", "oni", "demon", "sake", "mount oe", "raiko", "yokai", "legend", "酒呑童子"]
  },
  "kuchisake-onna": {
    categories: ["yokai", "legends"],
    keywords: ["kuchisake", "kuchisake-onna", "slit mouthed woman", "mask", "urban legend", "yokai", "legend", "口裂け女"]
  },
  "nure-onna": {
    categories: ["yokai", "creatures"],
    keywords: ["nure-onna", "wet woman", "water", "serpent", "snake", "river", "yokai", "creature", "濡女"]
  },
  tengu: {
    categories: ["yokai", "legends"],
    keywords: ["tengu", "mountain", "mountains", "forest", "guardian", "yamabushi", "wings", "feather fan", "pride", "discipline", "protection", "yokai", "legend", "天狗"],
  },
  "kaguya-hime": {
    categories: ["legends", "symbols"],
    keywords: ["kaguya-hime", "kaguya", "moon", "princess", "bamboo", "celestial", "beauty", "farewell", "nostalgia", "immortality", "legend", "symbol", "かぐや姫"],
  },
  jorogumo: {
    categories: ["yokai", "creatures"],
    keywords: ["jorogumo", "jorōgumo", "spider woman", "spider", "web", "seduction", "deception", "shamisen", "waterfall", "forest", "yokai", "creature", "絡新婦"]
  },
  yatagarasu: {
    categories: ["legends", "symbols", "creatures"],
    keywords: ["yatagarasu", "three-legged crow", "crow", "raven", "sun", "guide", "destiny", "protection", "victory", "divine", "legend", "symbol", "八咫烏"]
  },
  nekomata: {
    categories: ["yokai", "creatures"],
    keywords: ["nekomata", "two-tailed cat", "cat", "bakeneko", "spirit fire", "transformation", "protection", "yokai", "creature", "猫又"]
  },
  kappa: {
    categories: ["yokai", "creatures", "legends"],
    keywords: ["kappa", "river spirit", "water", "cucumber", "shell", "river", "respect", "yokai", "creature", "legend", "河童"]
  },
  "ho-o": {
    categories: ["creatures", "legends", "symbols"],
    keywords: ["ho-o", "hō-ō", "phoenix", "fenix", "fénix", "fire", "rebirth", "transformation", "prosperity", "creature", "legend", "symbol", "鳳凰"]
  },
  tora: {
    categories: ["creatures", "legends", "symbols"],
    keywords: ["tora", "tiger", "tigre", "strength", "courage", "protection", "guardian", "creature", "legend", "symbol", "虎"]
  }
};

function getInitialLocale() {
  const params = new URLSearchParams(window.location.search);
  const queryLocale = params.get("lang");
  const storedLocale = window.localStorage.getItem("akai-hana-locale");
  const browserLocale = window.navigator.language?.slice(0, 2);

  return [queryLocale, storedLocale, browserLocale].find((value) => supportedLocales.includes(value)) || defaultLocale;
}

async function loadDictionary(nextLocale) {
  const fallbackDictionary = window.AKAI_HANA_I18N?.[nextLocale] || window.AKAI_HANA_LOCALES?.[nextLocale];

  if (window.location.protocol === "file:" && fallbackDictionary) {
    return JSON.parse(JSON.stringify(fallbackDictionary));
  }

  let response;

  try {
    response = await fetch(`./src/i18n/${nextLocale}.json`, { cache: "no-cache" });
  } catch (error) {
    if (fallbackDictionary) return JSON.parse(JSON.stringify(fallbackDictionary));
    throw error;
  }

  if (!response.ok) {
    if (fallbackDictionary) return JSON.parse(JSON.stringify(fallbackDictionary));
    throw new Error(`Missing locale: ${nextLocale}`);
  }

  try {
    const loadedDictionary = await response.json();

    if (fallbackDictionary?.stories) {
      loadedDictionary.stories = JSON.parse(JSON.stringify(fallbackDictionary.stories));
    }

    return window.AKAI_HANA_RESTRUCTURE_GALLERY
      ? window.AKAI_HANA_RESTRUCTURE_GALLERY(loadedDictionary, nextLocale)
      : loadedDictionary;
  } catch (error) {
    if (fallbackDictionary) return JSON.parse(JSON.stringify(fallbackDictionary));
    throw error;
  }
}

function getValue(path, source = dictionary) {
  return path.split(".").reduce((value, key) => (value && value[key] !== undefined ? value[key] : undefined), source);
}

function translate(path) {
  const value = getValue(path);
  return typeof value === "string" ? value : "";
}

function interpolate(template, values = {}) {
  return template.replace(/\{(\w+)\}/g, (_, key) => (values[key] === undefined ? "" : values[key]));
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function clear(element) {
  if (!element) return;
  element.replaceChildren();
}

function createElement(tag, options = {}) {
  const element = document.createElement(tag);

  if (options.className) element.className = options.className;
  if (options.text !== undefined) element.textContent = options.text;
  if (options.htmlFor) element.htmlFor = options.htmlFor;
  if (options.attributes) {
    Object.entries(options.attributes).forEach(([name, value]) => {
      if (value !== undefined && value !== null) element.setAttribute(name, value);
    });
  }

  return element;
}

function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = translate(element.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(";").forEach((rule) => {
      const [attribute, key] = rule.split(":");
      if (attribute && key) element.setAttribute(attribute.trim(), translate(key.trim()));
    });
  });

  updateNavToggleLabel();
  syncLivingHeroTitle();
}

function updateNavToggleLabel() {
  if (!navToggle) return;
  const isOpen = body.classList.contains("nav-open");
  navToggle.setAttribute("aria-label", translate(isOpen ? "accessibility.closeMenu" : "accessibility.openMenu"));
}

function renderHeroValues() {
  if (!mountPoints.heroValues || !Array.isArray(dictionary.hero?.values)) return;
  clear(mountPoints.heroValues);

  dictionary.hero.values.forEach((value) => {
    if (typeof value === "string") {
      mountPoints.heroValues.append(createElement("span", { text: value }));
      return;
    }

    const item = createElement("span", { className: "hero-value" });
    item.append(
      createElement("span", {
        className: `hero-value__icon hero-value__icon--${value.icon || "mark"}`,
        text: value.mark || ""
      }),
      createElement("span", {
        className: "hero-value__copy",
        attributes: { "aria-label": `${value.title}. ${value.body}` }
      })
    );
    item.querySelector(".hero-value__copy").append(
      createElement("strong", { text: value.title }),
      createElement("small", { text: value.body })
    );
    mountPoints.heroValues.append(item);
  });
}

function renderCustomDesignTags() {
  if (!mountPoints.customDesignTags || !Array.isArray(dictionary.customDesigns?.tags)) return;
  clear(mountPoints.customDesignTags);

  dictionary.customDesigns.tags.forEach((tag) => {
    mountPoints.customDesignTags.append(createElement("span", { text: tag }));
  });
}

function renderFilters() {
  if (!mountPoints.filterBar || !galleryCount || !Array.isArray(dictionary.categories)) return;
  clear(mountPoints.filterBar);
  const isFeaturedShowcase = Array.isArray(dictionary.gallery.featuredIds) && dictionary.gallery.featuredIds.length > 0;
  mountPoints.filterBar.hidden = isFeaturedShowcase;
  galleryCount.hidden = isFeaturedShowcase;

  dictionary.categories.forEach((category) => {
    const button = createElement("button", {
      className: "filter-button",
      text: category.label,
      attributes: {
        type: "button",
        "data-filter": category.id,
        "aria-pressed": "false"
      }
    });

    button.addEventListener("click", () => setFilter(category.id));
    mountPoints.filterBar.append(button);
  });
}

function getCategoryLabel(categoryId) {
  return dictionary.categories.find((category) => category.id === categoryId)?.label || "";
}

function renderProjectImage(item, isPriority = false) {
  if (!item.image?.src) return renderProjectPlaceholder(item);

  const attributes = {
    src: item.image.src,
    width: item.image.width,
    height: item.image.height,
    loading: isPriority ? "eager" : "lazy",
    decoding: "async",
    alt: item.image.alt || item.title
  };

  if (isPriority) {
    attributes.fetchpriority = "high";
  }

  return createElement("img", {
    className: "project-card__image",
    attributes
  });
}

function renderProjectPlaceholder(item, className = "project-placeholder") {
  const tone = item.image?.tone || "crimson";
  const placeholder = createElement("div", {
    className: `${className} project-placeholder--${tone}`,
    attributes: {
      role: "img",
      "aria-label": item.image?.alt || item.title
    }
  });

  placeholder.append(
    createElement("span", {
      className: "project-placeholder__symbol",
      text: item.image?.symbol || "AH"
    }),
    createElement("span", {
      className: "project-placeholder__category",
      text: item.category || getCategoryLabel(item.categoryId)
    })
  );

  return placeholder;
}

function renderProjectTags(tags = [], limit = tags.length) {
  const tagList = createElement("div", { className: "project-tags" });
  tags.slice(0, limit).forEach((tag) => {
    tagList.append(createElement("span", { text: tag }));
  });
  return tagList;
}

function getCustomCreationFamilies() {
  return Array.isArray(dictionary.gallery?.customCreations?.families)
    ? dictionary.gallery.customCreations.families
    : [];
}

function getCustomCreationFamily(familyId) {
  return getCustomCreationFamilies().find((family) => family.id === familyId);
}

function renderGallery() {
  if (!mountPoints.galleryGrid || !Array.isArray(dictionary.gallery?.items)) return;
  catalogById = new Map();
  clear(mountPoints.galleryGrid);
  const featuredIds = Array.isArray(dictionary.gallery.featuredIds) ? dictionary.gallery.featuredIds : [];
  const categoryOrder = new Map(dictionary.categories.map((category, index) => [category.id, index]));
  const galleryItems = featuredIds.length
    ? featuredIds.map((id) => dictionary.gallery.items.find((item) => item.id === id)).filter(Boolean)
    : [...dictionary.gallery.items].sort((a, b) => {
        if (Boolean(a.isCover) !== Boolean(b.isCover)) return a.isCover ? -1 : 1;
        if (a.isCover && b.isCover) {
          return (categoryOrder.get(a.categoryId) ?? 0) - (categoryOrder.get(b.categoryId) ?? 0);
        }
        return 0;
      });

  dictionary.gallery.items.forEach((item) => {
    catalogById.set(item.id, item);
  });

  galleryItems.forEach((item, index) => {
    const categoryLabel = getCategoryLabel(item.categoryId);
    const category = item.category || categoryLabel;
    const displayTitle = item.isCover ? categoryLabel : item.title;
    const family = item.familyId ? getCustomCreationFamily(item.familyId) : null;
    const familyOrder = family ? getCustomCreationFamilies().findIndex((entry) => entry.id === family.id) : -1;
    const isFamilyCover = Boolean(family && family.coverItemId === item.id);
    const article = createElement("article", {
      className: "art-card reveal",
      attributes: {
        "data-art-card": "",
        "data-category": item.categoryId,
        "data-cover": item.isCover ? "true" : "false",
        "data-project-id": item.id,
        "data-layout": item.layout || "standard",
        "data-family": item.familyId || "",
        "data-family-cover": isFamilyCover ? "true" : "false",
        "data-family-order": String(familyOrder)
      }
    });

    const figure = createElement("figure", { className: "art-card__figure" });
    const media = createElement("button", {
      className: "art-card__media project-card__media",
      attributes: {
        type: "button",
        "aria-label": interpolate(dictionary.accessibility.openHighRes, { title: item.title })
      }
    });
    const openItem = () => {
      if (activeFilter === "custom-creations" && !activeGalleryFamily && isFamilyCover) {
        openGalleryFamily(item.familyId);
      } else if (item.isCover && activeFilter === "all") {
        openGalleryCategory(item.categoryId);
      } else {
        openLightbox(item.id);
      }
    };
    media.addEventListener("click", openItem);
    const overlay = createElement("div", { className: "art-card__overlay" });
    const overlayContent = createElement("div", { className: "art-card__overlay-content" });
    const overlayCta = createElement("span", {
      className: "art-card__overlay-cta gallery-project-only",
      text: item.isCover ? dictionary.gallery.openCategory : dictionary.actions.viewProject
    });

    overlayContent.append(
      createElement("span", {
        className: "art-card__overlay-meta gallery-project-only",
        text: interpolate(dictionary.patterns.projectMeta, { category, id: item.id })
      }),
      createElement("strong", { className: "gallery-project-only", text: displayTitle }),
      overlayCta,
      createElement("span", { className: "gallery-family-index-only art-card__overlay-meta", text: family?.label || "" }),
      createElement("strong", { className: "gallery-family-index-only", text: family?.label || "" }),
      createElement("span", {
        className: "gallery-family-index-only art-card__overlay-cta",
        text: dictionary.gallery.customCreations?.openFamily || dictionary.gallery.openCategory
      })
    );
    overlay.append(overlayContent);
    media.append(renderProjectImage(item, index < 4), overlay);
    figure.append(media);

    const bodyContent = createElement("div", { className: "art-card__body" });
    if (item.collectionLabel) {
      bodyContent.append(createElement("span", {
        className: "project-card__collection-label gallery-project-only",
        text: item.collectionLabel
      }));
    }
    const meta = createElement("p", {
      className: "art-card__meta gallery-project-only",
      text: interpolate(dictionary.patterns.projectMeta, { category, id: item.id })
    });
    const title = createElement("h3", { className: "gallery-project-only", text: displayTitle });
    const style = createElement("p", {
      className: "project-card__style gallery-project-only",
      text: interpolate(dictionary.patterns.projectStyle, { style: item.style })
    });
    const description = createElement("p", { className: "project-card__story gallery-project-only", text: item.shortDescription });
    const footer = createElement("div", { className: "art-card__footer gallery-project-only" });
    const viewButton = createElement("button", {
      className: "button button--collection project-card__button",
      text: item.isCover ? dictionary.gallery.openCategory : dictionary.actions.viewProject,
      attributes: {
        type: "button",
        "data-project-open": item.id
      }
    });

    viewButton.addEventListener("click", openItem);
    footer.append(renderProjectTags(item.tags, 3), viewButton);
    const familyButton = createElement("button", {
      className: "gallery-family-index-only button button--collection project-card__button",
      text: dictionary.gallery.customCreations?.openFamily || dictionary.gallery.openCategory,
      attributes: { type: "button" }
    });
    familyButton.addEventListener("click", openItem);
    bodyContent.append(
      meta,
      title,
      style,
      description,
      footer,
      createElement("span", { className: "gallery-family-index-only project-card__collection-label", text: family?.label || "" }),
      createElement("h3", { className: "gallery-family-index-only", text: family?.label || "" }),
      createElement("p", { className: "gallery-family-index-only gallery-family-description", text: family?.description || "" }),
      familyButton
    );
    article.append(figure, bodyContent);
    mountPoints.galleryGrid.append(article);
  });
}

function getStories() {
  return Array.isArray(dictionary.stories?.items) ? dictionary.stories.items : [];
}

function renderStoryImage(image, className, isPriority = false) {
  const attributes = {
    src: image?.src,
    width: image?.width,
    height: image?.height,
    loading: isPriority ? "eager" : "lazy",
    decoding: "async",
    alt: image?.alt || ""
  };

  if (isPriority) attributes.fetchpriority = "high";

  const element = createElement("img", { className, attributes });

  if (image?.position) {
    element.style.objectPosition = image.position;
  }

  return element;
}

function getStoryMeta(story) {
  return {
    categories: story.categories || storyLibraryMeta[story.id]?.categories || [],
    keywords: story.keywords || storyLibraryMeta[story.id]?.keywords || [],
    isNew: Boolean(story.isNew || storyLibraryMeta[story.id]?.isNew)
  };
}

function getOrderedStories(stories) {
  return [...stories].sort((first, second) => Number(first.number || 0) - Number(second.number || 0));
}

function getFilteredStories(stories) {
  return stories.filter((story) => {
    const meta = getStoryMeta(story);
    return activeStoryFilter === "all" || meta.categories.includes(activeStoryFilter);
  });
}

function renderStoryCard(story, index, options = {}) {
  const meta = getStoryMeta(story);
  const card = createElement("button", {
    className: `story-card reveal${options.isNewSection || meta.isNew ? " story-card--new" : ""}`,
    attributes: {
      type: "button",
      "data-story-card": story.id,
      "aria-label": interpolate(dictionary.stories.openStory, { title: story.title })
    }
  });
  const content = createElement("span", { className: "story-card__content" });
  const heading = createElement("span", { className: "story-card__heading" });

  heading.append(
    createElement("span", { className: "story-card__number", text: story.number || String(index + 1).padStart(2, "0") }),
    createElement("span", { className: "story-card__title", text: story.cardTitle || story.title })
  );
  content.append(heading);

  if (meta.isNew) {
    content.append(createElement("span", { className: "story-card__badge", text: dictionary.stories?.newLabel || "New" }));
  }

  const cardImage = { ...story.cardImage, ...storyCardImages[story.id] };
  card.append(renderStoryImage(cardImage, "story-card__image", index < 2), content);
  card.addEventListener("click", () => openStory(story.id));
  return card;
}

function renderStorySection(title, stories, className) {
  const section = createElement("section", { className: `stories-library__section ${className}` });
  section.append(createElement("h3", { className: "stories-library__title", text: title }));

  const grid = createElement("div", { className: "stories-library__grid" });
  stories.forEach((story, index) => grid.append(renderStoryCard(story, index, { isNewSection: className.includes("new") })));
  section.append(grid);
  return section;
}

function renderStories() {
  if (!mountPoints.storiesIndex || !mountPoints.storyReader || !mountPoints.storyDetail) return;

  const stories = getOrderedStories(getStories());
  const activeStory = stories.find((story) => story.id === activeStoryId);
  clear(mountPoints.storiesIndex);

  const library = createElement("div", { className: "stories-library" });
  const filteredStories = getFilteredStories(stories);

  const collection = createElement("section", { className: "stories-library__section stories-library__section--collection" });
  const collectionGrid = createElement("div", { className: "stories-library__grid" });
  collection.append(createElement("h3", { className: "stories-library__title", text: dictionary.stories?.collectionTitle || "The collection" }));

  filteredStories.slice(0, visibleStoryCount).forEach((story, index) => {
    collectionGrid.append(renderStoryCard(story, index));
  });

  if (!filteredStories.length) {
    collection.append(createElement("p", { className: "stories-empty", text: dictionary.stories?.noResults || "No stories found." }));
  } else {
    collection.append(collectionGrid);
  }

  if (filteredStories.length > visibleStoryCount) {
    const loadMore = createElement("button", {
      className: "stories-load-more",
      text: dictionary.stories?.loadMore || "Load more stories",
      attributes: { type: "button", "data-stories-load-more": "" }
    });
    loadMore.addEventListener("click", () => {
      visibleStoryCount += 12;
      renderStories();
    });
    collection.append(loadMore);
  }

  collection.append(createElement("p", {
    className: "stories-library__closing",
    text: dictionary.stories?.closing || "New stories every week. A living collection of Japanese folklore, symbolism and art."
  }));

  library.append(collection);
  mountPoints.storiesIndex.append(library);

  if (activeStory) {
    renderStoryDetail(activeStory);
    openStoryView(false);
  } else {
    closeStoryReader(false);
  }
}

function renderStoryDetail(story) {
  clear(mountPoints.storyDetail);

  const galleryImages = Array.isArray(story.gallery) ? [...story.gallery] : [];
  const cardTattoo = story.cardImage?.src?.includes("tattoo") ? story.cardImage : null;

  if (cardTattoo && !galleryImages.some((image) => image.src === cardTattoo.src)) {
    galleryImages.push(cardTattoo);
  }

  const detail = createElement("div", { className: `story-detail story-detail--${story.id}` });
  const hero = createElement("section", { className: "story-detail__hero" });
  const heroFigure = createElement("figure", { className: "story-detail__hero-figure" });
  const heroCopy = createElement("div", { className: "story-detail__hero-copy" });
  const name = createElement("div", { className: "story-detail__name" });

  heroFigure.append(renderStoryImage(story.heroImage || story.cardImage, "story-detail__hero-image", true));
  name.append(
    createElement("span", { text: story.japaneseName }),
    createElement("small", { text: story.romanized })
  );
  heroCopy.append(
    createElement("span", { className: "story-detail__number", text: story.number }),
    createElement("p", { className: "eyebrow", text: story.eyebrow }),
    createElement("h1", { text: story.title }),
    createElement("p", { className: "story-detail__lead", text: story.lead }),
    name
  );
  hero.append(heroFigure, heroCopy);
  detail.append(hero);

  const bodyContent = createElement("div", { className: "story-detail__body" });

  story.sections?.forEach((section) => {
    const sectionElement = createElement("section", { className: "story-prose" });
    const heading = createElement("div", { className: "story-prose__heading" });
    const copy = createElement("div", { className: "story-prose__copy" });

    if (section.eyebrow) heading.append(createElement("p", { className: "eyebrow", text: section.eyebrow }));
    heading.append(createElement("h2", { text: section.title }));

    section.paragraphs?.forEach((paragraph) => {
      copy.append(createElement("p", { text: paragraph }));
    });

    if (Array.isArray(section.list)) {
      const list = createElement("ul", { className: "story-prose__list" });
      section.list.forEach((item) => list.append(createElement("li", { text: item })));
      copy.append(list);
    }

    sectionElement.append(heading, copy);
    bodyContent.append(sectionElement);
  });

  if (galleryImages.length) {
    const gallery = createElement("section", { className: "story-gallery" });
    const galleryGrid = createElement("div", { className: "story-gallery__grid" });

    gallery.append(createElement("h2", { text: story.galleryTitle || dictionary.stories.galleryTitle }));
    galleryImages.forEach((image) => {
      const figure = createElement("figure", { className: "story-gallery__item" });
      figure.append(renderStoryImage(image, "story-gallery__image"));
      galleryGrid.append(figure);
    });
    gallery.append(galleryGrid);
    bodyContent.append(gallery);
  }

  if (story.quote) {
    const quote = createElement("blockquote", { className: "story-quote" });
    quote.append(createElement("p", { text: story.quote }));
    bodyContent.append(quote);
  }

  detail.append(bodyContent);
  mountPoints.storyDetail.append(detail);
}

function openStory(storyId) {
  const story = getStories().find((item) => item.id === storyId);
  if (!story) return;

  activeStoryId = storyId;
  renderStoryDetail(story);
  openStoryView(true);
}

function openStoryView(shouldScroll = true) {
  mountPoints.storyReader.hidden = false;
  document.querySelector("#stories")?.classList.add("is-reading");

  if (shouldScroll) {
    window.requestAnimationFrame(() => mountPoints.storyReader.scrollIntoView({ block: "start" }));
  }
}

function closeStoryReader(shouldScroll = true) {
  activeStoryId = null;
  mountPoints.storyReader.hidden = true;
  document.querySelector("#stories")?.classList.remove("is-reading");
  clear(mountPoints.storyDetail);

  if (shouldScroll) {
    window.requestAnimationFrame(() => document.querySelector("#stories")?.scrollIntoView({ block: "start" }));
  }
}

function getPopCultureData() {
  const data = window.AKAI_HANA_POP_CULTURE;
  return data && Array.isArray(data.themes) ? data : { categories: [], themes: [] };
}

function getPopCulturePageFromUrl() {
  const requestedPage = Number.parseInt(new URLSearchParams(window.location.search).get("page") || "1", 10);
  return Number.isFinite(requestedPage) && requestedPage > 0 ? requestedPage : 1;
}

function updatePopCulturePageUrl(page, replace = false) {
  const nextUrl = new URL(window.location.href);
  if (page > 1) {
    nextUrl.searchParams.set("page", String(page));
  } else {
    nextUrl.searchParams.delete("page");
  }
  window.history[replace ? "replaceState" : "pushState"]({}, "", nextUrl);
}

function renderPopCulturePagination(pageCount) {
  const pagination = mountPoints.popCulturePagination;
  if (!pagination) return;

  clear(pagination);
  pagination.hidden = pageCount <= 1;
  pagination.setAttribute("aria-label", getPopCultureUiText("paginationLabel") || "Stories pagination");
  if (pageCount <= 1) return;

  const createPageButton = ({ label, page, text, disabled = false, current = false, className = "" }) => {
    const button = createElement("button", {
      className: `pop-culture__page-button ${className}`.trim(),
      text,
      attributes: {
        type: "button",
        "aria-label": label,
        "aria-current": current ? "page" : undefined,
        disabled: disabled ? "" : undefined
      }
    });
    button.addEventListener("click", () => setPopCulturePage(page));
    return button;
  };

  pagination.append(createPageButton({
    label: getPopCultureUiText("previousPage") || "Previous Stories page",
    page: activePopCulturePage - 1,
    text: "‹",
    disabled: activePopCulturePage === 1,
    className: "pop-culture__page-button--arrow"
  }));

  for (let page = 1; page <= pageCount; page += 1) {
    pagination.append(createPageButton({
      label: interpolate(getPopCultureUiText("pageLabel") || "Stories page {page}", { page }),
      page,
      text: String(page),
      current: page === activePopCulturePage
    }));
  }

  pagination.append(createPageButton({
    label: getPopCultureUiText("nextPage") || "Next Stories page",
    page: activePopCulturePage + 1,
    text: "›",
    disabled: activePopCulturePage === pageCount,
    className: "pop-culture__page-button--arrow"
  }));
}

function setPopCulturePage(page, options = {}) {
  const pageCount = Math.max(1, Math.ceil(getPopCultureData().themes.length / popCulturePageSize));
  const nextPage = Math.min(Math.max(Number(page) || 1, 1), pageCount);
  if (nextPage === activePopCulturePage) return;

  activePopCulturePage = nextPage;
  if (options.updateUrl !== false) updatePopCulturePageUrl(activePopCulturePage);
  renderPopCulture({ animateThemes: true });

  if (options.scroll !== false) {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.requestAnimationFrame(() => {
      document.querySelector(".pop-culture__archive-heading")?.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start"
      });
    });
  }
}

function getActivePopCultureTheme() {
  const data = getPopCultureData();
  return data.themes.find((theme) => theme.id === activePopCultureThemeId) || data.themes[0] || null;
}

function getPopCultureText(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[locale] || value.en || value.es || "";
  }
  return value || "";
}

function getPopCultureUiText(key) {
  return getPopCultureText(getPopCultureData().ui?.[key]);
}

function getPopCultureCategoryLabel(categoryId) {
  const category = getPopCultureData().categories.find((item) => item.id === categoryId);
  return getPopCultureText(category?.label) || categoryId;
}

function renderPopCulture(options = {}) {
  if (!mountPoints.popCultureThemes || !mountPoints.popCultureCurrent || !mountPoints.popCultureTabs || !mountPoints.popCultureConnections) return;

  const data = getPopCultureData();
  const activeTheme = getActivePopCultureTheme();
  const pageCount = Math.max(1, Math.ceil(data.themes.length / popCulturePageSize));
  const requestedPage = activePopCulturePage;
  activePopCulturePage = Math.min(Math.max(activePopCulturePage, 1), pageCount);
  if (activePopCulturePage !== requestedPage) updatePopCulturePageUrl(activePopCulturePage, true);
  const pageStart = (activePopCulturePage - 1) * popCulturePageSize;
  const visibleThemes = data.themes.slice(pageStart, pageStart + popCulturePageSize);
  clear(mountPoints.popCultureThemes);
  clear(mountPoints.popCultureCurrent);
  clear(mountPoints.popCultureTabs);
  clear(mountPoints.popCultureConnections);
  document.querySelectorAll("[data-pop-culture-ui]").forEach((element) => {
    const text = getPopCultureUiText(element.dataset.popCultureUi);
    if (text) element.textContent = text;
  });

  visibleThemes.forEach((theme) => {
    const button = createElement("button", {
      className: "pop-theme-card",
      attributes: {
        type: "button",
        "data-pop-theme": theme.id,
        "aria-pressed": String(theme.id === activeTheme?.id)
      }
    });
    if (theme.id === activeTheme?.id) button.classList.add("is-active");

    button.append(
      createElement("img", { attributes: { src: theme.image, alt: "", loading: "lazy", decoding: "async" } }),
      createElement("span", { className: "pop-theme-card__shade" }),
      createElement("span", { className: "pop-theme-card__title", text: getPopCultureText(theme.title) }),
      createElement("span", { className: "pop-theme-card__kanji", text: theme.kanji || "" })
    );
    button.addEventListener("click", () => {
      activePopCultureThemeId = theme.id;
      activePopCultureCategoryId = null;
      renderPopCulture();
    });
    mountPoints.popCultureThemes.append(button);
  });

  renderPopCulturePagination(pageCount);
  if (options.animateThemes && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    mountPoints.popCultureThemes.animate(
      [{ opacity: 0.45 }, { opacity: 1 }],
      { duration: 180, easing: "ease-out" }
    );
  }

  if (!activeTheme) return;

  const entries = Array.isArray(activeTheme.entries) ? activeTheme.entries : [];
  const availableCategories = data.categories.filter((category) => entries.some((entry) => entry.categoryId === category.id));
  if (!activePopCultureCategoryId || !availableCategories.some((category) => category.id === activePopCultureCategoryId)) {
    activePopCultureCategoryId = availableCategories[0]?.id || null;
  }

  const currentCopy = createElement("div", { className: "pop-culture__current-copy" });
  currentCopy.append(
    createElement("p", { className: "pop-culture__current-number", text: activeTheme.number || "" }),
    createElement("h2", { text: getPopCultureText(activeTheme.title) }),
    createElement("p", { text: getPopCultureText(activeTheme.intro) })
  );
  mountPoints.popCultureCurrent.append(
    createElement("img", { className: "pop-culture__current-icon", attributes: { src: activeTheme.icon || activeTheme.image, alt: "", loading: "lazy", decoding: "async" } }),
    currentCopy
  );

  availableCategories.forEach((category) => {
    const tab = createElement("button", {
      className: "pop-culture-tab",
      text: getPopCultureText(category.label),
      attributes: {
        type: "button",
        role: "tab",
        "aria-selected": String(category.id === activePopCultureCategoryId)
      }
    });
    if (category.id === activePopCultureCategoryId) tab.classList.add("is-active");
    tab.addEventListener("click", () => {
      activePopCultureCategoryId = category.id;
      renderPopCulture();
    });
    mountPoints.popCultureTabs.append(tab);
  });

  const visibleEntries = activePopCultureCategoryId ? entries.filter((entry) => entry.categoryId === activePopCultureCategoryId) : [];
  const hasEntries = visibleEntries.length > 0;
  if (mountPoints.popCultureEmpty) {
    mountPoints.popCultureEmpty.hidden = hasEntries;
    mountPoints.popCultureEmpty.textContent = hasEntries ? "" : getPopCultureUiText("empty");
  }

  visibleEntries.forEach((entry) => {
    const card = createElement("button", { className: "pop-connection-card", attributes: { type: "button", "data-pop-entry": entry.id } });
    const figure = createElement("span", { className: "pop-connection-card__figure" });
    figure.append(createElement("img", { attributes: { src: entry.image, alt: "", loading: "lazy", decoding: "async", "data-pop-fit": entry.imageFit || "cover" } }));
    const bodyContent = createElement("span", { className: "pop-connection-card__body" });
    bodyContent.append(
      createElement("span", { className: "pop-connection-card__badge", text: getPopCultureText(entry.classification) || getPopCultureCategoryLabel(entry.categoryId) }),
      createElement("strong", { text: getPopCultureText(entry.title) }),
      createElement("span", { className: "pop-connection-card__franchise", text: getPopCultureText(entry.franchise) }),
      createElement("span", { className: "pop-connection-card__description", text: getPopCultureText(entry.shortDescription) }),
      createElement("span", { className: "pop-connection-card__arrow", text: "→" })
    );
    card.append(figure, bodyContent);
    card.addEventListener("click", () => openPopCultureDetail(entry, activeTheme));
    mountPoints.popCultureConnections.append(card);
  });
}

function openPopCultureDetail(entry, theme) {
  if (!mountPoints.popCultureDetail || !mountPoints.popCultureDetailBody || !entry) return;

  clear(mountPoints.popCultureDetailBody);
  const links = createElement("div", { className: "pop-culture-detail__links" });
  if (entry.sourceUrl) {
    links.append(createElement("a", {
      className: "button button--collection",
      text: `${getPopCultureText(entry.sourceLabel) || getPopCultureUiText("sourceFallback")} ↗`,
      attributes: { href: entry.sourceUrl, target: "_blank", rel: "noopener noreferrer" }
    }));
  }
  if (entry.secondarySourceUrl) {
    links.append(createElement("a", {
      className: "button button--collection",
      text: `${getPopCultureText(entry.secondarySourceLabel) || getPopCultureUiText("secondarySourceFallback")} ↗`,
      attributes: { href: entry.secondarySourceUrl, target: "_blank", rel: "noopener noreferrer" }
    }));
  }

  const copy = createElement("div", { className: "pop-culture-detail__copy" });
  const detailNodes = [
    createElement("p", { className: "pop-culture-detail__eyebrow", text: `${getPopCultureText(theme?.title) || ""} · ${getPopCultureCategoryLabel(entry.categoryId)}` }),
    createElement("h2", { text: getPopCultureText(entry.title), attributes: { id: "pop-culture-detail-title" } }),
    createElement("p", { className: "pop-culture-detail__meta", text: [getPopCultureText(entry.franchise), entry.year, getPopCultureText(entry.classification)].filter(Boolean).join(" · ") }),
    createElement("p", { text: getPopCultureText(entry.fullDescription) || getPopCultureText(entry.shortDescription) })
  ];
  if (entry.context) {
    detailNodes.push(createElement("p", { className: "pop-culture-detail__context", text: getPopCultureText(entry.context) }));
  }
  detailNodes.push(links);
  copy.append(...detailNodes);

  mountPoints.popCultureDetailBody.append(
    createElement("img", { className: "pop-culture-detail__image", attributes: { src: entry.image, alt: "", loading: "eager", decoding: "async", "data-pop-fit": entry.imageFit || "cover", "data-pop-layout": theme?.detailImageLayout || "portrait" } }),
    copy
  );
  mountPoints.popCultureDetail.hidden = false;
  mountPoints.popCultureDetail.setAttribute("aria-hidden", "false");
}

function closePopCultureDetail() {
  if (!mountPoints.popCultureDetail) return;
  mountPoints.popCultureDetail.hidden = true;
  mountPoints.popCultureDetail.setAttribute("aria-hidden", "true");
}

function renderCollections() {
  if (!mountPoints.collectionGrid || !Array.isArray(dictionary.collections?.cards)) return;
  clear(mountPoints.collectionGrid);

  dictionary.collections.cards.forEach((card) => {
    const article = createElement("article", { className: "collection-card reveal" });
    const figure = createElement("figure", { className: "collection-card__figure" });
    const image = createElement("img", {
      attributes: {
        src: card.image.src,
        width: card.image.width,
        height: card.image.height,
        loading: "lazy",
        decoding: "async",
        alt: card.image.alt
      }
    });
    const bodyContent = createElement("div", { className: "collection-card__body" });
    const button = createElement("a", {
      className: "button button--collection",
      text: dictionary.collections.cta,
      attributes: { href: "#gallery" }
    });

    figure.append(image);
    bodyContent.append(createElement("h3", { text: card.title }), createElement("p", { text: card.body }), button);
    article.append(figure, bodyContent);
    mountPoints.collectionGrid.append(article);
  });
}

function renderDesignOptions() {
  if (!mountPoints.designOptions || !Array.isArray(dictionary.designOptions?.cards)) return;
  clear(mountPoints.designOptions);

  dictionary.designOptions.cards.forEach((card) => {
    const article = createElement("article", { className: "pricing-card reveal" });
    const includes = createElement("ul", { className: "pricing-card__list" });
    const cta = createElement("a", {
      className: "button button--collection",
      text: dictionary.designOptions.cta,
      attributes: { href: "#custom-design-form" }
    });

    card.includes.forEach((item) => {
      includes.append(createElement("li", { text: item }));
    });

    article.append(
      createElement("p", { className: "art-card__meta", text: card.badge }),
      createElement("h3", { text: card.title }),
      createElement("p", { text: card.body }),
      includes,
      createElement("strong", { className: "pricing-card__from", text: card.priceLabel }),
      cta
    );
    mountPoints.designOptions.append(article);
  });
}

function renderHowItWorks() {
  if (!mountPoints.howItWorksList || !Array.isArray(dictionary.howItWorks?.steps)) return;
  clear(mountPoints.howItWorksList);

  dictionary.howItWorks.steps.forEach((step) => {
    const item = createElement("li", { className: "step-card" });
    item.append(
      createElement("span", { text: step.number }),
      createElement("strong", { text: step.title }),
      createElement("p", { text: step.body })
    );
    mountPoints.howItWorksList.append(item);
  });
}

function renderMetrics() {
  if (!mountPoints.metricsGrid || !Array.isArray(dictionary.about?.metrics)) return;
  clear(mountPoints.metricsGrid);

  dictionary.about.metrics.forEach((metric) => {
    const item = createElement("div");
    item.append(createElement("strong", { text: metric.value }), createElement("span", { text: metric.label }));
    mountPoints.metricsGrid.append(item);
  });
}

function renderInterestOptions() {
  if (!interestField || !Array.isArray(dictionary.form?.interests)) return;
  clear(interestField);

  dictionary.form.interests.forEach((interest) => {
    const option = createElement("option", {
      text: interest.label,
      attributes: { value: interest.id }
    });
    interestField.append(option);
  });
}

function renderTattooOptions() {
  const selects = Array.from(document.querySelectorAll("[data-tattoo-select]"));

  selects.forEach((select) => {
    const group = dictionary.tattooForm?.selects?.[select.dataset.tattooSelect];
    if (!group) return;
    clear(select);

    const placeholder = createElement("option", {
      text: group.placeholder,
      attributes: {
        value: "",
        disabled: "",
        selected: ""
      }
    });
    select.append(placeholder);

    group.options.forEach((option) => {
      select.append(
        createElement("option", {
          text: option.label,
          attributes: { value: option.id }
        })
      );
    });
  });
}

function renderMerch() {
  if (!mountPoints.merchList || !Array.isArray(dictionary.merch?.items)) return;
  clear(mountPoints.merchList);

  dictionary.merch.items.forEach((item) => {
    const merchItem = createElement("div", { className: "merch-item" });
    merchItem.append(createElement("strong", { text: item.title }), createElement("span", { text: item.body }));
    mountPoints.merchList.append(merchItem);
  });
}

function renderFaq() {
  if (!mountPoints.faqList || !Array.isArray(dictionary.faq?.items)) return;
  clear(mountPoints.faqList);

  dictionary.faq.items.forEach((item) => {
    const details = createElement("details", { className: "faq-item" });
    details.append(createElement("summary", { text: item.question }), createElement("p", { text: item.answer }));
    mountPoints.faqList.append(details);
  });
}

function getInterestLabel(id) {
  return dictionary.form?.interests?.find((interest) => interest.id === id)?.label || "";
}

function getFieldLabel(field) {
  const label = field.closest("label");
  return label?.querySelector("span")?.textContent?.trim() || field.name;
}

function getFormFieldValue(field) {
  if (!field) return "";

  if (field instanceof HTMLSelectElement) {
    return field.selectedOptions[0]?.textContent?.trim() || field.value.trim();
  }

  return field.value.trim();
}

function buildDesignRequestMailto(form) {
  const fields = Array.from(form.elements).filter((field) => {
    const isFormField = field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement;
    return isFormField && field.name && field.type !== "submit" && field.type !== "button";
  });
  const clientName = getFormFieldValue(form.elements.namedItem("name"));
  const subject = `Nueva solicitud de diseño — ${clientName || "cliente"}`;
  const body = fields.map((field) => {
    let value = getFormFieldValue(field);
    if (field.name === "references" && !value) value = dictionary.tattooForm.emptyReferences;
    return `${getFieldLabel(field)}: ${value}`;
  }).join("\n");

  return `mailto:${designRequestEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function setFilter(categoryId) {
  if (categoryId !== "custom-creations" || activeFilter !== categoryId) {
    activeGalleryFamily = null;
  }
  activeFilter = categoryId;
  let visibleCount = 0;
  const cards = Array.from(document.querySelectorAll("[data-art-card]"));
  const buttons = Array.from(document.querySelectorAll("[data-filter]"));
  const hasCategoryProjects = categoryId !== "all" && cards.some((card) => (
    card.dataset.category === categoryId && card.dataset.cover !== "true"
  ));

  if (mountPoints.galleryGrid) {
    mountPoints.galleryGrid.dataset.activeCategory = categoryId;
    mountPoints.galleryGrid.dataset.familyView = categoryId === "custom-creations"
      ? (activeGalleryFamily ? "archive" : "index")
      : "";
    mountPoints.galleryGrid.dataset.activeFamily = activeGalleryFamily || "";
  }

  cards.forEach((card) => {
    let isVisible;
    if (categoryId === "all") {
      isVisible = card.dataset.cover === "true";
    } else if (categoryId === "custom-creations") {
      isVisible = activeGalleryFamily
        ? card.dataset.category === categoryId && card.dataset.family === activeGalleryFamily
        : card.dataset.category === categoryId && card.dataset.familyCover === "true";
    } else {
      isVisible = card.dataset.category === categoryId && (!hasCategoryProjects || card.dataset.cover !== "true");
    }
    card.hidden = !isVisible;
    card.style.order = categoryId === "custom-creations" && !activeGalleryFamily
      ? card.dataset.familyOrder
      : "";
    if (isVisible) visibleCount += 1;
  });

  buttons.forEach((button) => {
    const isActive = button.dataset.filter === categoryId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const countTemplate = visibleCount === 1 ? dictionary.gallery.countOne : dictionary.gallery.countMany;
  if (galleryCount && countTemplate) galleryCount.textContent = interpolate(countTemplate, { count: visibleCount });
  renderGalleryCategoryHeader(categoryId);
}

function openGalleryCategory(categoryId) {
  activeGalleryFamily = null;
  setFilter(categoryId);
  mountPoints.galleryCategoryHeader?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openGalleryFamily(familyId) {
  if (!getCustomCreationFamily(familyId)) return;
  activeGalleryFamily = familyId;
  setFilter("custom-creations");
  mountPoints.galleryCategoryHeader?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderGalleryCategoryHeader(categoryId) {
  const header = mountPoints.galleryCategoryHeader;
  if (!header) return;

  if (categoryId === "all") {
    header.hidden = true;
    header.replaceChildren();
    return;
  }

  const family = categoryId === "custom-creations" && activeGalleryFamily
    ? getCustomCreationFamily(activeGalleryFamily)
    : null;
  const cover = family
    ? dictionary.gallery.items.find((item) => item.id === family.coverItemId)
    : dictionary.gallery.items.find((item) => item.categoryId === categoryId && item.isCover);
  const label = family?.label || getCategoryLabel(categoryId);
  const backButton = createElement("button", {
    className: "gallery-category-header__back",
    text: family
      ? dictionary.gallery.customCreations?.back
      : dictionary.gallery.backToOverview,
    attributes: { type: "button" }
  });
  backButton.addEventListener("click", () => {
    if (family) {
      activeGalleryFamily = null;
      setFilter("custom-creations");
      mountPoints.galleryCategoryHeader?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setFilter("all");
      mountPoints.filterBar?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  const copy = createElement("div", { className: "gallery-category-header__copy" });
  copy.append(
    createElement("span", {
      className: "gallery-category-header__eyebrow",
      text: categoryId === "custom-creations"
        ? dictionary.gallery.customCreations?.eyebrow
        : dictionary.gallery.categoryEyebrow
    }),
    createElement("h3", { text: label }),
    createElement("p", {
      text: family?.description
        || (categoryId === "custom-creations" ? dictionary.gallery.customCreations?.intro : "")
        || cover?.shortDescription
        || cover?.description
        || ""
    })
  );

  header.replaceChildren(backButton, copy);
  header.hidden = false;
}

function getLightboxItems() {
  const visibleProjectIds = new Set(
    Array.from(document.querySelectorAll("[data-art-card]"))
      .filter((card) => !card.hidden)
      .map((card) => card.dataset.projectId)
  );
  const visibleItems = dictionary.gallery.items.filter((item) => visibleProjectIds.has(item.id));
  return visibleItems.length ? visibleItems : dictionary.gallery.items;
}

function openLightbox(projectId) {
  const item = catalogById.get(projectId);
  if (!item || !lightbox) return;

  lastFocusedElement = document.activeElement;
  lightboxProjectId = projectId;
  renderLightbox(item);
  lightbox.hidden = false;
  lightbox.setAttribute("aria-hidden", "false");
  body.classList.add("lightbox-open");
  lightboxCloseButtons.find((button) => button.matches("button"))?.focus();
}

function renderLightbox(item) {
  if (!lightboxTitle || !lightboxDescription || !lightboxCategory) return;
  const category = item.category || getCategoryLabel(item.categoryId);

  if (item.image?.src && lightboxImage && lightboxPlaceholder) {
    lightboxImage.hidden = false;
    lightboxImage.src = item.image.src;
    lightboxImage.alt = item.image.alt || item.title;
    lightboxPlaceholder.hidden = true;
  } else if (lightboxImage && lightboxPlaceholder) {
    lightboxImage.hidden = true;
    lightboxImage.removeAttribute("src");
    lightboxImage.alt = "";
    lightboxPlaceholder.hidden = false;
    lightboxPlaceholder.replaceChildren(
      createElement("span", {
        className: "project-placeholder__symbol",
        text: item.image?.symbol || item.title.slice(0, 2).toUpperCase()
      }),
      createElement("span", {
        className: "project-placeholder__category",
        text: item.category || category
      })
    );
    lightboxPlaceholder.className = `project-placeholder project-placeholder--lightbox project-placeholder--${item.image?.tone || "crimson"}`;
    lightboxPlaceholder.setAttribute("role", "img");
    lightboxPlaceholder.setAttribute("aria-label", item.image?.alt || item.title);
  }

  lightboxTitle.textContent = item.title;
  if (lightboxStyle) lightboxStyle.textContent = interpolate(dictionary.patterns.projectStyle, { style: item.style });
  lightboxDescription.textContent = item.shortDescription;
  lightboxCategory.textContent = interpolate(dictionary.patterns.projectMeta, {
    category,
    id: item.id
  });

  const detailLabels = dictionary.gallery.detailLabels;
  if (lightboxDetails) {
    lightboxDetails.replaceChildren(
      createLightboxDetail(detailLabels.description, item.description),
      createLightboxDetail(detailLabels.includes, item.includes),
      createLightboxDetail(detailLabels.uses, item.uses),
      createLightboxDetail(detailLabels.examples, item.examples)
    );
  }

  if (lightboxTags) {
    lightboxTags.replaceChildren();
    item.tags.forEach((tag) => {
      lightboxTags.append(createElement("span", { text: tag }));
    });
  }

  if (lightboxDiscordCta) lightboxDiscordCta.textContent = dictionary.actions.talkProject;
}

function createLightboxDetail(label, value) {
  const detail = createElement("div", { className: "lightbox__detail" });
  detail.append(createElement("strong", { text: label }));

  if (Array.isArray(value)) {
    const list = createElement("ul", { className: "lightbox__list" });
    value.forEach((item) => {
      list.append(createElement("li", { text: item }));
    });
    detail.append(list);
  } else {
    detail.append(createElement("p", { text: value || "" }));
  }

  return detail;
}

function closeLightbox(shouldRestoreFocus = true) {
  if (!lightbox || lightbox.hidden) return;

  lightbox.hidden = true;
  lightbox.setAttribute("aria-hidden", "true");
  body.classList.remove("lightbox-open");
  lightboxProjectId = null;

  if (shouldRestoreFocus && lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus({ preventScroll: true });
  }
}

function moveLightbox(direction) {
  const items = getLightboxItems();
  if (!items.length) return;
  const currentIndex = items.findIndex((item) => item.id === lightboxProjectId);
  const fallbackIndex = currentIndex === -1 ? 0 : currentIndex;
  const nextIndex = (fallbackIndex + direction + items.length) % items.length;
  const nextItem = items[nextIndex];

  lightboxProjectId = nextItem.id;
  renderLightbox(nextItem);
}

function renderDiscordContact() {
  document.querySelectorAll("[data-discord-link]").forEach((link) => {
    link.setAttribute("href", discordInviteUrl);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
    link.setAttribute("aria-label", dictionary.discord?.cta || dictionary.discord?.inlineCta || "Open Akai Hana Discord");
  });

  if (lightboxDiscordCta) {
    lightboxDiscordCta.textContent = dictionary.discord?.cta || dictionary.actions.talkProject;
    lightboxDiscordCta.setAttribute("aria-label", dictionary.discord?.cta || dictionary.actions.talkProject);
  }
}

async function submitNetlifyForm(form, formData, statusElement, statusMessages) {
  if (!form || formData.get("bot-field")) return;

  if (statusElement) statusElement.textContent = statusMessages.sending;

  try {
    const response = await fetch(form.getAttribute("action") || "/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    });

    if (!response.ok) throw new Error(`Netlify form failed: ${response.status}`);

    form.reset();
    if (statusElement) statusElement.textContent = statusMessages.success;
  } catch (error) {
    console.error(error);
    if (statusElement) statusElement.textContent = statusMessages.error;
  }
}

function submitLead(event) {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const interestLabel = getInterestLabel(formData.get("interest"));
  if (interestLabel) formData.set("interest", interestLabel);

  submitNetlifyForm(contactForm, formData, formStatus, dictionary.form.status);
}

function submitTattooRequest(event) {
  event.preventDefault();

  if (!customDesignForm.reportValidity()) return;

  if (tattooFormStatus) tattooFormStatus.textContent = "";
  window.location.href = buildDesignRequestMailto(customDesignForm);
}

function updateSeo() {
  if (!dictionary.seo) return;

  document.title = dictionary.seo.title;
  document.documentElement.lang = dictionary.locale;
  updateMeta("name", "description", dictionary.seo.description);
  updateMeta("property", "og:title", dictionary.seo.ogTitle);
  updateMeta("property", "og:description", dictionary.seo.ogDescription);
  updateMeta("property", "og:url", dictionary.seo.canonical);

  const canonical = document.querySelector("[data-canonical]");
  if (canonical) canonical.href = dictionary.seo.canonical;

  if (schemaData) schemaData.textContent = JSON.stringify(buildSchema(dictionary));
}

function updateMeta(attribute, key, value) {
  const meta = document.querySelector(`meta[${attribute}="${key}"]`);
  if (meta) meta.setAttribute("content", value);
}

function buildSchema(content) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: content.brand.name,
        url: content.seo.siteUrl,
        logo: `${content.seo.siteUrl}/assets/images/hero-akai-hana-gallery.png`,
        description: content.seo.organizationDescription
      },
      {
        "@type": "WebSite",
        name: content.brand.name,
        url: content.seo.canonical,
        inLanguage: content.locale,
        potentialAction: {
          "@type": "SearchAction",
          target: `${content.seo.siteUrl}/?lang=${content.locale}&q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Service",
        name: content.customDesigns.title,
        provider: {
          "@type": "Organization",
          name: content.brand.name,
          url: content.seo.siteUrl
        },
        serviceType: content.seo.serviceType,
        areaServed: "Worldwide",
        description: content.customDesigns.body
      },
      {
        "@type": "FAQPage",
        inLanguage: content.locale,
        mainEntity: content.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      },
      {
        "@type": "ItemList",
        name: content.seo.itemListName,
        itemListElement: content.gallery.items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "VisualArtwork",
            name: item.title,
            description: item.shortDescription,
            artform: item.style,
            category: getCategoryLabel(item.categoryId),
            identifier: item.id,
            genre: item.category
          }
        }))
      }
    ]
  };
}

function updateLanguageButtons() {
  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === locale;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function getCurrentPage() {
  const hash = window.location.hash.replace("#", "");

  if (!hash || hash === "home") return "home";
  if (hash === "gallery") return "gallery";
  if (hash === "stories") return "stories";
  if (hash === "pop-culture") return "pop-culture";
  if (["services-contact", "custom-design-form"].includes(hash)) return "services-contact";
  return "home";
}

function applyPageRoute() {
  const currentPage = getCurrentPage();
  const targetId = window.location.hash.replace("#", "") || "home";
  const target = document.getElementById(targetId);

  body.dataset.page = currentPage;

  document.querySelectorAll(".site-nav a").forEach((link) => {
    const linkPage = getPageFromHash(link.getAttribute("href"));
    link.classList.toggle("is-active", linkPage === currentPage);
    link.setAttribute("aria-current", linkPage === currentPage ? "page" : "false");
  });

  revealOnScroll();

  if (target) {
    window.requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
  }
}

function getPageFromHash(href) {
  const hash = href?.replace("#", "") || "home";

  if (hash === "gallery") return "gallery";
  if (hash === "stories") return "stories";
  if (hash === "pop-culture") return "pop-culture";
  if (["services-contact", "custom-design-form"].includes(hash)) return "services-contact";
  return "home";
}

function updateUrlLanguage() {
  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set("lang", locale);
  window.history.replaceState({}, "", nextUrl);
}

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 10);
}

function closeNavigation() {
  body.classList.remove("nav-open");
  header?.classList.remove("nav-active");
  navToggle?.setAttribute("aria-expanded", "false");
  updateNavToggleLabel();
}

function toggleNavigation() {
  const isOpen = body.classList.toggle("nav-open");
  header?.classList.toggle("nav-active", isOpen);
  navToggle?.setAttribute("aria-expanded", String(isOpen));
  updateNavToggleLabel();
}

function revealOnScroll() {
  const revealItems = Array.from(document.querySelectorAll(".reveal"));

  if (revealObserver) revealObserver.disconnect();

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

function renderPage() {
  applyStaticTranslations();
  renderHeroValues();
  renderCustomDesignTags();
  renderFilters();
  renderGallery();
  renderStories();
  renderPopCulture();
  renderCollections();
  renderDesignOptions();
  renderHowItWorks();
  renderMetrics();
  renderMerch();
  renderFaq();
  renderInterestOptions();
  renderTattooOptions();
  renderDiscordContact();
  setFilter(activeFilter);
  applyPageRoute();
  updateSeo();
  updateLanguageButtons();
  revealOnScroll();
  finishLoading();
}

async function setLocale(nextLocale, shouldUpdateUrl = true) {
  locale = supportedLocales.includes(nextLocale) ? nextLocale : defaultLocale;
  dictionary = await loadDictionary(locale);
  window.localStorage.setItem("akai-hana-locale", locale);
  closeLightbox(false);
  renderPage();
  if (shouldUpdateUrl) updateUrlLanguage();
}

function finishLoading() {
  body.classList.add("is-ready");
  document.querySelectorAll("[data-loader], .site-loader, .splash, .loader").forEach((loader) => {
    loader.hidden = true;
    loader.setAttribute("aria-hidden", "true");
  });
}

function showFallbackContent(error) {
  console.error(error);
  finishLoading();
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}

window.addEventListener("scroll", setHeaderState, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 980) closeNavigation();
});
window.addEventListener("hashchange", applyPageRoute);
window.addEventListener("popstate", () => {
  const nextPage = getPopCulturePageFromUrl();
  if (nextPage === activePopCulturePage) return;
  activePopCulturePage = nextPage;
  renderPopCulture({ animateThemes: true });
});
window.addEventListener("load", finishLoading);
window.setTimeout(finishLoading, 3500);

navToggle?.addEventListener("click", toggleNavigation);
nav?.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (link && nav.contains(link)) closeNavigation();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLocale(button.dataset.lang));
});

lightboxCloseButtons.forEach((button) => {
  button.addEventListener("click", () => closeLightbox());
});
lightboxPrevButton?.addEventListener("click", () => moveLightbox(-1));
lightboxNextButton?.addEventListener("click", () => moveLightbox(1));
mountPoints.storyBack?.addEventListener("click", () => closeStoryReader());

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mountPoints.popCultureDetail && !mountPoints.popCultureDetail.hidden) {
    closePopCultureDetail();
    return;
  }

  if (!lightbox || lightbox.hidden) return;

  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") moveLightbox(-1);
  if (event.key === "ArrowRight") moveLightbox(1);
});

contactForm?.addEventListener("submit", submitLead);
customDesignForm?.addEventListener("submit", submitTattooRequest);
document.querySelectorAll("[data-pop-culture-close]").forEach((button) => {
  button.addEventListener("click", closePopCultureDetail);
});

setHeaderState();
setLocale(locale, !window.location.search.includes("lang=")).catch((error) => {
  setText(".gallery-count", "");
  showFallbackContent(error);
});
/* AKAIHANA HOME — V5.9 red piano + champagne leaf contact */
let livingHeroTitleStarted = false;
let livingHeroTitleVisible = true;
let livingHeroTitleTimer = 0;
let livingHeroTitleAmbientAnimation = null;
let livingHeroTitleInitialAmbientDone = false;

function syncLivingHeroTitle() {
  const title = document.querySelector('#home .hero__title');
  if (!title) return;

  const lines = [...title.children].filter((node) => node.matches('span[data-i18n]'));
  lines.forEach((line) => {
    // Translation rendering replaces textContent, so rebuild overlays after every locale pass.
    const text = [...line.childNodes]
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => node.textContent)
      .join('')
      .trim() || line.textContent.trim();
    if (!text) return;

    line.querySelectorAll('.hero__title-light').forEach((overlay) => overlay.remove());
    line.classList.add('hero__title-line--living');

    // V5.9 — the travelling ambient "piano" reflection belongs only to
    // the red DESIGN STUDIO. line. White lines stay visually still unless a
    // leaf actually touches them, which avoids any ambiguity with flicker.
    let ambient = null;
    if (line.classList.contains('hero__title-accent')) {
      ambient = document.createElement('span');
      ambient.className = 'hero__title-light hero__title-light--ambient';
      ambient.setAttribute('aria-hidden', 'true');
      ambient.textContent = text;
    }

    const glintA = document.createElement('span');
    glintA.className = 'hero__title-light hero__title-light--glint';
    glintA.dataset.glintChannel = 'a';
    glintA.setAttribute('aria-hidden', 'true');
    glintA.textContent = text;

    const glintB = document.createElement('span');
    glintB.className = 'hero__title-light hero__title-light--glint';
    glintB.dataset.glintChannel = 'b';
    glintB.setAttribute('aria-hidden', 'true');
    glintB.textContent = text;

    const glintC = document.createElement('span');
    glintC.className = 'hero__title-light hero__title-light--glint';
    glintC.dataset.glintChannel = 'c';
    glintC.setAttribute('aria-hidden', 'true');
    glintC.textContent = text;

    if (ambient) line.append(ambient);
    line.append(glintA, glintB, glintC);
  });

  title.dispatchEvent(new CustomEvent('akaihana:title-light-ready'));
}

function initLivingHeroTitle() {
  const hero = document.querySelector('#home.hero');
  const title = hero?.querySelector('.hero__title');
  if (!hero || !title || livingHeroTitleStarted) return;
  livingHeroTitleStarted = true;

  const rand = (min, max) => min + Math.random() * (max - min);
  let lastAmbientLine = -1;

  function lines() {
    return [...title.children].filter((node) => node.matches('span[data-i18n]'));
  }

  function cancelAmbient() {
    const animation = livingHeroTitleAmbientAnimation;
    if (animation) {
      // Cancel synchronously without allowing an old oncancel callback to reset
      // the styles of a newer pass that may start immediately afterwards.
      animation.oncancel = null;
      const target = animation.effect?.target;
      if (target instanceof HTMLElement) target.style.opacity = '0';
      target?.parentElement?.classList.remove('is-ambient-shining');
      animation.cancel();
    }
    livingHeroTitleAmbientAnimation = null;
  }

  function scheduleAmbient(delay = rand(560, 980)) {
    window.clearTimeout(livingHeroTitleTimer);
    livingHeroTitleTimer = window.setTimeout(() => {
      livingHeroTitleTimer = 0;
      if (!livingHeroTitleVisible || document.hidden) {
        scheduleAmbient(rand(1200, 2200));
        return;
      }

      // Only the accent line owns an ambient overlay in V5.9. The white
      // lines therefore cannot receive an automatic sweep by accident.
      const available = lines().filter((line) => line.querySelector('.hero__title-light--ambient'));
      if (!available.length) {
        scheduleAmbient(rand(900, 1600));
        return;
      }

      // First light is intentional and immediate; later passes stay random but
      // avoid hitting the same line twice in a row so the lettering feels alive,
      // not looped.
      let lineIndex;
      if (!livingHeroTitleInitialAmbientDone) {
        lineIndex = 0;
      } else {
        const candidates = available
          .map((line, index) => ({ line, index }))
          .filter(({ index }) => available.length < 2 || index !== lastAmbientLine);
        const picked = candidates[Math.floor(Math.random() * candidates.length)];
        lineIndex = picked?.index ?? 0;
      }
      const line = available[lineIndex] || available[0];
      lastAmbientLine = available.indexOf(line);
      const overlay = line.querySelector('.hero__title-light--ambient');
      if (!overlay) {
        scheduleAmbient();
        return;
      }

      cancelAmbient();
      // V5.7 PIANO LIGHT — pure travelling reflection.
      // No opacity pulsing, no reverse pass, no brightness "breathing": the light
      // simply crosses the lettering from left to right like a clean piano run.
      // Because the gradient itself is transparent outside its luminous core, it
      // can stay at one constant opacity for the whole trip without any flicker.
      // V5.8 CLEAN PIANO — motion only. The reflection begins fully outside
      // the glyphs, crosses at one stable luminance and exits fully outside.
      // No opacity envelope = no perceived pulse/vibration in the base text.
      const duration = Math.round(rand(1500, 1740));
      const from = -190;
      const to = 250;
      const peak = line.classList.contains('hero__title-accent') ? 0.96 : 0.90;
      const warm = line.classList.contains('hero__title-accent');

      overlay.style.setProperty('--ambient-light-a', warm ? 'rgba(255, 205, 154, 0.28)' : 'rgba(238, 190, 92, 0.30)');
      overlay.style.setProperty('--ambient-light-b', warm ? 'rgba(255, 255, 244, 1)' : 'rgba(255, 244, 196, 1)');
      overlay.style.setProperty('--ambient-light-c', warm ? 'rgba(255, 108, 56, 0.76)' : 'rgba(255, 255, 244, 0.62)');

      // Set luminance once while the reflection is still fully outside the text.
      // During the visible pass, only the light position moves. The glyphs and
      // overlay opacity remain physically stable.
      overlay.style.backgroundPosition = `${from}% 50%`;
      overlay.style.opacity = String(peak);
      const animation = overlay.animate([
        { backgroundPosition: `${from}% 50%` },
        { backgroundPosition: `${to}% 50%` },
      ], {
        duration,
        easing: 'linear',
        fill: 'forwards',
      });

      livingHeroTitleAmbientAnimation = animation;
      line.classList.add('is-ambient-shining');
      const resetAmbientOverlay = () => {
        overlay.style.opacity = '0';
        overlay.style.backgroundPosition = `${from}% 50%`;
      };
      animation.onfinish = () => {
        resetAmbientOverlay();
        // Remove the finished WAAPI effect so long sessions never accumulate
        // stale compositor animations behind the lettering.
        animation.oncancel = null;
        animation.cancel();
        livingHeroTitleInitialAmbientDone = true;
        line.classList.remove('is-ambient-shining');
        if (livingHeroTitleAmbientAnimation === animation) livingHeroTitleAmbientAnimation = null;
        scheduleAmbient(rand(520, 950));
      };
      animation.oncancel = () => {
        resetAmbientOverlay();
        line.classList.remove('is-ambient-shining');
      };
    }, delay);
  }

  hero.addEventListener('akaihana:leaf-title-glint', (event) => {
    if (!livingHeroTitleVisible || document.hidden) return;

    const allLines = lines();
    const lineIndex = Math.max(0, Math.min(allLines.length - 1, Number(event.detail?.lineIndex) || 0));
    const line = allLines[lineIndex];
    const glintOverlays = line ? [...line.querySelectorAll('.hero__title-light--glint')] : [];
    if (!line || !glintOverlays.length) return;

    // Three independent light channels let several leaves touch the same line at nearly
    // the same time without cancelling each other. Every real contact reacts.
    const overlay = glintOverlays.find((candidate) => !candidate.getAnimations().some((a) => a.playState === 'running'))
      || glintOverlays.reduce((picked, candidate) => {
        const current = candidate.getAnimations()[0]?.currentTime ?? Infinity;
        const pickedCurrent = picked.getAnimations()[0]?.currentTime ?? Infinity;
        return current > pickedCurrent ? candidate : picked;
      }, glintOverlays[0]);

    const xPercent = Math.max(3, Math.min(97, Number(event.detail?.xPercent) || 50));
    const yPercent = Math.max(18, Math.min(82, Number(event.detail?.yPercent) || 52));
    const strength = Math.max(0.78, Math.min(1.15, Number(event.detail?.strength) || 1));
    overlay.getAnimations().forEach((animation) => {
      // A reused channel must not let the previous animation's cancellation
      // callback reset the new reflection a frame later.
      animation.oncancel = null;
      animation.cancel();
    });
    overlay.style.opacity = '0';
    overlay.style.setProperty('--leaf-glint-x', `${xPercent}%`);
    overlay.style.setProperty('--leaf-glint-y', `${yPercent}%`);
    line.classList.add('is-leaf-glinting');

    // Leaf contact is also movement-only: a short local reflection crosses the
    // contact point at constant luminance. No opacity pulse, scale or blur
    // animation can make the glyphs appear to tremble.
    const localStart = Math.max(-18, xPercent - 22);
    const localEnd = Math.min(118, xPercent + 22);
    const contactOpacity = Math.min(1, 0.86 * strength);
    overlay.style.backgroundPosition = `${localStart}% ${yPercent}%`;
    overlay.style.opacity = String(contactOpacity);
    const animation = overlay.animate([
      { backgroundPosition: `${localStart}% ${yPercent}%` },
      { backgroundPosition: `${localEnd}% ${yPercent}%` },
    ], {
      duration: Math.round(360 + 70 * strength),
      easing: 'linear',
      fill: 'forwards',
    });

    const syncGlintClass = () => {
      const active = [...line.querySelectorAll('.hero__title-light--glint')]
        .some((candidate) => candidate.getAnimations().some((a) => a.playState === 'running'));
      line.classList.toggle('is-leaf-glinting', active);
    };
    const resetGlintOverlay = () => {
      overlay.style.opacity = '0';
      overlay.style.backgroundPosition = `${localStart}% ${yPercent}%`;
    };
    animation.onfinish = () => {
      resetGlintOverlay();
      animation.oncancel = null;
      animation.cancel();
      syncGlintClass();
      if (livingHeroTitleVisible && !document.hidden && !livingHeroTitleTimer && !livingHeroTitleAmbientAnimation) scheduleAmbient(rand(360, 680));
    };
    animation.oncancel = () => {
      resetGlintOverlay();
      syncGlintClass();
    };
  });

  title.addEventListener('akaihana:title-light-ready', () => {
    if (!livingHeroTitleInitialAmbientDone && !livingHeroTitleAmbientAnimation) {
      scheduleAmbient(rand(70, 150));
    }
  });


  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        livingHeroTitleVisible = entries.some((entry) => entry.isIntersecting);
        if (livingHeroTitleVisible) {
          if (!livingHeroTitleTimer && !livingHeroTitleAmbientAnimation) scheduleAmbient(rand(180, 500));
        } else {
          window.clearTimeout(livingHeroTitleTimer);
          livingHeroTitleTimer = 0;
          cancelAmbient();
        }
      }, { threshold: 0.08 })
    : null;

  syncLivingHeroTitle();
  observer?.observe(hero);
  scheduleAmbient(rand(220, 480));
}

initLivingHeroTitle();

/* AKAIHANA HOME — red tree leaves V5.4.3: compositor motion + precomputed contacts + smooth path */
function initRedMapleLeaves() {
  const backLayer = document.querySelector('[data-leaves-layer="back"]');
  const frontLayer = document.querySelector('[data-leaves-layer="front"]');
  const hero = document.querySelector('#home.hero');
  if (!backLayer || !frontLayer || !hero) return;

  const rand = (min, max) => min + Math.random() * (max - min);
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const leaves = [];
  let heroWidth = 0;
  let heroHeight = 0;
  let resizeTimer = 0;
  let spawnTimer = 0;
  let startTimer = 0;
  let cachedTitleBounds = [];
  let heroVisible = true;
  let started = false;


  function targetCount() {
    if (heroWidth < 520) return 10;
    if (heroWidth < 900) return 13;
    return 17;
  }

  function initialActiveCount() {
    if (heroWidth < 520) return 4;
    if (heroWidth < 900) return 5;
    return 7;
  }

  function canRun() {
    return heroVisible && !document.hidden;
  }

  function measure() {
    const rect = hero.getBoundingClientRect();
    heroWidth = Math.max(1, rect.width);
    heroHeight = Math.max(1, rect.height);
  }

  function makeLeaf(index) {
    const depth = Math.random();
    const foreground = depth > 0.88;
    const background = depth < 0.28;
    const node = document.createElement('span');
    node.className = `hero__leaf ${foreground ? 'hero__leaf--front' : background ? 'hero__leaf--back' : 'hero__leaf--mid'}`;
    node.setAttribute('aria-hidden', 'true');

    const size = background ? rand(13, 20) : foreground ? rand(42, 60) : rand(23, 36);
    node.style.setProperty('--leaf-w', `${size}px`);

    const layer = foreground ? frontLayer : backLayer;
    layer.appendChild(node);

    const leaf = {
      node,
      animation: null,
      depth,
      foreground,
      background,
      index,
      size,
      height: size * 1.9,
      duration: 0,
      motionSamples: [],
      contactEvents: [],
      contactTimers: [],
    };
    leaves.push(leaf);
    return leaf;
  }

  function refreshTitleBounds() {
    const heroRect = hero.getBoundingClientRect();
    cachedTitleBounds = [...hero.querySelectorAll('.hero__title > span[data-i18n]')].map((line, lineIndex) => {
      const rect = line.getBoundingClientRect();
      return {
        lineIndex,
        left: rect.left - heroRect.left,
        right: rect.right - heroRect.left,
        top: rect.top - heroRect.top,
        bottom: rect.bottom - heroRect.top,
        width: Math.max(1, rect.width),
        height: Math.max(1, rect.height),
      };
    });
    return cachedTitleBounds;
  }

  function titleGeometryReady() {
    return cachedTitleBounds.length === 3
      && cachedTitleBounds.every((line) => line.width > 24 && line.height > 12);
  }

  function trajectory(leaf, initial = false) {
    const fromCanopy = Math.random() < 0.90;
    const startX = fromCanopy ? rand(heroWidth * 0.44, heroWidth * 0.98) : rand(heroWidth * 0.05, heroWidth * 0.98);
    const startY = initial ? rand(-90, heroHeight * 0.70) : rand(-110, -34);

    const fallDistance = heroHeight - startY + 136;
    const speed = leaf.background ? rand(52, 67) : leaf.foreground ? rand(86, 110) : rand(66, 88);
    const duration = clamp((fallDistance / speed) * 1000, 6600, 14200);

    const drift = rand(-150, 38) * (0.72 + leaf.depth * 0.46);
    const swayAmp = leaf.background ? rand(10, 19) : leaf.foreground ? rand(25, 42) : rand(16, 30);
    const swayCycles = rand(1.05, 1.72);
    const swayPhase = rand(0, Math.PI * 2);
    const secondaryAmp = swayAmp * rand(0.18, 0.34);
    const secondaryPhase = rand(0, Math.PI * 2);
    const gust = rand(-26, 20) * (0.55 + leaf.depth * 0.45);

    const startRot = rand(-165, 165);
    const spin = rand(-235, 235) * (leaf.background ? 0.62 : leaf.foreground ? 1.12 : 0.88);
    const rollPhase = rand(0, Math.PI * 2);
    const rollCycles = rand(1.25, 2.05);
    const opacity = leaf.background ? rand(0.48, 0.64) : leaf.foreground ? rand(0.76, 0.90) : rand(0.68, 0.86);

    // Denser precomputed path reduces visible velocity corners while keeping
    // runtime work entirely on the compositor.
    const steps = heroWidth < 520 ? 72 : heroWidth < 900 ? 84 : 96;
    const samples = [];
    const keyframes = [];

    for (let i = 0; i <= steps; i += 1) {
      const t = i / steps;
      // Slight acceleration but never a pause; the motion remains monotonic.
      const fallT = 0.965 * t + 0.035 * t * t;
      const y = startY + fallDistance * fallT;
      const smoothGust = Math.sin(Math.PI * t) ** 2 * gust;
      const x = startX
        + drift * t
        + Math.sin(swayPhase + t * Math.PI * 2 * swayCycles) * swayAmp
        + Math.sin(secondaryPhase + t * Math.PI * 2 * (swayCycles * 0.52)) * secondaryAmp
        + smoothGust;
      const rotation = startRot + spin * t + Math.sin(swayPhase + t * Math.PI * 2 * 0.82) * 10;
      const roll = clamp(0.73 + Math.sin(rollPhase + t * Math.PI * 2 * rollCycles) * 0.20, 0.46, 0.97);
      const fadeIn = clamp(t / 0.055, 0, 1);
      const fadeOut = clamp((1 - t) / 0.055, 0, 1);
      const frameOpacity = opacity * Math.min(fadeIn, fadeOut);
      const transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${rotation.toFixed(2)}deg) scaleX(${roll.toFixed(3)})`;

      samples.push({ offset: t, x, y, rotation, roll });
      keyframes.push({ transform, opacity: frameOpacity, offset: t });
    }

    return { duration, keyframes, samples };
  }

  function sampleMotion(leaf, progress) {
    const samples = leaf.motionSamples;
    if (!samples?.length) return null;
    const p = clamp(progress, 0, 1);
    const scaled = p * (samples.length - 1);
    const index = Math.min(samples.length - 2, Math.floor(scaled));
    const local = scaled - index;
    const a = samples[index];
    const b = samples[index + 1];
    return {
      x: a.x + (b.x - a.x) * local,
      y: a.y + (b.y - a.y) * local,
      rotation: a.rotation + (b.rotation - a.rotation) * local,
      roll: a.roll + (b.roll - a.roll) * local,
    };
  }

  function leafBoundsAtPoint(leaf, point) {
    const w = leaf.size;
    const h = leaf.height;
    const ox = w * 0.5;
    const oy = h * 0.42;
    const angle = point.rotation * Math.PI / 180;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    const corners = [[0, 0], [w, 0], [w, h], [0, h]];

    for (const [px, py] of corners) {
      const dx = (px - ox) * point.roll;
      const dy = py - oy;
      const tx = point.x + ox + dx * cos - dy * sin;
      const ty = point.y + oy + dx * sin + dy * cos;
      minX = Math.min(minX, tx);
      maxX = Math.max(maxX, tx);
      minY = Math.min(minY, ty);
      maxY = Math.max(maxY, ty);
    }

    return { minX, maxX, minY, maxY, cx: (minX + maxX) * 0.5 };
  }

  function intersectsLine(bounds, line) {
    const contactPad = heroWidth < 520 ? 6 : 5;
    return bounds.maxX >= line.left - contactPad
      && bounds.minX <= line.right + contactPad
      && bounds.maxY >= line.top - contactPad
      && bounds.minY <= line.bottom + contactPad;
  }

  function interpolatePoint(a, b, t) {
    return {
      x: a.x + (b.x - a.x) * t,
      y: a.y + (b.y - a.y) * t,
      rotation: a.rotation + (b.rotation - a.rotation) * t,
      roll: a.roll + (b.roll - a.roll) * t,
    };
  }

  function refineContact(leaf, line, a, b) {
    let lo = 0;
    let hi = 1;
    // A tiny binary search gives a visually precise touch point without doing
    // any geometry work while the animation is running.
    for (let i = 0; i < 7; i += 1) {
      const mid = (lo + hi) * 0.5;
      const point = interpolatePoint(a, b, mid);
      if (intersectsLine(leafBoundsAtPoint(leaf, point), line)) hi = mid;
      else lo = mid;
    }
    const t = hi;
    const point = interpolatePoint(a, b, t);
    const bounds = leafBoundsAtPoint(leaf, point);
    return { t, point, bounds };
  }

  function computeContactEvents(leaf, samples, duration) {
    if (!cachedTitleBounds.length || samples.length < 2) return [];
    const events = [];
    const sampleBounds = samples.map((sample) => leafBoundsAtPoint(leaf, sample));

    for (const line of cachedTitleBounds) {
      let inside = false;
      for (let i = 0; i < samples.length; i += 1) {
        const sample = samples[i];
        const bounds = sampleBounds[i];
        const hit = intersectsLine(bounds, line);

        if (hit && !inside) {
          let offset = sample.offset;
          let contactBounds = bounds;
          if (i > 0 && !intersectsLine(sampleBounds[i - 1], line)) {
            const prev = samples[i - 1];
            const refined = refineContact(leaf, line, prev, sample);
            offset = prev.offset + (sample.offset - prev.offset) * refined.t;
            contactBounds = refined.bounds;
          }
          const xPercent = clamp(((contactBounds.cx - line.left) / line.width) * 100, 3, 97);
          const cy = (contactBounds.minY + contactBounds.maxY) * 0.5;
          const yPercent = clamp(((cy - line.top) / line.height) * 100, 18, 82);
          events.push({
            time: Math.max(0, offset * duration - 24),
            lineIndex: line.lineIndex,
            xPercent,
            yPercent,
            strength: leaf.foreground ? 1.10 : leaf.background ? 0.84 : 0.96,
            fired: false,
          });
        }
        inside = hit;
      }
    }

    return events.sort((a, b) => a.time - b.time);
  }

  function clearContactTimers(leaf) {
    for (const timer of leaf.contactTimers) clearTimeout(timer);
    leaf.contactTimers = [];
  }

  function armContactEvents(leaf) {
    clearContactTimers(leaf);
    if (!leaf.animation || !canRun()) return;
    const current = Number(leaf.animation.currentTime);
    const elapsed = Number.isFinite(current) ? current : 0;

    for (const event of leaf.contactEvents) {
      if (event.fired || event.time < elapsed - 24) continue;
      const timer = window.setTimeout(() => {
        if (!leaf.animation || !canRun() || event.fired) return;
        event.fired = true;
        hero.dispatchEvent(new CustomEvent('akaihana:leaf-title-glint', {
          detail: {
            lineIndex: event.lineIndex,
            xPercent: event.xPercent,
            yPercent: event.yPercent,
            strength: event.strength,
          },
        }));
      }, Math.max(0, event.time - elapsed));
      leaf.contactTimers.push(timer);
    }
  }

  function startLeaf(leaf, initial = false) {
    if (leaf.animation || !canRun()) return false;

    const { duration, keyframes, samples } = trajectory(leaf, initial);
    const animation = leaf.node.animate(keyframes, {
      duration,
      easing: 'linear',
      fill: 'both',
      iterations: 1,
    });

    leaf.animation = animation;
    leaf.duration = duration;
    leaf.motionSamples = samples;
    leaf.contactEvents = computeContactEvents(leaf, samples, duration);
    armContactEvents(leaf);

    animation.onfinish = () => {
      if (leaf.animation !== animation) return;
      leaf.node.style.opacity = '0';
      animation.cancel();
      leaf.animation = null;
      leaf.duration = 0;
      leaf.motionSamples = [];
      clearContactTimers(leaf);
      leaf.contactEvents = [];
    };

    return true;
  }

  function randomSpawnDelay() {
    let delay;
    if (heroWidth < 520) delay = rand(1050, 1900);
    else if (heroWidth < 900) delay = rand(850, 1550);
    else delay = rand(650, 1250);
    if (Math.random() < 0.10) delay *= rand(1.8, 2.5);
    return delay;
  }

  function scheduleNextSpawn(delay = randomSpawnDelay()) {
    clearTimeout(spawnTimer);
    spawnTimer = window.setTimeout(() => {
      spawnTimer = 0;
      if (canRun()) {
        const idle = leaves.filter((leaf) => !leaf.animation);
        if (idle.length) startLeaf(idle[Math.floor(Math.random() * idle.length)], false);
      }
      scheduleNextSpawn();
    }, delay);
  }

  function removeLeaf(leaf) {
    leaf.animation?.cancel();
    leaf.animation = null;
    leaf.duration = 0;
    leaf.motionSamples = [];
    clearContactTimers(leaf);
    leaf.contactEvents = [];
    leaf.node.remove();
    const index = leaves.indexOf(leaf);
    if (index >= 0) leaves.splice(index, 1);
  }

  function syncLeafCount() {
    const wanted = targetCount();
    while (leaves.length < wanted) makeLeaf(leaves.length);
    while (leaves.length > wanted) {
      const idle = leaves.findLast?.((leaf) => !leaf.animation) || [...leaves].reverse().find((leaf) => !leaf.animation);
      removeLeaf(idle || leaves[leaves.length - 1]);
    }
    leaves.forEach((leaf, index) => { leaf.index = index; });
  }

  function seedInitialScene() {
    const pool = [...leaves].sort(() => Math.random() - 0.5);
    const count = Math.min(initialActiveCount(), pool.length);
    for (let i = 0; i < count; i += 1) startLeaf(pool[i], true);
  }

  function startSceneWhenReady(attempt = 0) {
    clearTimeout(startTimer);
    refreshTitleBounds();
    if (!titleGeometryReady() && attempt < 50) {
      startTimer = window.setTimeout(() => startSceneWhenReady(attempt + 1), 40);
      return;
    }
    if (started) return;
    started = true;
    seedInitialScene();
    scheduleNextSpawn(rand(420, 900));
  }

  function rebuild() {
    measure();
    syncLeafCount();
    refreshTitleBounds();
    if (!started) startSceneWhenReady();
  }

  function scheduleRebuild() {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(rebuild, 120);
  }

  function updatePlayback() {
    const running = canRun();
    for (const leaf of leaves) {
      if (!leaf.animation) continue;
      if (running) {
        leaf.animation.play();
        armContactEvents(leaf);
      } else {
        leaf.animation.pause();
        clearContactTimers(leaf);
      }
    }
  }

  hero.querySelector('.hero__title')?.addEventListener('akaihana:title-light-ready', () => { refreshTitleBounds(); });

  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
        heroVisible = entries.some((entry) => entry.isIntersecting);
        updatePlayback();
      }, { threshold: 0.02 })
    : null;

  rebuild();
  observer?.observe(hero);
  window.addEventListener('resize', scheduleRebuild, { passive: true });
  document.addEventListener('visibilitychange', updatePlayback, { passive: true });
  if ('ResizeObserver' in window) new ResizeObserver(scheduleRebuild).observe(hero);
}

initRedMapleLeaves();


/* AKAIHANA HOME — V5.5 micro-depth: direct compositor targets, no sensors */
function initHeroMicroDepth() {
  const hero = document.querySelector('#home.hero');
  if (!hero) return;

  const image = hero.querySelector('.hero__image');
  const finePointer = window.matchMedia?.('(hover: hover) and (pointer: fine)');

  if (!finePointer?.matches) {
    hero.classList.add('hero--mobile-depth');
    return;
  }

  hero.classList.add('hero--micro-depth');
  let rect = hero.getBoundingClientRect();
  let targetX = 0;
  let targetY = 0;
  let rafId = 0;

  const updateRect = () => { rect = hero.getBoundingClientRect(); };

  function applyDepth() {
    rafId = 0;
    // Direct individual-translate writes stay on the compositor and avoid
    // invalidating custom properties throughout the whole hero subtree.
    if (image) image.style.translate = `${(-targetX * 5.2).toFixed(2)}px ${(-targetY * 3.4).toFixed(2)}px`;
  }

  function queueDepth() {
    if (!rafId) rafId = requestAnimationFrame(applyDepth);
  }

  function onPointerMove(event) {
    if (!rect.width || !rect.height) updateRect();
    targetX = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - 0.5) * 2));
    targetY = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - 0.5) * 2));
    queueDepth();
  }

  hero.addEventListener('pointerenter', updateRect, { passive: true });
  hero.addEventListener('pointermove', onPointerMove, { passive: true });
  hero.addEventListener('pointerleave', () => {
    targetX = 0;
    targetY = 0;
    queueDepth();
  }, { passive: true });
  window.addEventListener('resize', updateRect, { passive: true });
  applyDepth();
}

initHeroMicroDepth();
