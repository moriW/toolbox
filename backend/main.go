package backend

import (
	"github.com/gin-gonic/gin"
)

const ()

func StartHttpServer() {
	httpEngine := gin.New()
	httpEngine.Use(gin.Recovery())
	httpEngine.Use(gin.Logger())

}

func main() {
	StartHttpServer()
}
