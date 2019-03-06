import subprocess
import urllib
req = urllib.request.urlopen('https://www.gitignore.io/api/node')
subprocess.call(['git', 'init'])
with open('.gitignore', 'w') as f:
  f.write(req.read())
subprocess.call(['git', 'add', '*'])
subprocess.call([
    'git', 'commit', '-m', 'Initial commit'
])
subprocess.call(
    [
        'git',
        'remote',
        'add',
        'origin',
        'https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.appname}}.git'
    ]
)
