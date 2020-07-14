from flask import Flask, render_template, redirect, url_for
from flask_flatpages import FlatPages
from datetime import datetime
from pytz import timezone
from itertools import groupby
from flask_frozen import Freezer
import os
import sys

DEBUG = True
FLATPAGES_AUTO_RELOAD = DEBUG
FLATPAGES_EXTENSION = '.md'
MARKDOWN_EXTENSIONS = ['codehilite', 'footnotes', 'fenced_code']

# FLATPAGES DIRS
FLATPAGES_ROOT = 'content'
PROJECT_DIR = 'projects'
PRINT_DIR = 'prints'
EXPO_DIR = 'exhibits'
PRINTS_DIR = 'prints'

app = Flask(__name__)
app.config.from_object(__name__)
flatpages = FlatPages(app)
freezer = Freezer(app)


def get_projects():
    return [p for p in flatpages if p.path.startswith(PROJECT_DIR)]


def get_expos():
    return [p for p in flatpages if p.path.startswith(EXPO_DIR)]


def get_prints():
    return [p for p in flatpages if p.path.startswith(PRINTS_DIR)]


# URL Routing - Home Page
@app.route("/")
def index():
    return render_template('index.html')


@app.route("/gallery/")
def work():
    def date_group_key(date_project_t):
        if int(date_project_t[0]) <= 2016:
            return 'archive'
        else:
            return int(date_project_t[0])

    projects = get_projects()
    prints = get_prints()

    prints.sort(key=lambda x: x['created'], reverse=True)
    projects.sort(key=lambda x: (x['created'], x['title']))

    dp = [project['created'] for project in projects]
    date_projects = [
        (str(k), sorted(list(g), key=lambda x: x[1]['created'], reverse=True))
        for k, g in groupby(zip(dp, projects), key=date_group_key)
    ]

    return render_template('gallery.html',
                           date_projects=date_projects,
                           prints=prints)


@app.route("/gallery/<name>/")
def work_project(name):
    path = f'{PROJECT_DIR}/{name}'
    proj = flatpages.get_or_404(path)
    images = [
        os.path.join('static/img/projects/', proj['image_directory'], i)
        for i in os.listdir(
            os.path.join('static/img/projects/', proj['image_directory']))
        if i != 'thumbnail.jpg' and i[-3:] == 'jpg'
    ]

    return render_template('project_page.html',
                           project=proj,
                           images=images[::-1])


@app.route("/gallery/print/<name>/")
def work_print(name):
    path = f'{PRINT_DIR}/{name}'
    prin = flatpages.get_or_404(path)
    return render_template('print_page.html', prin=prin)


@app.route("/contact/")
def contact():
    return render_template('contact.html')


@app.route("/profile/")
def profile():
    return render_template('profile.html')


@app.route("/exhibits/")
def expos():
    DATE_FORMAT = "%m-%d-%Y"
    exhibits = get_expos()
    print(exhibits)
    dates = [(datetime.strptime(exhibit['start_date'], DATE_FORMAT),
              datetime.strptime(exhibit['end_date'], DATE_FORMAT),
              datetime.strptime(exhibit['end_date'], DATE_FORMAT).astimezone(
                  timezone('US/Pacific')).timestamp()) for exhibit in exhibits]
    sorted_exhibits, sorted_dates = zip(
        *sorted(zip(exhibits, dates),
                key=lambda event_date_t: event_date_t[1][0],
                reverse=True))
    return render_template('exhibits.html',
                           exhibits=sorted_exhibits,
                           dates=sorted_dates)


# Main Function, Runs at http://0.0.0.0:8000
if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "build":
        freezer.freeze()
    else:
        app.run(host='0.0.0.0', debug=True)
