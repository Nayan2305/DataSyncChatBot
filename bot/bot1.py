import requests

# Replace with your actual bot token
bot_token = "6140888607:AAElQv1wgxZVUh7VWNNNLw9Nh6Shid_hhcw"
offset = None

# Define your base URL for the Telegram API
# base_url = f"https://api.telegram.org/bot{bot_token}/getUpdates"

while True:
    try:
        # Construct the URL for getting updates
        base_url = f"https://api.telegram.org/bot{bot_token}/getUpdates"

        # Include the offset if it's not None
        if offset is not None:
            base_url += f"?offset={offset}"

        # Send the GET request to get updates
        response = requests.get(base_url)
        data = response.json()

        if "result" in data:
            updates = data["result"]

            for update in updates:
                user_id = update["message"]["chat"]["id"]
                message_text = update["message"]["text"]
                username = update["message"]["from"].get("username", "N/A")

                if message_text=="send":
                    url = "http://localhost:4000/api/user_data/user_id"

                    # response = requests.get(f'http://127.0.0.1:5000/retrieve_collection_data/{username}')
                    headers = {'Content-Type': 'application/json'}

                    response = requests.request("GET", url, headers=headers)

                    print(response.text)

                print(username);    

                # Update the offset to avoid processing the same update again
                offset = update["update_id"] + 1

    except Exception as e:
        print("Error:", e)