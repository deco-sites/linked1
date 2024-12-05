import type { Manifest } from "./manifest.gen.ts";
import { proxy } from "deco/web";
export const invoke = proxy<Manifest>();
