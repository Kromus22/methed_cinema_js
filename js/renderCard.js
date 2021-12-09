
const listCard = document.querySelector('.other-films__list')
//получаем данные (data) из нашего запроса к апи и потом отрисовываем карточки
const renderCard = async (data) => {


  listCard.textContent = ''

  const cards = data.map((item) => {
    const card = document.createElement('li')
    card.className = 'other-films__item'

    const link = document.createElement('a')
    link.className = 'other-films__link'
    link.dataset.rating = item.vote_average

    const img = document.createElement('img')
    img.className = 'other-films__img'
    img.alt = `постер ${item.title || item.name}`
    img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`

    link.append(img)
    card.append(link)

    return card
  })

  //заталкиваем все готовые карточки (li) в вёрстку
  listCard.append(...cards)

}


export default renderCard