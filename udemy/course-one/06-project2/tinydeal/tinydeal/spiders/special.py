# -*- coding: utf-8 -*-
import scrapy


class SpecialSpider(scrapy.Spider):
    name = 'special_offers'
    allowed_domains = ['web.archive.org']

    # start_urls = [
    #     'https://web.archive.org/web/20190225123327/https://www.tinydeal.com/specials.html'
    # ]
    url = 'https://web.archive.org/web/20190225123327/https://www.tinydeal.com/specials.html'

    def start_requests(self):
        yield scrapy.Request(url=self.url, callback=self.parse, headers={
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36'
        })

    def parse(self, response):
        for product in response.xpath("//ul[@class='productlisting-ul']/div/li"):
            yield {
                "title": product.xpath(".//a[@class='p_box_title']/text()").get(),
                "url": response.urljoin(product.xpath(".//a[@href='p_box_title']/@href").get()),
                "discounted_price": product.xpath(".//div[@class='p_box_price']/span[1]/text()").get(),
                "original_price": product.xpath(".//div[@class='p_box_price']/span[2]/text()").get(),
                "User-Agent": response.request.headers['User-Agent'].decode("utf-8"),
            }

        next_page = response.xpath("//a[@class='nextPage']/@href").get()
        # print(f"HUNG HUNG next_page: {next_page}")
        if next_page:
            yield scrapy.Request(url=next_page, callback=self.parse, headers={
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36'
            })
