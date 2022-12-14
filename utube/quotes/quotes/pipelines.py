# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
# import os
import mysql.connector
# import sqlite3


class QuotesPipeline:
    '''
    def __init__(self) -> None:
        self.create_connection()
        self.create_table()

    def create_connection(self):
        # dirname = os.path.dirname(__file__)
        # self.conn = sqlite3.connect(f"{dirname}/quotes.db")
        # self.curr = self.conn.cursor()
        self.conn = mysql.connector.connect(
            host='localhost',
            user='root',
            passwd='123',
            # database="my_quotes"
            database="my_stocks"    # for new testcase
        )
        self.curr = self.conn.cursor()

    def create_table(self):
        self.curr.execute("""drop table if exists quotes_tb""")
        self.curr.execute(
            """create table quotes_tb(title text,author text,tag text)""")

    def store_db(self, item):
        # self.curr.execute("""insert into quotes_tb values(?,?,?)""", (

        # old case
        self.curr.execute("""insert into quotes_tb values(%s,%s,%s)""", (
            item['title'],
            item['author'],
            item['tag']
        ))

        # consider new output object
        # creating a new object

        self.conn.commit()

    # def open_spider(self):
    #     pass

    # def close_spider(self):
    #     pass
    # '''
    def process_item(self, item, spider):
        # self.store_db(item)
        return item
