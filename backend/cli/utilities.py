import requests
from decouple import config


def create_repo(match):
    name = match.group("name")
    visibility = match.group("visibility")
    description = match.group("description")
    gitignore_template = match.group("gitignore_template")
    license_template = match.group("license_template")

    headers = {
        "accept": "application/vnd.github.nebula-preview+json",
    }

    body = {
        "name": name,
        "visibility": visibility,
        "description": description,
        "auto_init": "true",
        "gitignore_template": gitignore_template,
        "license_template": license_template,
    }

    print(body)

    body = {k: v for (k, v) in body.items() if v != None}

    response = requests.post(
        f"https://api.github.com/orgs/Projectsv2/repos",
        json=body,
        headers=headers,
        auth=("Abhiram-Joshi", config("GITHUB_ACCESS_TOKEN")),
    )

    json_response = response.json()

    return json_response


def delete_repo(match):
    repo = match.group("repo")

    response = requests.delete(
        f"https://api.github.com/repos/Projectsv2/{repo}",
        auth=("Abhiram-Joshi", config("GITHUB_ACCESS_TOKEN")),
    )

    json_response = response

    return json_response
