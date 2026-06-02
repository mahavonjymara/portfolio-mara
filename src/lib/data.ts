export type TechItem = { name: string; color: string; bg: string; letter: string };

export type Skill = {
  icon: string;
  name: string;
  level: number;
  label: string;
  tags: string[];
  techs?: TechItem[];
};

export const skills: Skill[] = [
  {
    icon:"🖥️",
    name:"Frontend",
    level:80,
    label:"Avance",
    tags:["React.js","Next.js","Laravel","Spring Boot"],
    techs:[
      { name:"React.js", color:"#61dafb", bg:"#e8f9fd", letter:"Re" },
      { name:"Next.js", color:"#000000", bg:"#f0f0f0", letter:"Nx" },
      { name:"Laravel", color:"#ff2d20", bg:"#fdecea", letter:"Lv" },
      { name:"Spring", color:"#6db33f", bg:"#edf7e6", letter:"Sp" },
    ]
  },
  {
    icon:"⚙️",
    name:"Backend",
    level:75,
    label:"Avance",
    tags:["JavaScript","TypeScript","Python","Java","PHP"],
    techs:[
      { name:"JavaScript", color:"#f7df1e", bg:"#fdfbe6", letter:"JS" },
      { name:"TypeScript", color:"#3178c6", bg:"#e8f0fb", letter:"TS" },
      { name:"Python", color:"#3572a5", bg:"#e8f0f8", letter:"Py" },
      { name:"Java", color:"#b07219", bg:"#f8f0e3", letter:"Ja" },
      { name:"PHP", color:"#777bb4", bg:"#eeeef8", letter:"PHP" },
    ]
  },
  {
    icon:"📱",
    name:"React Native",
    level:65,
    label:"Intermediaire",
    tags:["Expo","Navigation","iOS/Android"],
  },
  {
    icon:"🗄️",
    name:"Bases de donnees",
    level:70,
    label:"Intermediaire",
    tags:["MySQL","PostgreSQL","SQLite","MongoDB"],
    techs:[
      { name:"MySQL", color:"#00758f", bg:"#e8f4f8", letter:"My" },
      { name:"PostgreSQL", color:"#336791", bg:"#e8eef5", letter:"PG" },
      { name:"SQLite", color:"#003b57", bg:"#e0eaf0", letter:"SL" },
      { name:"MongoDB", color:"#4db33d", bg:"#eaf5e8", letter:"MG" },
    ]
  },
  {
    icon:"🔧",
    name:"Git / GitHub",
    level:85,
    label:"Avance",
    tags:["Branches","Pull Requests","CI/CD"],
  },
  {
    icon:"🎨",
    name:"UI/UX Design",
    level:70,
    label:"Intermediaire",
    tags:["Figma","Tailwind CSS","Responsive"],
  },
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
