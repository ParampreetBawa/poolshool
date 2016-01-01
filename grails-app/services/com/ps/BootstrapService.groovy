package com.ps

import com.ps.security.Role
import com.ps.security.User
import com.ps.security.UserRole

/**
 * Created by parampreet on 1/1/16.
 */
class BootstrapService {
    void createAdminUser() {
        String adminEmailId = 'parampreet.singh+1@tothenew.com'
        User admin = User.findByEmail(adminEmailId)
        if(!admin) {
            admin = new User(adminEmailId,'admin',adminEmailId)
            admin.save(flush: true)
        }

        Role role = Role.findByAuthority('ADMIN')
        if(!role) {
            role = new Role('ADMIN')
            role.save(flush: true)
        }

        UserRole userRole = UserRole.findByUserAndRole(admin,role)
        if(!userRole) {
            userRole = new UserRole(admin,role)
            userRole.save(flush: true)
        }
    }
}
