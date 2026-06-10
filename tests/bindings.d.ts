import type { D1Migration } from "cloudflare:test";
import type { Env as AppEnv } from "../src/bindings";

export type Env = AppEnv & {
	MIGRATIONS: D1Migration[];
};

declare module "cloudflare:test" {
	// Declaration merging with the module's own ProvidedEnv requires an interface,
	// even though it adds no members of its own.
	// eslint-disable-next-line @typescript-eslint/no-empty-object-type
	interface ProvidedEnv extends Env {}
}
