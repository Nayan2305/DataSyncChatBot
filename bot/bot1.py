import requests
import json

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

                if message_text=="/start":
                    url = f"http://iotapiserver.ap-south-1.elasticbeanstalk.com/api/add_user_id/{username}"

                    # Rest of your code
                    payload = {
                        "user_id": user_id
                            # Add other payload parameters if needed
                    }
                    headers = {'Content-Type': 'application/json'}
                    response = requests.put(url, json=payload, headers=headers)
                    print(response.text)
                elif message_text=="/checkstatus":
                    url = f"http://iotapiserver.ap-south-1.elasticbeanstalk.com/api/user_data/{username}"

                    headers = {'Content-Type': 'application/json'}
                    data = requests.get(url, headers=headers).json()  # Parse the JSON response

                    # Format the JSON data with indentation
                    formatted_message = json.dumps(data, indent=5)

                    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
                    payload = {
                        'chat_id': user_id,
                        'text': formatted_message,  # Send the formatted JSON as the message text
                    }
                    response = requests.post(url, json=payload)
                elif message_text=="/turnonmachine":

                    url=f"http://iotapiserver.ap-south-1.elasticbeanstalk.com/api/change_motor_statusbybot/{username}"
                    payload={
                        "motor_status":1
                    }
                    headers = {'Content-Type': 'application/json'}
                    response = requests.put(url,  json=payload,headers=headers)
                    print(response)
                    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
                    payload = {
                        'chat_id': user_id,
                        'text': "Motor turned on",
                    }
                    response = requests.post(url, json=payload)
                    print(response)


                elif message_text=="/turnoffmachine":

                    url=f"http://iotapiserver.ap-south-1.elasticbeanstalk.com/api/change_motor_statusbybot/{username}"
                    payload={
                        "motor_status":0
                    }
                    headers = {'Content-Type': 'application/json'}
                    response = requests.put(url,  json=payload,headers=headers)
                    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
                    payload = {
                        'chat_id': user_id,
                        'text': "Motor turned off",
                    }
                    response = requests.post(url, json=payload)

                else:



                    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
                    payload = {
                        'chat_id': user_id,
                        'text': "Enter a valid Command please check the menu for the set of commands",
                    }
                    response = requests.post(url, json=payload)



                # print(username);
                # print(user_id)

                # Update the offset to avoid processing the same update again
                offset = update["update_id"] + 1

    except Exception as e:
        print("Error:", e)
