# Use OpenJDK 21 as the base image
FROM openjdk:21-slim

# Set working directory
WORKDIR /app

# Copy the JAR file into the container (replace "myapp.jar" with the actual name if needed)
COPY target/*.jar app.jar

# Expose the port your application runs on (typically 8080 for Spring Boot)
EXPOSE 8080

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
