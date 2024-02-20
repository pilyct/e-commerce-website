export class Food {
  id!: string;
  name!: string;
  description_short!: string;
  description_long!: string;
  price!: number;
  amount!:number;
  tags?: string[];
  favourite!: boolean;
  stars!: number;
  imageUrl!: string[];
  origins!: string[];
  cookTime!: string;
  isHovered: boolean = false;
}
