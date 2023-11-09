import csv
import requests
import time

# Define the API endpoint and URL
api_url = "http://localhost:4000/api/insert_motor_data/123"  # Replace with your API endpoint

# Read data from the CSV file (assuming the CSV file has headers)
csv_file_path = "data.csv"  # Replace with the path to your CSV file

def read_csv_header(csv_file):
    with open(csv_file, "r") as file:
        csv_reader = csv.reader(file)
        header = next(csv_reader)  # Read the header row
    return header

header = read_csv_header(csv_file_path)

while True:
    # Read data from the CSV file (assuming one row of data)
    with open(csv_file_path, "r") as file:
        csv_reader = csv.reader(file)
        next(csv_reader)  # Skip the header row
        row = next(csv_reader)

    # Create a dictionary with the data from the CSV
    data = dict(zip(header, row))

    # Send a POST request to the API with the data
    try:
        response = requests.put(api_url, json=data)
        response.raise_for_status()  # Check for HTTP status errors
        print(f"Data sent successfully: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"Failed to send data: {e}")

    time.sleep(15)  # Wait for 15 seconds before sending the next request
