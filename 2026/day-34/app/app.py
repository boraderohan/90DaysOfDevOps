from flask import Flask # pyright: ignore[reportMissingImports]
import os

app = Flask(__name__)

@app.route("/")
def home():
    return "Flask updated after rebuild!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)