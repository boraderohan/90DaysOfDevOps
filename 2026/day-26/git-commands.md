### Getting Started

git init

git clone <url>

git add <file>

git add .

git rm <file>

git reset <file>

git status

git commit -m "message"


### Braching commands

git branch # displays the branches

git checkout -b feature-1

git switch <branch>

git checkout -b feature-2

git switch <branch>

vim filename

git add filename

git commit -m "chore: Added a new file"

git branch -d feature-2

git branch -D <branch-name>


### Push change

git push origin main 

git push -u origin main (you have never pushed before)


### Pull change 

git fetch origin main 

git pull --rebase

git pull origin main 


### Git Advance: Merge, Rebase, Stash & cherry

git switch main

git merge feature-login 

git log --oneline --graph --all

git stash 

git stash pop stash@{1} 

git commit -m <"chore: suitable for the file">

git stash apply stash@{"description or index number"}

git cherry-pick <commit-hash-of-commit>

git cherry-pick --continue

git cherry-pick --skip

git cheery-pick --abort

git diff 

git config --global user.name "Your Name"

git config --global user.email "your.email@example.com"

git config --list   

git remote add origin https://github.com/username/repo.git

git push -u origin main

git init

git reset --soft <hash>

git reset --mixed <hash>

git reset --hard <hash>

git revert <commit id>

git diff --staged

git show <commit>


### Git CLI Commands

gh --version

gh auth login

gh repo create repo-name --public -description "notes" --add-readme

git clone <link>

gh repo view <repo-name>

gh repo view <repo-name> --web

gh repo list

gh repo delete test-repo --yes

gh auth refresh -h github.com -s delete-repo

gh repo delete test-repo --yes 

gh issue include --repo owner/repo --title "description" --body "description" --label "documentation"

gh issue view 3 --repo owner/repo-name (if it throws authentication error use below command)

gh auth refresh -s read:project 

gh issue list --repo owner/repo-name 

gh pr create --fill

gh pr view

gh pr list 

gh pr merge "number" --repo owner/repo-name

gh run list 

gh run view "id" --repo owner/repo-name

gh gist create first-call.txt

gh gist list

gh release create v1.0 --title "v1.0" --notes "description" 

gh release list 

gh alias set pr1 'pr list'

gh alias set mypr 'pr view --repo owner/repo-name'

gh search repos "Cli language:python"

