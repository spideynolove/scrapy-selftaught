import pandas as pd

# df = pd.read_html('http://en.fifaranking.net/caf/ranking.php')[0]
# df.to_pickle('save-data/africa_ranking.pkl')
# print(df[0])


df = pd.read_pickle('save-data/africa_ranking.pkl')
print(df['Team'].head(11))
