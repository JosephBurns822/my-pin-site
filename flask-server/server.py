from flask import Flask

app = Flask(__name__)


@app.route("/collection")
def collections():
    return {"collections": ["Collection1", "Collection2", "Collection3"]}


if __name__ == "__main__":
    app.run(debug=True)
