import { barValue60, testTextList1, checklistItems, progressValues } from "../../data/data";
import CompleteTaskByStepsScreen from "../../screenObjects/android/completeTaskBySteps.screen";
import ProgressTaskScreen from "../../screenObjects/android/progressTask.screen";

describe('Progress task', () => {
  it('create the task with 4 items and verify', async () => {
    // add task with 4 items
    await ProgressTaskScreen.addTask4Items();
  });

  it('enter complete screen and the task', async () => {
    // enter complete screen and the task
    await ProgressTaskScreen.enterNavAndTask();

    // assertion
    await ProgressTaskScreen.checklistTitle.waitForDisplayed({ timeout: 5000 });
    await expect(ProgressTaskScreen.checklistTitle).toHaveText(testTextList1);
  });

  it('complete the task step by step and add new item', async () => {
    // complete every part
    const checkboxes = [
      CompleteTaskByStepsScreen.firstCheckbox,
      CompleteTaskByStepsScreen.secondCheckbox,
      CompleteTaskByStepsScreen.thirdCheckbox,
      ProgressTaskScreen.fourthCheckbox
    ];

    for (const checkbox of checkboxes) {
      await checkbox.waitForDisplayed({ timeout: 5000 });
      await checkbox.click();
    }

    // assertion
    await expect(CompleteTaskByStepsScreen.progress100()).toHaveText(progressValues.value100);
  });

  it('add additional item and verify progress bar', async () => {
    // add additional item
    await ProgressTaskScreen.addItemBtn.click();
    await ProgressTaskScreen.newItemInput.setValue(checklistItems.testItem5);
    await ProgressTaskScreen.progressStatus.click();
    await ProgressTaskScreen.fourthCheckbox.click();

    // assertion
    await expect(ProgressTaskScreen.progressBar).toHaveText(barValue60);
  });
});
