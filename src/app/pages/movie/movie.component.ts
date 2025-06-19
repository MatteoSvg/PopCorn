import { Component, inject, Input, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MovieAltPipe } from '../../pipes/movie-alt.pipe';
import { MoviePosterPipe } from '../../pipes/movie-poster.pipe';
import { Movie } from '../../models/movie.model';
import { PopcornRatingComponent } from "../../components/popcorn-rating/popcorn-rating.component";

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MovieAltPipe, MoviePosterPipe, PopcornRatingComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) movieId!: string;
  movie!: Movie
  isLoading: boolean = false
  @ViewChild('loader') loader!: ElementRef
  movieService = inject(MovieService);
  ngOnInit(): void {
    this.isLoading = true
      this.movieService.getCurrentMovie(parseInt(this.movieId)).subscribe({
        next: (movie) => {
          if(!movie) return
          this.movie = movie
        },
        error: (err) => {
          console.log(err)
        },
        complete: () => {
          this.isLoading = false
        }
      })
  }
  get MovieGenre(): string{
    console.log(this.movie.genre_ids)
    return this.movie?.genre_ids?.map((g) => g.name).join(',') ?? 'Genere non disponibile' 
  }
  ngAfterViewInit(): void {
    this.loader.nativeElement.style.color = 'red'
  }
  // get movie() {
  //   return this.movieService.getCurrentMovie(parseInt(this.movieId));
  // }
}
