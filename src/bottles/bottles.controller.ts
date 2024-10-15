import { bottlesService } from './bottles.service';
import { Controller, Get } from "@nestjs/common";


@Controller('/bottle')
export class bottlesController {

    constructor(private readonly bottlesService:bottlesService) {}

    @Get('/getb')
    getBottle(): string {
        return this.bottlesService.getBottle();
    }
}