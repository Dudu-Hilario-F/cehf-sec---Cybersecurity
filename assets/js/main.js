(function () {
  "use strict";

  /* English text lives in index.html; this dictionary only holds PT
     overrides for [data-i18n] elements plus labels used by rendered cards. */
  var PT = {
    "skip": "Pular para o conteúdo",
    "nav.off": "ofensiva", "nav.def": "defensiva", "nav.ops": "operações", "nav.certs": "certificações", "nav.contact": "contato",
    "hero.role": "Cybersecurity & Infraestrutura",
    "hero.projects": "VER PROJETOS",
    "sys.focus": "FOCO", "sys.spec": "ESPECIALIZAÇÃO", "sys.mode": "MODO",
    "about.lead": "Sou Carlos Eduardo, profissional de cybersecurity que veio da infraestrutura. Sei como os ambientes são construídos, e é exatamente por isso que sei onde eles quebram.",
    "about.p1": "Minha base é infraestrutura: roteamento e switching com MikroTik e pfSense, segmentação de VLANs, VPN, Linux e Windows Server, Active Directory, servidores de arquivos Samba e virtualização com Proxmox. É nesse terreno que todo ataque e toda defesa realmente acontecem.",
    "about.p2": "Sobre essa base construo meus próprios laboratórios para praticar segurança ofensiva de forma controlada: reconhecimento, enumeração, escalação de privilégios e caminhos de ataque em Active Directory. Depois troco de lado: coleto os logs, construo a detecção, investigo o que aconteceu e faço o hardening do ambiente.",
    "about.p3": "Não rodo ferramentas no automático. Quero entender por que um ataque funciona, que rastros ele deixa e como impedi-lo. Todo lab aqui termina com documentação e um repositório.",
    "about.build": "MikroTik, pfSense, VLANs, Windows Server, Active Directory, Proxmox",
    "about.break": "Recon, enumeração, escalação de privilégios e caminhos de ataque em AD, em labs",
    "about.secure": "Wazuh, Sysmon, análise de logs, detecção e hardening",
    "off.intro": "Áreas de estudo e prática. Cada uma será ligada a projetos e labs reais conforme forem publicados.",
    "off.projects": "PROJETOS",
    "def.intro": "Conhecimento ofensivo usado para construir defesa. Cada ataque estudado vira uma detecção, uma investigação e um passo de hardening.",
    "leg.lab": "Ambiente de laboratório controlado",
    "leg.project": "Projeto documentado e publicado",
    "leg.study": "Estudo teórico / curso",
    "leg.cert": "Certificação formal",
    "def.note": "Nada aqui é apresentado como experiência em produção, salvo quando indicado explicitamente.",
    "infra.intro": "Os sistemas onde ataques e defesas realmente acontecem. Arquitetura de referência dos labs:",
    "infra.cap": "Diagrama de referência. As arquiteturas reais são publicadas junto com cada lab.",
    "labs.intro": "Laboratórios práticos: objetivo, caminho de ataque, contrapartida defensiva e stack.",
    "ops.intro": "Log de operações: Hack The Box, TryHackMe, CTFs e labs ofensivos.",
    "certs.intro": "Status mostrado como é: concluída, em andamento ou planejada.",
    "contact.title": "GITHUB / CONTATO",
    "contact.lead": "Cada projeto deste site aponta para um repositório: código, configuração e documentação.",
    "footer": "Site estático · GitHub Pages · sem rastreadores",
    /* rendered labels */
    "l.objective": "OBJETIVO", "l.attack": "ATAQUE", "l.defense": "DEFESA", "l.stack": "STACK",
    "l.architecture": "ARQUITETURA", "l.writeup": "WRITE-UP", "l.source": "CÓDIGO", "l.pending": "pendente",
    "s.COMPLETED": "CONCLUÍDO", "s.IN PROGRESS": "EM ANDAMENTO", "s.PLANNED": "PLANEJADO", "s.PLACEHOLDER": "PLACEHOLDER"
  };
  var EN = {
    "l.objective": "OBJECTIVE", "l.attack": "ATTACK", "l.defense": "DEFENSE", "l.stack": "STACK",
    "l.architecture": "ARCHITECTURE", "l.writeup": "WRITE-UP", "l.source": "SOURCE", "l.pending": "pending",
    "s.COMPLETED": "COMPLETED", "s.IN PROGRESS": "IN PROGRESS", "s.PLANNED": "PLANNED", "s.PLACEHOLDER": "PLACEHOLDER"
  };

  var S = window.SITE || {};
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  var lang = "en";
  try {
    var saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "pt") lang = saved;
    else if ((navigator.language || "").slice(0, 2) === "pt") lang = "pt";
  } catch (e) {}

  var t = function (k) { return (lang === "pt" && PT[k]) || EN[k] || k; };
  var loc = function (v) { return v == null ? "" : typeof v === "string" ? v : (v[lang] || v.en || ""); };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function slug(s) { return String(s).toLowerCase().replace(/\s+/g, "-"); }
  function statusBadge(s) { return el("span", "badge s-" + slug(s), t("s." + s)); }
  function typeBadge(s) { return el("span", "badge t-" + slug(s), s); }

  function linkBtn(label, href, small) {
    var cls = "btn" + (small ? " btn-sm" : "");
    if (href) {
      var a = el("a", cls, label);
      a.href = href;
      if (!/^mailto:/.test(href)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
      return a;
    }
    var s = el("span", cls + " disabled", label);
    s.setAttribute("aria-disabled", "true");
    s.title = t("l.pending");
    return s;
  }
  function chips(items) {
    var ul = el("ul", "chips");
    (items || []).forEach(function (i) { ul.appendChild(el("li", null, i)); });
    return ul;
  }
  function block(labelKey, node) {
    var d = el("div");
    d.appendChild(el("h4", "card-label", t(labelKey)));
    d.appendChild(node);
    return d;
  }
  function steps(items, cls) {
    var ul = el("ul", "steps " + cls);
    (items || []).forEach(function (i) { ul.appendChild(el("li", null, i)); });
    return ul;
  }

  /* Reusable card for PROJECTS and LABS */
  function card(item, isLab) {
    var c = el("article", "card reveal");
    var head = el("header", "card-head");
    head.appendChild(el("span", "card-id", item.id));
    var b = el("span", "badges");
    b.appendChild(typeBadge(item.type));
    b.appendChild(statusBadge(item.status));
    head.appendChild(b);
    c.appendChild(head);
    c.appendChild(el("h3", "card-title", loc(item.title)));
    if (item.category) c.appendChild(el("p", "card-cat", "# " + loc(item.category)));

    c.appendChild(block("l.objective", el("p", "card-text", loc(item.objective))));
    if (isLab) {
      var cols = el("div", "card-cols");
      cols.appendChild(block("l.attack", steps(item.attack, "atk")));
      cols.appendChild(block("l.defense", steps(item.defense, "def")));
      c.appendChild(cols);
      c.appendChild(block("l.stack", chips(item.stack)));
    } else {
      c.appendChild(chips(item.tags));
    }

    var L = item.links || {};
    var f = el("footer", "card-actions");
    f.appendChild(linkBtn(t("l.architecture"), L.architecture, true));
    f.appendChild(linkBtn(t("l.writeup"), L.writeup, true));
    f.appendChild(linkBtn(isLab ? t("l.source") : "GITHUB", L.source, true));
    c.appendChild(f);
    return c;
  }

  function render() {
    var p = $("#projects"), l = $("#labs-list"), o = $("#ops-list"), c = $("#certs-list"), k = $("#contact-links");
    [p, l, o, c, k].forEach(function (n) { n.textContent = ""; });

    (window.PROJECTS || []).forEach(function (x) { p.appendChild(card(x, false)); });
    (window.LABS || []).forEach(function (x) { l.appendChild(card(x, true)); });

    (window.OPERATIONS || []).forEach(function (x) {
      var li = el("li", "log-row");
      li.appendChild(el("span", "log-date", x.date));
      li.appendChild(el("span", "log-plat", x.platform));
      li.appendChild(el("span", "log-target", loc(x.target)));
      li.appendChild(el("span", "log-os dim", x.os));
      li.appendChild(el("span", "log-topic", loc(x.topic)));
      li.appendChild(statusBadge(x.status));
      o.appendChild(li);
    });

    (window.CERTS || []).forEach(function (x) {
      var li = el("li", "cert reveal");
      var d = el("div");
      d.appendChild(el("strong", "cert-name", x.name));
      d.appendChild(el("span", "cert-area", loc(x.area)));
      li.appendChild(d);
      li.appendChild(statusBadge(x.status));
      c.appendChild(li);
    });

    k.appendChild(linkBtn("GITHUB", S.github));
    k.appendChild(linkBtn("LINKEDIN", S.linkedin));
    k.appendChild(linkBtn("E-MAIL", S.email ? "mailto:" + S.email : ""));

    var hg = $("#hero-github");
    if (S.github) { hg.href = S.github; hg.target = "_blank"; hg.rel = "noopener noreferrer"; hg.classList.remove("disabled"); hg.removeAttribute("aria-disabled"); }
    else { hg.removeAttribute("href"); hg.classList.add("disabled"); hg.setAttribute("aria-disabled", "true"); hg.title = t("l.pending"); }

    observeReveal();
  }

  /* i18n: remember the EN text from the HTML once, then swap */
  function applyLang() {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    $$("[data-i18n]").forEach(function (n) {
      if (!n.hasAttribute("data-en")) n.setAttribute("data-en", n.textContent);
      var k = n.getAttribute("data-i18n");
      n.textContent = lang === "pt" && PT[k] ? PT[k] : n.getAttribute("data-en");
    });
    $$(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    render();
  }

  var io = null;
  function observeReveal() {
    var items = $$(".reveal:not(.in)");
    if (reduceMotion || !("IntersectionObserver" in window)) { items.forEach(function (n) { n.classList.add("in"); }); return; }
    if (!io) io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.08 });
    items.forEach(function (n) { io.observe(n); });
  }

  function typeHero() {
    var cmd = $("#typed"), out = $("#hero-out"), text = "whoami", i = 0;
    if (reduceMotion) { out.classList.add("show"); return; }
    cmd.textContent = "";
    (function step() {
      cmd.textContent = text.slice(0, ++i);
      if (i < text.length) setTimeout(step, 90 + Math.random() * 70);
      else setTimeout(function () { out.classList.add("show"); }, 280);
    })();
  }

  function uptime() {
    var start = Date.now(), n = $("#uptime");
    var pad = function (x) { return (x < 10 ? "0" : "") + x; };
    setInterval(function () {
      var s = Math.floor((Date.now() - start) / 1000);
      n.textContent = pad(Math.floor(s / 3600)) + ":" + pad(Math.floor(s / 60) % 60) + ":" + pad(s % 60);
    }, 1000);
  }

  function activeNav() {
    if (!("IntersectionObserver" in window)) return;
    var links = $$("#nav a");
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main .sec").forEach(function (s) { spy.observe(s); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    $$("[data-site-name]").forEach(function (n) { n.textContent = S.name || n.textContent; });
    $$("[data-handle]").forEach(function (n) { n.textContent = S.handle || n.textContent; });

    $$(".lang button").forEach(function (b) {
      b.addEventListener("click", function () {
        lang = b.getAttribute("data-lang");
        try { localStorage.setItem("lang", lang); } catch (e) {}
        applyLang();
      });
    });

    var toggle = $("#nav-toggle"), nav = $("#nav");
    var close = function () { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); };
    toggle.addEventListener("click", function () {
      toggle.setAttribute("aria-expanded", nav.classList.toggle("open") ? "true" : "false");
    });
    $$("#nav a").forEach(function (a) { a.addEventListener("click", close); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    $$(".sec-head, .sec-intro, .killchain, .flow, .def-grid, .infra-grid, .about, .log, .contact").forEach(function (n) { n.classList.add("reveal"); });

    $("#year").textContent = new Date().getFullYear();
    applyLang();
    typeHero();
    uptime();
    activeNav();
  });
})();
