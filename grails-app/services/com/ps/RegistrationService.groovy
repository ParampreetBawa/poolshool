package com.ps

import com.ps.security.CarPool
import com.ps.security.Registration
import com.ps.security.Role
import com.ps.security.User
import com.ps.security.UserRole
import org.springframework.transaction.annotation.Transactional

/**
 * Created by parampreet on 12/31/15.
 */
class RegistrationService {
    def emailService
    def springSecurityService
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
        Role role = Role.findByAuthority('ROLE_USER')
        UserRole userRole = new UserRole(user: user,role:role)
        userRole.save(flush: true)

        user
    }

    def postCarPool(String to, String from, Boolean isCarOwner) {
        User user = springSecurityService.currentUser as User
        CarPool carPool = new CarPool(toAddress: to,fromAddress: from,isCarOwner: isCarOwner,user:user).save()
        carPool
    }
}
