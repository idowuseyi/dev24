import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Injectable()
export class ProductService {
  
  constructor(
    private jwtService: JwtService
  ) {}
  
  create(createProductInput: CreateProductInput) {
    return 'This action adds a new product';
  }

  getToken(){
    return this.jwtService.sign({name:"Seyi", city:"AK"})
  }

  findAll() {
    return [
      {name: "Product 1", price: 20}, {name: "Product 2", price: 24}
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
