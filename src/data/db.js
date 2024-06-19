export const quiz = {
    topic: 'Javascript',
    perQuestionScore: 5,
    questions: [
        {
            question: 'Which function is used to serialize an object into a JSON string in Javascript?',
            choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
            correctAnswer: 'stringify()',
        },
        {
            question: 'Which of the following keywords is used to define a variable in Javascript?',
            choices: ['var', 'let', 'var and let', 'None of the above'],
            correctAnswer: 'var and let',
        },
        {
            question: 'Which of the following methods can be used to display data in some form using Javascript?',
            choices: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
            correctAnswer: 'All of the above',
        }
    ]
}

export const trueFalseQuiz = {
    topic: 'True or False',
    perQuestionScore: 5,
    questions: [
        {
            question: '4 + 4 = 8',
            choices: ['True', 'False'],
            correctAnswer: 'True',
        },
        {
            question: 'Apple = Shiye',
            choices: ['True', 'False'],
            correctAnswer: 'False',
        },
        {
            question: '"1" === 1',
            choices: ['True', 'False'],
            correctAnswer: 'False',
        }
    ]
}

export const moreButtonsQuiz = {
    topic: 'More buttons quiz',
    perQuestionScore: 5,
    questions: [
        {
            question: 'They are interested __ our project.',
            choices: ['in', 'the', 'effective', 'talk', 'afford', 'air', 'glasses', 'port', 'teach', 'form'],
            correctAnswer: 'in',
        },
        {
            question: 'Hello __!',
            choices: ['world', 'baby', 'football', 'ball', 'ice', 'mouse', 'horse'],
            correctAnswer: 'world',
        }
    ]
}

export const imageQuiz = {
    topic: 'Image quiz',
    perQuestionScore: 5,
    questions: [
        {
            image: "Bill-Gates-2011.png",
            question: 'Who is that person?',
            choices: ['Steve Jobs', 'Elon Musk', 'Bill Gates', 'None of the above'],
            correctAnswer: 'Bill Gates',
        },
        {
            image: "elon-musk.webp",
            question: 'Tag the social network of the person in the picture?',
            choices: ['Instagram', 'X', 'Facebook', 'VK'],
            correctAnswer: 'X',
        }
    ]
}