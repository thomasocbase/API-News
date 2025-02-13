# API "News" Documentation

This API is bridging to the french L'Equipe magazine.

- Node.js + Express
- Ky (HTTP requets)
- Docker

## Installation

### Required

- [Docker](https://www.docker.com/)

### Commands

```
docker compose up
```

## API

### Base URL

http://localhost:3001/api/

### Endpoints

- GET baseurl + news -- Returns all the news feed
- ET baseurl + news/:sport -- Returns news specific news related to a sport