import * as React from 'react';
import * as ReactDom from 'react-dom';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import Hero from './components/Hero';
import { IHeroProps } from './components/IHeroProps';

export interface IHeroWebPartProps {
  title: string;
}

export default class HeroWebPart extends BaseClientSideWebPart<IHeroWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IHeroProps> = React.createElement(
      Hero,
      { title: this.properties.title }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }
}
