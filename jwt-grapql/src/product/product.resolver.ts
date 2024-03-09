import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver('Product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation('createProduct')
  create(@Args('createProductInput') createProductInput: CreateProductInput) {
    return this.productService.create(createProductInput);
  }

  @UseGuards(GqlAuthGuard)
  @Query('getAllProducts')
  findAll() {
    return this.productService.findAll();
  }

  @Query('getToken')
  getTokenFun(){
    return this.productService.getToken();
  }

  @Query('product')
  findOne(@Args('id') id: number) {
    return this.productService.findOne(id);
  }

  @Mutation('updateProduct')
  update(@Args('updateProductInput') updateProductInput: UpdateProductInput) {
    return this.productService.update(updateProductInput.id, updateProductInput);
  }

  @Mutation('removeProduct')
  remove(@Args('id') id: number) {
    return this.productService.remove(id);
  }
}
