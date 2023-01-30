/**
 * 
 * 
 * Woah... You scared me. 
 * Who actually reads the code. 
 * Excuse the construction site.
 * 
 * 
 */

const config = require("./config.json")
const _ = require("lodash")
const fs = require("fs")
const path = require("path")
const ejs = require('ejs')
const moment = require('moment')
const Markdown = require('markdown-it'), md = new Markdown();

// dang it, Moment.
moment.suppressDeprecationWarnings = true;

// enviroment settings
const title = config.title || 'My Blog'
const theme = config.theme || 'nano'
const source = config.source || './source'
const dest = config.dest || './docs'
const blog_path = config.path
const domain = config.domain
const description = config.description
const site_title = config.site_title
const nano_address = config.nano_address
const json_api = config.json_api
const rss_api = config.rss_api
const metrics = config.metrics || false
const contact = config.contact || false
const language = config.language || 'en-us'
const verified = config.verified // now it's your choice.

var articles = []
var exlcude = ['.DS_Store']

function hash(str) {
	let hash = 0;
	for (let i = 0, len = str.length; i < len; i++) {
	    let chr = str.charCodeAt(i);
	    hash = (hash << 5) - hash + chr;
	    hash |= 0; // Convert to 32bit integer
	}
	return Math.abs(hash);
}

// fancy ain't it.
fs.readdirSync(source).forEach(file => {
	if (exlcude.includes(file)) return
	var parse
	var content = fs.readFileSync(source + '/' + file, { encoding: "utf8" })
	var slug = file.replace('.md', '')
	// for the kiddies
	if (content.includes('----')) parse = content.split('----')
	if (content.includes('-----')) parse = content.split('-----')
	var article = {}
	parse[0].split('\n').filter(a => a).map(line => article[line.split(':')[0].replace('- ', '')] = line.split(':')[1].trim()) // old 'reliable
	var title = article.title
	var date = moment(article.date)
	var body = parse[1].replace('\n', '')
	var clean = domain.replace('http://', '').replace('https://', '').split('/').join('')
	article.id = hash(title)
	article.slug = slug
	article.timestamp = date.unix()
	article.date = date.format('LL')
	article.fromNow = date.fromNow()
	article.html = md.render(body)
	article.url = `https://${clean}${blog_path ? '/' + blog_path : '' }/${slug}.html` // who needs fancy req objects.
	article.preview = article.preview || article.snippet
	articles.push(article)
	articles = _.orderBy(articles, 'timestamp').reverse()
})

if (!fs.existsSync(dest)) fs.mkdirSync(dest)

// why is this not a nodejs method, tf.
function copyFolderSync(from, to) {
    if (!fs.existsSync(from)) fs.mkdirSync(from);
    if (!fs.existsSync(to)) fs.mkdirSync(to);
    fs.readdirSync(from).forEach(element => {
        if (fs.lstatSync(path.join(from, element)).isFile()) {
            fs.copyFileSync(path.join(from, element), path.join(to, element));
        } else {
            copyFolderSync(path.join(from, element), path.join(to, element));
        }
    });
}

// copy over static assets
copyFolderSync(`./themes/${theme}/css`, `${dest}/css`)
copyFolderSync(`./themes/${theme}/img`, `${dest}/img`)
copyFolderSync(`./themes/${theme}/js`, `${dest}/js`)

// homepage
var index_html = fs.readFileSync(`./themes/${theme}/index.html`, { encoding: "utf8" })
fs.writeFileSync(`${dest}/index.html`, ejs.render(index_html, { articles, title, site_title, metrics, contact, verified }), { encoding: "utf8" } )
// fs.writeFileSync(`${dest}/404.html`, ejs.render(index_html, { articles, title, site_title, metrics, contact, verified }), { encoding: "utf8" } )

// json_api
if (json_api) {
	fs.writeFileSync(`${dest}/api.json`, JSON.stringify(articles, null, 4), { encoding: "utf8" } )
}

// rss_api
if (rss_api) {
	var rss_template = fs.readFileSync(`./themes/${theme}/rss.xml`, { encoding: "utf8" })
	// fs.writeFileSync(`${dest}/rss.xml`, JSON.stringify(articles, null, 4), { encoding: "utf8" } )
	fs.writeFileSync(`${dest}/rss.xml`, ejs.render(rss_template, { articles, title, domain, description, language }), { encoding: "utf8" } )
}

// sitemap
try {
  if (domain && theme && fs.existsSync(`./themes/${theme}/sitemap.xml`)) {
	var sitemap = fs.readFileSync(`./themes/${theme}/sitemap.xml`, { encoding: "utf8" })
	var parsed = domain.replace('https://', '').split('/').join('').replace('http://', '')
	var pages = [
		{ url: 'https://' + parsed + '/', timestamp: moment().format('YYYY-MM-DD') }
	]
	articles.map(a => pages.push({ url: 'https://' + parsed + `${blog_path ? '/' + blog_path : '' }` + '/' + a.slug + '.html', timestamp: moment(a.date).format('YYYY-MM-DD') }))
	var authors = articles.filter(a => a.author).map(a => a.author)
	articles.map(a => pages.push({ url: 'https://' + parsed + `${blog_path ? '/' + blog_path : '' }` + '/' + a.slug + '.html', timestamp: moment(a.date).format('YYYY-MM-DD') }))
	fs.writeFileSync(`${dest}/sitemap.xml`, ejs.render(sitemap, { pages }), { encoding: "utf8" } )
  }
} catch(err) {}

// robots.txt
try {
  if (theme && fs.existsSync(`./themes/${theme}/robots.txt`)) {
  	var robots_txt = fs.readFileSync(`./themes/${theme}/robots.txt`, { encoding: "utf8" })
  	fs.writeFileSync(`${dest}/robots.txt`, ejs.render(robots_txt, { domain }), { encoding: "utf8" } )
  }
} catch(err) {}

// nano.txt (?)
try {
  if (theme && !fs.existsSync(`./themes/${theme}/nano.txt`)) {
	fs.copyFile(`./themes/${theme}/nano.txt`, `./${dest}/nano.txt`)
  }
} catch(err) {}

// domain
if (domain) {
	fs.writeFileSync(`${dest}/CNAME`, `${domain}`, { encoding: "utf8" } )
}

// optinal blog path 
if (blog_path && !fs.existsSync(dest + '/' + blog_path)) {
	fs.mkdirSync(dest + '/' + blog_path)
	fs.writeFileSync(`${dest + '/' + blog_path}/index.html`, ejs.render(index_html, { articles, title, metrics, contact, verified }), { encoding: "utf8" } )
}

// all articles
var single_html = fs.readFileSync(`./themes/${theme}/single.html`, { encoding: "utf8" })
for (var article of articles) {
	var article_html = ejs.render(single_html, { articles : articles.filter(a => a.slug !== article.slug), article, title, nano_address: article.address || nano_address, metrics, verified, contact })
	fs.writeFileSync(`${dest}${blog_path ? '/' + blog_path : '' }/${article.slug}.html`, article_html, { encoding: "utf8" } )
}

// dedicated authors apges
var authors = articles.filter(a => a.author).map(a => a.author)

for (var author of authors) {

	var name = author.replace('@', '')

	if (!fs.existsSync(`${dest}/@${name}`)) fs.mkdirSync(`${dest}/@${name}`)
	
	var author_articles = articles.filter(a => a.author === author)

	fs.writeFileSync(`${dest}/@${name}/index.html`, ejs.render(index_html, { articles: author_articles, title, site_title: author + ' - ' + title, metrics, contact: author, verified: author_articles.find(a => a.verified) }), { encoding: "utf8" } )
	
	var single_html = fs.readFileSync(`./themes/${theme}/single.html`, { encoding: "utf8" })

	for (var article of author_articles) {
		var article_html = ejs.render(single_html, { 
			articles : author_articles.filter(a => a.slug !== article.slug), 
			article, title, 
			nano_address: article.address || nano_address, 
			metrics, 
			verified, 
			contact 
		})
		fs.writeFileSync(`${dest}/@${name}/${article.slug}.html`, article_html, { encoding: "utf8" } )
	}

}