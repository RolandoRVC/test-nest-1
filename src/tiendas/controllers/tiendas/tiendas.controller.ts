import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Tiendas } from '../../entities/tiendas.entity';
import { TiendasService } from '../../services/tiendas/tiendas.service';
@Crud({
    model:{
        type: Tiendas
    },
    query:{
        join:{
            productos:{
                eager: false
            }
        }
    }
})
@Controller('tiendas')
export class TiendasController implements CrudController<Tiendas>{
    constructor(public service: TiendasService){}
}
