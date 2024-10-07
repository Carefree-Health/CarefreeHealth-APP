export default interface KakaoOauthResponseDto {
    accessToken: string;
    refreshToken: string;
    tokenType?: string;
    idToken?: string;
    accessTokenExpiresAt: number; // unix
    refreshTokenExpiresAt: number; // unix
    accessTokenExpiresIn: number; // seconds
    refreshTokenExpiresIn: number; // seconds
    scopes: string[];
};