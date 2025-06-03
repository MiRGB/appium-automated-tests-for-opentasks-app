import { clockInfo, taskTitle1, dayToSelect } from "../../data/data";
import AddTaskScreen from "./addTask.screen";

class DateVerifyScreen {
    async addTaskAndTitle() {
        // add task click
        await AddTaskScreen.addTaskBtn.click();
        
        // add task title
        await AddTaskScreen.taskTitleInput.setValue(taskTitle1);

        // assertion
        await AddTaskScreen.taskStatusInput().waitForDisplayed({ timeout: 5000 });
        await expect(AddTaskScreen.taskStatusInput()).toBeDisplayed();
    }

    get startDateBtn() {
        return $('(//android.widget.Button[@resource-id="org.dmfs.tasks:id/task_date_picker"])[1]');
    }

    get currentDateVariable() {
        return $('//android.widget.TextView[@resource-id="android:id/date_picker_header_date"]');
    }

    get nextMonthBtn() {
        return $('~Next month');
    }

    selectDay(text = dayToSelect) {
        return $(`//android.view.View[@text='${text}']`);
    }

    get newDateVariable() {
        return $('//android.widget.TextView[@resource-id="android:id/date_picker_header_date"]');
    }

    get acceptDateBtn() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

    get selectTimeBtn() {
        return $('//*[@resource-id="org.dmfs.tasks:id/task_time_picker"]');
    }

    get clockElement() {
        return $('//android.view.View[@resource-id="android:id/radial_picker"]');
    }

    newHour(text = clockInfo.hour12) {
        return $(`~${text}`);
    }

    newMinute(text = clockInfo.minute45) {
        return $(`~${text}`);
    }

    get clockHours() {
        return $('//android.widget.TextView[@resource-id="android:id/hours"]');
    }

    get clockMinutes() {
        return $('//android.widget.TextView[@resource-id="android:id/minutes"]');
    }

    get switchClockMode() {
        return $('~Switch to text input mode for the time input.');
    }

    get newClockHeader() {
        return $('//android.widget.TextView[@resource-id="android:id/input_header"]');
    }

    get newClockHour() {
        return $('//android.widget.EditText[@resource-id="android:id/input_hour"]');
    }

    get newClockMinutes() {
        return $('//android.widget.EditText[@resource-id="android:id/input_minute"]');
    }

    get newClockDayTime() {
        return $('//android.widget.CheckedTextView[@resource-id="android:id/text1"]');
    }

    get acceptTimeBtn() {
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

    get clockTimeBtn() {
        return $('(//android.widget.Button[@resource-id="org.dmfs.tasks:id/task_time_picker"])[1]');
    }
}

export default new DateVerifyScreen();