import scrapy


class BestsellersSpider(scrapy.Spider):
    name = 'bestsellers'
    allowed_domains = ['glassesshop.com']
    # start_urls = ['https://www.glassesshop.com/bestsellers']

    # -------------------- Way 1 --------------------
    url = 'https://www.glassesshop.com/bestsellers'

    def start_requests(self):
        yield scrapy.Request(url=self.url, callback=self.parse, headers={
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36'
        })

    def parse(self, response):
        for product in response.xpath("//*[@id='product-lists']/div"):
            yield {
                "url": product.xpath(".//div[@class='product-img-outer']/a/@href").get(),
                "img_url": product.xpath(".//div[@class='product-img-outer']/a/img/@data-src").getall(),
                "name": product.xpath(".//div[@class='product-img-outer']/a/img[1]/@alt").get(),
                "price": product.xpath(".//div[@class='p-price']/div/span/text()").get(),
            }

        next_page = response.xpath(
            "//a[@class='page-link' and text()='Next']/@href").get()
        if next_page:
            yield scrapy.Request(url=next_page, callback=self.parse, headers={
                'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36'
            })

    # # -------------------- Way 2 --------------------
    # url = 'https://www.glassesshop.com/bestsellers?page={}'

    # def start_requests(self):
    #     pages = 5
    #     for page in range(1, pages, 1):
    #         yield scrapy.Request(self.url.format(page), self.parse, headers={
    #             'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36'
    #         })

    # def parse(self, response):
    #     for product in response.xpath("//*[@id='product-lists']/div"):
    #         yield {
    #             "url": product.xpath(".//div[@class='product-img-outer']/a/@href").get(),
    #             "img_url": product.xpath(".//div[@class='product-img-outer']/a/img/@data-src").getall(),
    #             "name": product.xpath(".//div[@class='product-img-outer']/a/img[1]/@alt").get(),
    #             "price": product.xpath(".//div[@class='p-price']/div/span/text()").get(),
    #         }
