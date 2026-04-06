# Stage 1

FROM golang:1.22 AS builder

WORKDIR /app

COPY . .

RUN go build -o myapp main.go

CMD ["./myapp"]

# Stage 2 

FROM alpine

WORKDIR /root/

COPY --from=builder /app/myapp .

CMD ["./myapp"]
