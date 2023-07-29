interface SkinChromas {
    uuid: string;
    displayName: string;
    displayIcon: any;
    fullRender: string;
    swatch: any;
    streamedVideo: any;
    assetPath: string;
}
interface SkinLevels {
    uuid: string;
    displayName: string;
    levelItem: any;
    displayIcon: string;
    streamedVideo: any;
    assetPath: string;
}
interface SkinsItem {
    uuid: string;
    displayName: string;
    themeUuid: string;
    contentTierUuid: string;
    displayIcon: string;
    wallpaper: any;
    assetPath: string;
    chromas: Array<SkinChromas>;
    levels: Array<SkinLevels>;
}
interface ShopData {
    cost: number;
    category: string;
    categoryText: string;
    gridPosition: object;
    canBeTrashed: boolean;
    image: any;
    newImage: string;
    newImage2: any;
    assetPath: string;
}
interface DamageRangesItem {
    rangeStartMeters: number;
    rangeEndMeters: number;
    headDamage: number;
    bodyDamage: number;
    legDamage: number;
}
interface WeaponStats {
    fireRate: number;
    magazineSize: number;
    runSpeedMultiplier: number;
    equipTimeSeconds: number;
    reloadTimeSeconds: number;
    firstBulletAccuracy: number;
    shotgunPelletCount: number;
    wallPenetration: string;
    feature: string;
    fireMode: any;
    altFireType: string;
    adsStats: {
        zoomMultiplier: number;
        fireRate: number;
        runSpeedMultiplier: number;
        burstCount: number;
        firstBulletAccuracy: number;
    };
    altShotgunStats: any;
    airBurstStats: any;
    damageRanges: Array<DamageRangesItem>;
}
interface DataItem {
    uuid: string;
    displayName: string;
    category: string;
    defaultSkinUuid: string;
    displayIcon: string;
    killStreamIcon: string;
    assetPath: string;
    weaponStats: WeaponStats;
    shopData: ShopData;
    skins: Array<SkinsItem>;
}
export interface GetWeaponsResponse {
    status: number;
    data: Array<DataItem>;
}
export {};
