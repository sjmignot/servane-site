import sys, os

from flask import Flask, render_template, redirect, url_for, render_template_string
from flask_flatpages import FlatPages

DEBUG = True
FLATPAGES_AUTO_RELOAD = DEBUG
FLATPAGES_EXTENSION = '.md'
MARKDOWN_EXTENSIONS = ['codehilite', 'footnotes', 'fenced_code']

# FLATPAGES DIRS
FLATPAGES_ROOT = 'content'
PROJECT_DIR = 'work'
OTHER_DIR = 'other'
EXPO_DIR = 'expositions'

app = Flask(__name__)
app.config.from_object(__name__)
flatpages = FlatPages(app)

def get_projects():
    return [p for p in flatpages if p.path.startswith(PROJECT_DIR)]

def get_expos():
    return [p for p in flatpages if p.path.startswith(EXPO_DIR)]

# URL Routing - Home Page
@app.route("/")
def index():
    return render_template('index.html')

@app.route("/gallery/")
def work(path):
    work = get_projects()
    return render_template('gallery.html', post_names=post_names, latest_post=add_preview(latest_post))

@app.route("/gallery/{project}")
def work_project(path):
    return render_template('project.html', post_names=post_names, latest_post=add_preview(latest_post))
    return flatpages.get_or_404(path)

@app.route("/contact/")
def contact(path):
    return render_template('contact.html', post_names=post_names, latest_post=add_preview(latest_post))
    return flatpages.get_or_404(path)

@app.route("/expositions/")
def expos(path):
    expos = get_expos()

    return render_template('index.html', post_names=post_names, latest_post=add_preview(latest_post))
    return flatpages.get_or_404(path)

# Main Function, Runs at http://0.0.0.0:8000
if __name__ == "__main__":
    app.run(port=8000)
