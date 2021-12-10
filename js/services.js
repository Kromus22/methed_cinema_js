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
    throw `Беда произошла! Что делать то?? Тут ошибка ${response.status}`
  })
  .catch(err => console.error(err))


//api и прочее взяты с сайта - themoviedb.org

export const getTriends = async (type = 'all', period = 'day', page = 1) => {
  const url = `${BASE_URL}/trending/${type}/${period}?api_key=${API_KEY}${LANG}&page=${page}`
  return await getData(url)
}

export const getTop = async (type, page = 1) => {
  const url = `${BASE_URL}${type}/top_rated?api_key=${API_KEY}${LANG}&page=${page}`
  return await getData(url)
}

export const getPopular = async (type, page = 1) => {
  const url = `${BASE_URL}${type}/popular?api_key=${API_KEY}${LANG}&page=${page}`
  return await getData(url)
}

export const getVideo = async (id, type) => {

  const url = `${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}${LANG}`

  return await getData(url)
}

// ссылки для getVideo
// https://api.themoviedb.org/3/tv/{tv_id}/videos?api_key=<<api_key>>&language=en-US
// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US

export const search = async (query, page) => {
  const url = `${BASE_URL}search/multi?api_key=${API_KEY}${LANG}&page=${page}&include_adult=false&query=${query}`

  return await getData(url)
}