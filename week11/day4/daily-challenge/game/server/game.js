const emojis = [
    { emoji: '😄', name: 'Happy' },
    { emoji: '🐱', name: 'Cat' },
    { emoji: '🌺', name: 'Flower' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🎉', name: 'Party' },
    { emoji: '📚', name: 'Book' },
    { emoji: '🌞', name: 'Sun' },
    { emoji: '🎶', name: 'Music' },
    { emoji: '🚲', name: 'Bicycle' },
    { emoji: '🌈', name: 'Rainbow' },
    { emoji: '🍔', name: 'Burger' },
    { emoji: '🎁', name: 'Gift' },
    { emoji: '📷', name: 'Camera' }
]
export const questionData = () => {
    
    // Generate random values
    const random = Math.floor(Math.random() * emojis.length)
    let rNums = []
    while (rNums[0] === rNums[1] || rNums.includes(random)) {
        rNums =  Array.from({ length: 2 }, () => Math.floor(Math.random() * emojis.length))
    }
    
    return  { emoji:emojis[random].emoji,
        answer: emojis[random].name,
        wrong: [emojis[rNums[0]].name, emojis[rNums[1]].name]
    }
    
}