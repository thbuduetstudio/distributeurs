const solutions = [
  {
    name:"Catalogique", icon:"▤", price:"49€ / 89€", monthly:49,
    promise:"Présentez vos produits. Gardez la maîtrise de vos ventes.",
    target:"Grossistes, négociants, industriels, fournisseurs B2B.",
    bullets:["Catalogues toujours à jour","Produits et variantes centralisés","Demandes d’information et devis"],
    detail:"Une plateforme de présentation commerciale pour les entreprises qui travaillent sur devis. Ce n’est pas une boutique en ligne : c’est un outil pour valoriser les produits, partager des catalogues et ouvrir le dialogue commercial."
  },
  {
    name:"Consentify", icon:"✍", price:"29€ / mois", monthly:29,
    promise:"Tout ce qui protège votre activité. Enfin réuni au même endroit.",
    target:"Esthétique, soins, thérapeutes, artisans.",
    bullets:["Signature digitale","Photos & preuves","Historique client centralisé"],
    detail:"Consentify centralise signatures, validations, photos, suivi et historique client. Chaque document peut contenir plusieurs points validés, être signé, généré en PDF et retrouvé rapidement."
  },
  {
    name:"Evolia", icon:"◉", price:"79€ / 129€", monthly:79,
    promise:"Parlez. Evolia organise, analyse et valorise votre suivi client.",
    target:"Coachs, thérapeutes, nutritionnistes, accompagnants.",
    bullets:["Note vocale intelligente","IA métier évolutive","Bilans et synthèses"],
    detail:"Evolia transforme les notes vocales et informations client en dossiers structurés. L’IA comprend, classe, mémorise et prépare des bilans basés sur l’historique complet."
  },
  {
    name:"Tournéo", icon:"⌖", price:"39€ / 99€", monthly:39,
    promise:"Toutes vos interventions terrain au même endroit.",
    target:"Techniciens, prestataires à domicile, maintenance, SAV.",
    bullets:["Planification terrain","Rôles équipe","Validation, notes, photos"],
    detail:"Tournéo permet d’organiser, suivre et piloter l’activité terrain : interventions, tournées, affectations, validation, notes, photos, historique et statistiques."
  },
  {
    name:"ProPose", icon:"□", price:"99€ / 120€", monthly:99,
    promise:"Chaque chantier. Chaque étape. Sous contrôle.",
    target:"Cuisinistes, agenceurs, poseurs, métiers de prise de mesure.",
    bullets:["Dossier mission complet","Photos, signatures, PDF","Pose, livraison, SAV"],
    detail:"ProPose centralise chaque mission de la prise de mesure à la réception client : documents, photos, validations, signatures, rapports PDF et suivi SAV."
  }
];

const solutionGrid = document.getElementById("solutionsGrid");
solutionGrid.innerHTML = solutions.map((s,i)=>`
  <article>
    <div class="solution-icon">${s.icon}</div>
    <span class="tag">${s.price}</span>
    <h3>${s.name}</h3>
    <p>${s.promise}</p>
    <ul class="solution-list">${s.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>
    <button class="btn ghost more" onclick="openSolution(${i})">Voir la fiche</button>
  </article>
`).join("");

const modal = document.getElementById("solutionModal");
const modalContent = document.getElementById("modalContent");
document.getElementById("closeModal").onclick = () => modal.close();

function openSolution(i){
  const s = solutions[i];
  modalContent.innerHTML = `
    <div class="modal-body">
      <span class="tag">${s.price}</span>
      <h3>${s.name}</h3>
      <p><strong>${s.promise}</strong></p>
      <div class="modal-grid">
        <div class="modal-card"><b>Cible</b><p>${s.target}</p></div>
        <div class="modal-card"><b>Positionnement</b><p>${s.detail}</p></div>
        <div class="modal-card"><b>Fonctionnalités clés</b><p>${s.bullets.join(" • ")}</p></div>
        <div class="modal-card"><b>Partenaire</b><p>50% la première année, puis 25% les années suivantes.</p></div>
      </div>
    </div>`;
  modal.showModal();
}

const galleryFiles = [
  "Kit Distributeur 2 - Catalogique.png",
  "Kit Distributeur 3 - Consentify.png",
  "Kit Distributeur 4 - Evolia.png",
  "Kit Distributeur 5 - Tournéo.png",
  "Kit Distributeur 6 - ProPose.png",
  "Kit Distributeur 7 - Autres.png",
  "Kit Distributeur 8 - Partenariat.png"
];
let galleryIndex = 0;
const galleryImg = document.getElementById("galleryImg");
const dots = document.getElementById("galleryDots");

function renderGallery(){
  galleryImg.src = `./assets/${galleryFiles[galleryIndex]}`;
  dots.innerHTML = galleryFiles.map((_,i)=>`<button class="${i===galleryIndex?'active':''}" onclick="galleryIndex=${i};renderGallery()"></button>`).join("");
}
document.querySelector(".next").onclick = () => {galleryIndex=(galleryIndex+1)%galleryFiles.length;renderGallery()};
document.querySelector(".prev").onclick = () => {galleryIndex=(galleryIndex-1+galleryFiles.length)%galleryFiles.length;renderGallery()};
renderGallery();

const sliderData = [
  {key:"catalogique", label:"Catalogique", value:10, price:49},
  {key:"consentify", label:"Consentify", value:10, price:29},
  {key:"evolia", label:"Evolia", value:7, price:93.3},
  {key:"tourneo", label:"Tournéo", value:7, price:56.14},
  {key:"propose", label:"ProPose", value:3, price:99}
];

const sliders = document.getElementById("sliders");
sliders.innerHTML = sliderData.map((s,i)=>`
  <div class="slider-row">
    <label for="${s.key}">${s.label}</label>
    <input id="${s.key}" type="range" min="0" max="60" value="${s.value}" oninput="updateSlider(${i}, this.value)" />
    <output id="${s.key}Out">${s.value}</output>
  </div>
`).join("");

function eur(n){return new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR",maximumFractionDigits:0}).format(n)}
function updateSlider(i,val){sliderData[i].value = Number(val);document.getElementById(sliderData[i].key+"Out").textContent = val;calc();}
function calc(){
  const ca = sliderData.reduce((sum,s)=>sum + s.value * s.price * 12, 0);
  document.getElementById("caTotal").textContent = eur(ca);
  document.getElementById("commissionY1").textContent = eur(ca * .5);
  document.getElementById("commissionRecurring").textContent = eur(ca * .25) + " / an";
}
calc();
