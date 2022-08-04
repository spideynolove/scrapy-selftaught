# -*- coding: utf-8 -*-
import scrapy


class CountriesSpider(scrapy.Spider):
    name = 'countries'
    allowed_domains = ['www.worldometers.info']
    url = "https://www.worldometers.info/world-population/population-by-country"

    def start_requests(self):
        yield scrapy.Request(self.url, callback=self.parse)

    def parse(self, response):
        title = response.xpath("//div/h1/text()").get()
        countries = response.xpath("//td/a/text()").getall()
        print(f"HUNG TITLE: {title}")
        print(f"HUNG COUNTRIES: {countries}")
        yield {
            "title": title,
            "countries": countries,
        }
