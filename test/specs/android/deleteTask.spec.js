import { taskTitle1 } from "../../data/data";
import DeleteTaskScreen from "../../screenObjects/android/deleteTask.screen";

describe('Delete task', () => {
  it('add and save the task', async () => {
    await DeleteTaskScreen.addAndSaveTask();
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

  it('delete the task', async () => {
    // click on more options button
    await DeleteTaskScreen.moreOptionsBtn.click();

    // delete task
    await DeleteTaskScreen.deleteBtn.click();
    await driver.acceptAlert();

    // assertion
    await DeleteTaskScreen.myTaskLabel.waitForDisplayed({ timeout: 5000 });
    await expect(DeleteTaskScreen.myTaskLabel).toBeExisting();
  });
});
