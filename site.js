(() => {
  "use strict";

  const songs = [
    { title: "Acharyakarudu Alochana Kartha", href: "songs/acharyakarudu alochana kartha .html", category: "worship" },
    { title: "E Sthithilo Unnanante", href: "songs/e sthilo unnanante.html", category: "worship" },
    { title: "Entha Prema Murthivi", href: "songs/entha prema murhtivi .html", category: "worship" },
    { title: "Kanna Thandri", href: "songs/kannathandri.html", category: "worship" },
    { title: "Kannulu Musina", href: "songs/kannulu musina.html", category: "worship" },
    { title: "Konda Kota Neeve", href: "songs/konda kota neeve.html", category: "worship" },
    { title: "Mounamuga Undake Manasa", href: "songs/mounamuga undake manasa.html", category: "worship" },
    { title: "Nedorepona", href: "songs/nedorepona.html", category: "worship" },
    { title: "Nee Vakyamenanu", href: "songs/nee vakyamenanu.html", category: "worship" },
    { title: "Neshedinchabadinadhi", href: "songs/neshedinchabadinadhi.html", category: "worship" },
    { title: "Prabhu Dhayaludu", href: "songs/prabhu dhayaludu.html", category: "worship" },
    { title: "Shothramu Suthi Chelinthunu", href: "songs/shothramu suthi chelinthunu.html", category: "worship" },
    { title: "Sthuthiyinthu Nee Namamu", href: "songs/sthuthiyinthu nee namamu.html", category: "worship" },
    { title: "Yessaya Mata Jeevapu Uta", href: "songs/yessaya mata jevapu uta.html", category: "worship" },
    { title: "Yesu Mayandhu Manamesu", href: "songs/yesu mayandhu manamesu.html", category: "worship" },
    { title: "Yesuloney Unadhi Nithya", href: "songs/yesuloney unadhi nithya.html", category: "worship" },
    { title: "Sharonu Polamulo Pusina", href: "songs/sharonu polamulo pusina.html", category: "worship" },
    { title: "Kalyana Ragala", href: "songs/wedding songs/kalyana ragala.html", category: "wedding" },
    { title: "Kalyanam Kamaniyam", href: "songs/wedding songs/kalyanam kamaniyam.html", category: "wedding" },
    { title: "Madhuram E Shubha", href: "songs/wedding songs/madhuram e shubha.html", category: "wedding" },
    { title: "Mangalame Yesunaku", href: "songs/wedding songs/mangalame yesunaku.html", category: "wedding" },
    { title: "Na Bagaswamini", href: "songs/wedding songs/Na bagaswamini.html", category: "wedding" },
    { title: "Na Priyuda Na Priya", href: "songs/wedding songs/na priyuda na priya.html", category: "wedding" },
    { title: "Nuthana Yerushalemu", href: "songs/wedding songs/nuthana yerushalemu .html", category: "wedding" },
    { title: "Sruti Kartha", href: "songs/wedding songs/sruti kartha.html", category: "wedding" },
    { title: "Vivahamanadhi", href: "songs/wedding songs/vivahamanadhi.html", category: "wedding" },
    { title: "Kalyaname Vybhogame", href: "songs/wedding songs/kalyaname vybhogame.html", category: "wedding" },
    { title: "Edhi Devuni Nirnayamu", href: "songs/wedding songs/edhi devuni nirnayamu.html", category: "wedding" },
    { title: "Devera Nee Devenalu", href: "songs/wedding songs/devara nee devenalu.html", category: "wedding" },
    { title: "Manavula Melu Koraku", href: "songs/wedding songs/manavula melu koraku.html", category: "wedding" },
    { title: "Devude Jathaparichina Janta", href: "songs/wedding songs/devude jathaparichina janta.html", category: "wedding" },
    { title: "Edharokatiga Mareti Maduramaina", href: "songs/wedding songs/edharokatiga mareti.html", category: "wedding" },
    { title: "Gunavathi Ayna Bharya", href: "songs/wedding songs/gunavathi ayna barya.html", category: "wedding" },
    { title: "Kaliseti Andhala", href: "songs/wedding songs/kaliseti andhala.html", category: "wedding" },
    { title: "O Sangama Sarvangama", href: "songs/wedding songs/o sangama sarvangama.html", category: "wedding" },
    { title: "Paramuna Nirnayame", href: "songs/wedding songs/paramuna nirnayame.html", category: "wedding" },
    { title: "Virisina Hrudayalaku", href: "songs/wedding songs/virisina hrudayalaku.html", category: "wedding" },
    { title: "Rakshakuni Janma Sthalama", href: "songs/christimas songs/rakshakuni janma sthalama.html", category: "christmas" },
    { title: "Siyonu Patalu Santhoshamuga", href: "songs/samadhi songs/siyonu patalu santhoshamuga.html", category: "samadhi" },
    { title: "nuthana yerushalem dhigivachu", href: "songs/wedding songs/nuthana yerushalem.html", category: "wedding" },
    { title: "yekkadekkado putti", href: "songs/wedding songs/yekkadekkado putti.html", category: "wedding" },
    { title: "na jeevitha bagaswamivi neevu", href: "songs/wedding songs/na jeevitha bagaswanivi.html", category: "wedding" },
    { title: "goreepilla varochavam", href: "songs/wedding songs/goreepilla varochaavam.html", category: "wedding" },
  
  ];
  const siteRoot = new URL(".", document.currentScript.src);

  const storage = {
    get(key, fallback) {
      try { const value = localStorage.getItem(key); return value === null ? fallback : JSON.parse(value); }
      catch (_) { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); return true; }
      catch (_) { return false; }
    }
  };
  const keys = { theme: "sionRajuLyrics.theme", favorites: "sionRajuLyrics.favorites", recent: "sionRajuLyrics.recent" };
  const resolveHref = song => new URL(song.href, siteRoot).href;
  const normalizedPath = value => {
    try { return decodeURIComponent(new URL(value, siteRoot).pathname).replace(/\\/g, "/").toLocaleLowerCase(); }
    catch (_) { return String(value).toLocaleLowerCase(); }
  };
  const favorites = new Set((storage.get(keys.favorites, []) || []).filter(value => songs.some(song => normalizedPath(song.href) === normalizedPath(value))));
  const recent = (storage.get(keys.recent, []) || []).filter(value => songs.some(song => normalizedPath(song.href) === normalizedPath(value)));
  const songForLocation = songs.find(song => normalizedPath(resolveHref(song)) === normalizedPath(location.href));

  function saveFavorites() { storage.set(keys.favorites, [...favorites]); }
  function saveRecent() { storage.set(keys.recent, recent.slice(0, 5)); }
  function setStatus(message) {
    let status = document.querySelector(".song-status");
    if (!status) {
      status = document.createElement("p");
      status.className = "song-status";
      status.setAttribute("aria-live", "polite");
      const panel = document.querySelector(".lyric-panel");
      if (panel) panel.append(status);
      else document.getElementById("searchMessage")?.replaceWith(status);
    }
    if (status) status.textContent = message;
  }

  function renderThemeButton() {
    const nav = document.querySelector(".site-nav");
    if (!nav || nav.querySelector("#themeToggle")) return;
    const button = document.createElement("button");
    button.type = "button";
    button.id = "themeToggle";
    button.className = "theme-toggle";
    button.setAttribute("aria-label", "Switch to dark mode");
    button.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      storage.set(keys.theme, next);
      updateThemeButton();
    });
    nav.append(button);
    updateThemeButton();
  }
  function updateThemeButton() {
    const button = document.getElementById("themeToggle");
    if (!button) return;
    const dark = document.documentElement.dataset.theme === "dark";
    button.textContent = dark ? "☀ Light" : "☾ Dark";
    button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    button.setAttribute("aria-pressed", String(dark));
  }

  function favoriteButton(song, compact = false) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = compact ? "favorite-button favorite-card-button" : "favorite-button";
    button.dataset.favorite = song.href;
    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      const wasFavorite = favorites.has(song.href);
      if (wasFavorite) favorites.delete(song.href); else favorites.add(song.href);
      saveFavorites();
      updateFavoriteButtons();
      if (document.getElementById("songCatalog")) renderCatalog();
      if (document.getElementById("recentlyViewed")) renderRecent();
      setStatus(wasFavorite ? "Removed from favourites." : "Added to favourites.");
    });
    updateFavoriteButton(button, song);
    return button;
  }
  function updateFavoriteButton(button, song) {
    const active = favorites.has(song.href);
    button.textContent = active ? "♥" : "♡";
    button.setAttribute("aria-label", active ? `Remove ${song.title} from favourites` : `Add ${song.title} to favourites`);
    button.setAttribute("aria-pressed", String(active));
    button.title = active ? "Remove from favourites" : "Add to favourites";
  }
  function updateFavoriteButtons() {
    document.querySelectorAll("[data-favorite]").forEach(button => {
      const song = songs.find(item => item.href === button.dataset.favorite);
      if (song) updateFavoriteButton(button, song);
    });
  }

  function createCard(song) {
    const article = document.createElement("article");
    article.className = "card song-card";
    article.dataset.song = song.title;
    article.dataset.category = song.category;
    const link = document.createElement("a");
    link.className = "song-card-link";
    link.href = resolveHref(song);
    const title = document.createElement("h3");
    title.textContent = song.title;
    const arrow = document.createElement("span");
    arrow.className = "arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "→";
    link.append(title, arrow);
    article.append(link, favoriteButton(song, true));
    return article;
  }

  function renderCatalog() {
    const catalog = document.getElementById("songCatalog");
    if (!catalog) return;
    const query = (document.getElementById("songSearch")?.value || "").trim().toLocaleLowerCase();
    const category = document.getElementById("categoryFilter")?.value || "all";
    const onlyFavorites = document.getElementById("favoritesOnly")?.getAttribute("aria-pressed") === "true";
    let count = 0;
    for (const type of ["worship", "wedding", "christmas", "samadhi"]) {
      const section = catalog.querySelector(`[data-category="${type}"]`);
      const grid = section?.querySelector(".cards");
      if (!section || !grid) continue;
      grid.replaceChildren();
      const matched = songs.filter(song => song.category === type && song.title.toLocaleLowerCase().includes(query) && (category === "all" || category === type) && (!onlyFavorites || favorites.has(song.href)));
      matched.forEach(song => grid.append(createCard(song)));
      section.classList.toggle("hidden", matched.length === 0);
      count += matched.length;
    }
    const message = document.getElementById("searchMessage");
    if (message) message.textContent = count ? `${count} song${count === 1 ? "" : "s"} shown.` : "No songs match these filters.";
    updateFavoriteButtons();
  }

  function renderRecent() {
    const list = document.getElementById("recentlyViewed");
    if (!list) return;
    list.replaceChildren();
    const viewed = recent.map(href => songs.find(song => song.href === href)).filter(Boolean);
    viewed.forEach(song => {
      const article = document.createElement("article");
      article.className = "card song-card recent-card";
      const link = document.createElement("a");
      link.className = "song-card-link";
      link.href = resolveHref(song);
      const title = document.createElement("h3");
      title.textContent = song.title;
      link.append(title);
      article.append(link, favoriteButton(song, true));
      list.append(article);
    });
    const empty = document.getElementById("recentEmpty");
    if (empty) empty.classList.toggle("hidden", viewed.length > 0);
  }

  async function copyText(text) {
    if (navigator.clipboard?.writeText) {
      try { await navigator.clipboard.writeText(text); return true; } catch (_) { /* try the local fallback below */ }
    }
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.append(field);
    field.select();
    let copied = false;
    try { copied = document.execCommand("copy"); } catch (_) { copied = false; }
    field.remove();
    return copied;
  }

  async function shareSong(song) {
    const url = location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: song.title, text: `${song.title} — Sion Raju Lyrics`, url });
        setStatus("Share options opened.");
        return;
      } catch (error) {
        if (error?.name === "AbortError") return;
      }
    }
    const success = await copyText(url);
    setStatus(success ? "Song link copied to clipboard." : "Sharing and copying are unavailable in this browser.");
  }

  function setupLyricFeatures(song) {
    const panel = document.querySelector(".lyric-panel");
    if (!panel || !song) return;
    const title = panel.querySelector("h1");
    const actions = document.createElement("div");
    actions.className = "lyric-tools";
    actions.setAttribute("aria-label", "Song tools");
    actions.append(favoriteButton(song));
    const size = document.createElement("div");
    size.className = "text-size-controls";
    size.setAttribute("aria-label", "Lyric text size");
    const sizeLabel = document.createElement("span");
    sizeLabel.textContent = "Text size";
    const smaller = document.createElement("button");
    smaller.type = "button"; smaller.textContent = "A−"; smaller.setAttribute("aria-label", "Decrease lyric text size");
    const reset = document.createElement("button");
    reset.type = "button"; reset.textContent = "A"; reset.setAttribute("aria-label", "Reset lyric text size");
    const larger = document.createElement("button");
    larger.type = "button"; larger.textContent = "A+"; larger.setAttribute("aria-label", "Increase lyric text size");
    let fontSize = 1.14;
    const applySize = () => panel.style.setProperty("--lyric-size", `${fontSize}rem`);
    smaller.addEventListener("click", () => { fontSize = Math.max(0.9, fontSize - 0.1); applySize(); });
    reset.addEventListener("click", () => { fontSize = 1.14; applySize(); });
    larger.addEventListener("click", () => { fontSize = Math.min(1.8, fontSize + 0.1); applySize(); });
    size.append(sizeLabel, smaller, reset, larger);
    actions.append(size);

    const copyLyrics = document.createElement("button");
    copyLyrics.type = "button"; copyLyrics.className = "button secondary"; copyLyrics.textContent = "Copy lyrics";
    copyLyrics.addEventListener("click", async () => {
      const clone = panel.cloneNode(true);
      clone.querySelectorAll(".lyric-tools,.song-navigation,.song-status").forEach(item => item.remove());
      clone.querySelector("h1")?.remove();
      const success = await copyText(clone.innerText || clone.textContent || "");
      setStatus(success ? "Lyrics copied to clipboard." : "Copy was unavailable in this browser.");
    });
    const share = document.createElement("button");
    share.type = "button"; share.className = "button secondary";
    share.textContent = navigator.share ? "Share song" : "Copy song link";
    share.addEventListener("click", () => shareSong(song));
    actions.append(copyLyrics, share);
    if (title) panel.insertBefore(actions, title); else panel.prepend(actions);

    const index = songs.indexOf(song);
    const navigation = document.createElement("nav");
    navigation.className = "song-navigation";
    navigation.setAttribute("aria-label", "Song navigation");
    if (index > 0) {
      const previous = document.createElement("a"); previous.className = "button secondary"; previous.href = resolveHref(songs[index - 1]); previous.textContent = `← ${songs[index - 1].title}`; navigation.append(previous);
    } else {
      const spacer = document.createElement("span"); navigation.append(spacer);
    }
    if (index < songs.length - 1) {
      const next = document.createElement("a"); next.className = "button"; next.href = resolveHref(songs[index + 1]); next.textContent = `${songs[index + 1].title} →`; navigation.append(next);
    }
    panel.append(navigation);
  }

  function boot() {
    const theme = storage.get(keys.theme, "light");
    document.documentElement.dataset.theme = theme === "dark" ? "dark" : "light";
    renderThemeButton();

    if (songForLocation) {
      const position = recent.indexOf(songForLocation.href);
      if (position !== -1) recent.splice(position, 1);
      recent.unshift(songForLocation.href);
      recent.splice(5);
      saveRecent();
      setupLyricFeatures(songForLocation);
    }

    const searchForm = document.getElementById("songSearchForm");
    const search = document.getElementById("songSearch");
    const category = document.getElementById("categoryFilter");
    const favoritesFilter = document.getElementById("favoritesOnly");
    if (searchForm) searchForm.addEventListener("submit", event => { event.preventDefault(); renderCatalog(); });
    if (search) search.addEventListener("input", renderCatalog);
    if (category) category.addEventListener("change", renderCatalog);
    if (favoritesFilter) favoritesFilter.addEventListener("click", () => {
      const active = favoritesFilter.getAttribute("aria-pressed") !== "true";
      favoritesFilter.setAttribute("aria-pressed", String(active));
      favoritesFilter.classList.toggle("active", active);
      favoritesFilter.textContent = active ? "♥ Showing favourites" : "♡ Favourites only";
      renderCatalog();
    });
    renderCatalog();
    renderRecent();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
  else boot();
})();
