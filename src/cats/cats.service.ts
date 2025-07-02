import { Body, Get, Injectable, Param, Post } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import {Repository} from 'typeorm'
@Injectable()
export class CatsService {

  constructor(
    @InjectRepository(Cat)
    private readonly catRepository: Repository<Cat>
  ){}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    const newCat = this.catRepository.create(createCatDto)
    return await this.catRepository.save(newCat);
  }
  @Get() 
  async findAll() {
    return await this.catRepository.find()
  }

  async findOne(@Param() id: number) {
    const cat = await this.catRepository.findOneBy({id: id})
    if(!cat){ 
      return `No hay gato con id ${id}`
    }else{
      return cat
    }
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  async remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
