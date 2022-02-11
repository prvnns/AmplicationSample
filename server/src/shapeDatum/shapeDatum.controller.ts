import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ShapeDatumService } from "./shapeDatum.service";
import { ShapeDatumControllerBase } from "./base/shapeDatum.controller.base";

@swagger.ApiTags("shape-data")
@common.Controller("shape-data")
export class ShapeDatumController extends ShapeDatumControllerBase {
  constructor(
    protected readonly service: ShapeDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
