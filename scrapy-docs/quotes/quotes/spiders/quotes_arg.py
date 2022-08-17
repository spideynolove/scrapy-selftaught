import scrapy


class QuotesSpider(scrapy.Spider):
    name = "quotestag"

    def start_requests(self):
        url = 'https://quotes.toscrape.com/'

        tag = getattr(self, 'tag', None)

        if tag is not None:
            url = url + 'tag/' + tag
        yield scrapy.Request(url, self.parse)

    def parse(self, response):
        for quote in response.css('div.quote'):
            yield {
                'text': quote.css('span.text::text').get(),
                'author': quote.css('small.author::text').get(),
            }
        anchors = response.css('ul.pager a')
        yield from response.follow_all(anchors, callback=self.parse)
