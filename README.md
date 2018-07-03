# Online Services

## Development Setup

### Prerequisites

* JDK 1.8 or later

### Build Backend

1. Execute `./mvnw clean install`.

### Run Backend

1. Execute `java -jar online-services-web/target/online-services-web-*.jar`.
1. You can verify that the application is running by opening the following URL in your browser: _http://localhost:8080/actuator/health_

### Build and Run Frontend

See [UI module's README](online-services-ui/README.md)


## Development Conventions

### Formatting

Formatting is defined by `.editorconfig` file. 

To apply this formatting automatically by IntelliJ IDEA, you need to do the following:

1. Install [EditorConfig plugin](https://plugins.jetbrains.com/plugin/7294-editorconfig)
1. Enable EditorConfig support on the *Settings -> Editor -> Code Style* page.    
