- title: Nano Checkout API - Build Elaborate Nano Currency Applications with Ease
- date: 02-17-2024
- tags: Release
- image: images/nano-checkout/hero.png
- author: @nano2dev
-----

## Quick Links

- [Get Started](#basic-usage)
- [Advanced Usage](#advanced-usage)
- [Webhook JSON](#webhook-json)
- [Unique Payment Amount](#unique-amount)
- [Unique Payment Address](#unique-address)
- [Profit Sharing API](#profit-sharing-api)
- [NanoPay.js Integration](#nano-pay-js-integration)
- [Payment Alerts](#payment-alerts)
- [Nano.to Support](#nano-to-support)

## Basic Usage

```js
const axios = require('axios');

axios.post('https://rpc.nano.to', {
  "action": "checkout",
  "address": "@faucet", // Your Address or Nano.to Username
  "random": "true",
  "amount": "0.133"
}).then((res) => {
  console.log(res.data);
});
```

**Response:**
```js
{
  "id": "b472b6a6",
  "browser": "https://nano.to/id_b472b6a6",
  "json": "https://api.nano.to/checkout/b472b6a6",
  "check": "https://api.nano.to/check/b472b6a6",
  "address": "nano_1q3q7x8r...yr51qsdkm8g45", // Your Address
  "amount": "0.133",
  "amount_raw": "133000000000000000000000000000",
  "qrcode": "data:image/png;base64,iVBORw0KGg...Jggg=="
}
```

## Advanced Usage

```js
const axios = require('axios');

axios.post('https://rpc.nano.to', {
  "action": "checkout",
  "title": "Hello World",
  "address": "@faucet",
  "random": "true",
  "cancel_url": "https://example.com/cancel",
  "success_url": "https://example.com/success",
  "success_message": "{{title}} Units purchased for {{value}} NANO. Thanks, come again.",
  "plans": [
    {
      "title": "100 Units",
      "value": 100
    },
    {
      "title": "1,000,000 Units",
      "value": 1000000,
      "discount": 10
    }
  ],
  "webhook_url": "https://example/webhook/secret",
  "metadata": {
    "secret": "joe-doe"
  }
}).then((res) => {
  console.log(res.data);
});
```

## Webhook JSON

```json
{
    "block": {
        "hash": "786DD3F82BFEAF80A668EB87498531DE114F1A9BB7AF30558B4136AB69F5133E",
        "account": "PAYER_ADDRESS",
        "amount": "1.06239",
        "amount_raw": "1062390000000000000000000000000"
    },
    "plan": {
        "title": "100 Units",
        "value": "1.06239",
        "discount": false,
        "value_raw": "1062390000000000000000000000000"
    },
    "metadata": {
        "secret": "joe-doe"
    },
    "checkout": "https://api.nano.to/checkout/CHECKOUT_ID"
}
```

## Unique Payments

If you'd like to receive payments that don't collide with other payments, you have to options:

- [Unique Payment Amount](#unique-amount)
- [Unique Nano Address](#unique-address)

### Unique Amount

Simply add 'X' to the ```amount``` and the API will replace them with random numbers. 

```bash
curl -d '{
  "action": "checkout",
  "address": "@Development",
  "amount": "0.001000000XXXXXXXX"
}' \
-H "Content-Type: application/json" \
"https://rpc.nano.to"
```

**Response:**
```js
{
  "id": "8c1eb40e",
  "amount": "0.00100000084648542"
  // ...
}
```

### Unique Address

[Nano.to Cloud Wallets](introducing-nano-cloud-secure-programmatic-nano-wallets) makes creating Nano wallets easy. If you'd like to generate your own address, see [Developer Tools](https://hub.nano.org/developer-tools) on the Nano website.

```js
const axios = require('axios');

axios.post('https://rpc.nano.to', {
  "action": "cloud_wallet",
  "refund_address": "YOUR_ADDRESS",
  "expire": "5 minutes"
}).then((res) => {

  console.log(res.data);

  // {
  //   "balance": 0,
  //   "address": "nano_1temp9dzx8kmkbcpedwi...4bzoh3pafk9grxndk88inkbe",
  //   "api_key": "NANO-WALLET-API-KEY-67353C9E78A34474A977....591AAD07D37FB94F84C",
  //   "refund_address": "YOUR_ADDRESS",
  //   "expiration": "in 5 minutes",
  //   "expiration_unix": 1710873173,
  // }

  var checkout = axios.post('https://rpc.nano.to', {
    "action": "checkout",
    "address": res.data.address, // Cloud Wallet Address
    "random": "true",
    "amount": "1" // Simple payment amount
  }).then((res) => {
    console.log(res.data);
  });

  console.log( checkout )

});
```

## Profit Sharing API

If using [Cloud Wallets](introducing-nano-cloud-secure-programmatic-nano-wallets.html) it's easy to automatically share profits between multiple accounts.

```js
const wallet = (await axios.post('https://rpc.nano.to', {
  "action": "cloud_wallet",
  "refund_address": [ "@Co_Founder_One", "@Co_Founder_Two" ],
  "split": [ 50, 50 ],
  "expire": "5 minutes"
})).data

// Manually expire address and trigger payout
await axios.post('https://rpc.nano.to', {
  "action": "cloud_wallet",
  "expire": "true",
  api_key: wallet.api_key
})
```
> [Read NanoPay.js Documentation](/introducing-nano-pay-simple-web-payments.html)


## NanoPay.js Integration

[NanoPay.js](/introducing-nano-pay-simple-web-payments.html) is designed to easily work with Checkout API. 

**Back-end:**
```js
const server = require('@fwd/server')

server.get('/checkout', async (req, res) => {
  var checkout = await server.http.post('https://rpc.nano.to', { 
    action: 'checkout',
    description: "Invoice #284", 
    amount: "0.100XXXXX",
    address: '@bank', // Your Address or @Username
    notify: 'YOUR_EMAIL',
    webhook: 'SUPER_SECRET_URL'
  })
  res.send({ checkoutId: checkout.data.id })
})

server.start(8080)
```

**Front-end:**
```html
<script src="https://pay.nano.to/latest.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
axios.get('/checkout').then((res) => {
    NanoPay.open({ 
      checkout: res.data.checkoutId
    })
})
</script>
```

## Payment Alerts

```js
const axios = require('axios');

axios.post('https://rpc.nano.to', {
  "action": "checkout",
  "address": "@esteban",
  "random": "true",
  "note": "Nano Bird Feeder",
  "notify": "john@apple.com",
}).then((res) => {
  console.log(res.data);
});
```

![](https://github.com/fwd/nano-docs/raw/master/images/email.jpeg)


```js
const axios = require('axios');

axios.post('https://rpc.nano.to', {
  "action": "checkout",
  "address": "@esteban",
  "random": "true",
  "note": "Nano Pizza App",
  "notify": "https://discord.com/api/webhooks/11165660...",
}).then((res) => {
  console.log(res.data);
});
```

![](https://github.com/fwd/nano-docs/raw/master/images/discord.jpeg)

## Nano.to Support

Bugs, Questions & Installation Support:

- Support: [support@nano.to](mailto:support@nano.to)
- Twitter: [@nano2dev](https://twitter.com/nano2dev)
- Mastodon: [Xno.Social](https://xno.social/@nano2dev)
- @nano2dev on [Nano's Discord](https://discord.com/invite/RNAE2R9) 
