### Docker Cheat-Sheet

### Basic Commands
- docker ps    # List running containers
- docker ps -a  # List all containers
- docker images # List images
- docker system df # show disk usage 
- docker info      # show system-wide info

### Build & Run

- docker build -t myapp .  # Build image from
- docker run -d -p 8080:80 myapp # Run container in background, map port
- docker run -it myapp bash # Run interactively with shell
- docker exec -it <container> bash # Enter running container

### Clean up

- docker rm <container>  # Remove Stopped container
- docker rmi <image>     # Remove unused  containers, networks, images
- docker system prune -a # Also remove unused images (including tagged ones)
- docker volume prune    # Remove unused volumes

### Networks & Volumes
- docker network ls      # List networks
- docker network inspest <network> # see connected containers
- docker volume ls       # List volumes 
- docker volume inspect <volume> # volume details 

### Compose (docker-compose.yml)

- docker compose up       # start services
- docker compose up -d    # start in background 
- docker compose down     # Stop and remove containers 
- docker compose down -v  # Also remove volumes (deletes data)
- docker compose logs     # View logs
- docker compose build    # Rebuild images

### Dockerfile 


| Instruction         | Purpose |
|---------------------|---------|
| `FROM <image>`       | Sets the base image (e.g., `node:18-alpine`) |
| `WORKDIR`          | Sets the working directory inside the container |
| `COPY`             | Copies files from host → container *(prefer over `ADD`)* |
| `RUN`              | Executes commands during build (e.g., `npm install`) |
| `EXPOSE`           | Documents which port the app listens on *(doesn’t publish it)* |
| `CMD ["cmd", "arg"]` | Sets the default runtime command |
| `ENTRYPOINT ["cmd"]` | Sets the executable + args *(often used with `CMD`)* |
