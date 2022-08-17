
# FIRST STEPS

## Scrapy at a glance

data mining, information processing or historical archival
[Web scraping](https://en.wikipedia.org/wiki/Web_scraping)
extract data using APIs
[web crawler](https://en.wikipedia.org/wiki/Web_crawler)

### Walk-through of an example spider

```python
import scrapy


class QuotesSpider(scrapy.Spider):
    name = 'quotes'
    start_urls = [
        'https://quotes.toscrape.com/tag/humor/',
    ]

    def parse(self, response):
        for quote in response.css('div.quote'):
            yield {
                'author': quote.xpath('span/small/text()').get(),
                'text': quote.css('span.text::text').get(),
            }

        next_page = response.css('li.next a::attr("href")').get()
        if next_page is not None:
            yield response.follow(next_page, self.parse)

```

run by

```python
scrapy runspider quotes_spider.py -o quotes.jl
```

get result:

```json
{"author": "Jane Austen", "text": "\u201cThe person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.\u201d"}
{"author": "Steve Martin", "text": "\u201cA day without sunshine is like, you know, night.\u201d"}
{"author": "Garrison Keillor", "text": "\u201cAnyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.\u201d"}
```

Notices:

-start_urls
-parse
-run asynchronously, sending multiple concurrent
-very fast crawls
-can using an auto-throttling

### What else

- selecting and extracting data with XPath and re
- IPython when writing or debugging
- Generating and storing support
- encoding support and auto-detection
- plug in, middlewares, extensions, pipelines
- Wide range of built-in extensions and middlewares
  *cookies and session handling
  *HTTP features like compression, authentication, caching
  *user-agent spoofing
  *robots.txt
  *crawl depth restriction
-Telnet console
-reusable spiders

## Installation

conda
pip Using a virtual environment: pip install scrapy

## Tutorial

[quote site](https://quotes.toscrape.com/)
scrapy shell -> learn how to extract data, trying selectors if exist
XPath vs CSS

### Creating a project

### first Spider

run
start_requests method
Extracting data

### Storing the scraped data

using Feed exports
write an Item Pipeline

### Following links

link to the next page
attrib['href']
follow and follow_all
Using spider arguments

# BASIC CONCEPTS

## Command line tool

scrapy.cfg inside a Scrapy project’s root
SCRAPY_SETTINGS_MODULE
SCRAPY_PROJECT
SCRAPY_PYTHON_SHELL

### Default project structure

[settings] in scrapy.cfg

### Sharing the root directory

Share [settings]
SCRAPY_PROJECT environment variable to specify a different project for scrapy to use

### Using the scrapy tool

Creating projects
genspider
scrapy -h

```python
Global commands:
    startproject
    genspider
    settings
    runspider
    shell
    fetch
    view
    version

Project-only commands:
    crawl
    check
    list
    edit
    parse
    bench
```

scrapy genspider -l

### Custom project commands

COMMANDS_MODULE
Register commands via setup.py entry points

## Spiders

