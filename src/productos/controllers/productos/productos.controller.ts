import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Productos } from '../../entities/productos.entity';
import { ProductosService } from '../../services/productos/productos.service';

@Crud({
    model:{
        type: Productos
    },
    query:{
        join:{
            tienda:{
                eager: true
            }
        }
    }
})
@Controller('productos')
export class ProductosController implements CrudController<Productos>{
    constructor(public service: ProductosService){}
}
