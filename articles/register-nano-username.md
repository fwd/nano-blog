
- title: Free, non-custodial Checkout UI hosted on Github
- date: 1-1-2023
- tags: Crypto
- price: 0.001
- free: true
- author: @nano2dev

-----

Free, non-custodial Checkout UI hosted on Github. It works by checking ```pending``` and ```history``` of any given address. Customizable with URL params. Optional, POST API available for secure checkouts.

#### Any Address:

```python
https://nano.to/:ADDRESS
```

**Nano.to Username:**
```python
https://nano.to/@Keeri
```

### Single Panel

```python
https://nano.to/@Fosse?amount=50&random=true
```


### Double Panel

```python
https://nano.to/@Moon?plans=Tip:0.133,Small:1,Medium:10,Large:20,Gigantic:100
```


## Customize Colors

```python
https://nano.to/@Keeri
?background=$0057b7:$ffd700
&color=$FFF:$000
&highlight=white
&vanity=$0057b7
&qrcode=white:$0057b7
&logo=https://nano.to/dist/logo/cyber.png
```

### Available Options

- **amount** (*number*) : Single panel with price. No plans.
- **plans** (*string*) : Plans separated by commas. Ex. Tip:30,Small:5
- **selected** (*string*) : Title of Plan to select by default.
- **goal** (*string*) : Show a funding meter based off balance.
- **image** (*image/url*) : Display Image. Image URL.
- **random** (*boolean*) : Add random decimal to amount. Ex + 0.00XXXX
- **color** (*string*) : Text color. Ex red:blue
- **background** (*string*) : Background color. Ex white:gray
- **highlight** (*string*) : Box backgrounds value. Ex blue:red
- **qrcode** (*string*) : Replace QR Code color. Ex white:black
- **logo** (*image/url*) : Replace QR Code logo. Image URL.
- **cancel** (*string*) : Redirect URL when pressed 'Cancel'
- **redirect** (*string*) : Redirect URL on success.

**Coming Soon:**
- **currency** (string) : ISO Currency Symbol. Ex JPY

### Checkout Funding UI

Easily show a meter of progress for any Nano fundraiser. 

```python
https://nano.to/@Basedlemahieu?goal=100:Funding Goal
```

### Checkout via POST

**Nano.to Checkout UI** is hosted on Github, and does not require a server. 

However, when you want to create more complex Checkouts, Nano.to has a secure API for this case.

**Base URL:**

```
https://api.nano.to
```

**POST Example:**

```js
const http = require('axios')

http.post('https://api.nano.to', {
  address: '@moon', // or address
  webhook_url: 'https://example.com/secret/endpoint',
  success_url: 'https://example.com/success?hash={{hash}}',
  metadata: { userId: 'joe-mama', password: "Slava Ukraini" },
}).then((res) => {
  console.log( res.data )
})
```

**Parameters:**

- **webhook_url** (string) : URL to receive succesful payment metadata.
- **metadata** (object) : Object with any kind of JSON data.


**Response:**

```json
{
  "id": "f745ffa3",
  "browser": "https://nano.to/id_f745ffa3",
  "json": "https://api.nano.to/checkout/f745ffa3",
  "check": "https://api.nano.to/checkout/f745ffa3/check"
}
```

> Perform a GET request on ```check``` URL to confirm payment, or redirect user to ```browser``` for included UI.
 
**Webhook POST Body:**

```json
{
  "id": "CHECKOUT_ID",
  "block": {
    "hash": "PAYMENT_BLOCK_HASH",
    "account": "SENDER_ADDRESS",
    "amount": "0.0109913",
    "amount_raw": "10991300000000000000000000000"
  },
  "plan": {
    "title": "Default",
    "value": "0.0109913",
    "value_raw": "10991300000000000000000000000"
  },
  "metadata": {
    "userId": "joe-mama",
    "password": "Slava Ukraini"
  },
  "checkout": "https://api.nano.to/checkout/CHECKOUT_ID"
}
```

## Support

- Email: support@nano.to
- Twitter: [@nano2dev](https://twitter.com/nano2dev)
- @nano2dev on [Nano's Discord](https://discord.com/invite/RNAE2R9) 
