$.fn.typewriter = function() {
  this.each(function() {
    var c = $(this),
      b = c.html(),
      a = 0,
      d = 0;
      c.html("");
          var e = function() {
            if ("<" == b.substring(a, a + 1)) {
              var f = new RegExp(/<span class="instant"/),
          g = new RegExp(/<span
            class="clear"/);
        if (b.substring(a, b.length).match(f)) a += b.substring(a,
          b.length).indexOf("</span>") + 7;
                  else if (b.substring(a, b.length).match(g)) d = a, a +=
                  b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
                          else
                            for (;
                              ">" != b.substring(a, a + 1);) a++
