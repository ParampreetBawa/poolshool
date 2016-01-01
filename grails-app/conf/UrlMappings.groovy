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

        "/"(view:"/index")
        "500"(view:'/error')
	}
}
