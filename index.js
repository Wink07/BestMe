const question = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? O que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + question[index] + " > ")
}

ask()

const answers = []
process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if (answers.length < question.length) {
        ask(answers.length)
    } else {
        process.exit()
    }
})


process.on('exit', () => {
    console.log(`
        Bacana Sergio!

        O que voce aprendeu hoje foi:
        ${answers[0]}

        O que te aborreceu e voce poderia melhorar foi:
        ${answers[1]}

        O que te deixou feliz hoje:
        ${answers[2]}

        Voce ajudou ${answers[3]} pessoas hoje!!!

        Volte amanha para novas reflexoes!!

    `)
})

