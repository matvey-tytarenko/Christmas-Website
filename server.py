import requests
from config import *

def get_congratulation(name, email):
    res = requests.post(server_url, json={"name": name, "email": email})

    if res.status_code == 200:
        return print("Поздравление отправлено")
    else:
        return print("Ошибка при отправке поздравления")
