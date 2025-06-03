
import { taskTitle1, progressValues } from "../../data/data";
import AddTaskScreen from "../../screenObjects/android/addTask.screen";
import CompleteTaskByStepsScreen from "../../screenObjects/android/completeTaskBySteps.screen";

describe('Complete the task by steps', () => {
  it('add task with 3 items and verify', async () => {
    await CompleteTaskByStepsScreen.addTask3Items();
  });

  it('go to complete screen', async () => {
    // click on nav
    await CompleteTaskByStepsScreen.completeNav.click();

    // assertion
    await CompleteTaskByStepsScreen.nothingCompleteBtn.waitForDisplayed({ timeout: 5000 });
    await expect(CompleteTaskByStepsScreen.nothingCompleteBtn).toBeDisplayed();

    // click on label
    await CompleteTaskByStepsScreen.nothingCompleteBtn.click();

    //assertion
    await CompleteTaskByStepsScreen.taskElement().waitForDisplayed({ timeout: 5000 });
    await expect(await CompleteTaskByStepsScreen.taskElement()).toHaveText(taskTitle1);

    // click on task
    await CompleteTaskByStepsScreen.taskElement().click();
  });

  it('complete every part and verify', async () => {
    // complete one part
    await CompleteTaskByStepsScreen.firstCheckbox.click();

    // verify correct value of progress
    await expect(CompleteTaskByStepsScreen.progress33()).toHaveText(progressValues.value33);

    // complete second part
    await CompleteTaskByStepsScreen.secondCheckbox.click();

    // verify correct value of progress
    await expect(CompleteTaskByStepsScreen.progress66()).toHaveText(progressValues.value66);

    // complete last part
    await CompleteTaskByStepsScreen.thirdCheckbox.click();

    // verify correct value of progress
    await expect(CompleteTaskByStepsScreen.progress100()).toHaveText(progressValues.value100);
  });

  it('verify the correct place of the done task', async () => {
    // go back
    await AddTaskScreen.backBtn.click();

    // click menu and select checkbox
    await CompleteTaskByStepsScreen.moreOptionsBtn.click();
    await CompleteTaskByStepsScreen.showCompletedBtn.click();

    // click Done label
    await CompleteTaskByStepsScreen.doneLabel.click();

    // assertion
    await CompleteTaskByStepsScreen.completedElement().waitForDisplayed({ timeout: 5000 });
    await expect(CompleteTaskByStepsScreen.completedElement()).toHaveText(taskTitle1);
  });

});