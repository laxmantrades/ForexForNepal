# Build Stage
FROM node:20-alpine AS build
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install all dependencies (including dev dependencies like TypeScript)
RUN npm ci

# Copy the source code (including TypeScript files)
COPY . .

# Build the application (compile TypeScript into JavaScript)
RUN npm run build

# Production Stage
FROM node:20-alpine
WORKDIR /app

# Copy only the necessary files for production from the build stage
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist /app/dist

# Install only production dependencies (ignoring dev dependencies)
RUN npm install --production

# Expose the port your app runs on (optional)
EXPOSE 5005

# Start the application
CMD ["node", "dist/index.js"]
