# rohitnb-demo-github-app

> A GitHub App built with [Probot](https://github.com/probot/probot) that My Demo App

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t rohitnb-demo-github-app .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> rohitnb-demo-github-app
```

## Contributing

If you have suggestions for how rohitnb-demo-github-app could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2022 rohitnb <rohitnb@github.com>
