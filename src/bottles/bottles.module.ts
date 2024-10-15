import { Module } from "@nestjs/common";
import { bottlesController } from "./bottles.controller";
import { bottlesService } from "./bottles.service";


@Module({
    imports: [],
    providers: [bottlesService],
    controllers: [bottlesController],
})

export class bottlesModule {

}
