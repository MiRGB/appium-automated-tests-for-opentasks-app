import { itemsNumber2, itemsNumber3 } from "../../data/data";
import AddTaskScreen from "../../screenObjects/android/addTask.screen";
import CompleteTaskByStepsScreen from "../../screenObjects/android/completeTaskBySteps.screen";
import DeleteChecklistItemScreen from "../../screenObjects/android/deleteChecklistItem.screen";

describe('Delete checklist item', () => {
  it('add and save task with 3 checklist items', async () => {
    // add and save task with text
    await CompleteTaskByStepsScreen.addTask3Items();
    await DeleteChecklistItemScreen.myTasksBtn.click();

    // assertion
    await DeleteChecklistItemScreen.countElement.waitForDisplayed({ timeout: 5000 });
    await expect(DeleteChecklistItemScreen.countElement).toHaveText(itemsNumber3);
  });

  it('go to edit screen and delete item on checklist', async () => {
    // go to edit screen
    await DeleteChecklistItemScreen.countElement.click();

    // delete item on checklist
    await DeleteChecklistItemScreen.itemToDelete().waitForDisplayed({ timeout: 5000 });
    await DeleteChecklistItemScreen.itemToDelete().click();
    await DeleteChecklistItemScreen.deleteBtn.click();

    // assertion
    await expect(DeleteChecklistItemScreen.itemToDelete()).not.toBeExisting();
  });

  it('go back to main screen and verify items number', async () => {
    // back to main screen
    await AddTaskScreen.backBtn.click();

    // assertion
    await DeleteChecklistItemScreen.countElement.waitForDisplayed({ timeout: 5000 });
    await expect(DeleteChecklistItemScreen.countElement).toHaveText(itemsNumber2);
  });
});
