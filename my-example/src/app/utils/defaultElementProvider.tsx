import Image, { ImageProps } from "next/image";
import React, { ReactElement, JSXElementConstructor, HTMLProps } from "react";
import parse from 'html-react-parser'

export interface IElementProvider {
    name: string
    text(text: string) : React.JSX.Element
    image(props: ImageProps) : React.ReactElement
    button(props: HTMLProps<HTMLElement>) : React.ReactElement
}

export default class DefaultElementProvider implements IElementProvider {

    public name : string;

    constructor() {
        this.name = typeof(this);
    }

    button(props: HTMLProps<HTMLElement>): ReactElement<any, string | JSXElementConstructor<any>> {
        return(<button>{props.title}</button>)
    }
    image(props: ImageProps): ReactElement<any, string | JSXElementConstructor<any>> {
        return(<Image {...props} />); 
    }

    text(text: string): ReactElement<any, string | JSXElementConstructor<any>> {
        return (<>{parse(text)}</>);
    }    
    
}

