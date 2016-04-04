
// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/abroy240484/Documents/VideoStreaming/dashplayer/conf/routes
// @DATE:Tue Mar 29 00:25:52 EDT 2016


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
