import { taskTitle1 } from "../../data/data";
import CompleteTaskByStepsScreen from "../../screenObjects/android/completeTaskBySteps.screen";
import DeleteTaskScreen from "../../screenObjects/android/deleteTask.screen";
import DoneTaskByOneBtnScreen from "../../screenObjects/android/doneTaskByOneBtn.screen";

describe('Done the task by one button', () => {
    it('add task with 3 items and verify', async () => {
        await CompleteTaskByStepsScreen.addTask3Items();
    });

    it('verify and enter the task screen', async () => {
        // click on "my tasks" label
        await DeleteTaskScreen.myTaskLabel.click();
        
        // assertion
        await DeleteTaskScreen.taskElement().waitForDisplayed({ timeout: 5000 });
        await expect(DeleteTaskScreen.taskElement()).toHaveText(taskTitle1);
        
        // enter the task
        await DeleteTaskScreen.taskElement().click();
    });

    it('done the task by one screen', async () => {
        // done the task by one screen
        await DoneTaskByOneBtnScreen.doneBtn.click();

        // go to complete screen
        await CompleteTaskByStepsScreen.completeNav.click();

        // show done tasks
        await CompleteTaskByStepsScreen.moreOptionsBtn.click();
        await CompleteTaskByStepsScreen.showCompletedBtn.click();

        // click done label
        await CompleteTaskByStepsScreen.doneLabel.click();

        // assertion
        await CompleteTaskByStepsScreen.completedElement().waitForDisplayed({ timeout: 5000 });
        await expect(CompleteTaskByStepsScreen.completedElement()).toHaveText(taskTitle1);
    });
});
  