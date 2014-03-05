(ns lt.plugins.list-files
  (:require [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.files :as files]
            [lt.objs.editor.pool :as pool]
            [lt.objs.proc :as proc]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))



(defui hello-panel [this]
  [:textarea "Hello from list-files"])



(object/object* ::list-files.hello
                :tags [:list-files.hello]
                :behaviors #{::on-close-destroy ::command-out}
                :name "list-files"
                :init (fn [this]
                        (hello-panel this)))



(behavior ::on-close-destroy
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [ts (:lt.objs.tabs/tabset @this)]
                        (when (= (count (:objs @ts)) 1)
                          (tabs/rem-tabset ts)))
                      (object/raise this :destroy)))



(def hello (object/create ::list-files.hello))

(cmd/command {:command :say-hello
              :desc "list-files: Say Hello"
              :exec (fn []
                      (proc/exec {:command "ls"
                                  :args    ["-l" (pwd)]
                                  :obj     hello})

                      (tabs/add-or-focus! hello))})

(defn pwd [] (files/parent
         (-> @(pool/last-active) :info :path)))


(behavior ::command-out
          :desc "Call me back when process finishes"
          :triggers #{:proc.out}
          :reaction (fn [this out]
                      (.log js/console (:content @hello))
                       (set! (.-value (:content @hello)) (.toString out))))
