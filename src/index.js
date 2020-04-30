// Fill up this array with everyones wishes
// Make sure the corresponding avatar sources
// exist in media/wishes
const wishes = [
  {
    src: "media/wishes/yao.png",
    name: "Yao Hui",
    message: `Whaaat can't believe you're leaving us already my fellow Terrace House fan + Lumos poweruser + Hacktoberfest 2018 co-organiser LOL. We've come a looong way since our React-Native days. Thanks for being a solid engineer, reliable colleague, and friend I can turn to for generic life advice (ranging from HDB choices, travel ideas, to bowel problems lmao).
      
      Won't forget the time you gave me a free pass to JSConf and more importantly I'll remember seeing your kickass presentation in person 🤯! All the best at Shopify yo 🤘 Hope you'll save the contents of this hodgepodgey site somewhere –– let's keep in touch and I'll see you around!`,
  },
  {
    src: "media/wishes/ming.png",
    name: "Kyle",
    message: "<Your farewell message here>",
  },
  {
    name: "Stacey",
    message: "<Your farewell message here>",
  },
];
(function () {
  const fragment = document.createDocumentFragment();

  wishes.forEach((wish) => {
    const { src, message, name } = wish;
    const section = document.createElement("section");
    section.classList.add("rear-wish");
    if (src != null) {
      const img = document.createElement("img");
      img.src = src;
      section.appendChild(img);
    }
    const text = document.createElement("p");
    text.innerText = `${name}: ${message}`;
    section.appendChild(text);
    fragment.appendChild(section);
  });

  document.querySelector(".wishes").appendChild(fragment);
})();
