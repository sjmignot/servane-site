from flask import Flask, render_template, redirect, url_for, render_template_string
from flask_flatpages import FlatPages
from datetime import datetime
from pytz import timezone

DEBUG = True
FLATPAGES_AUTO_RELOAD = DEBUG
FLATPAGES_EXTENSION = '.md'
MARKDOWN_EXTENSIONS = ['codehilite', 'footnotes', 'fenced_code']

# FLATPAGES DIRS
FLATPAGES_ROOT = 'content'
PROJECT_DIR = 'projects'
OTHER_DIR = 'other'
EXPO_DIR = 'exhibits'

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
def work():
    projects = get_projects()
    projects.sort(key=lambda x: x['created'])

    dates = [project['created'] for project in projects]
    print(dates)
    return render_template('gallery.html', projects=projects, dates=dates)


@app.route("/gallery/{project}")
def work_project():
    pass


@app.route("/contact/")
def contact():
    return render_template('contact.html')


@app.route("/exhibits/")
def expos():
    DATE_FORMAT = "%m-%d-%Y-%H:%M"
    exhibits = get_expos()
    print(exhibits)
    dates = [(datetime.strptime(exhibit['start_date'], DATE_FORMAT),
              datetime.strptime(exhibit['end_date'], DATE_FORMAT),
              datetime.strptime(exhibit['end_date'], DATE_FORMAT).astimezone(
                  timezone('US/Pacific')).timestamp()) for exhibit in exhibits]
    sorted_exhibits, sorted_dates = zip(*sorted(zip(exhibits, dates), key=lambda event_date_t: event_date_t[1][0], reverse=True))
    return render_template('exhibits.html', exhibits=sorted_exhibits, dates=sorted_dates)


# Main Function, Runs at http://0.0.0.0:8000
if __name__ == "__main__":
    app.run(port=8000)
