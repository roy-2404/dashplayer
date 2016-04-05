
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
      <video data-dashjs-player autoplay src="http://192.168.0.5:1935/vod/smil:Test.smil/manifest.mpd" controls></video>
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
                  DATE: Sun Apr 03 23:50:57 EDT 2016
                  SOURCE: /Users/alankritj/Documents/dashplayer/app/views/index.scala.html
                  HASH: 4f9c017a38c1e30525da43bcd67adae550273089
                  MATRIX: 827->0|867->14|881->20|952->71
                  LINES: 32->1|32->1|32->1|32->1
                  -- GENERATED --
              */
          