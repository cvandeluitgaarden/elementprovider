import { ReactElement, JSXElementConstructor, HTMLProps } from "react";
import DefaultElementProvider from "./defaultProvider";
import Image, { ImageProps } from "next/image";

export default class CustomElementProvider extends DefaultElementProvider {

    button(props:  HTMLAnchorElement): ReactElement<any, string | JSXElementConstructor<any>> {
        return(<a href={props.href.toString()} target={props.target}>{props.text}</a>)
    }

    image(props: ImageProps): ReactElement<any, string | JSXElementConstructor<any>> {
        return (<Image {...props} style={{ borderBlockStyle: "solid", borderColor: "blue" }} />);
    }

    text(props: any): ReactElement<any, string | JSXElementConstructor<any>> {
        return (<>{props.value}</>);
    }

    rt(props : any) : ReactElement<any, string | JSXElementConstructor<any>> {
        return this.text(props);
    }
}