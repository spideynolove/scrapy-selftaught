# Fundamental

- scrapy cmds:
	+ bench (benchmark)
    + fetch (from downloader)
    + runspider (run without creating a project)
    + genspider (create from templates)
    + settings (config values)
    + shell (console)
    + startprojects (create new project)
    + version
    + view (open url)
    
- scrapy.cfg (important config file) use when:
(using an HTTP JSON API)
	+ execute spider 
    + deploy spider daemon, heroku, ScrapingHub cloud
    
- items.py:
	+ clean, store, ...
    + have **Fields**
    
- middlewares.py:
	+ request and response objs
    + Spider vs Downloader
    + user-agent
    + ...
    
- pipelines:
	+ store to DB
    
- genspider:
	+ notice domain name
    + start_urls: the link need to scrape
    + parse: catch the response
    
- Scrapy shell, XPath, Css
    + iPython
    + request and response
    + site URL vs site robot.txt
    + construct a rq obj
    + resp body: return raw HTML markUP
    
    + Need disable JS
    + select the right elements
    
    + right click to copy XPath
    + using resp.xpath to get true elements
    + using resp.css to get attributes
    
    + COnclusion: 2 ways to get right elements
    
    
    
    