# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `npm run dev` (starts Express + Vite on port 5000)
- **Build**: `npm run build` (runs `tsx script/build.ts` — bundles client with Vite, server with esbuild)
- **Production**: `npm run start` (serves built app from `dist/`)
- **Type check**: `npm run check` (runs `tsc`)
- **DB push**: `npm run db:push` (applies Drizzle schema to PostgreSQL via `drizzle-kit push`)
- **Seed data**: `npx tsx script/seed.ts`

## Environment

- Requires `DATABASE_URL` env var pointing to a PostgreSQL database
- Default port is 5000 (configurable via `PORT` env var)
- Originally built on Replit (some Replit-specific Vite plugins exist but are conditionally loaded)

## Architecture

This is a full-stack TypeScript e-commerce app with a monorepo-style layout using three top-level source directories:

### `shared/` — Shared types and contracts
- `schema.ts`: Drizzle ORM table definitions (`subscribers`, `products`) and Zod validation schemas. This is the single source of truth for both DB schema and TypeScript types.
- `routes.ts`: API route contract definitions (paths, methods, input/output schemas). Both server and client import from here for type-safe API usage.

### `server/` — Express backend
- `index.ts`: App bootstrap — Express setup, middleware, Vite dev integration, static serving in production
- `routes.ts`: Route handlers that consume the shared API contract and delegate to storage
- `storage.ts`: Data access layer implementing `IStorage` interface with `DatabaseStorage` class (Drizzle ORM)
- `db.ts`: PostgreSQL connection pool and Drizzle instance
- `vite.ts`: Vite dev server middleware setup
- `static.ts`: Production static file serving

### `client/` — React frontend
- Uses **wouter** for routing (not react-router)
- **TanStack React Query** for server state with a custom `apiRequest` helper and `getQueryFn` factory in `lib/queryClient.ts`
- **shadcn/ui** component library (Radix primitives + Tailwind) in `components/ui/`
- Page sections in `components/sections/` (Hero, Products, Gifts, Experience, Values, Marquee)
- Custom hooks in `hooks/` (`use-products`, `use-subscribers`, `use-toast`, `use-mobile`)

### Path Aliases
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets` → `attached_assets/`

Configured in both `tsconfig.json` and `vite.config.ts`.

### Data Flow
API contracts are defined once in `shared/routes.ts` → server routes validate with those schemas → storage layer uses Drizzle with shared schema types → client hooks call the same API paths for type consistency.
