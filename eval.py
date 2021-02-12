from flask import Flask
import requests
import calendar

corona = requests.get("https://capi.msub.kr").json()
app = Flask(__name__)

@app.route('/eval/<code>')
def py(code):
    try:
        result = eval(code)
    except Exception as e:
        result = e
    result = str(result)
    return result

if __name__ == '__main__':
    app.run()
