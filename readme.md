![line](https://github.com/fwd/n2/raw/master/.github/line.png)

<h1 align="center">Nano Blog</h1>
<h3 align="center">Self-Hosted Crypto Monetized Blog</h3>

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

![line](https://github.com/fwd/nano-blog/raw/master/.github/banner.png)
![line](https://github.com/fwd/nano-blog/raw/master/.github/payscreen.png)

![line](https://github.com/fwd/n2/raw/master/.github/line.png)

## Start Your Own Blog

- Free hosting and deployment by Cloudflare Pages
- Bring your own Nano Address
- No domain purchased required

## Step 1. Setup Cloudflare Pages

**Sign Up for [Cloudflare](https://dash.cloudflare.com/sign-up)**
![line](https://github.com/fwd/nano-blog/raw/master/guide/0.png)

**Go to Workers page**
![line](https://github.com/fwd/nano-blog/raw/master/guide/1.png)

**Create New Application**
![line](https://github.com/fwd/nano-blog/raw/master/guide/2.png)

**Go to Pages**
![line](https://github.com/fwd/nano-blog/raw/master/guide/3.png)

**Connect to Git**
![line](https://github.com/fwd/nano-blog/raw/master/guide/4.png)

**Add Github Account**
![line](https://github.com/fwd/nano-blog/raw/master/guide/5.png)

**Select Fork of Nano/Blog**
![line](https://github.com/fwd/nano-blog/raw/master/guide/6.png)

**Select Repo and Begin Setup**
![line](https://github.com/fwd/nano-blog/raw/master/guide/7.png)

**Configure Blog**
- **Build Command:** node build
- **Build Output:** docs
![line](https://github.com/fwd/nano-blog/raw/master/guide/8.png)

**Optional: Setup Custom Domain**
![line](https://github.com/fwd/nano-blog/raw/master/guide/7.png)

## Step 2. Write Blog

Now that Cloudflare is setup. It auto deploys. Meaning any changes done on Github are deployed. 

**Option 1:** Write blog posts via Github website. 

**Press the '<' key in your Keyboard while looking at your Nano/Blog fork, to open Visual Studio in the browser.**

**Option 2:** Clone your Fork and modify code.

In Any case, ```/source``` is where add new posts. 

**Filenames:**

```
source/my-premium-article-title-in-kebab-case.md
```

**Inside is Markdown:**
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
