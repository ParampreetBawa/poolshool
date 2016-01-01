package poolshool

class ApplicationFilters {

    def bootstrapService
    static boolean bootstrapDone = false
    def filters = {
        all(controller:'*', action:'*') {
            before = {
                if(!bootstrapDone) {
                    bootstrapService.createAdminUser()
                }

            }
            after = { Map model ->

            }
            afterView = { Exception e ->

            }
        }
    }
}
