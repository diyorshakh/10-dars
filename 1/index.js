// Juft va toq sonlarni aniqlash

function numbers() {
    for (i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i + '-bu juft son')
        } else {
            console.log(i + '-bu toq son')
        }
    }
}
numbers()