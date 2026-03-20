# Day 29 – Introduction to Docker

## Task
Today's goal is to **understand what Docker is and run your first container**.

You will:
- Learn why containers exist and how they differ from VMs
- Install Docker on your machine
- Run and explore containers from Docker Hub

---

## Expected Output
- A markdown file: `day-29-docker-basics.md`
- Screenshots of your running containers

---

## Challenge Tasks

### Task 1: What is Docker?
Research and write short notes on:
- What is a container and why do we need them?

Ans: A container in the context of Docker is a lightweight, portable package that includes everything neededto run an application-code, runtime, libraries, and system tools.

- Think of container like a mini isolated environment:
- It runs your app
- It has all dependencies bundled
- It behaves the same no matter where you run it (you laptop, a server, or the cloud)

- Here are the main reasons:

- Consistency across environments: containers solve this by ensuring the app runs the same everywhere.

- Isolation: Each container runs independently:
- No conflicts between apps
- Different version of software can coexist.

- Lightweight 
- share the host OS kernal
- Start very fast
- Usse fewer resources

- Easy deployment
- With docker, you can:
- Build once
- Run anywhere (local, cloud, production)

- scalability
- You can quickly spin up multiple containers to handle more traffice

- Simplified dependency management
- All dependencies are packaged inside the container no need to install manually.

- Containers vs Virtual Machines — what's the real difference?

Ans:The key difference is how they virtualize resources:
- Virtual Machine(VMs): Virtualize hardware. Each VM runs a full OS on top of a hypervisor, making them heavier and slower to start.

- Containers: Virtualize the OS. Multiple containers sare the host OS kernel, so they are lightweight, start almost instantly, and use fewer resources.

- What is the Docker architecture? (daemon, client, images, containers, registry)

Ans: Docker architecture is built around a client-server model with components that work together to build, ship, and run containers.

### Docker client:
- The user interface to Docker.
- You type commands like docker run or docker build.
- communicates with the Docker Daemon.

### Docker Daemon
- The server-side component.
- Responsible for building, running, and mananging contaiers.
- Listens for requests from the client and interacts with the OS to manage container resources.

### Docker Images
- Read-only templates used to create containers.
- can include OS libraries, dependencies and application code.
- Built via Dockerfile.

### Docker Containers
- Running instances of images.
- Encapsulate the application and its environment.
- Lightweight because they share the host OS kernel.

### Docker Registry
- Storage and distribution system for Docker images.
- Docker Hub is the default public registry, private registries can also be used.
- Pulls images to the host or Pushes newly built images for sharing.

Draw or describe the Docker architecture in your own words.

Ans: ![Docker Architecture]()/c/Users/rohan/Downloads/Docker_Architecture.png
---

### Task 2: Install Docker
1. Install Docker on your machine (or use a cloud instance)
2. Verify the installation
3. Run the `hello-world` container
4. Read the output carefully — it explains what just happened


---

### Task 3: Run Real Containers
1. Run an **Nginx** container and access it in your browser
2. Run an **Ubuntu** container in interactive mode — explore it like a mini Linux machine
3. List all running containers
4. List all containers (including stopped ones)
5. Stop and remove a container

---

### Task 4: Explore
1. Run a container in **detached mode** — what's different?
2. Give a container a custom **name**
3. Map a **port** from the container to your host
4. Check **logs** of a running container
5. Run a command **inside** a running container

---

## Hints
- `docker run`, `docker ps`, `docker stop`, `docker rm`
- Interactive mode: `-it` flag
- Detached mode: `-d` flag
- Port mapping: `-p host:container`
- Naming: `--name`
- Logs: `docker logs`
- Exec into container: `docker exec`

---

## Why This Matters for DevOps
Docker is the foundation of modern deployment. Every CI/CD pipeline, Kubernetes cluster, and microservice architecture starts with containers. Today you took the first step.

---

## Submission
1. Add your `day-29-docker-basics.md` to `2026/day-29/`
2. Commit and push to your fork

---

## Learn in Public
Share your first Docker container screenshot on LinkedIn.

`#90DaysOfDevOps` `#DevOpsKaJosh` `#TrainWithShubham`

Happy Learning!
**TrainWithShubham**

