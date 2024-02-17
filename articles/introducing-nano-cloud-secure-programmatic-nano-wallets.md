- title: Nano Cloud Wallets - Secure Programmatic Nano Wallets
- date: 02-17-2024
- tags: Press Release
- image: images/nano-cloud/hero.png
- author: @nano2dev
-----

Secure programmatic wallets for the Nano blockchain. 

Build demanding applications with ease.

## Get Started

```bash
curl -d '{
  "action": "cloud_wallet",
  "vanity": "1temp",
  "refund_address": "YOUR_ADDRESS",
  "expire": "5 minutes"
}' \
-H "Content-Type: application/json" \
"https://rpc.nano.to"
```

**Response:**

```json
{
  "balance": 0,
  "address": "nano_1temp9dzx8kmkbcpedwi...4bzoh3pafk9grxndk88inkbe",
  "api_key": "NANO-WALLET-API-KEY-67353C9E78A34474A977....591AAD07D37FB94F84C",
  "refund_address": "YOUR_ADDRESS",
  "expiration": "in 5 minutes",
  "expiration_unix": 1710873173
}
```

## All Options

- **```balance```:** (*string or bool*) Get account balance and pending.
- **```receive```:** (*string or bool*) Receive *all* pending blocks.
- **```send```:** (*string*) Send to any Nano address or @Username
- **```public```** (*bool*) Hide *api_key* from response. For use client-side.
- **```seed```:** (*string or bool*) Return *privateKey* with first response. Provided once.
- **```vanity```:** (*string or bool*) Generate vanity Nano address. Up to 5 characters.
- **```delete```:** (*string or bool*) Manually expire address. 
- **```refund_address```** (*array or string*) Account(s) that receive funds. 
- **```expire```** (*string*) Address expiration. Min 5 minutes. Max 90 days.
    - 5 minutes
    - 1 hour
    - 1 day
    - 3 months

## Receive

```bash
curl -d '{
  "action": "cloud_wallet",
  "receive": "all",
  "key": "NANO-WALLET-API-KEY-67353C9E78A34474A977....591AAD07D37FB94F84C"
}' \
-H "Content-Type: application/json" \
"https://rpc.nano.to"
```

**Response:**

```json
[
  {
    "hash": "533A1D3F0DD7B4138493...7085DDE0DE175ACCCA6412",
    "amount": "1000000000000000000000000000000",
    "amount_nano": "1",
    "source": "nano_1bank1q3q7x8ri....8kggtfaosg8kyr51qsdkm8g45",
    "username": "@bank"
  }
]
```

## Balance

```bash
curl -d '{
  "action": "cloud_wallet",
  "balance": "true",
  "key": "NANO-WALLET-API-KEY-67353C9E78A34474A977....591AAD07D37FB94F84C"
}' \
-H "Content-Type: application/json" \
"https://rpc.nano.to"
```

**Response:**

```json
{
  "balance": "90000000000000000000000000",
  "pending": "0",
  "receivable": "0",
  "balance_nano": "0.00009",
  "pending_nano": "0",
  "receivable_nano": "0",
  "address": "nano_1cxmn9dzx8kmkbcpedwi...4bzoh3pafk9grxndk88inkbe",
  "expiration": "in 3 months",
  "expiration_unix": 1710873173,
  "nanolooker": "https://nanolooker.com/account/nano_1cxmn9dzx8kmkbcpedwi...4bzoh3pafk9grxndk88inkbe"
}
```

## Send

```bash
curl -d '{
  "action": "cloud_wallet",
  "send": "@bank",
  "amount": "0.00001",
  "key": "NANO-WALLET-API-KEY-67353C9E78A34474A977....591AAD07D37FB94F84C"
}' \
-H "Content-Type: application/json" \
"https://rpc.nano.to"
```

**Response:**

```json
{ 
  "hash": "652B9EFBE95C8E5495E1604E5...ECEE337CE27514B2226"
}
```

## Delete

Deletion causes funds to be sent to ```refund_address```.

```bash
curl -d '{
  "action": "cloud_wallet",
  "delete": "true",
  "key": "NANO-WALLET-API-KEY-67353C9E78A34474A977....591AAD07D37FB94F84C"
}' \
-H "Content-Type: application/json" \
"https://rpc.nano.to"
```

**Response:**

```json
{ 
  "deleted": true
}
```

## Client-side Usage

Using the ```public``` option, hides api_key from response. 

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
axios.post('https://rpc.nano.to', {
  "action": "cloud_wallet",
  "refund_address": "YOUR_ADDRESS",
  "expire": "5 minutes",
  "public": "true"
}).then((res) => {
  console.log(res.data);
  // {
  //   "balance": 0,
  //   "address": "nano_1temp9dzx8kmkbcpedwi...4bzoh3pafk9grxndk88inkbe",
  //   "refund_address": "YOUR_ADDRESS",
  //   "expiration": "in 5 minutes",
  //   "expiration_unix": 1710873173,
  // }
})
</script>
```

## Nano.to Support

Bugs, Questions & Installation Support:

- Support: [support@nano.to](mailto:support@nano.to)
- Twitter: [@nano2dev](https://twitter.com/nano2dev)
- Mastodon: [Xno.Social](https://xno.social/@nano2dev)
- @nano2dev on [Nano's Discord](https://discord.com/invite/RNAE2R9) 
