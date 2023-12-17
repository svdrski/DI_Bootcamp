import requests
import time


start = time.time()
req = requests.get('https://www.google.com')
end = time.time()

if req.status_code == 200:
    print(end - start)

