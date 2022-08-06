# -*- coding: utf-8 -*-
import scrapy
import time
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


class BestmoviesSpider(CrawlSpider):
    name = 'bestmovies'
    allowed_domains = ['imdb.com']
    imdb_url = 'https://www.imdb.com/search/title/?groups=top_250&sort=user_rating'
    user_agent = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36'

    def start_requests(self):
        yield scrapy.Request(url=self.imdb_url, headers={
            'User-Agent': self.user_agent
        })

    rules = (
        Rule(LinkExtractor(restrict_xpaths=(
            "//h3[@class='lister-item-header']/a")), callback='parse_item',
            follow=True, process_request='set_user_agent'),
        Rule(LinkExtractor(restrict_xpaths=(
            "(//a[@class='lister-page-next next-page'])[2]")),
            process_request='set_user_agent'),
    )

    def set_user_agent(self, request, response):
        request.headers['User-Agent'] = self.user_agent
        # request.meta['genre'] = response.xpath(
        #     "//span[@class='genre']/text()").getall()
        return request

    def parse_item(self, response):
        time.sleep(0.5)
        yield {
            "title": response.xpath("//h1[@data-testid='hero-title-block__title']/text()").get(),
            "year": response.xpath("(//span[@class='sc-8c396aa2-2 itZqyK'])[1]/text()").get(),
            "duration": ''.join(response.xpath("//ul[@data-testid='hero-title-block__metadata']/li[3]/text()").getall()),
            "genre": response.xpath("//li[@data-testid= 'storyline-genres']/div/ul/li/a/text()").get(),
            "rating": response.xpath("(//div[@data-testid = 'hero-rating-bar__aggregate-rating__score']/span)[1]/text()").get(),
            "movie_url": response.url,
            # "genre": response.request.meta['genre']
        }
