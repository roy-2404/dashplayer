
// @GENERATOR:play-routes-compiler
// @SOURCE:/Users/alankritj/Documents/dashplayer/conf/routes
// @DATE:Sun Apr 03 23:50:57 EDT 2016


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
