export const questions = [
  { 
    id: 1, 
    text: "คนรวยต้องจ่ายเงินให้คนจน", 
    img: "/images/Q1.png",
    pollImg: "/images/pollquestion-1.png"
  },
  { 
    id: 2, 
    text: "ศิลปะบนจอดีกว่าแบบนอกจอ", 
    img: "/images/Q2.png",
    pollImg: "/images/pollquestion-2.png"
  },
  { 
    id: 3, 
    text: "ซุปเปอร์แมนเก่งที่สุด", 
    img: "/images/Q3.png",
    pollImg: "/images/pollquestion-1.png"
  },
  { id: 4,
    text: "คุกช่วยให้คนกลับใจ", 
    img: "/images/Q4.png",
    pollImg: "/images/pollquestion-2.png"
  },
  { 
    id: 5, 
    text: "คนเราต้องมีสิ่งยึดเหนี่ยวทางจิตใจ", 
    img: "/images/Q5.png",
    pollImg: "/images/pollquestion-1.png"
  },
  { 
    id: 6, 
    text: "รถไฟฟ้าเป็นประโยชน์ต่อใครหลายคน", 
    img: "/images/Q6.png",
    pollImg: "/images/pollquestion-2.png"
  },
  { 
    id: 7, 
    text: "การทำกิจกรรมร่วมกัน ปลูกป่าชายเลนสร้างประโยชน์ให้แก่ธรรมชาติ", 
    img: "/images/Q7.png",
    pollImg: "/images/pollquestion-1.png"
  },
  { 
    id: 8, 
    text: "การทำทานแล้วจะได้บุญ", 
    img: "/images/Q8.png",
    pollImg: "/images/pollquestion-2.png"
  },
  { 
    id: 9, 
    text: "เข้าวัดก็ควรทำบุญ ทำทานเล็กๆน้อยๆก็ยังดี", 
    img: "/images/Q9.png",
    pollImg: "/images/pollquestion-1.png"
  },
  { 
    id: 10, 
    text: "เราควรมีสวนสัตว์ และพิพิธภัณฑ์สัตว์น้ำ", 
    img: "/images/Q10.png",
    pollImg: "/images/pollquestion-2.png"
  },
  { 
    id: 11, 
    text: "ลิงควรอยู่บนต้นไม้", 
    img: "/images/Q11.png",
    pollImg: "/images/pollquestion-1.png"
  },
  { 
    id: 12, 
    text: "ข้ามถนนต้องมองซ้ายมองขวา", 
    img: "/images/Q12.png",
    pollImg: "/images/pollquestion-2.png"
  },
  {id: 13, 
    text: "เราต้องกินผัก", 
    img: "/images/Q13.png",
    pollImg: "/images/pollquestion-1.png"
  },
  { 
    id: 14, 
    text: "เราควรไปโรงเรียน", 
    img: "/images/Q14.png",
    pollImg: "/images/pollquestion-2.png"
  },
  { 
    id: 15, 
    text: "ผักเป็นสิ่งมีประโยชน์", 
    img: "/images/Q15.png",
    pollImg: "/images/pollquestion-1.png"
  },
  { id: 16,
    text: "คนเราทำงานเพื่อตัวเอง", 
    img: "/images/Q16.png",
    pollImg: "/images/pollquestion-2.png"
  },
  { 
    id: 17, 
    text: "ผู้หญิงโดนคุกคามทางเพศมากกว่าผู้ชาย", 
    img: "/images/Q17.png",
    pollImg: "/images/pollquestion-1.png"
  },
  { 
    id: 18, 
    text: "ทุกคนต้องเรียนมหาลัย", 
    img: "/images/Q18.png",
    pollImg: "/images/pollquestion-2.png"
  },
  { 
    id: 19, 
    text: "ผู้ชายควรรักกับผู้หญิง", 
    img: "/images/Q19.png",
    pollImg: "/images/pollquestion-1.png"
  },
  { 
    id: 20, 
    text: "เราทุกคนมีสิทธิเป็นของตัวเอง",
    img: "/images/Q20.png",
    pollImg: "/images/pollquestion-2.png"
  }
];

 export const getRandomQuestion = () => {
  const index = Math.floor(Math.random() * questions.length);
  return questions[index];
};