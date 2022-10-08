from flask import Flask
import datetime

x = datetime.datetime.now

app = Flask(__name__)


@app.route("/information")
def get_info():
    return {
        "Name": "Joseph Burns",
        "Site": "Ctrl-Alt-Pin",
        "Date & Time": x,
        "Test": "True"
    }


if __name__ == "__main__":
    app.run(debug=True)
