
package views.html

import play.twirl.api._
import play.twirl.api.TemplateMagic._


     object index_Scope0 {
import models._
import controllers._
import play.api.i18n._
import views.html._
import play.api.templates.PlayMagic._
import java.lang._
import java.util._
import scala.collection.JavaConversions._
import scala.collection.JavaConverters._
import play.core.j.PlayMagicForJava._
import play.mvc._
import play.data._
import play.api.data.Field
import play.mvc.Http.Context.Implicit._

class index extends BaseScalaTemplate[play.twirl.api.HtmlFormat.Appendable,Format[play.twirl.api.HtmlFormat.Appendable]](play.twirl.api.HtmlFormat) with play.twirl.api.Template0[play.twirl.api.HtmlFormat.Appendable] {

  /**/
  def apply():play.twirl.api.HtmlFormat.Appendable = {
    _display_ {
      {


Seq[Any](format.raw/*1.1*/("""<script src=""""),_display_(/*1.15*/routes/*1.21*/.Assets.versioned("javascripts/dashProxyClient.js")),format.raw/*1.72*/(""""></script>
<html>
  <body>
    <div>
      <video data-dashjs-player autoplay src="http://160.39.150.221:1935/vod/smil:Test.smil/manifest.mpd" controls></video>
    </div>
  </body>
</html>"""))
      }
    }
  }

  def render(): play.twirl.api.HtmlFormat.Appendable = apply()

  def f:(() => play.twirl.api.HtmlFormat.Appendable) = () => apply()

  def ref: this.type = this

}


}

/**/
object index extends index_Scope0.index
              /*
                  -- GENERATED --
                  DATE: Fri Mar 25 13:53:44 EDT 2016
                  SOURCE: /Users/abroy240484/Documents/VideoStreaming/server/app/views/index.scala.html
                  HASH: 22d69ebbc4055f4be904805872e010cfe4a3e762
                  MATRIX: 827->0|867->14|881->20|952->71
                  LINES: 32->1|32->1|32->1|32->1
                  -- GENERATED --
              */
          