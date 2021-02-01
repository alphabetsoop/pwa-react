# A recycling app

Here is my shoddy documentation on how you guys can get started.

## Getting started

This app was built using `create-react-app` and the `cra-template-pwa` template (read more [here](https://create-react-app.dev/docs/making-a-progressive-web-app)).

```bash
git clone https://github.com/alphabetsoop/pwa-react.git
cd pwa-react
ls
node -v     # I have Node 14.15.4
npm install
npm run start
```

### Running on your mobile phone

To see the benefits of PWA, you'll need to build the app, since service workers work on production mode.

Build the app and start a http server:
```bash
npm run build 
npm run start-sw
```

In another terminal, forward port 8080 (or whatever was used earlier) using `ngrok`.
```bash 
ngrok http 8080
```

Open `https://<ngrok-id>.ngrok.io` on your phone, and you should get a pop-up to install as a progressive web app, which is saved to your home screen. (You only get the pop-up once - if you miss it, clear the cache on Chrome and reload the website).

If you kill the http-server, and reload the React app on your phone, it should still work since it can run offline.

