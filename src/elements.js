(function() {
  let elems = ['a','abbr','acronym','address','applet','area','article','aside','audio','b','base','basefont','bdi','bdo','bgsound','big','blink','blockquote','body','br','button','canvas','caption','center','cite','code','col','colgroup','command','content','data','datalist','dd','del','details','dfn','dialog','dir','div','dl','dt','em','embed','fieldset','figcaption','figure','font','footer','form','frame','frameset','h1','head','header','hgroup','hr','html','i','iframe','image','img','input','ins','isindex','kbd','keygen','label','legend','li','link','listing','main','map','mark','marquee','menu','menuitem','meta','meter','multicol','nav','nextid','nobr','noembed','noframes','noscript','object','ol','optgroup','option','output','p','param','picture','plaintext','pre','progress','q','rb','rp','rt','rtc','ruby','s','samp','script','section','select','shadow','slot','small','source','spacer','span','strike','strong','style','sub','summary','sup','table','tbody','td','template','textarea','tfoot','th','thead','time','title','tr','track','tt','u','ul','var','video','wbr','xmp'];
  for(let indx in elems) {
    window._name = elems[indx];
    window._name = window._name[0].toUpperCase() + window._name.slice(1);
    elems[indx] = window._name;
    Ignite[window._name] = class extends Ignite.Element {
      constructor(args) {
        super(args);
      }
      render(target) {
        this.transform(document.createElement(elems[indx]));
        return this.plainRender(target);
      }
    }
    Object.defineProperty(Ignite[window._name], "name", { value: window._name });
  }
})(window, document);
