from flask import Flask, jsonify, request
from main import get_titles, get_recommendations, get_id
app = Flask(__name__)

from dataset import dataset_preparation

dataset_preparation() # Creates final_data.csv

@app.route('/api/id', methods=['GET'])
def getId():
  title = request.args.get('title')
  id = str(get_id(title)) # List of similar titles
  data = {
    "id": id,
    "title": title
  }
  return jsonify(data)

@app.route('/api/titles', methods=['GET'])
def getTitleCount():
  result, count = get_titles()
  data = {
    "count": count,
    "list": result
  }
  return jsonify(data)

@app.route('/api/recommends', methods=['GET'])
def getRecommends():
  title = request.args.get('title')
  similar = get_recommendations(title) # List of similar titles with id of each title
  data = {
    "recommends": similar
  }
  return jsonify(data)

if __name__ == '__main__':
  app.run(host='0.0.0.0',debug=True)
