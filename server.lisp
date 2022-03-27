(ql:quickload :hunchentoot)

(defvar *acceptor* (make-instance 'hunchentoot:easy-acceptor
                                  :document-root "~/devel/web/kptbnew/"
                                  :port 4242))

(unless (hunchentoot:started-p *acceptor*)
  (hunchentoot:start *acceptor*))
