import { getTriends, getVideo } from './services.js';
import renderCard from './renderCard.js';

// находим баннер с фильмом недели на странице, чтобы затем перерисовывать его с помощью полученных данных
const filmWeek = document.querySelector('.film-week')

// отрисовка баннера по данным, взятых с апи
const firstRender = (data, key) => {
  const {
    vote_average: voteAverage,
    backdrop_path: backdropPath,
    name,
    original_name: originalName,
    title,
    original_title: originalTitle
  } = data

  filmWeek.innerHTML = `
    <div class="container film-week__container" data-rating="${voteAverage}">
      <div class="film-week__poster-wrapper">
        <img class="film-week__poster"
          src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdropPath}"
          alt="постер ${name || title}">
        <p class="film-week__title_origin">${originalName || originalTitle}</p>
      </div>
      <h2 class="film-week__title">${name || title}</h2>
      ${key ?
      `<a class="film-week__watch-trailer tube" 
        href="https://youtu.be/${key}"
        aria-label="смотреть трейлер"></a>` :
      ''}
      
    </div>
  `
}

const renderVideo = async () => {
  const data = await getTriends()
  //отделяем первую карточку отдельно под промо и остальные отдельно под список фильмов.
  const [firstCard, ...otherCard] = data.results

  //другие карточки, крoме первой(промо)
  otherCard.length = 12

  const video = await getVideo(firstCard.id, firstCard.media_type)


  firstRender(firstCard, video.results[0])
  renderCard(otherCard)
}

export default renderVideo