![checking status](https://github.com/user-attachments/assets/e614f50e-df4d-4032-8da9-d7805f25aa20)## Task 1: Install and Configure Git

Verify Git is installed on your machine

git --version

![git version](https://github.com/user-attachments/assets/4fe01238-c08e-4279-9f3e-10920daf0cda)


Set up your Git identity — name and email

git config --global user.name "BoradeRohan"

git config --global user.email "rohanborade18@gmail.com"

Verify your configuration

git config --list

![global user setup](https://github.com/user-attachments/assets/96ce420e-c008-4dc7-acce-b2af7f0d7ae9)


## Task 2: Create Your Git Project

Create a new folder called devops-git-practice

mkdir devops_git_practice

Initialize it as a Git repository

git init

![git init](https://github.com/user-attachments/assets/2b95fa21-5cd4-4c65-a977-40fc3bc671fc)



Check the status — read and understand what Git is telling you

git status

![checking status](https://github.com/user-attachments/assets/33a57492-d0a8-4a23-8e1a-f32c65ef354f)


he hidden .git/ directory — look at what's inside

ls -a

cd .git 

ls

## Task 3: Create Your Git Commands Reference

Create a file called git-commands.md inside the repo

touch git_command.md

Add the Git commands you've used so far, organized by category:

vim git_command.md

### For each command, write:
### What it does (1 line)
### An example of how to use it

## Setup & Config

<< 'define'

You can query/set/replace/unset options with this command. The name is actually the section and the key separated
by a dot, and the value will be escaped.

define

git config --global user.name "username"

git config --global user.email"example123@gmail.com"

## Basic Workflow

git init # git-init - Create an empty Git repository or reinitialize an existing one

git add  # Add file contents to the index

git commit -m # Record changes to the repository

## Viewing Changes

git log #  Show commit logs

git status # Show the working tree status

## More basic commands

git checkout -b <branchname> # Switch branches or restore working tree files

git switch <new-branch> # Switch branches

## Push & Pull commands

git push origin main # Update remote refs along with associated objects

git pull origin main # Fetch from and integrate with another repository or a local branch

## Changing the default url of git

git remote -v # Manage set of tracked repositories

git remote set-url origin
<< 'define'

Change URLs for the remote. Sets first URL for remote <name> that matches regex <oldurl> (first URL if no <oldurl> is given) to <newurl>. If <oldurl> doesn’t match any URL, an error occurs and nothing is changed.


## Task 4: Stage and Commit
Stage your file

git add git_command.md # Add file contents to the index

Check what's staged

git status

Commit with a meaningful message

git commit -m "Added basic git commands"

View your commit history

git log --oneline

## Task 5: Make More Changes and Build History

Add more commands to git-commands.md, e.g., git add, git commit, git checkout.
Repeat add → commit 3 times:

git checkout -b git_advance_command.md

git switch master

vim git_command.md 

git add git_command.md

git commit -m "Added more basic commands."


git log --oneline
![oneline ](https://github.com/user-attachments/assets/f5e96474-5b3c-492d-8fd1-45558e94d477)






