export const questions = [
  { 
    id: 1, 
    text: "Do you like dogs?", 
    img: "/images/questioncard-1.png",
    pollImg: "/images/pollquestion-1.png"
  },
  { 
    id: 2, 
    text: "Is this true?", 
    img: "/images/questioncard-2.png",
    pollImg: "/images/pollquestion-2.png"
  },
  { 
    id: 3, 
    text: "Do you agree?", 
    img: "/images/questioncard-1.png",
    pollImg: "/images/pollquestion-1.png"
  },
  { id: 4,
    text: "Are you hungry?", 
    img: "/images/questioncard-2.png",
    pollImg: "/images/pollquestion-2.png"
  },
  { 
    id: 5, 
    text: "Do you like dogs?", 
    img: "/images/questioncard-1.png",
    pollImg: "/images/pollquestion-1.png"
  },
  { 
    id: 6, 
    text: "Is this true?", 
    img: "/images/questioncard-2.png",
    pollImg: "/images/pollquestion-2.png"
  },
  { 
    id: 7, 
    text: "Do you agree?", 
    img: "/images/questioncard-1.png",
    pollImg: "/images/pollquestion-1.png"
  },
  { 
    id: 8, 
    text: "Are you hungry?", 
    img: "/images/questioncard-2.png",
    pollImg: "/images/pollquestion-2.png"
  },
  { 
    id: 9, 
    text: "Do you like dogs?", 
    img: "/images/questioncard-1.png",
    pollImg: "/images/pollquestion-1.png"
  },
  { 
    id: 10, 
    text: "Is this true?", 
    img: "/images/questioncard-2.png",
    pollImg: "/images/pollquestion-2.png"
  },
  { 
    id: 11, 
    text: "Do you agree?", 
    img: "/images/questioncard-1.png",
    pollImg: "/images/pollquestion-1.png"
  },
  { 
    id: 12, 
    text: "Are you hungry?", 
    img: "/images/questioncard-2.png",
    pollImg: "/images/pollquestion-2.png"
  },
];

 export const getRandomQuestion = () => {
  const index = Math.floor(Math.random() * questions.length);
  return questions[index];
};