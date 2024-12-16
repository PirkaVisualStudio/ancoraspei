import { defineMiddleware } from "astro:middleware";
import { projectAuth } from "./firebase/config";

export const onRequest = defineMiddleware((context, next) =>
    {
        const currentUser = projectAuth.currentUser;
        const { pathname } = context.url;

       
        
    

            if(currentUser){
                context.locals.userEmail=currentUser.email;
            }

            if(currentUser && (pathname === "/users/create" || pathname === "/users/login")) {
                return context.redirect("/");
            }

        return next()
})