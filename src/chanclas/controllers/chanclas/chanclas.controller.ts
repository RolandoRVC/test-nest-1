import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Chancla } from '../../entities/chanclas.entity';
import { ChanclasService } from '../../services/chanclas/chanclas.service';

@Crud({
    model:{
        type: Chancla,
    },
    query:{
        join:{
            user:{
                eager: false
            }
        }
    }
})
@Controller('chanclas')
export class ChanclasController implements CrudController<Chancla> {
    constructor(public service: ChanclasService){}
}
