import { MbscDataControlMixin, ElementRef, NgZone, MbscOptionsService } from './frameworks/angular';
import { Eventcalendar, MbscEventcalendarOptions } from './presets/eventcalendar';
import { MbscCalBase } from './classes/calbase.angular';
export { MbscEventcalendarOptions };
export declare class MbscEventcalendar extends MbscCalBase implements MbscDataControlMixin {
    optionService: MbscOptionsService;
    _instance: Eventcalendar;
    data: Array<{
        start?: Date;
        end?: Date;
        d?: Date | string | number;
        text?: string;
        color?: string;
        allDay?: boolean;
    }>;
    layout: 'liquid' | 'fixed';
    showEventCount: boolean;
    eventBubble: boolean;
    inlineOptions(): MbscEventcalendarOptions;
    options: MbscEventcalendarOptions;
    constructor(initialElem: ElementRef, zone: NgZone, optionService: MbscOptionsService);
    refreshData(newData: any): void;
    ngAfterViewInit(): void;
    isMulti: boolean;
    previousData: Array<any>;
    noDataCheck: boolean;
    setNewValue(v: any): void;
    cloneData(): void;
    ngOnInit(): void;
    ngDoCheck(): void;
}
export declare class MbscEventcalendarComponent extends MbscEventcalendar {
    data: Array<{
        start?: Date;
        end?: Date;
        d?: Date | string | number;
        text?: string;
        color?: string;
        allDay?: boolean;
    }>;
    options: MbscEventcalendarOptions;
    constructor(initialElem: ElementRef, zone: NgZone, optionService: MbscOptionsService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
