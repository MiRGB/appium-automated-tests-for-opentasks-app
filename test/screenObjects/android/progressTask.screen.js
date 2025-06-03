import { taskTitle1, checklistItems } from "../../data/data";
import AddTaskScreen from "./addTask.screen";
import CompleteTaskByStepsScreen from "./completeTaskBySteps.screen";
import MoveItemsScreen from "./moveItems.screen";

class ProgressTaskScreen {
    async addTask4Items() {
        // add task
        await MoveItemsScreen.addTask();
        await MoveItemsScreen.saveTask();

        // add 4 items
        const testItems = [
            checklistItems.testItem1,
            checklistItems.testItem2,
            checklistItems.testItem3,
            checklistItems.testItem4
        ];

        for (const testItem of testItems) {
            await MoveItemsScreen.addNewItemBtn.click();
            await MoveItemsScreen.itemTitleInput.setValue(testItem);
        }

        await MoveItemsScreen.inProcessElement.click();
        
        // assertion
        await MoveItemsScreen.itemElement().waitForDisplayed({ timeout: 5000 });
        await expect(MoveItemsScreen.itemElement()).toBeExisting();
    
        // go to main screen
        await AddTaskScreen.backBtn.click();
    }

    async enterNavAndTask() {
        // click on nav
        await CompleteTaskByStepsScreen.completeNav.click();
        
        // assertion
        await CompleteTaskByStepsScreen.nothingCompleteBtn.waitForDisplayed({ timeout: 5000 });
        await expect(CompleteTaskByStepsScreen.nothingCompleteBtn).toBeDisplayed();
        
        // click on label
        await CompleteTaskByStepsScreen.nothingCompleteBtn.click();
        
        // assertion
        await CompleteTaskByStepsScreen.taskElement().waitForDisplayed({ timeout: 5000 });
        await expect(await CompleteTaskByStepsScreen.taskElement()).toHaveText(taskTitle1);
        
        // click on task
        await CompleteTaskByStepsScreen.taskElement().click();
    }

    get fourthCheckbox() {
        return $('(//android.widget.CheckBox[@resource-id="android:id/checkbox"])[4]');
    }

    get addItemBtn() {
        return $('//*[@text="Add item"]');
    }

    get newItemInput() {
        return $('//*[@text="Item title"]');
    }

    get progressStatus() {
        return $('//*[@text="done"]');
    }

    get progressBar() {
        return $('//android.widget.ProgressBar[@resource-id="org.dmfs.tasks:id/percentage_progress_bar"]');
    }

    get checklistTitle() {
        return $('//android.widget.EditText[@resource-id="android:id/title"]');
    }
}

export default new ProgressTaskScreen();