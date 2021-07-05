// Com essa formatação, qualquer parte que usarmos o price, até nas somas, ele transformará para a formatação correta de moeda, sem perder nem fazer contas erradas

export const formatPrice = (number) => {
    const newNumber = Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format(number / 100)
    
    return newNumber
}

export const getUniqueValues = () => {}
