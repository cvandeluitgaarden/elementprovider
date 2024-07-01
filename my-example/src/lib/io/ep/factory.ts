"use client"

import container from "@/lib/di/container";
import DefaultElementProvider, { IElementProvider } from "./defaultProvider";
import CustomElementProvider from "./customProvider";


export const elementProviders = [DefaultElementProvider, CustomElementProvider];

export default function getElementProvider() : IElementProvider {
    console.log(process.env.ELEMENT_PROVIDER);

    if(!process.env.ELEMENT_PROVIDER || process.env.ELEMENT_PROVIDER == '') {
        return container.get(DefaultElementProvider);
    }
   
    return container.get(CustomElementProvider);
}
