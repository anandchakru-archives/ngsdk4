# Ngsdk4

## ngsdk-lib 
The core library to interact with invite and help rsvp, add to calendar and navigate to maps.
Can be used directly in an angular base invite.

## ngsdk-elem
The Custom elements is a wrapper around ngsdk-lib to be used by non-angular invites.

#### Testing

```sh
npm run build:elem
npm i -g serve
cd dist/ngsdk-elem
serve
```
and hit https://localhost:5000


## ngsdk-test
The test application for ngsdk-lib.

#### Commands used to create this application - reference
```sh
ng new ngsdk4 --style scss --prefix n4 --routing=false --create-application=false
cd ngsdk4

ng g application ngsdk-test --style scss --prefix n4 --routing=false
ng g library ngsdk-lib --prefix n4
ng g application ngsdk-elem --style scss --prefix n4 --routing=false
ng add @angular/elements --project=ngsdk-elem

npm i -D fs-extra concat
```