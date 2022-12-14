import scrapy
import json


class QuoteSpider(scrapy.Spider):
    name = 'quote'
    allowed_domains = ['quotes.toscrape.com']
    start_urls = ['http://quotes.toscrape.com/api/quotes?page=1']

    def parse(self, response):
        resp = json.loads(response.body)
        quotes = resp.get('quotes')
        for quote in quotes:
            yield {
                'author': quote.get('author').get('name'),
                'tags': quote.get('tags'),
                'text': quote.get('text'),
            }
        has_next = resp.get('has_next')
        if has_next:
            next_page = resp.get('page') + 1
            yield scrapy.Request(
                url=f'http://quotes.toscrape.com/api/quotes?page={next_page}',
                callback=self.parse
            )
