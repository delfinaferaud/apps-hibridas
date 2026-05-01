import swaggerAutogen from "swagger-autogen"

const doc = {
    info: {
        title: "Api de series"
    },
    host: "localhost:3333",
    basePath: "/api",
    schemes: ["http"]
}

const endpointsFiles = [
    "./routes/*.js"
]

const swagger = swaggerAutogen()
swagger( "swagger.json", endpointsFiles, doc )