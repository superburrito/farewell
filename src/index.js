// Fill up this array with everyones wishes
// Make sure the corresponding avatar sources
// exist in media/wishes
const wishes = [
  {
    src: "media/wishes/yao.png",
    message: `Whaaat can't believe you're leaving us already my fellow Terrace House fan + Lumos poweruser + Hacktoberfest 2018 co-organiser LOL. We've come a looong way since our React-Native days. Thanks for being a solid engineer, reliable colleague, and friend I can turn to for generic life advice (ranging from HDB choices, travel ideas, to bowel problems lmao).
      
      Won't forget the time you gave me a free pass to JSConf and more importantly I'll remember seeing your kickass presentation in person 🤯! All the best at Shopify yo 🤘 Hope you'll save the contents of this hodgepodgey site somewhere –– let's keep in touch and I'll see you around!`,
  },
  {
    src: "",
    message:
      "Thanks for breaking down fieldset home screen tasks for us. I can't imagine how difficult my life would be without your plans and coding advices. Wish you all the best for your future endeavours. —Jenny",
  },
  {
    src: "",
    message:
      "Hi, Yishu. Thanks for your kindly sharing and helping. Although we are in separate office and does not have many time for interaction. You do  help me so much not only the code base issue but also solve problems that I encountered. Hope we can keep in touch and see each other in the future! —Ayao",
  },
  {
    src: "",
    message: "Sayonara bossu! T_T —Bui",
  },
  {
    src: "",
    message:
      "Hi Yishu! Thanks for all your work on the web platform! It's been great working with you and I'm sure you'll be awesome at Shopify as well! Going to miss the Nylon coffee chats, but see you around sometime! (Hopefully in the Bay Area?) —Stacey",
  },
  {
    src: "",
    message:
      "Dear Yishu, So sad to hear that you're leaving. Your interests are as wide as your engineering knowledge is deep. You have left an indelible mark on us, and Carousell Web Team will not be the same without you. Don't be a stranger. I hope to hangout often despite being in different companies. Keep being awesome in whatever you do! —Dylan",
  },
  {
    src: "",
    message:
      "Hi Yishu, Wishing you the best for all your future endeavours. —Midhun",
  },
  {
    src: "",
    message:
      "Congrats on your next adventure Yishu, wishing you all the best! Still remember the day you joined us where you powered through all the interview rounds in a single day 💪 —Jianyuan",
  },
  {
    src: "media/wishes/ming.png",
    message:
      "Hey Master! Thanks for your guidance and making Fieldsets on web great again 🙇🏻‍♂️ Will cherish the memories of all those fun trips (Dalat, Bangkok, HCM)! Keep in touch! West side best side! —Kyle",
  },
  {
    src: "",
    message:
      "Hey Yishu, Ah… I’m happy to see you goooo 😆 It’s natural haha. I would do the same if I’m good like you. We need to change every … 3-4 years hehe. Enjoy your new adventure. P/S: I’m learning to code to do Vertical Home Screen for you. So no worries. —Trong",
  },
  {
    src: "",
    message:
      "Yo Yishusssss!!!!!! aWw man, our time together was  short and sweet ❤️ but even in that short time, I could tell how much of a respectable colleague, engineer and friend you were to the people around. See you at shopify!!!! (owait, wat?? jks) housewarming again plz hehe —Mag",
  },
  {
    src: "",
    message:
      "Hey Yishu!! Thanks for all the contributions to mweb! You made mweb a better place 👩‍💻Sad to see you go. Still remember you taught me how to do the category icon on hover background! Always css masterrr! All the best in your next adventure. —Andrew",
  },
  {
    src: "",
    message:
      "Hey Yishu! So sad you’re leaving us 😭😭 Thanks for your guidance and enjoy your next journey. —Cheng Hua",
  },
  {
    src: "",
    message:
      "Master Yishuuu, I've really enjoyed working with you, thank you for all the incredible discussion and support. Wish you boundless success wherever you go! 一切順利！ —Ray",
  },
  {
    src: "",
    message:
      "Hey Yishu, congrats for your new adventure!! I will miss those fun time in dalat and random coffee sessions 😆 Let me know if you need some latte art tips hehe —cyrandy",
  },
  {
    src: "",
    message:
      "Master Yishu! Heard a ton about you (and from other zen masters too) and seen you in action at Talk.CSS even before I came onboard. Sad that you’re taking your superpowers elsewhere, but everyone in the web team will carry on with your legacy. All the best, and we’ll definitely see you on the scene! —Clarence",
  },
  {
    src: "",
    message:
      "hey yishu, was a great pleasure being your manager for your journey here and i hope that you have enjoyed your time in carousell and the verticals team as well. wishing you all the best in your future adventures both in work and play! keep in touch, stay awesome and stay safe! —Wilson",
  },
  {
    src: "media/wishes/ming.png",
    message: "<Your farewell message here>",
  },
];
(function() {
  const fragment = document.createDocumentFragment();

  wishes.forEach(wish => {
    const { src, message } = wish;
    const section = document.createElement("section");
    section.classList.add("rear-wish");
    const img = document.createElement("img");
    img.src = src;
    const text = document.createElement("p");
    text.innerText = message;
    [img, text].forEach(node => {
      section.appendChild(node);
    });
    fragment.appendChild(section);
  });

  document.querySelector(".wishes").appendChild(fragment);
})();
