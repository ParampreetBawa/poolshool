class UrlMappings {

	static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }
        "/user/register"{
            parse = true
            controller = 'user'
            action = [POST:"register"]
        }

        "/user/invite" {
            parse = true
            controller = 'user'
            action = [GET:"invite"]
        }
        "/user/create" {
            parse = true
            controller = 'user'
            action = [POST:'create']
        }

        "/carpool/postCarPool" {
            parse = true
            controller = 'carPool'
            action = [POST:'postCarPool']
        }

        "/"(view:"/html/home.html")
        "500"(view:'/error')
	}
}
