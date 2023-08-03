FROM maven:3.8.5-openjdk-17 AS build
COPY . /target
WORKDIR /target
RUN mvn clean package -DskipTests

FROM openjdk:17.0.1-jdk-slim
COPY /target/ipl-dashboard-0.0.1-SNAPSHOT.jar demo.jar
EXPOSE 8080
ENTRYPOINT ["java","--jar","demo.jar"]
