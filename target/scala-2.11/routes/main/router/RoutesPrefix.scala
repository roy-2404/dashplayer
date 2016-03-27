
// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/abroy240484/Documents/VideoStreaming/server/conf/routes
// @DATE:Fri Mar 11 14:31:42 EST 2016


package router {
  object RoutesPrefix {
    private var _prefix: String = "/"
    def setPrefix(p: String): Unit = {
      _prefix = p
    }
    def prefix: String = _prefix
    val byNamePrefix: Function0[String] = { () => prefix }
  }
}
