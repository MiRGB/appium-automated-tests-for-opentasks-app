import { taskTitle1, testItem1, testItem2, testItem3, value100, value33, value66 } from "../../data/data";
import AddTaskScreen from "./addTask.screen";
import MoveItemsScreen from "./moveItems.screen";

class CompleteTaskByStepsScreen {
    async addTask3Items() {
    // add task with 3 items
    await MoveItemsScreen.addTask();
    await MoveItemsScreen.saveTask();

    // add 3 items
    await MoveItemsScreen.addNewItemBtn.click();
    await MoveItemsScreen.itemTitleInput.setValue(testItem1);
    await MoveItemsScreen.addNewItemBtn.click();
    await MoveItemsScreen.itemTitleInput.setValue(testItem2);
    await MoveItemsScreen.addNewItemBtn.click();
    await MoveItemsScreen.itemTitleInput.setValue(testItem3);
    await MoveItemsScreen.inProcessElement.click();
    
    // assertion
    await MoveItemsScreen.itemElement().waitForDisplayed({ timeout: 5000 });
    await expect(MoveItemsScreen.itemElement()).toBeExisting();

    // go to main screen
    await AddTaskScreen.backBtn.click();
    }

    get completeNav() {
        return $('//android.widget.HorizontalScrollView[@resource-id="org.dmfs.tasks:id/tabs"]/android.widget.LinearLayout/android.widget.LinearLayout[5]');
    }

    get nothingCompleteBtn() {
        return $('//*[@text="Nothing accomplished"]');
    }

    taskElement(text = taskTitle1) {
        return $(`//*[@text="${text}"]`);
    }

    get firstCheckbox() {
        return $('(//android.widget.CheckBox[@resource-id="android:id/checkbox"])[1]');
    }

    get secondCheckbox() {
        return $('(//android.widget.CheckBox[@resource-id="android:id/checkbox"])[2]');
    }

    get thirdCheckbox() {
        return $('(//android.widget.CheckBox[@resource-id="android:id/checkbox"])[3]');
    }

    progress33(text = value33) {
        return $(`//*[@text="${text}"]`);
    }

    progress66(text = value66) {
        return $(`//*[@text="${text}"]`);
    }

    progress100(text = value100) {
        return $(`//*[@text="${text}"]`);
    }

    get moreOptionsBtn() {
        return $('~More options');
    }

    get showCompletedBtn() {
        return $('//android.widget.CheckBox[@resource-id="org.dmfs.tasks:id/checkbox"]');
    }

    get doneLabel() {
        return $('//android.widget.ExpandableListView[@resource-id="android:id/list"]/android.widget.RelativeLayout[5]');
    }

    completedElement(text = taskTitle1) {
        return $(`//*[@text="${text}"]`);
    }
}

export default new CompleteTaskByStepsScreen();