import CustomElementProvider from "./customElementProvider";
import DefaultElementProvider, { IElementProvider } from "./defaultElementProvider";

export const elementProviders = [DefaultElementProvider, CustomElementProvider];

export function getElementProvider() : IElementProvider {
    

    for(let key in elementProviders) {
        let inst : IElementProvider = new elementProviders[key];
    }


    
    if(process.env.ELEMENT_PROVIDER != 'Sitecore') {
        
    }

    switch (process.env.ELEMENT_PROVIDER) {
        case 'Sitecore':
            return new CustomElementProvider();
        default:
            return new DefaultElementProvider();
    }
}
