export default function RandomId(max) {

    for (let i = 0; i < 3; i++) {

        let arrayTemp = []
        const poke = Math.floor(Math.random() * max) + 1
        arrayTemp.push(poke)
        
        return arrayTemp

    }
}