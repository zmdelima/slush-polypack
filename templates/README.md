<%= appName %>
[![Stories in Ready](https://badge.waffle.io/<%= repo >.svg?label=ready&title=Ready)](http://waffle.io/<%= repo >)
[![Stories In Progress](https://badge.waffle.io/<%= repo >.svg?label=in%20progress&title=In%20Progress)](http://waffle.io/<%= repo >)
[![Build Status](https://travis-ci.org/<%= repo >.svg?branch=master)](https://travis-ci.org/<%= repo >)

> A Webapp that is being run on Polymer Webpack that runs on Firebase Hosting

## Getting Started

Install dependencies and firebase-tools:

```bash
$ npm install
$ npm install -g firebase-tools
```

Once firebase-tools is installed, login to your firebase account.

```bash
$ firebase login
```

And you're done. Next...

### Running the Application

To run the app. Open two terminals. On the first terminal...

```bash
$  npm start
```

...to start the webpack builder.

And on the second terminal...

```bash
$ npm run serve
```

...to run your server.

If you wish to run only firebase hosting, just type...

```bash
$ npm run serve-hosting
```

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/<%= repo >/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/<%= repo >/issues).