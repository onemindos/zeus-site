FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps --cache /tmp/npm-cache

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# Payload requires these env vars to exist at build time for type-checking.
# They are NOT used to actually connect — Next.js build does not run DB queries.
# Real values are injected at runtime via k8s secrets.
ENV DATABASE_URI=postgresql://build:build@localhost:5432/build
ENV PAYLOAD_SECRET=build-time-placeholder
ENV NODE_ENV=production
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/payload.config.ts ./payload.config.ts
COPY --from=builder /app/payload-types.ts ./payload-types.ts
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/collections ./collections
COPY --from=builder /app/globals ./globals
COPY --from=builder /app/lib ./lib
COPY --from=builder /app/data ./data
USER nextjs
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]
