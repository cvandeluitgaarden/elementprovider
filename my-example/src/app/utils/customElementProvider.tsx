import { ReactElement, JSXElementConstructor, HtmlHTMLAttributes, HTMLProps } from "react";
import DefaultElementProvider from "./defaultElementProvider";
import Image, { ImageProps } from "next/image";

export default class CustomElementProvider extends DefaultElementProvider {

    button(props: HTMLProps<HTMLElement>): ReactElement<any, string | JSXElementConstructor<any>> {
        return(<a href="#">{props.title}</a>)
        // return super.button(props);
    }

    image(props: ImageProps): ReactElement<any, string | JSXElementConstructor<any>> {
        return (<Image {...props} width={1000} height={1000}  alt={"Custom" + props.alt} />);
    }

    text(text: string): ReactElement<any, string | JSXElementConstructor<any>> {
        return (<span style={{color: 'red'}}>{super.text(text)}</span>);
    }
}