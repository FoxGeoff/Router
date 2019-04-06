# Router

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

 # Project: Demo of Angular routing

## Onlne references: https://angular.io/guide/router#child-routing-component

* the application has two versions the first is (all in app.module.ts):
```

angular-router-sample
|
|-src
   |-app
      |-crisis-list
         |
         |-crisis-list.component.css
         |
         |-crisis-list.component.html
         |
      |  |-crisis-list.component.ts
      |-hero-list
         |
         |-hero-list.component.css
         |
         |-hero-list.component.html
         |
      |  |-hero-list.component.ts
      |-page-not-found
         |
         |-page-not-found.component.css
         |
         |-page-not-found.component.html
         |
      |  |-page-not-found.component.ts
      |-app.component.css
      |-app.component.html
      |-app.component.ts
    |-app.module.ts
    |-main.ts
    |-index.html
    |-styles.css
    |-tsconfig.json
|-node_modules ...
|-package.json
```

## The Basics

 * If the app folder is the application root, as it is for the sample application, 
 set the href value exactly as shown here. ```<base href="/">```

 ## Router imports

 * A service that is not part of the Angular core: ```import { RouterModule, Routes } from '@angular/router';```
```
imports: [
    RouterModule.forRoot(routes, { enableTracing: true } // <-- debugging purposes only
  )],
  //These events are logged to the console when the enableTracing option is enabled also.
```
* **A routed Angular applsication has one singleton instance of the Router service**
```
Adding the configured RouterModule to the AppModule is sufficient for simple route configurations. As the application grows, you'll want to refactor the routing configuration into a separate file and create a Routing Module, a special type of Service Module dedicated to the purpose of routing in feature modules.

The Routing Module is a design choice whose value is most obvious when the configuration is complex and includes specialized guard and resolver services. It can seem like overkill when the actual configuration is dead simple.

Some developers skip the Routing Module (for example, AppRoutingModule) when the configuration is simple and merge the routing configuration directly into the companion module (for example, AppModule).

Choose one pattern or the other and follow that pattern consistently.
```
* Reference: https://angular.io/guide/router#refactor-the-routing-configuration-into-a-routing-module

```
A typical application has multiple feature areas, each dedicated to a particular business purpose.

While you could continue to add files to the src/app/ folder, that is unrealistic and ultimately not maintainable. Most developers prefer to put each feature area in its own folder.

You are about to break up the app into different feature modules, each with its own concerns. Then you'll import into the main module and navigate among them.
```
## Note : for feature modules
```
Now that you have routes for the Heroes module, register them with the Router via the RouterModule almost as you did in the AppRoutingModule.

There is a small but critical difference. In the AppRoutingModule, you used the static RouterModule.forRoot() method to register the routes and application level service providers. In a feature module you use the static forChild method.
```
*
```
@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes) // <-- Use in feature routing module
  ],
  exports: [
    RouterModule
  ]
```
## Check: Remove duplicate hero routes
*
```
The hero routes are currently defined in two places: in the HeroesRoutingModule, by way of the HeroesModule, and in the AppRoutingModule.

Routes provided by feature modules are combined together into their imported module's routes by the router. This allows you to continue defining the feature module routes without modifying the main route configuration.

Remove the HeroListComponent import and the /heroes route from the app-routing.module.ts.
```
* **Leave the default and the wildcard routes! These are concerns at the top level of the application itself.**

## File Map:
```

src/app/heroes //<-- Folder 'heroes'
|
|-hero-detail
  |-hero-detail.component.css
  |-hero-detail.component.html
  |-hero-detail.component.ts
|
|-hero-list
  |-hero-list.component.css
  |-hero-list.component.html
  |-hero-list.component.ts
|
hero.service.ts
hero.ts
heroes-routing.module.ts
heroes.module.ts
mock-heroes.ts
```
## Module import order matters
* **Look at the module imports array. Notice that the AppRoutingModule is last. Most importantly, it comes after the HeroesModule.**

* creating root routing module                ```ng generate module app-routing --module app --flat``
* Creating feature moduel with routing module ```ng generate module heroes/heroes --module app --flat --routing```
* Create a component with app-routing.module.ts ```ng g c CrisisList --nospec --module app-routing --dry-run```

