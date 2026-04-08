# Day 37 – Docker Revision & Cheat Sheet

## Goal
Take a **one-day pause** to consolidate everything from Days 29–36 so Docker actually sticks.

## Expected Output
- A markdown file: `docker-cheatsheet.md`
- A markdown file: `day-37-revision.md` with self-check answers

---

## Self-Assessment Checklist
Mark yourself honestly — **can do**, **shaky**, or **haven't done**:

- [✔️] Run a container from Docker Hub (interactive + detached)
- [✔️] List, stop, remove containers and images
- [✔️] Explain image layers and how caching works
- [✔️] Write a Dockerfile from scratch with FROM, RUN, COPY, WORKDIR, CMD
- [✔️] Explain CMD vs ENTRYPOINT
- [✔️] Build and tag a custom image
- [✔️] Create and use named volumes
- [✔️] Use bind mounts
- [✔️] Create custom networks and connect containers
- [✔️] Write a docker-compose.yml for a multi-container app
- [✔️] Use environment variables and .env files in Compose
- [✔️] Write a multi-stage Dockerfile
- [✔️] Push an image to Docker Hub
- [✔️] Use healthchecks and depends_on

---

## Quick-Fire Questions
Answer from memory, then verify:
1. What is the difference between an image and a container?
Ans: This is the most important difference:
- Image: A read-only template that has app code, dependencies,and OS layers.
- Like a "blueprint" or "Snapshot" there is no running state.
- Made from a "Dockerfile".

- Container: An image that is currently running.
- Has its own writable layer and runtime state, Which includes processes, files, and the network.
- Made when you type: "docker run <image>"

- You can run more than one container from the same image, and each onewill be separate and independent.

2. What happens to data inside a container when you remove it?
Ans: Once a container is deleted:
- All the data contianed in the writable layer of that container is also permanently lost. 
- This includes:
- Runtime-created or modified files
- Logs, uploads, and temporary files
- To reatain your data use a Docker volumes or bind mounts, which are retained regardless of whether or not the container has been deleted.

3. How do two containers on the same custom network communicate?
Ans: Containers can communicate with each other over the same docker network using the service name as a hostname; Docker's inbuilt DNS translates the service (mongo) into an internal Docker Ip - no need for hard-coded IP addresses.
- By default, Docker creates a custom bridge network when using docker compose.
- To connect to a containerm, use the format service-name:port, This will connect to the correct container.
- Data is transfered securely between these containers on the same network and cannot be accessed by other networks
- Custom networks porvide an additional layer of isolation and give users more control over their Docker environment.
- Do not forget to always use service names as they will provide protability, scalability, and durability.

4. What does `docker compose down -v` do differently from `docker compose down`?
Ans: The command docker compose down -v will take down all container instances, along with their associated storage (volumes) and associated (networks).
- When you run docker compose down it only stops and removes running conatainers and their assocaited networks. Leaving volumes intact.
- Removing volume storage can come in handy when doing a rebuild of your environment; this will help ensure that there aren't any problems caused by old, reduntdant or stale data during Development or Testing.
- When working with volumes, you may likely need to use a docker compose volumes with one of your own services.

5. Why are multi-stage builds useful?
Ans: The ability to divide you build into many parts using multi-stage builds helps you keep your source code as well as your developer tools out of the final image. This allows you to achieve the following things:
- smaller imgaes - reduced bloat in images that contain both build tools and source. 
- More secure images by having a smaller number of packages, which therefore have fewer security issues.
- Faster deployments - a smaller image will take less time to download and start 
- A more "Clean" production image because only the components neccesary at runtime will be included in the final image.
- Multi-stage builds are the perfect solution for languages that require building or bundling prior to executionm such as Node.js, Go and Rust.

6. What is the difference between `COPY` and `ADD`?
Ans:The primary distinction between the COPY and ADD commands in a Dockerfile is that while COPY offers simplicity and predictability, ADD comes with additional features, including auto-extracting tar files and using remote URLs, that may produce unexpected results.

Use COPY to:
- Add files or directories to your image that exist on your host
- Get three levels of visibility into what happens—COPY serves up files exactly as they are on your host

Use ADD only if:
- You want to auto-extract local tar files
- You want to fetch files from a remote URL (this is not recommended; the recommends using curl or wget in combination with your RUN command) 

7. What does `-p 8080:80` mean?
Ans: When specifying -p 8080:80, it means you are mapping the host's port 8080 to the container's port 80. 

- On the left side of the colon is the port on your host machine (laptop/server), and on the right side of the colon is a port in the container.

- For example, if your application runs in the container on port 80 (like Nginx), you will be able to access it from your host using http://localhost:8080.

- There are some useful reasons to use -p in this way:
- You cannot access a container from an outside source, so using -p essentially gives you a "window" into the container from your host.
- In addition, you can use -p to avoid port conflicts (for example, if you have multiple applications running that are each trying to use port 80).

8. How do you check how much disk space Docker is using?
Ans: To check how much disk space Docker is using, run:
- docker system df
- docker system df -v
- This will give you a summary of disk usage of images, containers, andlocal volumes; as well as total size used and size that can be freed up.
- To get more detail about the usage you can add the `-v` flag:
- This will break down usage by image, container, and volume, and will display shared vs unique space

---

## Build Your Docker Cheat Sheet
Create `docker-cheatsheet.md` organized by category:
- **Container commands** — run, ps, stop, rm, exec, logs
- **Image commands** — build, pull, push, tag, ls, rm
- **Volume commands** — create, ls, inspect, rm
- **Network commands** — create, ls, inspect, connect
- **Compose commands** — up, down, ps, logs, build
- **Cleanup commands** — prune, system df
- **Dockerfile instructions** — FROM, RUN, COPY, WORKDIR, EXPOSE, CMD, ENTRYPOINT

Keep it short — one line per command, something you'd actually reference on the job.

---

## Revisit Weak Spots
Pick **2 topics** you marked as shaky and redo the hands-on tasks from that day.

- Revisited topics images layers and caching works
- CMD VS ENTRYPOINT
- Wrire a docker compose.yml for a multi-container app
- write a multi-state Dockerfile.
- create custom networks and connect containers



---

## Suggested Flow (45–60 minutes)
- 10 min: go through the checklist honestly
- 10 min: answer quick-fire questions
- 20 min: build your cheat sheet
- 10 min: redo one weak area

---

## Submission
1. Add `docker-cheatsheet.md` and `day-37-revision.md` to `2026/day-37/`
2. Commit and push to your fork

---

## Learn in Public
Share your Docker cheat sheet on LinkedIn — help others revise too.

`#90DaysOfDevOps` `#DevOpsKaJosh` `#TrainWithShubham`

Happy Learning!
**TrainWithShubham**

