// 
// export { MbscCalBase as ɵv } from '../src/js/classes/calbase.angular';
// export { MbscDatetimeBase as ɵw } from '../src/js/classes/datetimebase.angular';
// export { MbscNavItemBase as ɵx, MbscNavigationBase as ɵy } from '../src/js/classes/navigation-base.angular';
// export { MbscNotifyItemService as ɵz, MbscScrollItemBase as ɵba, MbscScrollViewBase as ɵbb } from '../src/js/classes/scrollview-base.angular';
// export { MbscDateBase as ɵj } from '../src/js/datetime.angular';
// export { MbscFormBase as ɵk, MbscFormValueBase as ɵl, MbscInput as ɵn, MbscInputBase as ɵm, MbscRadioGroupBase as ɵp, MbscRadioService as ɵo } from '../src/js/forms.angular';
// export { INPUT_TEMPLATE as ɵi, MbscBase as ɵd, MbscControlBase as ɵf, MbscFrameBase as ɵg, MbscInputService as ɵb, MbscListService as ɵc, MbscOptionsService as ɵa, MbscScrollerBase as ɵh, MbscValueBase as ɵe } from '../src/js/frameworks/angular';
// export { MbscListviewService as ɵq } from '../src/js/listview.angular';
// export { MbscMeasurementBase as ɵr, MbscMeasurementChild as ɵs } from '../src/js/measurement.angular';
// export { MbscNavBaseComponent as ɵt } from '../src/js/navigation.angular';
// export { MbscNumpadBase as ɵu } from '../src/js/numpad.angular';
// declare class MbscModule {
// }

import { mobiscroll } from '../src/js/core/mobiscroll';
import { MbscCard, MbscCardComponent, MbscCardOptions, MbscCardContent, MbscCardFooter, MbscCardHeader, MbscCardSubtitle, MbscCardTitle } from '../src/js/cards.angular';
import { MbscCalendar, MbscCalendarOptions, MbscCalendarComponent } from '../src/js/calendar.angular';
import { MbscColor, MbscColorOptions, MbscColorComponent } from '../src/js/color.angular';
import { MbscDate, MbscTime, MbscDatetime, MbscDateComponent, MbscTimeComponent, MbscDatetimeComponent } from '../src/js/datetime.angular';
import { MbscEventcalendar, MbscEventcalendarComponent } from '../src/js/eventcalendar.angular';
import { MbscForm, MbscRating, MbscInput, MbscDropdown, MbscTextarea, MbscButton, MbscCheckbox, MbscSwitch, MbscStepper, MbscProgress, MbscSlider, MbscRadio, MbscRadioGroup, MbscSegmentedGroup, MbscSegmented, MbscFormOptions } from '../src/js/forms.angular';
import { MbscPage, MbscPageOptions, MbscNote, MbscAvatar } from '../src/js/page.angular';
import { MbscImage, MbscImageOptions, MbscImageComponent, MbscImageItem } from '../src/js/image.angular';
import { MbscListview, MbscListviewSublist, MbscListviewItem, MbscListviewHeader, MbscListviewOptions } from '../src/js/listview.angular';
import { MbscOptionlist, MbscOptionItem, MbscOptionlistOptions } from '../src/js/optionlist.angular';
import { MbscMeasurement, MbscDistance, MbscForce, MbscMass, MbscSpeed, MbscTemperature, MbscTemperatureOptions, MbscMeasurementOptions, MbscSpeedOptions, MbscMassOptions, MbscDistanceOptions, MbscForceOptions, MbscMeasurementComponent, MbscTemperatureComponent, MbscForceComponent, MbscSpeedComponent, MbscMassComponent, MbscDistanceComponent } from '../src/js/measurement.angular';
import { MbscBottomNav, MbscHamburgerNav, MbscTabNav, MbscNavItem, MbscNavOptions } from '../src/js/navigation.angular';
import { MbscNumber, MbscNumberOptions, MbscNumberComponent } from '../src/js/number.angular';
import { MbscNumpad, MbscNumpadDecimal, MbscNumpadDate, MbscNumpadTime, MbscNumpadTimespan, MbscNumpadOptions, MbscNumpadComponent, MbscNumpadDateComponent, MbscNumpadDecimalComponent, MbscNumpadTimeComponent, MbscNumpadTimespanComponent } from '../src/js/numpad.angular';
import { MbscRange, MbscRangeOptions, MbscRangeComponent } from '../src/js/range.angular';
import { MbscScroller, MbscScrollerComponent } from '../src/js/scroller.angular';
import { MbscScrollView, MbscScrollViewItem, MbscScrollViewComponent, MbscScrollViewItemComponent } from '../src/js/scrollview.angular';
import { MbscScrollViewBase } from '../src/js/classes/scrollview-base.angular';
import { MbscSelect, MbscSelectOptions, MbscSelectComponent } from '../src/js/select.angular';
import { MbscTimer, MbscTimerOptions, MbscTimerComponent } from '../src/js/timer.angular';
import { MbscTimespan, MbscTimespanOptions, MbscTimespanComponent } from '../src/js/timespan.angular';
import { MbscTreelist, MbscTreelistOptions, MbscTreelistComponent } from '../src/js/treelist.angular';
import { MbscWidget, MbscWidgetOptions } from '../src/js/widget.angular';
import { MbscCoreOptions } from '../src/js/core/core';
declare class MbscModule {
}
export { mobiscroll, MbscCard, MbscCardComponent, MbscCardContent, MbscCardFooter, MbscCardHeader, MbscCardSubtitle, MbscCardTitle, MbscCalendar, MbscCalendarComponent, MbscColor, MbscColorComponent, MbscDate, MbscTime, MbscDatetime, MbscDateComponent, MbscTimeComponent, MbscDatetimeComponent, MbscEventcalendar, MbscEventcalendarComponent, MbscForm, MbscRating, MbscPage, MbscNote, MbscAvatar, MbscInput, MbscDropdown, MbscTextarea, MbscButton, MbscCheckbox, MbscSwitch, MbscStepper, MbscProgress, MbscSlider, MbscRadio, MbscRadioGroup, MbscSegmentedGroup, MbscSegmented, MbscImage, MbscImageComponent, MbscImageItem, MbscListview, MbscListviewSublist, MbscListviewItem, MbscListviewHeader, MbscOptionlist, MbscOptionItem, MbscMeasurement, MbscDistance, MbscForce, MbscMass, MbscSpeed, MbscTemperature, MbscMeasurementComponent, MbscTemperatureComponent, MbscForceComponent, MbscSpeedComponent, MbscMassComponent, MbscDistanceComponent, MbscBottomNav, MbscHamburgerNav, MbscTabNav, MbscNavItem, MbscNumber, MbscNumberComponent, MbscNumpad, MbscNumpadDecimal, MbscNumpadDate, MbscNumpadTime, MbscNumpadTimespan, MbscNumpadComponent, MbscNumpadDateComponent, MbscNumpadDecimalComponent, MbscNumpadTimeComponent, MbscNumpadTimespanComponent, MbscRange, MbscRangeComponent, MbscScroller, MbscScrollerComponent, MbscScrollView, MbscScrollViewItem, MbscScrollViewComponent, MbscScrollViewItemComponent, MbscSelect, MbscSelectComponent, MbscTimer, MbscTimerComponent, MbscTimespan, MbscTimespanComponent, MbscTreelist, MbscTreelistComponent, MbscWidget, MbscCardOptions, MbscCalendarOptions, MbscColorOptions, MbscCoreOptions, MbscFormOptions, MbscImageOptions, MbscListviewOptions, MbscOptionlistOptions, MbscMeasurementOptions, MbscTemperatureOptions, MbscSpeedOptions, MbscDistanceOptions, MbscMassOptions, MbscForceOptions, MbscNavOptions, MbscNumberOptions, MbscNumpadOptions, MbscPageOptions, MbscRangeOptions, MbscScrollViewBase, MbscSelectOptions, MbscTimerOptions, MbscTimespanOptions, MbscTreelistOptions, MbscWidgetOptions, MbscModule };
