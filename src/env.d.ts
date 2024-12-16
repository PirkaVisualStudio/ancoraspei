/// <reference path="../.astro/types.d.ts" />
// THIS IS CHANGED <reference types="astro/client" />

/// <reference types="@astrojs/image/client" />


declare namespace App {

    interface Locals {
        userEmail: string | null;
    }
}