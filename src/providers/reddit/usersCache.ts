import { User } from "@devvit/public-api";
import { RedditApi } from "./api";

export interface TelegramUserProfile {
  fullName: string;
  firstName: string;
  lastName: string;
  username?: string;
}

/**
 * Helper utility to fetch a user object
 */
export class UsersCache {
  private userCache: Record<string, User> = {};
  private api: RedditApi;

  constructor(api: RedditApi) {
    this.api = api;
  }

  public async getUser(userId: string) {
    if (this.userCache[userId]) {
      return this.userCache[userId];
    }

    const user = await this.api.getUser(userId);

    this.userCache[userId] = user;

    return this.userCache[userId];
  }
}
