import { Component, Input } from '@angular/core';
import { DUMMY_MOVIES } from '../../data/dummy-movies';
import { ButtonComponent } from '../button/button.component';
 const randomIdx = Math.floor(Math.random() * DUMMY_MOVIES.length)
  console.log(randomIdx)
@Component({
  selector: 'app-random-movie',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './random-movie.component.html',
  styleUrl: './random-movie.component.scss'
})
export class RandomMovieComponent {
  movie = DUMMY_MOVIES[randomIdx]

  onGetRandomMovie(){
    const randomIdx = Math.floor(Math.random() * DUMMY_MOVIES.length)
    console.log(randomIdx)
    this.movie = DUMMY_MOVIES[randomIdx]
  }

  getPosterPath() {
    return 'https://image.tmdb.org/t/p/w500/' + this.movie.poster_path
  }

}
