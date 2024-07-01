import "reflect-metadata";
import { Container } from "inversify";
import DefaultElementProvider from "../io/ep/defaultProvider";
import CustomElementProvider from "../io/ep/customProvider";

const container = new Container();
container.bind(DefaultElementProvider).to(DefaultElementProvider).inSingletonScope();
container.bind(CustomElementProvider).to(CustomElementProvider).inSingletonScope();
export default container;