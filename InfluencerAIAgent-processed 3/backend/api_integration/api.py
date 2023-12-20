# This is an auto-generated comment

import requests
from requests.exceptions import HTTPError

class APIIntegration:
    def __init__(self, api_key=None, base_url="http://api.openweathermap.org/data/2.5"):
        self.api_key = api_key
        self.base_url = base_url

    def get_data(self, endpoint, params={}):
        if self.api_key:
            params['apiKey'] = self.api_key

        try:
            response = requests.get(f"{self.base_url}/{endpoint}", params=params)
            response.raise_for_status()
            return response.json()
        except HTTPError as http_err:
            print(f"HTTP error occurred: {http_err}")
        except Exception as err:
            print(f"Other error occurred: {err}")

    def post_data(self, endpoint, data, params={}):
        if self.api_key:
            params['apiKey'] = self.api_key

        try:
            response = requests.post(f"{self.base_url}/{endpoint}", json=data, params=params)
            response.raise_for_status()
            return response.json()
        except HTTPError as http_err:
            print(f"HTTP error occurred: {http_err}")
        except Exception as err:
            print(f"Other error occurred: {err}")
