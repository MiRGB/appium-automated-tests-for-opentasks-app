import { taskTitle1 } from "../../data/data";
import AddTaskScreen from "../../screenObjects/android/addTask.screen";
import MoveItemsScreen from "../../screenObjects/android/moveItems.screen";
import SearchTaskScreen from "../../screenObjects/android/searchTask.screen";

describe('Search task', () => {
  it('add task', async () => {
    await MoveItemsScreen.addTask();
    await MoveItemsScreen.saveTask();
  });

  it('go to search screen', async () => {
    // go to main screen
    await AddTaskScreen.backBtn.click();

    // go to search screen
    await SearchTaskScreen.searchNav.click();

    //assertion
    await SearchTaskScreen.searchInput.waitForDisplayed({ timeout: 5000 });
    await expect(SearchTaskScreen.searchInput).toBeDisplayed();
  });

  it('put text to search field and verify', async () => {
    // put text to search field
    await SearchTaskScreen.searchInput.setValue(taskTitle1);

    // assertion
    await SearchTaskScreen.searchElement().waitForDisplayed({ timeout: 5000 });
    await expect(SearchTaskScreen.searchElement()).toBeExisting();
  });
});
