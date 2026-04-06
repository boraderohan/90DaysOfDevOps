FROM alpine:3.19

WORKDIR /app

RUN apk add --no-cache openjdk17-jdk && adduser -D appuser

COPY . /app

RUN javac Hello.java

USER appuser

CMD ["java", "Hello"]