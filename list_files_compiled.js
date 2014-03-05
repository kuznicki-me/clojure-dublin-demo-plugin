if(!lt.util.load.provided_QMARK_('lt.plugins.list-files')) {
goog.provide('lt.plugins.list_files');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.objs.tabs');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.list_files.hello_panel = (function hello_panel(this$){var e__8111__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),"Hello from list-files"], null));var seq__8340_8346 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__8341_8347 = null;var count__8342_8348 = 0;var i__8343_8349 = 0;while(true){
if((i__8343_8349 < count__8342_8348))
{var vec__8344_8350 = cljs.core._nth.call(null,chunk__8341_8347,i__8343_8349);var ev__8112__auto___8351 = cljs.core.nth.call(null,vec__8344_8350,0,null);var func__8113__auto___8352 = cljs.core.nth.call(null,vec__8344_8350,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8351,func__8113__auto___8352);
{
var G__8353 = seq__8340_8346;
var G__8354 = chunk__8341_8347;
var G__8355 = count__8342_8348;
var G__8356 = (i__8343_8349 + 1);
seq__8340_8346 = G__8353;
chunk__8341_8347 = G__8354;
count__8342_8348 = G__8355;
i__8343_8349 = G__8356;
continue;
}
} else
{var temp__4092__auto___8357 = cljs.core.seq.call(null,seq__8340_8346);if(temp__4092__auto___8357)
{var seq__8340_8358__$1 = temp__4092__auto___8357;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8340_8358__$1))
{var c__7497__auto___8359 = cljs.core.chunk_first.call(null,seq__8340_8358__$1);{
var G__8360 = cljs.core.chunk_rest.call(null,seq__8340_8358__$1);
var G__8361 = c__7497__auto___8359;
var G__8362 = cljs.core.count.call(null,c__7497__auto___8359);
var G__8363 = 0;
seq__8340_8346 = G__8360;
chunk__8341_8347 = G__8361;
count__8342_8348 = G__8362;
i__8343_8349 = G__8363;
continue;
}
} else
{var vec__8345_8364 = cljs.core.first.call(null,seq__8340_8358__$1);var ev__8112__auto___8365 = cljs.core.nth.call(null,vec__8345_8364,0,null);var func__8113__auto___8366 = cljs.core.nth.call(null,vec__8345_8364,1,null);lt.util.dom.on.call(null,e__8111__auto__,ev__8112__auto___8365,func__8113__auto___8366);
{
var G__8367 = cljs.core.next.call(null,seq__8340_8358__$1);
var G__8368 = null;
var G__8369 = 0;
var G__8370 = 0;
seq__8340_8346 = G__8367;
chunk__8341_8347 = G__8368;
count__8342_8348 = G__8369;
i__8343_8349 = G__8370;
continue;
}
}
} else
{}
}
break;
}
return e__8111__auto__;
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.list-files","list-files.hello","lt.plugins.list-files/list-files.hello",1840531553),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"list-files.hello","list-files.hello",1257931614)], null),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lt.plugins.list-files","on-close-destroy","lt.plugins.list-files/on-close-destroy",2406981404),null,new cljs.core.Keyword("lt.plugins.list-files","command-out","lt.plugins.list-files/command-out",4091703041),null], null), null),new cljs.core.Keyword(null,"name","name",1017277949),"list-files",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$){return lt.plugins.list_files.hello_panel.call(null,this$);
}));
lt.plugins.list_files.__BEH__on_close_destroy = (function __BEH__on_close_destroy(this$){var temp__4092__auto___8371 = new cljs.core.Keyword("lt.objs.tabs","tabset","lt.objs.tabs/tabset",3378091779).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$));if(cljs.core.truth_(temp__4092__auto___8371))
{var ts_8372 = temp__4092__auto___8371;if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"objs","objs",1017308622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ts_8372))),1))
{lt.objs.tabs.rem_tabset.call(null,ts_8372);
} else
{}
} else
{}
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"destroy","destroy",2571277164));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.list-files","on-close-destroy","lt.plugins.list-files/on-close-destroy",2406981404),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.list_files.__BEH__on_close_destroy,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.list_files.hello = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.list-files","list-files.hello","lt.plugins.list-files/list-files.hello",1840531553));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"say-hello","say-hello",2265186274),new cljs.core.Keyword(null,"desc","desc",1016984067),"list-files: Say Hello",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),"ls",new cljs.core.Keyword(null,"args","args",1016906831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-l",lt.plugins.list_files.pwd.call(null)], null),new cljs.core.Keyword(null,"obj","obj",1014014057),lt.plugins.list_files.hello], null));
return lt.objs.tabs.add_or_focus_BANG_.call(null,lt.plugins.list_files.hello);
})], null));
lt.plugins.list_files.pwd = (function pwd(){return lt.objs.files.parent.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.editor.pool.last_active.call(null)))));
});
lt.plugins.list_files.__BEH__command_out = (function __BEH__command_out(this$,out){console.log(new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.list_files.hello)));
return new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.plugins.list_files.hello)).value = out.toString();
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.list-files","command-out","lt.plugins.list-files/command-out",4091703041),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.list_files.__BEH__command_out,new cljs.core.Keyword(null,"desc","desc",1016984067),"Call me back when process finishes",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
}

//# sourceMappingURL=list_files_compiled.js.map