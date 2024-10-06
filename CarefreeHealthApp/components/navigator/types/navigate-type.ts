export type ValueOf<T> = T[keyof T];

export type NavigationPropType<T> = {
  screen?: keyof T;
  params?: ValueOf<T>;
};

export type RootStackParamList = {
    // SignStack?: NavigationPropType<SignStackParamList>;
    GymDetail: {gymId: string;};
    MyPoint: undefined;
    MyCoupon: undefined;
    MyFavorite: undefined;
    MyMembership?: {membershipId?: string};
    // ...
};

export type MainTabParamList = {
    Main: undefined;
    DailyExercise: undefined;
    Community: undefined;
    Shop: undefined;
    MyPage: undefined;
};