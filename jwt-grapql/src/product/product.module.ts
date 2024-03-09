import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constant';

@Module({
  imports: [JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s'},
  })],
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}
