### Task 1: Docker Images

![Docker pull nginx](./images/Docker-pull-nginx.png)

![Docker pull ubuntu](./images/Docker-pull-ubuntu.png)

![Docker pull alpine](./images/Docker-pull-apline.png)

![Docker images list](./images/Docker-images.png)

 1. Compare ubuntu vs alpine- Why is one much smaller

Ans:

- Alpine is tiny(13.1MB) Vs Ubuntu(119MB) because it uses musl libc, BusyBox, and includes minimal tools designed for containers. 

- Ubuntu ships with full GNU tools, glibc and extras for general use.

![Docker inspect](./images/Docker-inspect.png)

![Docker remove image](./images/Docker-images.png)

### Task 2: Image Layers

![Docker image history](./images/Docker-image-history.png)

 2. What do you see?

Ans: 
- The base layer is debian:trixie (87.4MB)
- Followed by RUN and COPY commands adding config/scripts
- Final layers set env vars, expose port 80, and set entrypoint
- Most layers are small (KB), except the base OS layer
- This helps you optimize images — e.g., combine RUN commands or remove unnecessary files to reduce size.

 3. Write in your notes: What are layers and why does Docker use them?

Ans:
- Docker uses layers to break down images into reusable, read-only components. 

- This allows efficient storage and faster builds by reusing unchanged layers across multiple images, minimizing disk usage and speeding up deployment.

### Task 3: Container Lifecycle

![Docker create](./images/Docker-create.png)

![Docker start](./images/Docker-start.png)

![Docker pause](./images/Docker-pause.png)

![Docker unpause](./images/Docker-unpause.png)

![Docker stop](./images/Docker-stop.png)

![Docker restart](./images/Docker-restart.png)

![Docker kill](./images/Docker-kill.png)

![Docker remove](./images/Docker-rm.png)

### Task 4: Working with Running Containers

![Docker Detached](./images/Docker-detached.png)

![Docker Logs](./images/Docker-logs.png)

![Docker real-time logs](./images/Docker-real-time-logs.png)

![Docker single command](./images/Docker-exec-single-command.png)

![Docker inspect](./images/Docker-Ip-ports-mounts.png)

### Task 5: Clean up

![Docker stop command](./images/Docker-stop-command.png)

![Docker listed deleted](./images/Docker-listed-exited.png)

![Docker purne image](./images/Docker-prune-image.png)

![Docker disk space](./images/Docker-disk-space.png)


