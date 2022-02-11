import { Module } from "@nestjs/common";
import { ShapeDatumModuleBase } from "./base/shapeDatum.module.base";
import { ShapeDatumService } from "./shapeDatum.service";
import { ShapeDatumController } from "./shapeDatum.controller";
import { ShapeDatumResolver } from "./shapeDatum.resolver";

@Module({
  imports: [ShapeDatumModuleBase],
  controllers: [ShapeDatumController],
  providers: [ShapeDatumService, ShapeDatumResolver],
  exports: [ShapeDatumService],
})
export class ShapeDatumModule {}
