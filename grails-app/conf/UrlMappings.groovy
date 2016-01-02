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

        "/"(view:"/html/home.html")
        "500"(view:'/error')
	}
}
