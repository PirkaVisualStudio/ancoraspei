import { defineAction } from "astro:actions";
import { z } from 'astro:schema';
import { projectAuth } from "../firebase/config";


export const logoutAccount = defineAction 
({
    
    handler: async() => {
await projectAuth.signOut();
},
});
