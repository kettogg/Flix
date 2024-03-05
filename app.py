from flask import Flask, jsonify, render_template, request
from functools import wraps
from dotenv import load_dotenv
import os
from main import get_titles, get_recommendations, get_id

load_dotenv()

app = Flask(__name__)

from dataset import dataset_preparation

dataset_preparation() # Creates final_data.csv

@app.route('/flix/api/id', methods=['GET'])
def getId():
  title = request.args.get('title')
  id = str(get_id(title)) # List of similar titles
  data = {
    "id": id,
    "title": title
  }
  return jsonify(data)

@app.route('/flix/api/titles', methods=['GET'])
def getTitleCount():
  result, count = get_titles()
  data = {
    "count": count,
    "list": result
  }
  return jsonify(data)

@app.route('/flix/api/recommends', methods=['GET'])
def getRecommends():
  title = request.args.get('title')
  similar = get_recommendations(title) # List of similar titles with id of each title
  data = {
    "recommends": similar
  }
  return jsonify(data)

if __name__ == '__main__':
    app.run(debug=False,host='0.0.0.0')
