import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Injectable()
export class CoffeesService {

    private coffees: Coffee[] = [
        {
            id: 1,
            name: 'Shipwreck Roast',
            brand: 'Buddy brew',
            flavors: ['chocolate', 'vanilla']
        }
    ]

    findAll(): Coffee[] {
        return this.coffees
    }

    findOne(id: string): Coffee{
        const coffee = this.coffees.find(item => item.id === +id)

        if(!coffee){
            throw new NotFoundException(`Coffee ${id} not found`)
        }
        return coffee
    }

    create(createCoffeeDto: any): any{
        this.coffees.push(createCoffeeDto)
        return createCoffeeDto
    }

    update(id: string, updateCoffeeDto: any): void{
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id)
        if(coffeeIndex >= 0){
            this.coffees.splice(coffeeIndex, 1)
        }
    }

    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        if (coffeeIndex >= 0) {
          this.coffees.splice(coffeeIndex, 1);
        }
    }
}
