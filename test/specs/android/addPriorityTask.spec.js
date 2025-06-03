import { priorityTaskNumber } from "../../data/data";
import AddPriorityTaskScreen from "../../screenObjects/android/addPriorityTask.screen";
import MoveItemsScreen from "../../screenObjects/android/moveItems.screen";

describe('Add priority task', () => {
  it('add task and verify', async () => {
    await MoveItemsScreen.addTask();
  });

  it('scroll and set priority', async () => {
    // hide keyboard
    await driver.hideKeyboard();

    // scroll to end
    await AddPriorityTaskScreen.scrollToEnd();

    // set priority to medium
    await AddPriorityTaskScreen.priorityBtn.click();
    await AddPriorityTaskScreen.mediumPrioritySelect.click();

    // assertion
    await AddPriorityTaskScreen.priorityMedium.waitForDisplayed({ timeout: 5000 });
    await expect(AddPriorityTaskScreen.priorityMedium).toBeDisplayed();
  });

  it('save task and verify priority', async () => {
    // save task
    await MoveItemsScreen.saveTask();
    await MoveItemsScreen.backBtn.click();

    // go to priority screen
    await AddPriorityTaskScreen.priorityNav.click();

    // assertion
    await AddPriorityTaskScreen.mediumPriorityTasksNumber.waitForDisplayed({ timeout: 10000 });
    await expect(AddPriorityTaskScreen.mediumPriorityTasksNumber).toHaveText(priorityTaskNumber);
  });
});
