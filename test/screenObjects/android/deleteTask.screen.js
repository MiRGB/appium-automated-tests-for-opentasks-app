import { taskTitle1, testTextList1 } from "../../data/data";
import AddTaskScreen from "./addTask.screen";

class DeleteTaskScreen {
    async addAndSaveTask() {
        // add task click
        await AddTaskScreen.addTaskBtn.click();
        
        // add task title
        await AddTaskScreen.taskTitleInput.setValue(taskTitle1);
        
        // add task status
        await AddTaskScreen.taskStatusInput().click();
        await AddTaskScreen.inProcessStatus.click();

        // add checklist
        await AddTaskScreen.addChecklistBtn.click();
        await AddTaskScreen.checklistInput.waitForDisplayed({ timeout: 5000 });
        await expect(AddTaskScreen.checklistInput).toBeDisplayed();
        await AddTaskScreen.checklistInput.setValue(testTextList1);

        // save task
        await AddTaskScreen.saveTaskBtn.click();
        
        // assertion
        await AddTaskScreen.taskName.waitForDisplayed({ timeout: 5000 });
        await expect(AddTaskScreen.taskName).toHaveText(taskTitle1);
        await AddTaskScreen.checklistName.waitForDisplayed({ timeout: 5000 });
        await expect(AddTaskScreen.checklistName).toHaveText(testTextList1);

        // go to main screen
        await AddTaskScreen.backBtn.click();
    }

    get myTaskLabel() {
        return $('//android.widget.TextView[@resource-id="android:id/title"]');
    }

    taskElement(text = taskTitle1) {
        return $(`//android.widget.TextView[@text="${text}"]`);
    }

    get moreOptionsBtn() {
        return $('~More options');
    }

    get deleteBtn() {
        return $('//*[@text="Delete task"]');
    }
}

export default new DeleteTaskScreen();