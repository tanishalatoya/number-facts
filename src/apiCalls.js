export const getNumberFact = number => {
    return fetch(`http://numbersapi.com/${number}/math`)
        .then(response => {
            if (response.status === 200) {
                return response.text()
            } else {
                throw new Error('We cannot find that information right now.')
            }
        })

}