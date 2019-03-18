import { ISPList } from './ProductWebPart';

export default class MockHttpClient{
  private static _items: ISPList[] = [{ Title: 'Bhrama', Id: '1'},
                                      { Title: 'Skol', Id: '2'},
                                      { Title: 'Corona', Id: '3'}];

  public static get(): Promise<ISPList[]>{
    return new Promise<ISPList[]>((resolve) => {resolve(MockHttpClient._items);});
  }
}
