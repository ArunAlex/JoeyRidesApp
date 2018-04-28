
export interface Schedule {
    title: string;
    startAndEndDate: Date;
    pickupTime: TimeRanges;
    returnTime: TimeRanges;
    locationPickUp: string;
    locationDropOff: string;
    kids: Array<string>;
    reminder: string;
    status: string;
}