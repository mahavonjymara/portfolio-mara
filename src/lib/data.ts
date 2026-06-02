export const skills = [
  { icon:"⚛️", name:"React / Next.js", level:80, label:"Avance", tags:["Hooks","App Router","SSR","Tailwind"] },
  { icon:"🟩", name:"Node.js / Express", level:75, label:"Avance", tags:["REST API","Middleware","Auth JWT"] },
  { icon:"📱", name:"React Native", level:65, label:"Intermediaire", tags:["Expo","Navigation","iOS/Android"] },
  {
    icon:"🗄️",
    name:"Bases de donnees",
    level:70,
    label:"Intermediaire",
    tags:["MySQL","PostgreSQL","SQLite","MongoDB"],
    databases: [
      { name:"MySQL", color:"#00758f", bg:"#e8f4f8", letter:"My" },
      { name:"PostgreSQL", color:"#336791", bg:"#e8eef5", letter:"PG" },
      { name:"SQLite", color:"#003b57", bg:"#e0eaf0", letter:"SL" },
      { name:"MongoDB", color:"#4db33d", bg:"#eaf5e8", letter:"MG" },
    ]
  },
  { icon:"🔧", name:"Git / GitHub", level:85, label:"Avance", tags:["Branches","Pull Requests","CI/CD"] },
  { icon:"🎨", name:"UI/UX Design", level:70, label:"Intermediaire", tags:["Figma","Tailwind CSS","Responsive"] },
];

export const projects = [
  {
    icon:"🛒",
    badge:"Web App",
    name:"E-Commerce Pro",
    desc:"Application e-commerce complete developpee avec Laravel — gestion des produits, panier, commandes et interface admin.",
    stack:["Laravel","PHP","MySQL","Bootstrap"],
    github:"https://github.com/mahavonjmara-afk/ecommerce-pro",
    demo:"https://github.com/mahavonjmara-afk/ecommerce-pro",
  },
  {
    icon:"📱",
    badge:"Mobile App",
    name:"App mobile en cours",
    desc:"Application mobile cross-platform en developpement — React Native avec Expo, navigation fluide et synchronisation backend.",
    stack:["React Native","Expo","PostgreSQL"],
    github:"#",
    demo:"#",
  },
];

export const contact = {
  github:"github.com/mahavonjmara-afk",
  linkedin:"linkedin.com/in/mara-mahavonjy",
  email:"mahavonjy.mara@email.com",
};
