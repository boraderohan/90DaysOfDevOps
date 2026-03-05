## Task: Understanding branches 


1)What is branch in Git?

Ans: Git branch is a separate workspace used to make changes without affecting the main project.

Once the work is complete, the changes can be merged back into the main or master branch.

2)Why do we use branches instead of committing everything to main?

Ans: Working on a branch keeps your experimental or incomplete changes separate from the main codebase.

If something goes wrong -like a bug or a failed feature- you can discard the branch without affecting the stable main branch.

3)What is HEAD in Git?

Ans: HEAD is a reference to the current check-out commit in your repository.

It is basically a pointer or symbolic reference to the latest commit in your branch.

Every time you swithch branches or check out a specific commit, HEAD moves accordingly to point the relevant commit.

4)What happens to your files when you switch branches?
Ans: When you switch branches in Git, your working directory files are automatically updaed to match the target branch's latest commit.

If you have uncommited changes that conflict with commit them first.

5)What is the difference between origin and upstream?

Ans: Origin: The default name for the remote repository you cloned from your repo on GitHub 
Upstream: A conventional name for the original source repository you forked from. 
It is not set automatically, you add it manually.

6)What is the difference between git fetch and git pull?

Ans: The core difference is simple:

git fetch: you want to review changes before mergeing, or work in a shared codebase where unexpected conflicts are concern

git pull: you want to quickly sync your branch and trust the incoming changes.\

7)What is the difference between clone and fork?

Ans: Clone creates a local copy of an existing repository on you machine, typically for personal use or development.

It doesn't create a new remote repository.

Fork creates a presonal copy of a repository on a remote platfrom (GitHub), allowing you to make changes independently and later propose them back via pull requests.

8)When to Clone vs Fork?

Ans: clone when you:

Just want to use or build the code locally.

Don't plan to contribute changes back.

Are setting up a project for testing or learning.

Fork when you:

Want to contribute changes back to the original repo (via Pull Request)

Need to modify the code and maintain your own version.

Are collaborating or experimenting without affecting the original.

9)After forking, how do you keep your fork in sync with the original repo?

Ans: git remote add upstream ssh://github.com/original-owner/repo.git

git fetch upstream 

git rebase upstream/main

git merger upstream/main

git push origin main

git fetch upstream && git rebase upstream && git push origin main.
