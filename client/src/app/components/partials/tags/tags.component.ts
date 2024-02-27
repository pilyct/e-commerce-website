import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Tag } from '../../../shared/models/Tag';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {
  
  tags?:Tag[];
  activeTag?: Tag;

  constructor(
    private foodService: FoodService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.foodService.getAllTags().subscribe((serverTags => {
      this.tags = serverTags;
    }));
  }

  onTagClick(tag: Tag): void {
    this.activeTag = tag;
    this.router.navigate(['/tag', tag.name]);
  }
  
  isActiveTag(tag: Tag): boolean {
    return this.activeTag === tag;
  }

}
