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



