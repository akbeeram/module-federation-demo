# Module Federation Demo
This repo contains module federation demo code for running Angular, React and JS Web Component apps inside an Angular Host and a React Host app along with examples for inter module communication. 

## Details
Using this repo, we shall setup:
- Angular Host and add the following remotes:
    - Angular Remote
    - React Remote
    - Plain JS Web Component
- React Host and add the following remotes:
    - Angular Remote
    - React Remote
    - Plain JS Web Component

## Communication between Host and Remotes
- Parent to Child and vice-versa
- Custom Events
- Store
- Services (Angular Only)

## Setup
- Navigate into each ng-* and react-* folders and run `npm install`
- In ng-* folder run `ng serve` to start the angular app
- In react-* folder run `npx webpack serve` to start the angular app

### Port Details
- Angular Host (ng-shopping-host): `https://localhost:5000`
- Angular Remote (ng-billing-remote): `https://localhost:5001`
- Angular Remote (ng-orders-remote): `https://localhost:5002`
- React Host (react-host-app): `https://localhost:5005`
- React Remote (react-remote-app): `https://localhost:5004`
- Web component (wc-users-app): NA

### Running Angular MF Setup
- Copy the `wc-users-app/usersApp.js` into `ng-shopping-host/public/assets` to enable loading the web component.
- Once you open `https://localhost:5000`, you should see 4 tiles on the home, first 2 loading ng-*-remote apps and the next two loading `wc-users-app` and `react-remote-app`.

### Running React MF Setup
- Copy the `wc-users-app/usersApp.js` into `ng-shopping-host/public/assets` to enable loading the web component.
- In `ng-billing-remote/src/bootstrap.ts`, enable to load the angular remote in a react host app. This loads `ng-billing-remote` as a angular element/custom element.
- Once you open `https://localhost:5005`, you should see React remote app, web-component app and angular remote app all loading in react host.

