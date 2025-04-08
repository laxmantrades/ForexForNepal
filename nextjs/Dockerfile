
# Step 1: Build Stage
# The first stage is used to build your application. This stage will use the 'node:20' image as the base image.
# We're using multi-stage builds to create a smaller production image later.

FROM node:20 AS build

# Set the working directory for the build stage.
# This means that every subsequent command will run in the '/app' directory inside the container.
WORKDIR /app

# Copy the package.json and package-lock.json files into the container.
# These files contain all the dependencies your application needs to run.
# COPY package*.json ./ will copy both package.json and package-lock.json into the working directory.
COPY package*.json ./

# Install the dependencies listed in package.json inside the container.
# RUN npm install will install all the required dependencies (from package.json) in the container.
RUN npm install

# Copy the rest of your application files into the container.
# This includes all your source code files (like React components, HTML, etc.)
COPY . .

# Run the build command to create a production build of your app.
# We're using Vite to bundle the app into optimized static files (in the 'dist' directory).
# This command prepares the app for deployment, optimizing it for production.
RUN npm run build

# Step 2: Production Stage (final image)
# This is the second stage where we create the final image for production.
# It's a fresh image based on 'node:20' but smaller since we are copying only the built assets from the previous stage.

FROM node:20

# Set the working directory for the production container.
# This is where your app will live in the production environment.
WORKDIR /app

# Install 'serve', a simple static file server that we'll use to serve the built files.
# 'serve' will be used to serve the production build from the 'dist' folder.
RUN npm install -g serve

# Expose port 3000 so that the application will be accessible on that port when running in the container.
EXPOSE 3000

# Copy only the necessary files from the build stage to the production image:
# - The 'dist' folder contains the production build of the app.
# - The 'node_modules' folder contains the installed dependencies.
# - The 'package*.json' files contain the necessary metadata for your app.
COPY --from=build /app/dist /app/dist
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package*.json /app/

# Set the default command to run when the container starts.
# In this case, it runs the 'serve' command, which will serve the static files (the 'dist' folder).
# '-s' indicates that we're serving the app in "single-page" mode, useful for React apps.
CMD ["serve", "-s", "dist"]

  