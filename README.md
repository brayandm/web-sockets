# web-sockets

A small experimental TypeScript project demonstrating a basic WebSocket server and client using the [`ws`](https://github.com/websockets/ws) library.

## What it does

- `server.ts` starts a WebSocket server (`WebSocket.Server`) listening on a port read from the `PORT` environment variable. Each incoming connection is assigned a UUID and stored in an in-memory `clients` map. When a message is received, the server logs it and responds by sending back an empty `ArrayBuffer` (123 bytes) as a binary message.
- `client.ts` connects to a WebSocket server at `ws://127.0.0.1:8080/`, sends the string `"something"` once the connection opens, and logs any binary data it receives back.

## Tech stack

- TypeScript, run directly via `ts-node`
- [`ws`](https://www.npmjs.com/package/ws) for the WebSocket implementation
- [`uuid`](https://www.npmjs.com/package/uuid) for generating per-connection client IDs
- [`dotenv`](https://www.npmjs.com/package/dotenv) for loading configuration from a `.env` file

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy the example environment file and adjust as needed:
   ```bash
   cp .env.example .env
   ```
   (defaults to `PORT=8080`)

## Usage

There are no `npm` scripts defined for running the app yet, so run the TypeScript files directly with `ts-node`:

Start the server:
```bash
npx ts-node server.ts
```

In another terminal, run the client to connect and exchange a test message:
```bash
npx ts-node client.ts
```

## Project status

This is a small, self-contained example/snippet rather than a full application, there's no build step, tests, or CLI beyond the two scripts above.
