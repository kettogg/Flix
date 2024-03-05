import pandas as pd
import numpy as np
from ast import literal_eval

# Get the director's name from 'crew' feature, return NaN if no director
def director_name(x):
    # x here is list of dictionaries and i is a dictionary in the list x
    for i in x:
        # checks if 'job' attribute in a dictionary is 'Director' or not
        if i['job'] == 'Director':
            return i['name']
    return np.nan

# Returns the list top 5 elements of list
def top_five_in_list(x):
    # x here is a list of dictionaries
    if isinstance(x, list):
        names = [i['name'] for i in x]
        # If more than three elements return first five, else return all
        if len(names) > 5:
            names = names[:5]
        else:
            names = names
        
        return names

    #Return empty list in case of missing data
    return []

# Converts strings to lower case and removes spacebar
def lower_case_remove_space(x):
    # If x is a list of dictionaries then replace all dictionaries to lower case and purge spacebars
    if isinstance(x, list):
        return [str.lower(i.replace(" ", "")) for i in x]
    else:
        # Check if director exists. Else if it's NAN return empty string
        if isinstance(x, str):
            return str.lower(x.replace(" ", ""))
        else:
            return ''

# Create a word soup using values in attributes : 'keywords', 'cast', 'director', 'genres'.
def create_word_soup(x):
    return ' '.join(x['keywords']) + ' ' + ' '.join(x['cast']) + ' ' + x['director'] + ' ' + ' '.join(x['genres'])

# Prepare the dataset to apply our model on it
def dataset_preparation():
    # Both dataset files are downloaded from https://www.kaggle.com/datasets/tmdb/tmdb-movie-metadata?resource=download

    df1=pd.read_csv('datasets/tmdb_5000_credits.csv',engine='python')
    # tmbd_5000_credits.csv has the attributes movie_id,title,cast,crew
    df2=pd.read_csv('datasets/tmdb_5000_movies.csv',engine='python')
    # tmbd_5000_credits.csv has the attributes budget,genres,homepage,id,keywords,original_language,original_title,overview,popularity,production_companies,production_countries,release_date,revenue,runtime,spoken_languages,status,tagline,title,vote_average,vote_count

    # After analysis we see that columns 'homepage', 'tagline', 'runtime', 'overview' have NAN values, so we drop these attributes
    df2 = df2.drop(labels=['homepage','tagline','runtime','overview'],axis=1)

    # Rename 'movie_id' attribute to 'id' as we want to merge both datasets based on this attribute
    df1.columns = ['id','title','cast','crew']
    # Drop title attribute from df1 as it is present in both df1 and df2 so we do not want this attribute to be renamed later when we merge
    df1 = df1[['id','cast','crew']]
    # Merge both the dataset files using the ID attribute
    df2= df2.merge(df1,on='id')

    # Convert string values in 'cast', 'crew', 'keywords', 'genres' to list of dictionaries using literal_eval method
    features = ['cast', 'crew', 'keywords', 'genres']
    for feature in features:
        df2[feature] = df2[feature].apply(literal_eval)

    # Create new attribute 'director'
    df2['director'] = df2['crew'].apply(director_name)

    features = ['cast', 'keywords', 'genres']
    for feature in features:
        df2[feature] = df2[feature].apply(top_five_in_list)

    # Apply lower_case_remove_space function to your features.
    features = ['cast', 'keywords', 'director', 'genres']
    for i in features:
        df2[i] = df2[i].apply(lower_case_remove_space)

    # Create a word soup here as we want to create a count matrix later and apply cosine similarity
    df2['wordsoup'] = df2.apply(create_word_soup, axis=1)
   
    # Return the final dataframe with our word soup
    df2.to_csv('datasets/final_data.csv', index=False)
    return df2