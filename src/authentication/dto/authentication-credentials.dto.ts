import { IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Task } from "src/tasks/entities/task.entities";

export class authenticationCrendentialsDTO{
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username : string;

    @IsString()
    @MinLength(6)
    @MaxLength(32)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
    password : string;
    
    tasks : Task[];
}