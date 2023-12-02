export interface IProduct {
    _id?: string,
    description: string,
    images: string[],
    inStock: number,
    price: number,
    title: string,
    size: ISize[],
    slug: string,
    tags: string[],
    type: ITypes[],
    gender: 'men' | 'women' | 'kids' | 'unisex',
}

export type ISize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl'
export type ITypes = 'shirt' | 'pants' | 'hoodies' | 'hats' 