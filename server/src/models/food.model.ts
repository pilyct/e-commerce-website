import { Schema, model } from 'mongoose';

export interface Food{
  id:string;
  name:string;
  description_short:string;
  description_long:string;
  cookTime:string;
  price:number;
  amount:number;
  favourite:boolean;
  origins: string[];
  stars: number;
  imageUrl: string[];
  tags: string[];
  isHovered:boolean;
}

export const FoodSchema = new Schema<Food>(
  {
      name: {type: String, required:true},
      description_short: {type: String, required:true},
      description_long: {type: String, required:true},
      cookTime: {type: String, required:true},
      price: {type: Number, required:true},
      amount: {type: Number, required:true},
      favourite: {type: Boolean, default:false},
      origins: {type: [String], required:true},
      stars: {type: Number, required:true},
      imageUrl: {type: [String], required:true},
      tags: {type: [String]},
      isHovered: {type: Boolean, default:false}
  },{
      toJSON:{
          virtuals: true
      },
      toObject:{
          virtuals: true
      },
      timestamps:true
  }
);

export const FoodModel = model<Food>('food', FoodSchema);