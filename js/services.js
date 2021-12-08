const API_KEY = '0177bb4fbceb9721365e36c4ef90512a'
const BASE_URL = 'https://api.themoviedb.org/3/'
const LANG = '&language=ru-RU'

// trending/all/day?api_key=<<api_key>>

//обрабатываем данные, полученные от апи

const getData = url => fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw `Беда произошла! Что делать то?? Ту ошибка ${response.status}`
  })
  .catch(err => console.error(err))




export const getTriends = async (type = 'all', period = 'day', page = 1) => {
  const url = `${BASE_URL}/trending/${type}/${period}?api_key=${API_KEY}${LANG}&page=${page}`
  return await getData(url)
}