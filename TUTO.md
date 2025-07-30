src = https://www.youtube.com/watch?v=2gtiffE3__U  
NestJS Crash Course from Tech Vision

# Intro

NestJS is a framework that makes it nearly impossible to write bad code.  
Nest achieves this by enforcing a **very rigid code architecture**.  

As a result, you can build an app that is: 
- scalable
- easy to test
- loosely coupled

In this video, we'll see:
- how to stucture our code
- 10 key concepts
- how to build a podcast API

# 1. Nest CLI

This is Nest's secret weapon.  

The first thing the CLI can do for us is to create a Nest application:
- install the CLI globally by running `npm i -g @nestjs/cli` in your termial
- create a new project via `nest new my-podcast-api`
- place yourself in the project's folder via `cd my-podcast-api`
- start the dev server in watch mode via `npm run start:dev`
- the local dev environment runs at http://localhost:3000/

The CLI can do much more for us:
- create entire modules with CRUD resources
- create test files
- create controllers, providers, guards, pipes, etc.

# 2. The main.ts file

Located in the `src` folder.  
As we can see in this `main.ts` file, the `NestFactory()` function creates our Nest app using the `AppModule` class.  
And this is also where we specify which port the app listens to.  


# 3. The app.module.ts file

Also located in the `src` folder.  
We have an empty class here, and before that we are calling an `@Module()` function.  

That function is a **decorator**, a very important concept in NestJS.  

# 4. Decorators

