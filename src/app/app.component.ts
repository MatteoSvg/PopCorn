import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DUMMY_MOVIES } from './data/dummy-movies';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'PopCorn';
  movies = DUMMY_MOVIES;

  get bestFourMovies() {
    return [...this.movies]
      .sort((a, b) => b.vote_average - a.vote_average)
      .slice(0,4);
  }
}
