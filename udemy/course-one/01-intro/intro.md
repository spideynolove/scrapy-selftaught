# Web scraping

* Data extract
	- text
    - images
    - videos
    - emails
    
* Scrapy
	- suitable for complex projects
    
* Other: requests, bs4

* Scrapy components
	- Spiders: **what we want scrape**
    	+ scrapy
        + crawl
        + xmlFeed
        + csvFeed
        + sitemap
    - pipelines: **extract data process**
    	+ clean
        + remove dup
        + store
    - middlewares: **relate rq & reps**
    	+ inject custom headers
        + use proxies
    - engine: **ensure the operations consistency** 
    - scheduler: **operations order**
    	+ queue
        + FIFO
        
* Web root dir: robots.txt    
	- user-agent: identity
    - allow: pages that spider allowed
    - disallow: forbidden pages
    
* installation:
	- Anaconda
    - VS code