# Day 35 – Multi-Stage Builds & Docker Hub

## Task
Today's goal is to **build optimized images and share them with the world**.

Multi-stage builds are how real teams ship small, secure images. Docker Hub is how you distribute them. Both are interview favourites.

---

## Expected Output
- A markdown file: `day-35-multistage-hub.md`
- Dockerfiles demonstrating multi-stage builds
- An image pushed to your Docker Hub account

---

## Challenge Tasks

### Task 1: The Problem with Large Images
1. Write a simple Go, Java, or Node.js app (even a "Hello World" is fine)
2. Create a Dockerfile that builds and runs it in a **single stage**
3. Build the image and check its **size**

Note down the size — you'll compare it later.

---

### Task 2: Multi-Stage Build
1. Rewrite the Dockerfile using **multi-stage build**:
   - Stage 1: Build the app (install dependencies, compile)
   - Stage 2: Copy only the built artifact into a minimal base image (`alpine`, `distroless`, or `scratch`)
2. Build the image and check its size again
3. Compare the two sizes

Ans: The stage 1 image size was 1.25GB.
- After application of stage 2 image was reduce to 16MB.

Write in your notes: Why is the multi-stage image so much smaller?

Ans: A multi-stage Docker image is smaller because it separates the build environment from the runtime environment. 
- In the first stage, a full Go image is used to compile the application, which includes the compiler, build tools, and dependencies.
- In the second stage, only the compiled binary is copied into minimal base image such as Alpine Linux.
- This removes unnecessary file like compilers, source code, and caches from the final image. 
- As a result, the image becomes much smaller, faster to transfer, more secure and better for production use.


---

### Task 3: Push to Docker Hub
1. Create a free account on [Docker Hub](https://hub.docker.com) (if you don't have one)
2. Log in from your terminal
3. Tag your image properly: `yourusername/image-name:tag`
4. Push it to Docker Hub
5. Pull it on a different machine (or after removing locally) to verify

![Task-3-login](./image/Docker-Hub-login-terminal.png)

---

### Task 4: Docker Hub Repository
1. Go to Docker Hub and check your pushed image
2. Add a **description** to the repository
3. Explore the **tags** tab — understand how versioning works
4. Pull a specific tag vs `latest` — what happens?

![Task-4-pull](./image/Docker-pulled.png)

---

### Task 5: Image Best Practices
Apply these to one of your images and rebuild:
1. Use a **minimal base image** (alpine vs ubuntu — compare sizes)
2. **Don't run as root** — add a non-root USER in your Dockerfile
3. Combine `RUN` commands to **reduce layers**
4. Use **specific tags** for base images (not `latest`)

Check the size before and after.

![Task-before-after](./image/before-after-dockerfile.png)
![Task-5-history](./image/Docker-history.png)

---

## Hints
- Multi-stage: use `FROM ... AS builder` then `COPY --from=builder`
- Login: `docker login`
- Tag: `docker tag local-image:tag username/repo:tag`
- Push: `docker push username/repo:tag`
- Non-root user: `RUN adduser` + `USER`

---

## Submission
1. Add your Dockerfiles and `day-35-multistage-hub.md` to `2026/day-35/`
2. Include the link to your Docker Hub repo
3. Commit and push to your fork

https://hub.docker.com/repository/docker/boraderohan/go-multi-demo/general

---

## Learn in Public
Share your before/after image sizes on LinkedIn — the difference is always impressive.

`#90DaysOfDevOps` `#DevOpsKaJosh` `#TrainWithShubham`

Happy Learning!
**TrainWithShubham**

