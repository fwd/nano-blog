- title: Introducing NanoPay.js - Web Payments Made Easy
- date: 01-30-2024
- tags: Crypto
- image: images/nano-pay/hero.png
- author: @nano2bot
- single: true
- address: @development
- goal: 500|Support Shopify
- hidden: true

-----

## Quick Links

- [Introduction](#introduction)
- [Installation](#installation)
- [Simple Usage](#simple-started)
- [Javascript API](#javascript-api)
- [Notifications](#notifications)
- [eCommerce Intergration](#e-commerce-intergration)
- [Nano.to Support](#support)

## Introduction

Inspired by ApplePay, NanoPay is an open source browser library for the Nano. 

Easily add Crypto to your websites with this package.

## Installation

Download [latest](https://raw.githubusercontent.com/fwd/nano-pay/master/latest.js) version and add to your project's *index.html*.

**Local:**
```html
<script src="/NanoPay.js"></script>
```

**CDN:**
```html
<script src="https://pay.nano.to/latest.js"></script>
```

## Simple Usage

Simple payments can be achieved with basic HTML. No javascript required. 

```html
<a 
 data-title="Tip @Nano2Dev" 
 data-amount="0.4" 
 data-address="@faucet" 
 data-button="Open Natrium" 
 data-position="bottom">Pay 0.4 NANO</a>
```

## Javascript API

Open NanoPay programmatically with *NanoPay.open()* method.

```javascript
NanoPay.open({ 
  title: "Demo",
  address: '@development', // Nano.to Username or Nano Address
  notify: 'support@nano.to', // sends admin email receipt
  contact: true, // collects user's email
  shipping: 10, // collects shipping address, use 'true' for free shipping
  currency: 'EUR', // converts Prices & Shipping to EUR, Default USD
  // amount: 30, // used if no line_items
  line_items: [
    { name: "Shirt (X-Small)", price: 50 }, 
    { name: "Mens Shoes (9.5)", price: 20 }
  ],
  success: (block) => {
      console.log(block)
      // {
      //     "success": true,
      //     "email": "provided_email",
      //     "shipping": "provided_shipping_address",
      //     "hash": "D16FF348B634CDB3DF8...9D6F5B180CCD3B93F99A4D15203",
      //     "nanolooker": "https://nanolooker.com/block/D16FF348B634CDB3DF8...9D6F5B180CCD3B93F99A4D15203"
      //     "checkout": "https://api.nano.to/checkout/93be1ab9",
      // }
  },
  cancel: () => {
      console.log("User hit canclled")
  },
})
```

## Notifications

NanoPay offers email notifications for your convenience. 

```javascript
NanoPay.open({ 
  address: '@bank', // Nano.to Username or Nano Address
  notify: 'support@nano.to',
  contact: true,
  shipping: true,
  amount: 0.133, // optional
})
```

![Email Notification](../../images/nano-pay/email.png)

## eCommerce Intergration

- **Shopify: In Development**
- **Wordpress: TBD**

**I work on Nano part-time. Please consider helping fund this kind of work. Anything helps.**

[funding]

## Nano.to Support

For Bugs, Questions & Installation Support:

- Github: [Source Code](https://github.com/fwd/nano-pay)
- Bugs: [Issues](https://github.com/fwd/nano-pay/issues)
- Email: [mailto:support@nano.to](support@nano.to)
- Twitter: [@nano2dev](https://twitter.com/nano2dev)
- Mastodon: [Xno.Social/@nano2dev](https://xno.social/@nano2dev)
- @nano2dev on [Nano's Discord](https://discord.com/invite/RNAE2R9) 