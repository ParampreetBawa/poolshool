package com.ps

import com.ps.security.Registration
import org.springframework.transaction.annotation.Transactional

/**
 * Created by parampreet on 12/31/15.
 */
class RegistrationService {
    def register(String email) {
        Registration registration = Registration.findByEmail(email)
        if(registration) {
            return 0
        }
        
        registration = new Registration(email:email,invitationCode: UUID.randomUUID().toString())
        registration.save(failOnError: true)
        return 1
    }
}
