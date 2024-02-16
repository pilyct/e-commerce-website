export class Food {
  id!:string;
  name!:string;
  description!:string;
  price!:number;
  tags?:string[];
  favourite!:boolean;
  stars!:number;
  imageUrl!:string[];
  origins!:string[];
  cookTime!:string;
  isHovered: boolean = false;
}