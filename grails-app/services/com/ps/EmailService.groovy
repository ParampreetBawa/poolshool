package com.ps

import com.ps.security.Registration
import grails.gsp.PageRenderer
import grails.plugin.asyncmail.AsynchronousMailService

/**
 * Created by parampreet on 1/2/16.
 */
class EmailService {
    AsynchronousMailService asynchronousMailService
    PageRenderer groovyPageRenderer
    def sendRegistrationEmail(Registration registration) {
        String body = groovyPageRenderer.render(template: '/template/registration',model: [registration:registration])
        println(">>>>>>"+body)
        sendEmail(registration.email,'Follow link to register to PoolShool.com', body)
    }

    def sendEmail(String email, String subjectFor,String bodyP) {
        asynchronousMailService.sendAsynchronousMail {
            to email
            replyTo 'g@d.com'
            subject subjectFor
            html bodyP
            immediate true
        }
    }
}
