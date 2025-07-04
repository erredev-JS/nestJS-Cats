import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs'
@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService
    ){}

    

    async register({name, email, password}: RegisterDto){
        const user = await this.usersService.findOneByEmail(email)
        if(user){
            throw new BadRequestException('El usuario ya existe')
        }
        return this.usersService.create({
            name, 
            email, 
            password: await bcryptjs.hash(password, 10)
        })
        
    }
    
    async login(){
        return 'Logged'
    }


}
