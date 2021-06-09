from rest_framework.views import APIView
from rest_framework.response import Response

from .models import RepoModel

import requests
from decouple import config
# Create your views here.

class ProjectDataAPIView(APIView):
    
    def get(self, request):
        
        model_data = RepoModel.objects.all().values_list("url")
        data = []

        headers = {
            "accept":"application/vnd.github.v3+json",
        }

        i=0
        for (url,) in model_data:

            response = requests.get(url, headers=headers, auth=("Abhiram-Joshi",config("GITHUB_ACCESS_TOKEN")))

            response_json = response.json()
            
            data.append(dict())
            repo_data = data[i]
            print(response.status_code)
            repo_data["name"] = response_json["name"]
            repo_data["html_url"] = response_json["html_url"]
            repo_data["issues_count"] = response_json["open_issues_count"]

            readme_info = requests.get(f"{url}/contents/README.md", headers=headers, auth=("Abhiram-Joshi", config("GITHUB_ACCESS_TOKEN")))

            readme_info_json = readme_info.json()

            repo_data["readme_content"] = readme_info_json["content"]

            i += 1

        return Response(data)