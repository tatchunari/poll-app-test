import QuestionCard from '../components/QuestionCard'
import { questions } from '../utils/random'
// styling
import '../styles/index.css'

const QuestionPage = ({ onPick }) => {
  return (
    <div className='flex justify-center w-full overflow-x-hidden bg-gradient-to-b from-[#C7E9FF] via-[#E3F4FF] to-[#F5F5F5]'>
    <div className="w-full bg-responsive bg-no-repeat bg-contain max-w-[1440px] min-h-[1220px] flex justify-center">
      {/* Container */}
    <div className='flex flex-col my-15 items-center w-[1000px]'>

      {/* Header */} 
      <div className='flex flex-col text-center w-full max-w-[90vw] sm:max-w-[1000px] mx-auto'>
      <h2 className='font-secondary text-[30px] font-bold text-black'>รายละเอียด และกติกาในการเล่น</h2>
      <p className='font-secondary text-[16px] text-black my-6'>เกมนี้ออกแบบมาเพื่อชวนทุกคนมาเปิดใจ พูดคุย และแลกเปลี่ยนมุมมองกันอย่างจริงใจ โดยไม่มีถูกหรือผิด เพียงแค่เลือกว่าคุณ “เห็นด้วย” หรือ “ไม่เห็นด้วย” กับประเด็นที่ปรากฏ แล้วเล่าให้เพื่อนหรือคู่ที่เล่นของคุณฟังว่าเพราะอะไรคุณถึงคิดแบบนั้น จากนั้นลองฟังเหตุผลของกันและกันอย่างไม่ตัดสิน ไม่มีคะแนน ไม่มีการแข่งขัน มีแค่พื้นที่ปลอดภัยเล็ก ๆ ที่ให้เราได้เรียนรู้ความคิดของคนอื่น พร้อมตั้งคำถามกับความคิดของตัวเองอย่างนุ่มนวลอีกครั้ง</p>
      </div>

      {/* Question Card */}
      <div className='grid grid-cols-1 md:grid-cols-3 max-w-[1024px] gap-4 items-center w-full mx-auto place-items-center'>
        {questions.map((q) => (
        <QuestionCard key={q.id} question={q} onSelect={onPick} />
      ))}
      </div>
    </div>
    </div>
    </div>
  )
}

export default QuestionPage;