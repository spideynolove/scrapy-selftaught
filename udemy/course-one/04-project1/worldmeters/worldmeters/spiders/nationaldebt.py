from re import S
# -*- coding: utf-8 -*-
import scrapy


class NationaldebtSpider(scrapy.Spider):
    name = 'nationaldebt'
    # url = "https://worldpopulationreview.com/countries/countries-by-national-debt"
    start_urls = [
        "https://worldpopulationreview.com/countries/countries-by-national-debt"]

    # def start_requests(self):
    #     yield scrapy.Request(url=self.url, callback=self.parse)

    def parse(self, response):
        countries = response.xpath("//td/a/text()").getall()
        debts = response.xpath("//td[contains(text(),'%')]/text()").getall()
        # populations = response.xpath("//td[contains(text(),',')]/text()").getall()
        # infos = tuple(zip(debts, populations))
        result = dict(zip(countries, debts))
        # for country_name, infos in result.items():
        for country_name, debt in result.items():
            yield {
                "country_name": country_name,
                # "gdp_debt": infos[0],
                # "population": infos[1],
                "gdp_debt": debt,
            }
