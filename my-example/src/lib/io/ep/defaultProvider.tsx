import Image, { ImageProps } from "next/image";
import React, { ReactElement, JSXElementConstructor, HTMLProps } from "react";
import parse from 'html-react-parser'
import "reflect-metadata";
import { injectable } from "inversify";

export interface IElementProvider {
    text(props: any) : React.JSX.Element
    image(props: ImageProps | any) : React.ReactElement
    button(props: HTMLProps<HTMLElement> | any) : React.ReactElement
    rt(props: any) : React.ReactElement
}

@injectable()
export default class DefaultElementProvider implements IElementProvider {
    rt(props: any): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        return (<>{parse(props.value)}</>);
    }
    
    button(props: HTMLProps<HTMLElement> | any): ReactElement<any, string | JSXElementConstructor<any>> {
        return(<button>{props.value}</button>)
    }

    image(props: ImageProps | any): ReactElement<any, string | JSXElementConstructor<any>> {
        return(<Image {...props} />); 
    }

    text(props: any): ReactElement<any, string | JSXElementConstructor<any>> {
        return (<>{parse(props.value)}</>);
    }
}

