import pandas as pd
import numpy as np
from dataset import dataset_preparation
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Getting the dataframe after dataframe preparation
df = dataset_preparation()

# Import CountVectorizer to create the count matrix
count = CountVectorizer(stop_words='english')
count_matrix = count.fit_transform(df['wordsoup'])

# Calculating the cosine similarity score of count_matrix
cosine_sim = cosine_similarity(count_matrix, count_matrix)

# Reset index data frame to title and construct reverse mapping as before, i.e. now index is the movie name and 'index' becomes an attribute
df = df.reset_index()
indices = pd.Series(df.index, index=df['title'])

# Function that takes in movie title as input and outputs most similar movies
def get_recommendations(title):
    # Get the index of the movie that matches the title
    idx = indices[title]

    # Get the pairwsie similarity scores of all movies with that movie
    sim_scores = list(enumerate(cosine_sim[idx]))

    # Sort the movies based on the similarity scores
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # Get the scores of the 10 most similar movies
    sim_scores = sim_scores[1:11]

    # Get the movie indices
    movie_indices = [i[0] for i in sim_scores]

    # Return the top 10 most similar movies
    return df['title'].iloc[movie_indices]

def main():
    # front-end plus function call
    print(get_recommendations('Avatar'))

main()