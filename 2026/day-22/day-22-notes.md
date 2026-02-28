1.What is the difference between git add and git commit?

Ans: The git add command is used to stage changes in the working directory. 
when you make changes to your files, thoes changes are not automatically tracked by Git.

you need to explixitly tell Git which changes you want to included in the next commit by using git add command.
The git commit command is used to create a new commit, which is a snapshot of your project a specific point in time.

when you run git commit, Git takes the changes that are currently in the staging area and creates a new commit with a unique identifier.

2.What does the staging area do? Why doesn't Git just commit directly?

Ans: The staging area is the middle ground between what you have done to your files(also known as the working directory) and what you had last commited.

As the name implies, the staging area gives you space to prepare(stage) the changes that will be reflected on the next commit.

3.What information does git log show you?

Ans: Shows the commit logs. List commits that are reachable by following parent links from the given commits, but exclude commits that are reachable from the one give with in front of them. 

The output is given in reverse chronological order by default.

4.What is the .git/ folder and what happens if you delete it?

Ans: The .git/folder is a hidden directory in the root of a Git repository that stores all version control data, including commit history, branch information, configuration setting, and metadata about tracked files.

It is the core of the local Git repository.if you delete the .git/folder all local version history is permanently lost.

Git will no longer track changes in the directory.you lose the ability to use Git commands like git commit, git push, or git status without restoring the repository.

5.What is the difference between a working directory, staging area, and repository?

Ans: The working directory is the directory on your local machine where your project file are located. This is where you make changes to your code.

The staging area is like a perparation zone where you decide what changes you want to include in the next commit. It is an intermediate space between the working directory and the repository

The Repository is the place where your commited changes are stored. It can be thought of as the "official" history of your project. Every commit you make is recorded here, forming a timeline of your projects evolution. The repository consists of all the commits and branches for the porject.
