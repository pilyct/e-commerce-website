import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  constructor(
    @Inject(ActivatedRoute) private activatedRoute: ActivatedRoute,
    @Inject(Router) private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
    });
  }

  search(term: string): void {
    if (term) this.router.navigateByUrl('/search/' + term);
    else if (!term) this.router.navigateByUrl('');
  }
}
