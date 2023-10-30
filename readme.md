![line](https://github.com/fwd/n2/raw/master/.github/line.png)

<h1 align="center">Nano Blog</h1>
<h3 align="center">Self-Hosted Crypto Monetized Blog</h3>

![line](https://github.com/fwd/n2/raw/master/.github/line.png)


![line](https://github.com/fwd/nano-blog/raw/master/.github/banner.png)
![line](https://github.com/fwd/nano-blog/raw/master/.github/payscreen.png)


![line](https://github.com/fwd/n2/raw/master/.github/line.png)

### Setup Your Own

Requirements: 

- Cloudflare Pages
- Nano Address
- Free domain from Cloudflare

This whole point is Free!

## 1. Setup Cloudflare Pages

- **Sign Up for [Cloudflare](https://dash.cloudflare.com/sign-up)**
![line](https://github.com/fwd/nano-blog/raw/master/guide/0.png)

- **Go to Workers page**
![line](https://github.com/fwd/nano-blog/raw/master/guide/1.png)

- **Create New Application**
![line](https://github.com/fwd/nano-blog/raw/master/guide/2.png)

- **Go to Pages**
![line](https://github.com/fwd/nano-blog/raw/master/guide/3.png)

- **Connect to Git**
![line](https://github.com/fwd/nano-blog/raw/master/guide/4.png)

- **Add Github Account**
![line](https://github.com/fwd/nano-blog/raw/master/guide/5.png)

- **Select Fork of Nano/Blog**
![line](https://github.com/fwd/nano-blog/raw/master/guide/6.png)

- **Select Repo and Begin Setup**
![line](https://github.com/fwd/nano-blog/raw/master/guide/7.png)

#### **Configure Blog**
- **Build Command:** node build
- **Build Output:** docs
![line](https://github.com/fwd/nano-blog/raw/master/guide/8.png)

#### **Optional: Setup Custom Domain**
![line](https://github.com/fwd/nano-blog/raw/master/guide/7.png)

## Add Posts

1. [Fork this Template](https://github.com/fwd/nano-blog/generate).
3. Write your articles in ```markdown``` within the ```/source``` directory.
4. Edit ```/config.json```.
5. Publish repo on [Cloudflare Pages](https://developers.cloudflare.com/pages/).

**Development:**
```
npm run start
```

**Build:**
```
npm run build
```

**Write Markdown Like So:**

```
source/my-premium-article-title-in-kebab-case.md
```

> Filename determines SEO url. Title is configured inside the file, like so:

```
- title: My Premium Article Title
- date: 01-01-2023
- tags: Opinion
- price: 0.01
- free: true
- author: @your_twitter
- website: twitter.com/your_twitter
- address: YOUR_NANO_ADDRESS
-----
Your story in Markdown..
```

# Build Your Own Theme

This project is designed for Theming. Duplicate ```/themes/default``` and configure in config.json.

## ❯ Stargazers

[![Stargazers over time](https://starchart.cc/fwd/nano-blog.svg)](https://starchart.cc/fwd/nano-blog)
