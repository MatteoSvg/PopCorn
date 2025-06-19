import { OnInit } from '@angular/core';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { Genres, Genre } from '../../models/utility.models';
import { FormUtilsService } from '../../services/formUtils.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,MovieCardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  movies: Movie[] = [];
  genres: Genre[] = [];
  years: string[] = [];
  private movieService = inject(MovieService);
  private formUtilsService = inject(FormUtilsService);
  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1900; year--) {
      this.years.push(year.toString());
    }
 
    this.formUtilsService.getGenres().subscribe({
      next: (genres) => {
        if (!genres) return;
        this.genres = genres.genres;
      },
      error: (err) => console.log(err),
    });
  }
  onSubmit(formData: NgForm){
    console.log(formData.form)
    this.movieService.searchMovies(formData.form.value.search,false,formData.form.value.year).subscribe({
      next: (movies) => {
          if (!this.movies) return
          this.movies = movies.results
      }
    })
  }
}