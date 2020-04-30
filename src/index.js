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
    src: "https://ca.slack-edge.com/T0251K7U9-UDJB233UY-309b26461343-512",
    name: "Jenny",
    message:
      "Thanks for breaking down fieldset home screen tasks for us. I can't imagine how difficult my life would be without your plans and coding advices. Wish you all the best for your future endeavours.",
  },
  {
    src: "https://ca.slack-edge.com/T0251K7U9-UG9AVJ7MH-e7f3d561ed96-512",
    name: "Ayao",
    message:
      "Hi, Yishu. Thanks for your kindly sharing and helping. Although we are in separate office and does not have many time for interaction. You do  help me so much not only the code base issue but also solve problems that I encountered. Hope we can keep in touch and see each other in the future!",
  },
  {
    src: "media/wishes/bui.png",
    name: "Bui",
    message: "Sayonara bossu! T_T",
  },
  {
    src: "https://ca.slack-edge.com/T0251K7U9-U628SP8N4-ced244b89a24-512",
    name: "Stacey",
    message:
      "Hi Yishu! Thanks for all your work on the web platform! It's been great working with you and I'm sure you'll be awesome at Shopify as well! Going to miss the Nylon coffee chats, but see you around sometime! (Hopefully in the Bay Area?)",
  },
  {
    src: "media/wishes/dylan.png",
    name: "Dylan",
    message:
      "Dear Yishu, So sad to hear that you're leaving. Your interests are as wide as your engineering knowledge is deep. You have left an indelible mark on us, and Carousell Web Team will not be the same without you. Don't be a stranger. I hope to hangout often despite being in different companies. Keep being awesome in whatever you do!",
  },
  {
    src: "https://ca.slack-edge.com/T0251K7U9-UJHT8PU9G-dfc4eb9f98f3-512",
    name: "Midhun",
    message:
      "Hi Yishu, Wishing you the best for all your future endeavours. —Midhun",
  },
  {
    src: "https://ca.slack-edge.com/T0251K7U9-U4SL0E456-1f2eb87f9c01-512",
    name: "Jianyuan",
    message:
      "Congrats on your next adventure Yishu, wishing you all the best! Still remember the day you joined us where you powered through all the interview rounds in a single day",
  },
  {
    src: "media/wishes/ming.png",
    name: "Kyle",
    message:
      "Hey Master! Thanks for your guidance and making Fieldsets on web great again 🙇🏻‍♂️ Will cherish the memories of all those fun trips (Dalat, Bangkok, HCM)! Keep in touch! West side best side!",
  },
  {
    src: "https://ca.slack-edge.com/T0251K7U9-UEP8MA5KN-c72c3fd784e5-512",
    name: "Trong",
    message:
      "Hey Yishu, Ah… I’m happy to see you goooo 😆 It’s natural haha. I would do the same if I’m good like you. We need to change every … 3-4 years hehe. Enjoy your new adventure. P/S: I’m learning to code to do Vertical Home Screen for you. So no worries.",
  },
  {
    src: "https://ca.slack-edge.com/T0251K7U9-UEHAYRX9A-c404b9531111-512",
    name: "Mag",
    message:
      "Yo Yishusssss!!!!!! aWw man, our time together was  short and sweet ❤️ but even in that short time, I could tell how much of a respectable colleague, engineer and friend you were to the people around. See you at shopify!!!! (owait, wat?? jks) housewarming again plz hehe",
  },
  {
    src: "https://ca.slack-edge.com/T0251K7U9-UK71XLA2C-0ecc8c57ef4d-512",
    name: "Andrew",
    message:
      "Hey Yishu!! Thanks for all the contributions to mweb! You made mweb a better place 👩‍💻Sad to see you go. Still remember you taught me how to do the category icon on hover background! Always css masterrr! All the best in your next adventure.",
  },
  {
    src: "https://ca.slack-edge.com/T0251K7U9-U89645VPF-7de1e8c1b263-512",
    name: "Cheng Hua",
    message:
      "Hey Yishu! So sad you’re leaving us 😭😭 Thanks for your guidance and enjoy your next journey.",
  },
  {
    src: "https://ca.slack-edge.com/T0251K7U9-UP5GF976K-8f2d0d634d9b-512",
    name: "Ray",
    message:
      "Master Yishuuu, I've really enjoyed working with you, thank you for all the incredible discussion and support. Wish you boundless success wherever you go! 一切順利！",
  },
  {
    src: "https://ca.slack-edge.com/T0251K7U9-U0HEGTY9M-06ee970b0b0f-512",
    name: "Chloe",
    message:
      "Hey Yishu, congrats for your new adventure!! I will miss those fun time in dalat and random coffee sessions 😆 Let me know if you need some latte art tips hehe",
  },
  {
    src: "https://ca.slack-edge.com/T0251K7U9-UPDQFEUAK-d900222f8b54-512",
    name: "Clarence",
    message:
      "Master Yishu! Heard a ton about you (and from other zen masters too) and seen you in action at Talk.CSS even before I came onboard. Sad that you’re taking your superpowers elsewhere, but everyone in the web team will carry on with your legacy. All the best, and we’ll definitely see you on the scene!",
  },
  {
    src: "https://ca.slack-edge.com/T0251K7U9-U1XLC0TMZ-57a10460eb87-512",
    name: "Wilson",
    message:
      "hey yishu, was a great pleasure being your manager for your journey here and i hope that you have enjoyed your time in carousell and the verticals team as well. wishing you all the best in your future adventures both in work and play! keep in touch, stay awesome and stay safe!",
  },
];
(function() {
  const fragment = document.createDocumentFragment();

  wishes.forEach(wish => {
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
