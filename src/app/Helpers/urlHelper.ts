export class UrlHelper {
  public static getId(url: string, index = 3) {
    return new URL(url).pathname.split('/')[index];
  }
}
