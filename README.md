# youtuben

Learn English with YouTube

## Developing Environment

Download the src and install the dependencies using yarn:

```
$ git clone git@github.com:gdg-nara/youtuben.git
$ cd youtuben
$ yarn
```

Now you can start developing by the following environment:

```
$ npx ionic info     

Ionic:

   Ionic CLI                     : 5.4.16 (/.nvm/versions/node/v13.3.0/lib/node_modules/ionic)
   Ionic Framework               : @ionic/angular 5.2.2
   @angular-devkit/build-angular : 0.901.9
   @angular-devkit/schematics    : 9.1.9
   @angular/cli                  : 9.1.9
   @ionic/angular-toolkit        : 2.2.0
```

## Start the developing server

```
$ npx ionic serve
```

## Build and Deploy the app

```
$ npx ng run app:build:production --base-href "https://gdg-nara.github.io/youtuben/"
$ npx angular-cli-ghpages --dir=www
```

## License

MIT
