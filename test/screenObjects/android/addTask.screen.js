import { needsActionStatus } from "../../data/data";

class AddTaskScreen {
    get addTaskBtn() {
        return $('//android.widget.ImageButton[@resource-id="org.dmfs.tasks:id/floating_action_button"]');
    }

    get taskTitleInput() {
        return $('//android.widget.EditText[@resource-id="android:id/text1"]');
    }

    taskStatusInput(text = needsActionStatus) {
        return $(`android=new UiSelector().textContains("${text}")`);
    }

    get inProcessStatus() {
        return $('//*[@text="in process"]');
    }

    get addChecklistBtn() {
        return $('//android.widget.TextView[@text="Add item"]');
    }

    get checklistInput() {
        return $('//android.widget.EditText[@resource-id="android:id/title"]');
    }

    get saveTaskBtn() {
        return $('//*[@text="SAVE"]');
    }

    get taskName() {
        return $('//*[@resource-id="org.dmfs.tasks:id/text"]');
    }

    get checklistName() {
        return $('//android.widget.EditText[@resource-id="android:id/title"]');
    }

    get backBtn() {
        return $('~Navigate up');
    }

    get tasksNumber() {
        return $('//android.widget.TextView[@resource-id="android:id/text2"]');
    }
}

export default new AddTaskScreen();