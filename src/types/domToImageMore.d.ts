declare module 'dom-to-image-more' {
    const domtoimage: {
      toPng(node: HTMLElement, options?: any): Promise<string>;
      toJpeg(node: HTMLElement, options?: any): Promise<string>;
      toBlob(node: HTMLElement, options?: any): Promise<Blob>;
      toPixelData(node: HTMLElement, options?: any): Promise<Uint8ClampedArray>;
      toSvg(node: HTMLElement, options?: any): Promise<string>;
    };
    export default domtoimage;
  }
  