# Formrequest.from_response

# Handle JS form
-if the form does require **JavaScript** then you can't use the **FormRequest** class,
so as an alternative solution you have to use another class called **SplashFormRequest**
-make sure to add **Splash** to your settings.py file

# [Code example](https://stackoverflow.com/questions/23398885/is-there-a-way-to-add-embedded-python-code-to-markdown)
```python
# Splash should be running on the background
 
import scrapy
from scrapy_splash import SplashRequest, SplashFormRequest
 
 
class QuotesLoginSpider(scrapy.Spider):
    name = 'quotes_login'
    allowed_domains = ['quotes.toscrape.com']
    
    script = '''
        function main(splash, args)
          assert(splash:go(args.url))
          assert(splash:wait(0.5))
          return splash:html()
        end
    '''
    
    def start_requests(self):
        yield SplashRequest(
            url='https://quotes.toscrape.com/login',
            endpoint='execute',
            args = {
                'lua_source': self.script
            },
            callback=self.parse
        )
 
    def parse(self, response):
        csrf_token = response.xpath('//input[@name="csrf_token"]/@value').get()
        yield SplashFormRequest.from_response(
            response,
            formxpath='//form',
            formdata={
                'csrf_token': csrf_token,
                'username': 'admin',
                'password': 'admin'
            },
            callback=self.after_login
        )
    
    def after_login(self, response):
        if response.xpath("//a[@href='/logout']/text()").get():
            print('logged in')
```

