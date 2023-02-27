/* eslint-disable quote-props */
/* eslint-disable quotes */
interface KakaoProfile {
  nickname?: string;
  thumbnail_image_url?: string;
  profile_image_url?: string;
  is_default_image?: boolean;
}

interface KakaoAccount {
  profile?: KakaoProfile;
  name?: string;
  email?: string;
  birthday?: string;
  gender?: 'male' | 'female';
}

export interface KakaoUser {
  id: number;
  kakao_account?: KakaoAccount;
}
