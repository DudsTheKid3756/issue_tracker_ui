export class AppConstants {
  public static get baseURLs() {
    return { dotnet: "https://localhost:7082", java: "http://localhost:8080" };
  }

  public static get path(): string {
    return "issue";
  }

  public static get APIError(): string {
    return "Could not connect to API. Try again later.";
  }
}
