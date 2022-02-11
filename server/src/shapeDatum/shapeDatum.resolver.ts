import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ShapeDatumResolverBase } from "./base/shapeDatum.resolver.base";
import { ShapeDatum } from "./base/ShapeDatum";
import { ShapeDatumService } from "./shapeDatum.service";

@graphql.Resolver(() => ShapeDatum)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ShapeDatumResolver extends ShapeDatumResolverBase {
  constructor(
    protected readonly service: ShapeDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
