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
  storiesIndex: document.querySelector("[data-stories-index]"),
  storyReader: document.querySelector("[data-story-reader]"),
  storyDetail: document.querySelector("[data-story-detail]"),
  storyBack: document.querySelector("[data-story-back]"),
  popCultureThemes: document.querySelector("[data-pop-culture-themes]"),
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
let catalogById = new Map();
let revealObserver = null;
let lightboxProjectId = null;
let lastFocusedElement = null;
let activeStoryId = null;
let activePopCultureThemeId = window.AKAI_HANA_POP_CULTURE?.defaultTheme || "kitsune";
let activePopCultureCategoryId = null;

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
    return await response.json();
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

function renderGallery() {
  if (!mountPoints.galleryGrid || !Array.isArray(dictionary.gallery?.items)) return;
  catalogById = new Map();
  clear(mountPoints.galleryGrid);
  const featuredIds = Array.isArray(dictionary.gallery.featuredIds) ? dictionary.gallery.featuredIds : [];
  const galleryItems = featuredIds.length
    ? featuredIds.map((id) => dictionary.gallery.items.find((item) => item.id === id)).filter(Boolean)
    : dictionary.gallery.items;

  dictionary.gallery.items.forEach((item) => {
    catalogById.set(item.id, item);
  });

  galleryItems.forEach((item, index) => {
    const category = item.category || getCategoryLabel(item.categoryId);
    const article = createElement("article", {
      className: "art-card reveal",
      attributes: {
        "data-art-card": "",
        "data-category": item.categoryId,
        "data-project-id": item.id
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
    media.addEventListener("click", () => openLightbox(item.id));
    const overlay = createElement("div", { className: "art-card__overlay" });
    const overlayContent = createElement("div", { className: "art-card__overlay-content" });
    const overlayCta = createElement("span", {
      className: "art-card__overlay-cta",
      text: dictionary.actions.viewProject
    });

    overlayContent.append(
      createElement("span", {
        className: "art-card__overlay-meta",
        text: interpolate(dictionary.patterns.projectMeta, { category, id: item.id })
      }),
      createElement("strong", { text: item.title }),
      overlayCta
    );
    overlay.append(overlayContent);
    media.append(renderProjectImage(item, index < 4), overlay);
    figure.append(media);

    const bodyContent = createElement("div", { className: "art-card__body" });
    const meta = createElement("p", {
      className: "art-card__meta",
      text: interpolate(dictionary.patterns.projectMeta, { category, id: item.id })
    });
    const title = createElement("h3", { text: item.title });
    const style = createElement("p", {
      className: "project-card__style",
      text: interpolate(dictionary.patterns.projectStyle, { style: item.style })
    });
    const description = createElement("p", { className: "project-card__story", text: item.shortDescription });
    const footer = createElement("div", { className: "art-card__footer" });
    const viewButton = createElement("button", {
      className: "button button--collection project-card__button",
      text: dictionary.actions.viewProject,
      attributes: {
        type: "button",
        "data-project-open": item.id
      }
    });

    viewButton.addEventListener("click", () => openLightbox(item.id));
    footer.append(renderProjectTags(item.tags, 3), viewButton);
    bodyContent.append(meta, title, style, description, footer);
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

function renderStories() {
  if (!mountPoints.storiesIndex || !mountPoints.storyReader || !mountPoints.storyDetail) return;

  const stories = getStories();
  const activeStory = stories.find((story) => story.id === activeStoryId);
  clear(mountPoints.storiesIndex);

  stories.forEach((story, index) => {
    const card = createElement("button", {
      className: "story-card reveal",
      attributes: {
        type: "button",
        "data-story-card": story.id,
        "aria-label": interpolate(dictionary.stories.openStory, { title: story.title })
      }
    });
    const content = createElement("span", { className: "story-card__content" });

    content.append(
      createElement("span", { className: "story-card__number", text: story.number || String(index + 1).padStart(2, "0") }),
      createElement("span", { className: "story-card__title", text: story.cardTitle || story.title })
    );
    card.append(renderStoryImage(story.cardImage, "story-card__image", index < 2), content);
    card.addEventListener("click", () => openStory(story.id));
    mountPoints.storiesIndex.append(card);
  });

  if (activeStory) {
    renderStoryDetail(activeStory);
    openStoryView(false);
  } else {
    closeStoryReader(false);
  }
}

function renderStoryDetail(story) {
  clear(mountPoints.storyDetail);

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

  if (Array.isArray(story.gallery) && story.gallery.length) {
    const gallery = createElement("section", { className: "story-gallery" });
    const galleryGrid = createElement("div", { className: "story-gallery__grid" });

    gallery.append(createElement("h2", { text: story.galleryTitle || dictionary.stories.galleryTitle }));
    story.gallery.forEach((image) => {
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

function renderPopCulture() {
  if (!mountPoints.popCultureThemes || !mountPoints.popCultureCurrent || !mountPoints.popCultureTabs || !mountPoints.popCultureConnections) return;

  const data = getPopCultureData();
  const activeTheme = getActivePopCultureTheme();
  clear(mountPoints.popCultureThemes);
  clear(mountPoints.popCultureCurrent);
  clear(mountPoints.popCultureTabs);
  clear(mountPoints.popCultureConnections);
  document.querySelectorAll("[data-pop-culture-ui]").forEach((element) => {
    const text = getPopCultureUiText(element.dataset.popCultureUi);
    if (text) element.textContent = text;
  });

  data.themes.forEach((theme) => {
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
    figure.append(createElement("img", { attributes: { src: entry.image, alt: "", loading: "lazy", decoding: "async" } }));
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
    createElement("img", { className: "pop-culture-detail__image", attributes: { src: entry.image, alt: "", loading: "eager", decoding: "async" } }),
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
  activeFilter = categoryId;
  let visibleCount = 0;
  const cards = Array.from(document.querySelectorAll("[data-art-card]"));
  const buttons = Array.from(document.querySelectorAll("[data-filter]"));

  cards.forEach((card) => {
    const isVisible = categoryId === "all" || card.dataset.category === categoryId;
    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  buttons.forEach((button) => {
    const isActive = button.dataset.filter === categoryId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  const countTemplate = visibleCount === 1 ? dictionary.gallery.countOne : dictionary.gallery.countMany;
  if (galleryCount && countTemplate) galleryCount.textContent = interpolate(countTemplate, { count: visibleCount });
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
