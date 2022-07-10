import requests
from bs4 import BeautifulSoup

titles = []
collaborators = []
journels = []
dates = []
links = []

response = requests.get('https://sites.google.com/site/jamesmabliresearch/home/research?authuser=0')
soup = BeautifulSoup(response.text, 'html.parser')

resources = soup.find_all(class_='CDt4Ke zfr3Q')
for resource in resources:
  titles.append(resource.get_text()[1:resource.get_text().find('" (')])

linksdict = soup.find_all(class_='XqQF9c', href=True)
for link in linksdict:
  response = requests.get(str(link["href"]))
  if (response.text.find('<BODY onLoad="location.replace(') != -1):
    links.append(response.text[response.text.find('<BODY onLoad="location.replace(') + 32 : response.text.find('+document.location.hash)') - 1])
  else:
    links.append("")

for i in range(len(titles)):
  print(titles[i])
  print(links[i])
  print("\n")