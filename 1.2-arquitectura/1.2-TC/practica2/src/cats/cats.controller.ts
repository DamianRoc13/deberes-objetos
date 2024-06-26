import { Controller, Get, Post, HttpCode, Param, Body, Put, Delete} from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './dto/create-cat.dto';
import { CatsService  } from './cats.service';
import { Cat } from './interfaces/cat.interface';


@Controller('cats')
export class CatsController {
   constructor (private catsService: CatsService) {}

   @Post ()
   async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
   }

   @Get()
   async findall(): Promise<Cat[]> {
    return this.catsService.findAll();

   }
}

