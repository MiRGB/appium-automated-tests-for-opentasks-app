import { taskTitle1, testItem1, testItem2, testItem3, testItem4 } from "../../data/data";
import AddTaskScreen from "./addTask.screen";
import CompleteTaskByStepsScreen from "./completeTaskBySteps.screen";
import MoveItemsScreen from "./moveItems.screen";

class ProgressTaskScreen {
    async addTask4Items() {
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
        await MoveItemsScreen.addNewItemBtn.click();
        await MoveItemsScreen.itemTitleInput.setValue(testItem4);
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