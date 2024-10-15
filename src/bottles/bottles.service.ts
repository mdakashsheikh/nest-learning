import { Injectable } from "@nestjs/common";

@Injectable()
export class bottlesService {

    getBottle(): string {
        return 'Take the bottle'
    }
}