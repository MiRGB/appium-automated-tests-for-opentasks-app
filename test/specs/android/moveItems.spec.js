import { checklistItems } from "../../data/data";
import DeleteChecklistItemScreen from "../../screenObjects/android/deleteChecklistItem.screen";
import MoveItemsScreen from "../../screenObjects/android/moveItems.screen";

describe('Move items', () => {
    it('add task and verify', async () => {
        await MoveItemsScreen.addTask();
        await MoveItemsScreen.saveTask();
    });

    it('add 2 items from summary screen', async () => {
        // add 2 items
        const items = [
            checklistItems.testItem1,
            checklistItems.testItem2
        ];

        for (const item of items) {
            await MoveItemsScreen.addNewItemBtn.click();
            await MoveItemsScreen.itemTitleInput.setValue(item);
        }

        await MoveItemsScreen.inProcessElement.click();

        // assertion
        await MoveItemsScreen.itemElement().waitForDisplayed({ timeout: 5000 });
        await expect(MoveItemsScreen.itemElement()).toBeExisting();
    });

    it('drag and drop', async () => {
        // drag and drop
        await MoveItemsScreen.dragAndDrop();

        // assertion
        await MoveItemsScreen.firstItemOnChecklist.waitForDisplayed({ timeout: 5000 });
        await expect(MoveItemsScreen.firstItemOnChecklist).toHaveText(checklistItems.testItem2);
    });

    it('verify after return from main screen', async () => {
        // go back to main screen
        await MoveItemsScreen.backBtn.click();

        // enter to task screen again
        await DeleteChecklistItemScreen.myTasksBtn.click();
        await DeleteChecklistItemScreen.countElement.click();

        // assertion
        await MoveItemsScreen.firstItemOnChecklist.waitForDisplayed({ timeout: 5000 });
        await expect(MoveItemsScreen.firstItemOnChecklist).toHaveText(checklistItems.testItem2);
    });
});