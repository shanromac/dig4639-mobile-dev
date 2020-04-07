const qBank = [
  {
    question:
      "Which character said “Nine companions. So be it. You shall be the fellowship of the ring.”?",
    answers: ["Elrond", "Arwen", "Gandalf", "Galadriel"],
    correct: "Elrond",
    questionId: "099099"
  },
  {
    question:
      "What is the name of Galadriel's husband?",
    answers: ["Celery", "Celeborn", "Celebrian", "Celebrant"],
    correct: "Celeborn",
    questionId: "183452"
  },
  {
    question:
      "Where is Legolas from?",
    answers: ["Rivendell", "Fangorn Forest", "Lothorian", "Mirkwood"],
    correct: "Mirkwood",
    questionId: "267908"
  },
  {
    question: "What was Gollum's name before he was Gollum?",
    answers: ["Bilbo", "Deagol", "Smeagol", "Sam"],
    correct: "Smeagol",
    questionId: "333247"
  },
  {
    question: "What was the name of Gandalf's horse?",
    answers: ["Shadowfax", "Sam", "Shadowmane", "Brego"],
    correct: "Shadowfax",
    questionId: "496293"
  },
  {
    question: "What gift does Lady Galadriel give Gimli before the fellowship leaves Lothlorien?",
    answers: ["A dagger", "3 strands of her hair", "Rope", "A new axe"],
    correct: "3 strands of her hair",
    questionId: "588909"
  },
  {
    question:
      'The sword Sting would glow blue when who were nearby?',
    answers: ["Spiders", "Elves", "Goblins", "Orcs"],
    correct: "Orcs",
    questionId: "648452"
  },
  {
    question: "What is the name of the treelike species Merry and Pippin find in Fangorn Forest?",
    answers: ["Ents", "Treebeard", "Hobbits", "Uruk-kai"],
    correct: "Ents",
    questionId: "786649"
  },
  {
    question:
      "What was the name of the book that Bilbo was writing about his adventures?",
    answers: ["The Hobbit", "There and Back Again", "Adventures of the Shire"],
    correct: "There and Back Again",
    questionId: "839754"
  },
  {
    question:
      "What race are people referencing when they talk about Durin's folk?",
    answers: ["Dwarves", "Hobbits", "Elves", "Wizards"],
    correct: "Dwarves",
    questionId: "98390"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
