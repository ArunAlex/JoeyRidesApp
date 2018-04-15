
export interface Schedule {
    title: string;
    startEndDate: Date;
    pickupTime: TimeRanges;
    returnTime: TimeRanges;
    locationPickUp: string;
    locationDropOff: string;
    kids: string;
    reminder: string;
}