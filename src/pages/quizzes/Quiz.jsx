import { useState } from 'react'
import { quiz } from '../../data/db'

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [result, setResult] = useState({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    })
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [showCorrect, setShowCorrect] = useState(false)

    const {questions} = quiz
    const {question, choices, correctAnswer} = questions[activeQuestion]


    const onClickNext = () => {
      setShowCorrect(false)
      setSelectedAnswerIndex(null)
      setResult(prev => selectedAnswer ? {
        ...prev,
        score: prev.score + 5,
        correctAnswers: prev.correctAnswers + 1,
      } : {
        ...prev,
        wrongAnswers: prev.wrongAnswers + 1
      }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion(prev => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
    }


    const onAnswerSelected = (answer, index, e) => {
      if (selectedAnswerIndex === null) {
        setShowCorrect(answer !== correctAnswer)
        setSelectedAnswerIndex(index)
        setSelectedAnswer(answer === correctAnswer)
      }
    }


  return (
    <div className='bg-[#F6F9FF] w-screen h-screen flex justify-center items-center'>
        <div className='w-3/4'>
        {
          !showResult && (
            <div className='border h-4 rounded-full bg-gray-300 mb-10 w-3/4 mx-auto'>
              <div className='bg-blue-500 h-full rounded-full' style={{width: `${Math.round(((activeQuestion + 1) / questions.length) * 100)}%`}}></div>
            </div>
          )
        }
            <div className='shadow-[0_0_16px_0_#00000029] rounded-[8px] bg-white p-8'>
              {
                !showResult ? (
                  <>
                    <div className='flex justify-between items-center'>
                      <span className='text-blue-500 font-semibold text-3xl mb-4'>Quiz</span>
                      <span className='bg-blue-500 text-white text-sm py-2 px-4 rounded-full '>{activeQuestion + 1}/{questions.length}</span>
                    </div>
                    <p className='mb-10'>Choose the correct answer</p>
                    <p>{question}</p>
                    <div className='space-y-2 mb-10 mt-6'>
                      {
                        choices.map((answer, index) => (
                          <div className={`${selectedAnswerIndex !== null ? 'cursor-not-allowed' : 'cursor-pointer'} flex items-center gap-2`} key={index} onClick={(e) => onAnswerSelected(answer, index, e)}>
                            <div className='size-4 rounded-full shadow-[0_0_8px_0_#00000040_inset] flex justify-center items-center'>
                              <div className={`rounded-full ${choices.indexOf(correctAnswer) !== index && selectedAnswerIndex === index  ? 'bg-red-500' : selectedAnswerIndex === index ? 'bg-green-500' : showCorrect && choices.indexOf(correctAnswer) === index ? 'bg-green-500' : ''} size-2`}></div>
                            </div>
                            <span className={`${choices.indexOf(correctAnswer) !== index && selectedAnswerIndex === index  ? 'text-red-500' : selectedAnswerIndex === index ? 'text-green-500' : showCorrect && choices.indexOf(correctAnswer) === index ? 'text-green-500' : ''}`}>{answer}</span>
                          </div>
                        ))
                      }
                    </div>
                    <div className='bg-blue-500 h-1 w-fit flex my-4 items-center gap-6 mx-auto'>
                      {
                        Array(questions.length).fill(0).map((_, index) => (
                          <div key={index} className={`border-[3px] border-blue-500 rounded-full size-4 ${index === activeQuestion ? 'bg-white' : 'bg-blue-500'}`}></div>
                        ))
                      }
                    </div>
                    <div className='flex justify-end'>
                      <button className='bg-gray-300 px-4 py-2 rounded-full disabled:opacity-60 disabled:cursor-not-allowed' disabled={selectedAnswerIndex === null} onClick={onClickNext}>
                        {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                      </button>
                    </div>
                  </>
                ) : (
                  <div className='flex flex-col gap-2 bg-white rounded p-4'>
                    <h3 className='font-bold text-lg'>Result</h3>
                    <div className='border-b border-stone-500 pb-2'>
                        <p className='flex justify-between gap-10'>Total Questions: <span className='font-bold'>{questions.length}</span></p>
                        <p className='flex justify-between gap-10'>Total Score: <span className='font-bold'>{result.score}</span></p>
                        <p className='flex justify-between gap-10'>Correct Answers: <span className='font-bold text-green-500'>{result.correctAnswers}</span></p>
                        <p className='flex justify-between gap-10'>Wrong Answers: <span className='font-bold text-red-500'>{result.wrongAnswers}</span></p>
                    </div>
                    <button className='self-end bg-gray-500 px-4 py-2 rounded text-white' onClick={() => location.reload()}>Restart</button>
                  </div>
                )
              }
            </div>
        </div>
    </div>
  )
}

export default Quiz