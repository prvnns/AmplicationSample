import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ShapeDatumServiceBase } from "./base/shapeDatum.service.base";

@Injectable()
export class ShapeDatumService extends ShapeDatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
