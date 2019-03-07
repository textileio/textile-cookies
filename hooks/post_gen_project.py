import subprocess

subprocess.call(['git', 'init'])
subprocess.call(['git', 'add', '*'])
subprocess.call(['git', 'commit', '-m', 'Initial commit'])
subprocess.call(
    [
        'git',
        'remote',
        'add',
        'origin',
        'https://github.com/{{cookiecutter.github_username}}/{{cookiecutter.appname}}.git'
    ]
)
print("Git repo initialized!")
