import { 
    Body, 
    Controller,
    Get, 
    Patch,
    Delete,
    Param,
    Post, 
    HttpCode, 
    HttpStatus,
    Query, 
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {

    constructor( private readonly coffeeService: CoffeesService ){}

    @Get()
    findAll(@Query() paginationQuery): Coffee[] {
        return this.coffeeService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number): Coffee {
        return this.coffeeService.findOne(''+id)
    }

    @Post()
//    @HttpCode(HttpStatus.GONE)
    create(@Body() createCoffeeDto: CreateCoffeeDto){
        return this.coffeeService.create(createCoffeeDto)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto): void{
        return this.coffeeService.update(id, updateCoffeeDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string): void{
        return this.coffeeService.remove(id)
    }


}
