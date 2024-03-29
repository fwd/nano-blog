- image: images/nano-blog/hero-small.jpg
- title: Host Your Own Crypto Blog in Minutes
- date: 1-1-2023
- tags: Guide
- author: @nano2dev
- price: 1
- button: Unlock Guide (Ӿ1)
- label: Read Guide
- encode: true
-----
This blog can be self-hosted. Stored on Github, hosted by Cloudflare and monetized with Nano currency. Follow this step-by-step guide on how to do it in minutes.

## Step 1. [Fork This Template](https://github.com/new?template_name=nano-blog&template_owner=fwd)

Your Repo can be private, and named anything you like.

## Step 2. Setup Cloudflare Pages

**Sign Up for [Cloudflare](https://dash.cloudflare.com/sign-up)**
![line](https://github.com/fwd/nano-blog/raw/master/guide/0.png)

**Go to Workers & Pages**

![line](https://github.com/fwd/nano-blog/raw/master/guide/1-new.png)

**Create New Application**

![line](https://github.com/fwd/nano-blog/raw/master/guide/2-new.png)

**Go to Pages**

![line](https://github.com/fwd/nano-blog/raw/master/guide/3.png)

**Connect to Git**

![line](https://github.com/fwd/nano-blog/raw/master/guide/4.png)

**Add Github Account**

![line](https://github.com/fwd/nano-blog/raw/master/guide/5-new.png)

**Select Nano/Blog fork**

![line](https://github.com/fwd/nano-blog/raw/master/guide/6.png)

**Select Repo and Begin Setup**

![line](https://github.com/fwd/nano-blog/raw/master/guide/7.png)

**Configure Blog**
- **Build command:** node build
- **Build output:** docs

![line](https://github.com/fwd/nano-blog/raw/master/guide/8.png)

**Optional: Setup Custom Domain**
![line](https://github.com/fwd/nano-blog/raw/master/guide/9.png)

## Step 3. Edit Your Blog

Now that Cloudflare is setup. It auto deploys. Meaning any changes done on Github are deployed. 

- **Configure:** ```/config.json```
- **Write:** ```/source/*```
- **Language:** ```Markdown```
- **File Structure:** ```source/my-premium-article-title-in-kebab-case.md```
- **Put Images In:** ```/images```

**Pro Tip: Press the '<' key while on Github to open Visual Studio in the browser.**

**Markdown Structure:**
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

## Offline Writing

```
git clone git@github.com:[name]/[your-nano-blog-fork].git
npm install
npm run watch
```

![line](https://github.com/fwd/nano-blog/raw/master/guide/watch.png)

Local Version: http://localhost:8080

> When changes in ```./articles/*.md```, ```./images``` and ```./themes``` it auto builds.

## Build Your Own Theme

This project is designed for Theming. Duplicate ```/themes/minimal``` and change ```config.json```.

### Powered by [Nano/Wall.JS](https://github.com/fwd/nano-wall)

## ❯ Stargazers

[![Stargazers over time](https://starchart.cc/fwd/nano-blog.svg)](https://starchart.cc/fwd/nano-blog)