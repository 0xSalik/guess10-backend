
# Backend for Guess10

![status](https://uptime.sal.lol/api/badge/16/status)

REST API for Guess10.

Endpoint:
- ` /api/guess10`

Example Response:
```json
{
  "category": "Top 10 Fruits",
  "items": [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Strawberry",
    "Pineapple",
    "Watermelon",
    "Grapes",
    "Peach",
    "Blueberries"
  ]
}
```

## To deploy
Vercel:

[![Deploy on Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fthesalikkhan%2Fguess10-backend.git)

---
### Standalone

```bash
$ git clone https://github.com/thesalikkhan/guess10-backend.git
$ cd guess10-backend
$ npm i
$ npm start
```

