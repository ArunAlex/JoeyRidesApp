import { ElementRef, NgZone, NgControl, EventEmitter, MbscInputService, MbscOptionsService } from './frameworks/angular';
import { RangePicker, MbscRangeOptions } from './presets/range';
import { MbscCalBase } from './classes/calbase.angular';
export { MbscRangeOptions };
export declare class MbscRange extends MbscCalBase {
    optionService: MbscOptionsService;
    _instance: RangePicker;
    autoCorrect: boolean;
    controls: 'time' | 'date' | 'calendar';
    endInput: string | HTMLElement;
    maxRange: number;
    minRange: number;
    showSelector: boolean;
    startInput: string | HTMLElement;
    fromText: string;
    toText: string;
    onSetDate: EventEmitter<{
        date: Date;
        active: 'start' | 'end';
        control: 'calendar' | 'date' | 'time';
        inst: any;
    }>;
    inlineOptions(): MbscRangeOptions;
    inlineEvents(): MbscRangeOptions;
    options: MbscRangeOptions;
    value: Array<Date>;
    onChangeEmitter: EventEmitter<Array<Date>>;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    setNewValue(v: Array<Date>): void;
    ngAfterViewInit(): void;
}
export declare class MbscRangeComponent extends MbscRange {
    inputIcon: string;
    iconAlign: 'left' | 'right';
    name: string;
    error: boolean;
    errorMessage: string;
    options: MbscRangeOptions;
    placeholder: string;
    constructor(initialElem: ElementRef, zone: NgZone, control: NgControl, inputService: MbscInputService, optionService: MbscOptionsService);
    ngAfterViewInit(): void;
}
