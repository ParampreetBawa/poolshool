package com.ps

import com.ps.security.Registration
import com.ps.security.User
import org.springframework.transaction.annotation.Transactional

/**
 * Created by parampreet on 12/31/15.
 */
class RegistrationService {
    def emailService
    def register(String email) {
        Registration registration = Registration.findByEmail(email)
        if(registration) {
            return 0
        }
        
        registration = new Registration(email:email,invitationCode: UUID.randomUUID().toString())
        registration.save(failOnError: true)
        return 1
    }

    def sendInvitations() {
        List<Registration> registrations = Registration.findAll()
        registrations.each {
            emailService.sendRegistrationEmail(it)
            it.delete()
        }
    }

    def create(String invitationId,firstName,lastName){
        Registration registration = Registration.get(invitationId)
        String email = registration.email
        User user = new User(email,'register',email)
        user.firstName = firstName
        user.lastName = lastName
        user.save(flush: true)
        println(user)
        user
    }
}
