- title: Introducing NanoPay.js - Web Payments Made Easy
- date: 01-30-2024
- tags: Crypto
- image: images/nano-pay/hero.png
- author: @nano2dev
- single: true
- address: @development
- goal: 500|NanoPay + eCommerce

-----

## Quick Links

- [Introduction](#introduction)
- [Installation](#installation)
- [Simple Usage](#simple-usage)
- [Javascript API](#javascript-api)
- [Notifications](#notifications)
- [Login with Nano](#login-with-nano)
- [eCommerce Intergration](#e-commerce-intergration)
- [Nano.to Support](#support)

## Live Demo

[https://pay.nano.to](https://pay.nano.to)

## Edit on CodePen

[https://codepen.io/nano2dev/pen/VwRQypE](https://codepen.io/nano2dev/pen/VwRQypE)

## Introduction

Inspired by ApplePay, NanoPay is an [open source](https://github.com/fwd/nano-pay), non-custodial browser library for the Nano blockchain. 

Easily accept crypto payments on your website(s) with this package. 

## Installation

First, add NanoPay to your project's *index.html*.

**Local:**
```html
<script src="/NanoPay.js"></script>
```

Download [latest](https://pay.nano.to/latest.js) version.

**CDN:**
```html
<script src="https://pay.nano.to/latest.js"></script>
```

## Simple Usage

Simple payments can be achieved with basic HTML. No javascript required. 

```html
<a 
data-title="Tip @Nano2Dev" 
data-amount="0.133" 
data-address="@development" 
data-button="Open Natrium" 
data-position="bottom">
Tip 0.133 NANO</a>
```

## Javascript API

Configure and open popup programmatically with *NanoPay.open()* method.

```javascript
NanoPay.open({ 
  title: "Demo",
  address: '@development', // Username or Nano Address
  notify: 'support@nano.to', // get an email receipt
  contact: true, // user's email
  shipping: 10, // user's shipping address, use 'true' for free shipping
  currency: 'EUR', // converts prices EUR, default USD
  // amount: 30, // not used if using line_items
  line_items: [
    { name: "Shirt (X-Small)", price: 50 }, 
    { name: "Mens Shoes (9.5)", price: 20 }
  ],
  success: (block) => {
      console.log(block)
      // {
      //     "hash": "D16FF348B634CDB3DF8...9D6F5B180CCD3B93F99A4D15203",
      //     "address": "PAYEE_NANO_ADDRESS",
      //     "username": "PAYEE_USERNAME",
      //     "height": "PAYEE_BLOCK_HEIGHT",
      //     "nanolooker": "https://nanolooker.com/block/D16FF348B634CDB3DF8...9D6F5B180CCD3B93F99A4D15203"
      //     "checkout": "https://api.nano.to/checkout/93be1ab9",
      // }
  },
  cancel: () => {
      console.log("User cancelled")
  },
})
```

## All Options

- **title**: (*string*) Show custom title shown in popup.
- **address**: (*string*) Nano address or Nano.to @Username.
- **contact**: (*string*) Request user's email address.
- **shipping**: (*number, bool*) Request user's mailing address. 'true' for free shipping.
- **position**: (*string*) Control popup position (top, center, bottom).
- **button**: (*string*) Custom button text, default "Open Natrium".
- **symbol**: (*string*) Custom NANO symbol, default "NANO".
- **random**: (*bool*) Use unique payment amounts, default true.
- **notify**: (*string*) Send email notification to admin, default false.
- **amount**: (*string*) Custom popup amount, used for simple payments.
- **line_items**: (*array*) List of products user is buying, replaces amount.
- **currency**: (*string*) Fiat currency for Nano price conversion, default "USD".
- **note**: (*string*) Custom note shown in admin email, default false.
- **qrcode**: (*string*) Always show QR Code, default desktop only.
- **success**: (*function*) Called when payment is successful.
- **cancel**: (*function*) Called when popup is cancelled.
- **checkout**: (*string*) Use custom Nano.to Checkout. [Read More](https://rpc.nano.to/#checkout).
- **email**: (*string*) Pre-configure user's email, default false.
- **mailing_address**: (*string*) Pre-configure user's shipping address, default false.

## Notifications

NanoPay offers email notifications for your convenience. 

```javascript
NanoPay.open({ 
  address: '@bank', // Username or Nano Address
  notify: 'support@nano.to',
  contact: true,
  shipping: true,
  amount: 0.133
})
```

![Email Notification](../../images/nano-pay/email.png)

## Login with Nano

NanoPay allows for easy Login with Nano. 

```js
NanoPay.open({ 
  title: "Login",
  address: '@bank', // Your App's Address
  amount: 0.0001, // Small Amount
  success: (block) => {
      // {
      //     "hash": "D16FF348B634CDB3DF8...9D6F5B180CCD3B93F99A4D15203",
      //     "address": "PAYEE_NANO_ADDRESS",
      //     "username": "PAYEE_USERNAME",
      //      ...
      // }
      console.log("Hello:", block.username || block.address)
  }
})
```

## eCommerce Intergration

- **Shopify: In Development**
- **Wordpress: TBD**

**I work on Nano part-time. Please consider helping fund this kind of work. Anything helps.**

[funding]

## Nano.to Support

Bugs, Questions & Installation Support:

- Github: [Source Code](https://github.com/fwd/nano-pay)
- Bugs: [Issues](https://github.com/fwd/nano-pay/issues)
- Email: [support@nano.to](mailto:support@nano.to)
- Twitter: [@nano2dev](https://twitter.com/nano2dev)
- Mastodon: [Xno.Social/@nano2dev](https://xno.social/@nano2dev)
- @nano2dev on [Nano's Discord](https://discord.com/invite/RNAE2R9) 
