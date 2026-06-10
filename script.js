document.addEventListener("DOMContentLoaded", () => {
  const solutions = [
    {name:"Catalogique",icon:"C",price:"49€ / 89€",promise:"Présenter des produits et leurs variantes sans créer une boutique en ligne.",intro:"Pour les industriels, grossistes, négociants et fournisseurs travaillant principalement sur devis. Catalogique permet de présenter les produits dans une interface moderne, claire et toujours à jour.",targets:["Industriels","Grossistes","Négociants","Fournisseurs B2B","Entreprises travaillant sur devis"],offers:[{title:"Standard — 49€/mois",items:["Accès à Catalogique mutualisé","Publication de catalogues via liens dédiés","Gestion des produits et variantes","Attributs métiers enrichis par les usages du secteur","Demandes d'informations et de devis"]},{title:"Premium — 89€/mois",items:["Application dédiée aux couleurs du client","URL personnalisée","Logo et identité propres","Publication catalogue par catalogue ou portail global","Structure personnalisable","Même mécanique de gestion que le Standard"]}],note:"Dans les deux cas, Catalogique conserve la maîtrise des échanges commerciaux et des devis."},
    {name:"Consentify",icon:"S",price:"29€ / mois",promise:"Centraliser signatures, validations, documents, photos et historique client.",intro:"Consentify est pensé pour les métiers qui ont besoin de garder une trace claire de ce qui a été expliqué, validé ou signé avec un client.",targets:["Instituts de beauté","Thérapeutes","Professionnels du bien-être","Activités avec validations ou consentements","Usages artisanaux possibles"],offers:[{title:"Offre unique — 29€/mois",items:["Signature digitale","Validation de plusieurs éléments par document","Historique client centralisé","Gestion documentaire","Photos et pièces justificatives","Modèles réutilisables"]},{title:"Annuel — 290€/an",items:["Même offre","Deux mois offerts","Idéal pour les clients qui souhaitent un outil simple et durable"]}],note:"L'application peut évoluer vers des usages artisanaux, de chantier ou de suivi de travaux."},
    {name:"Evolia",icon:"E",price:"79€ / 129€",promise:"Structurer et exploiter les dossiers clients ou patients avec l'aide de l'IA.",intro:"Evolia permet au professionnel de travailler librement : saisie ordinateur, notes vocales, ou les deux. La note vocale est une aide à l'efficacité, pas une obligation.",targets:["Coachs sportifs","Nutritionnistes","Thérapeutes","Sophrologues","Hypnothérapeutes","Accompagnants"],offers:[{title:"Essentiel — 79€/mois",items:["Jusqu'à 50 dossiers actifs","Jusqu'à 50 analyses IA avancées par mois","Notes vocales et synthèses automatiques","Gestion complète des dossiers"]},{title:"Premium — 129€/mois",items:["Dossiers illimités","Analyses IA avancées illimitées","Accès prioritaire aux évolutions","Utilisation intensive sans limitation métier"]}],note:"Les deux versions disposent des mêmes fonctionnalités. La différence se situe surtout dans les volumes d'utilisation."},
    {name:"Tournéo",icon:"T",price:"39€ / 99€",promise:"Organiser, suivre et piloter l'activité terrain.",intro:"Tournéo permet d'organiser les tournées, interventions, visites commerciales ou techniques avec suivi, validation, notes, photos et historique.",targets:["Techniciens","Maintenance","SAV","Commerciaux terrain","Prestataires à domicile","Livraison et distribution"],offers:[{title:"Solo — 39€/mois",items:["1 utilisateur","Gestion des tournées","Gestion des interventions","Notes et photos","Historique complet"]},{title:"Équipe — 99€/mois",items:["Jusqu'à 5 collaborateurs","Gestion des rôles","Affectation des interventions","Pilotage d'équipe","Statistiques avancées","+10€/mois par collaborateur supplémentaire"]}],note:"Tournéo est clairement pensé comme une plateforme de pilotage terrain, pas seulement comme une liste d'adresses."},
    {name:"ProPose",icon:"P",price:"99€ / 120€",promise:"Centraliser les missions de prise de mesure, pose, livraison et SAV.",intro:"Chaque mission dispose de son propre dossier numérique : photos, documents, signatures, validations et rapports PDF.",targets:["Cuisinistes","Agenceurs","Poseurs","Métiers de prise de mesure","Livraison","SAV"],offers:[{title:"Standard — 99€/mois",items:["Engagement annuel","Gestion complète des missions","Rapports PDF","Signatures","Photos et historique"]},{title:"Flex — 120€/mois",items:["Sans engagement annuel","Fonctionnalités identiques","Plus de souplesse pour le client"]}],note:"Historiquement conçu pour les cuisinistes, mais adaptable à tous les métiers de la prise de mesure, de la pose et de la livraison."}
  ];

  const container = document.getElementById("solutionsList");
  if (container) {
    container.innerHTML = solutions.map(s => `<article class="solution-full"><div class="solution-header"><div><div class="solution-name"><span class="solution-icon">${s.icon}</span><div class="solution-title"><h3>${s.name}</h3><p>${s.promise}</p></div></div><p>${s.intro}</p></div><span class="price-chip">${s.price}</span></div><div class="solution-body"><div class="offer-grid">${s.offers.map(o => `<div class="offer-card"><strong>${o.title}</strong><ul>${o.items.map(i => `<li>${i}</li>`).join("")}</ul></div>`).join("")}</div><div class="target-card"><b>Cibles principales</b><ul>${s.targets.map(t => `<li>${t}</li>`).join("")}</ul><p>${s.note}</p></div></div></article>`).join("");
  }

  const visualFiles = [
    ["kit-01-cover.png","Couverture"],
    ["kit-02-catalogique.png","Catalogique"],
    ["kit-03-consentify.png","Consentify"],
    ["kit-04-evolia.png","Evolia"],
    ["kit-05-tourneo.png","Tournéo"],
    ["kit-06-propose.png","ProPose"],
    ["kit-07-autres.png","Autres solutions"],
    ["kit-08-partenariat.png","Projection partenariat"],
    ["kit-09-contact.png","Contact"]
  ];

  let visualIndex = 0;
  const img = document.getElementById("visualImage");
  const cap = document.getElementById("visualCaption");
  const dots = document.getElementById("visualDots");
  const prev = document.getElementById("prevVisual");
  const next = document.getElementById("nextVisual");

  function renderVisual() {
    if (!img || !cap || !dots) return;
    img.src = "./assets/" + visualFiles[visualIndex][0];
    cap.textContent = `${visualIndex + 1} / ${visualFiles.length} — ${visualFiles[visualIndex][1]}`;
    dots.innerHTML = visualFiles.map((_, i) => `<button type="button" class="${i === visualIndex ? "active" : ""}" data-i="${i}" aria-label="Afficher la fiche ${i + 1}"></button>`).join("");
    dots.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
      visualIndex = Number(b.dataset.i);
      renderVisual();
    }));
  }

  if (prev && next) {
    prev.addEventListener("click", () => {
      visualIndex = (visualIndex - 1 + visualFiles.length) % visualFiles.length;
      renderVisual();
    });
    next.addEventListener("click", () => {
      visualIndex = (visualIndex + 1) % visualFiles.length;
      renderVisual();
    });
  }
  renderVisual();

  const items = [
    {key:"catalogique", label:"Catalogique", price:49, initial:5, max:50},
    {key:"consentify", label:"Consentify", price:29, initial:5, max:50},
    {key:"evolia", label:"Evolia", price:79, initial:3, max:40},
    {key:"tourneo", label:"Tournéo", price:39, initial:3, max:40},
    {key:"propose", label:"ProPose", price:99, initial:2, max:30}
  ];

  const panel = document.getElementById("sliderPanel");
  if (panel) {
    panel.innerHTML = items.map(it => `<div class="slider-row"><label for="${it.key}">${it.label}</label><input id="${it.key}" type="range" min="0" max="${it.max}" value="${it.initial}"><output id="${it.key}Output">${it.initial}</output></div>`).join("");
  }

  function euros(n) {
    return new Intl.NumberFormat("fr-FR", {style:"currency", currency:"EUR", maximumFractionDigits:0}).format(n);
  }

  function calc() {
    let total = 0;
    items.forEach(it => {
      const input = document.getElementById(it.key);
      if (!input) return;
      total += Number(input.value) * it.price * 12;
    });
    const annual = document.getElementById("annualRevenue");
    const y1 = document.getElementById("yearOneCommission");
    const rec = document.getElementById("recurringCommission");
    if (annual) annual.textContent = euros(total);
    if (y1) y1.textContent = euros(total * 0.5);
    if (rec) rec.textContent = euros(total * 0.25) + " / an";
  }

  items.forEach(it => {
    const input = document.getElementById(it.key);
    const output = document.getElementById(it.key + "Output");
    if (!input || !output) return;
    input.addEventListener("input", () => {
      output.textContent = input.value;
      calc();
    });
  });
  calc();
});