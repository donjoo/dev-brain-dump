import requests

# Step 1: Provide your URL
url = "https://api.github.com/users/octocat"

# Step 2: Send GET request to the URL
response = requests.get(url)

# Step 3: Parse JSON into Python dict
data = response.json()

# Step 4: Use the data
print(data["login"])       # ➝ 'octocat'
print(data["public_repos"])  # ➝ e.g., 8


import random

def unique_random(jees):
    items = list(jees)
    while items:
        choice = random.choice(items)
        items.remove(choice)
        yield choice
    raise StopIteration('no more unique elements remaining')
    
jees = [1,'fdd',False,34,'gg','daf',0]
try:
    
    
res = unique_random(jees)
for i in res:
    print(i)