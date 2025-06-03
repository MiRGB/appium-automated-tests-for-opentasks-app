import { taskTitle1, testTextList1, checklistItems } from "../../data/data";
import AddTaskScreen from "./addTask.screen";

class MoveItemsScreen {
    async addTask() {
        // add task click
        await AddTaskScreen.addTaskBtn.click();
        
        // add task title
        await AddTaskScreen.taskTitleInput.setValue(taskTitle1);
        
        // add task status
        await AddTaskScreen.taskStatusInput().click();
        await AddTaskScreen.inProcessStatus.click();

        // add checklist
        await AddTaskScreen.addChecklistBtn.click();

        // assertion
        await AddTaskScreen.checklistInput.waitForDisplayed({ timeout: 5000 });
        await expect(AddTaskScreen.checklistInput).toBeDisplayed();

        // set text element on list
        await AddTaskScreen.checklistInput.setValue(testTextList1);

        // assertion
        await expect(AddTaskScreen.checklistInput).toHaveText(testTextList1);
    }

    async saveTask() {
        // save task
        await AddTaskScreen.saveTaskBtn.click();
        
        // assertion
        await AddTaskScreen.taskName.waitForDisplayed({ timeout: 5000 });
        await expect(AddTaskScreen.taskName).toHaveText(taskTitle1);

        // assertion
        await AddTaskScreen.checklistName.waitForDisplayed({ timeout: 5000 });
        await expect(AddTaskScreen.checklistName).toHaveText(testTextList1);
    }

    get addNewItemBtn() {
        return $('//android.widget.TextView[@resource-id="org.dmfs.tasks:id/add_item"]');
    }

    get itemTitleInput() {
        return $('//*[@text="Item title"]');
    }

    itemElement(text = checklistItems.testItem1) {
        return $(`//*[@text="${text}"]`);
    }

    get inProcessElement() {
        return $('//*[@text="in process"]');
    }

    async dragAndDrop() {
        const source = await $('(//android.widget.ImageView[@resource-id="org.dmfs.tasks:id/drag_handle"])[2]');
        const target = await $('(//android.widget.ImageView[@resource-id="org.dmfs.tasks:id/drag_handle"])[3]');

        const sourceRect = await driver.getElementRect(source.elementId);
        const targetRect = await driver.getElementRect(target.elementId);

        const startX = Math.floor(sourceRect.x + sourceRect.width / 2);
        const startY = Math.floor(sourceRect.y + sourceRect.height / 2);
        const endX = Math.floor(targetRect.x + targetRect.width / 2);
        const endY = Math.floor(targetRect.y + targetRect.height / 2);

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 800 },
                { type: 'pointerMove', duration: 600, x: endX, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
    }

    get firstItemOnChecklist() {
        return $('(//android.widget.EditText[@resource-id="android:id/title"])[2]');
    }
}

export default new MoveItemsScreen();