from flask import Flask, request, jsonify, Response, abort
# from flask_pymongo import PyMongo
from bson import ObjectId
import json
from pymongo import MongoClient

from dotenv import load_dotenv
import os
load_dotenv()

app = Flask(__name__)



mongo_uri = os.environ.get("MONGO_URI")
client = MongoClient(mongo_uri)

db = client.Music_System


def custom_encoder(obj):
    if isinstance(obj, (list, tuple, dict)):
        return obj
    elif isinstance(obj, ObjectId):
        return str(obj)
    else:
        return str(obj) 


@app.route('/create_user_profile', methods=['POST'])
def create_user_profile():
    user_data = request.json
    db.user_profiles.insert_one(user_data)
    return jsonify({'message': 'User profile created'})


@app.route('/insert_data/<collection_name>', methods=['POST'])
def insert_data(collection_name):
    data = request.get_json()

    # Ensure that the collection exists; if not, create it
    if collection_name not in db.list_collection_names():
        return Response("please enter valid api", status=404)

    # Insert the IoT data into the specified collection
    result = db[collection_name].insert_one(data)

    return jsonify({'message': 'Data inserted', '_id': str(result.inserted_id)})

@app.route('/retrieve_collection_data/<collection_name>', methods=['GET'])
def retrieve_collection_data(collection_name):
    data = db[collection_name].find()
    data = list(data)

    serialized_data = json.dumps(data, default=custom_encoder)
    return jsonify({'data': serialized_data})

@app.route('/create_collection/<user_id>', methods=['POST'])
def create_collection(user_id):
    # Check if the user with the provided user_id exists
    user = db.user_profiles.find_one({'_id': ObjectId(user_id)})

    if user is None:
        abort(404, "User not found")

    # Get the collection name from the request
    data = request.get_json()
    collection_name = data.get('collection_name')

    if not collection_name:
        abort(400, "Collection name is required")

    # Create the collection
    if collection_name not in db.list_collection_names():
        db.create_collection(collection_name)

    # Store the collection name in the user's profile
    user['collections'].append(collection_name)
    db.user_profiles.update_one({'_id': ObjectId(user_id)}, {'$set': user})

    # Return the updated user profile
    return jsonify(user)

@app.route('/get_user_profile/<user_id>', methods=['GET'])
def get_user_profile(user_id):
    # Verify if the user with the provided user_id exists
    user = db.user_profiles.find_one({'_id': ObjectId(user_id)})

    if user is None:
        abort(404, "User not found")

    return jsonify(user)



if __name__ == '__main__':
    app.run(debug=True)
