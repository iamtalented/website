(function(){dust.register("errors/404",body_0);var blocks={"body":body_1};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("layouts/master",ctx,null);}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<div class=\"content\"><h1 class=\"content-head is-center\">404</h1><iframe src=\"http://notfound-static.fwebservices.be/404/index.html?&amp;key=7c16795136f42b8299ebd393d5bbeb35\" width=\"100%\" height=\"650\" frameborder=\"0\"></iframe></div>");}return body_0;})();