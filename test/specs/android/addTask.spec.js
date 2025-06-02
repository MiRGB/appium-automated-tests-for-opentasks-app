import { taskNumber, taskTitle1, testTextList1 } from "../../data/data";
import AddTaskScreen from "../../screenObjects/android/addTask.screen";


describe('Add task', () => {
    it('add task info', async () => {
        // add task click
        await AddTaskScreen.addTaskBtn.click();

        // add task title
        await AddTaskScreen.taskTitleInput.setValue(taskTitle1);

        // add task status
        await AddTaskScreen.taskStatusInput().click();
        await AddTaskScreen.inProcessStatus.click();
    });

    it('add checklist', async () => {
        // add checklist
        await AddTaskScreen.addChecklistBtn.click();
        await AddTaskScreen.checklistInput.waitForDisplayed({ timeout: 5000 });
        await expect(AddTaskScreen.checklistInput).toBeDisplayed();
        await AddTaskScreen.checklistInput.setValue(testTextList1);
    });

    it('save the task', async () => {
        // save task
        await AddTaskScreen.saveTaskBtn.click();

        // assertion
        await AddTaskScreen.taskName.waitForDisplayed({ timeout: 5000 });
        await expect(AddTaskScreen.taskName).toHaveText(taskTitle1);
        await AddTaskScreen.checklistName.waitForDisplayed({ timeout: 5000 });
        await expect(AddTaskScreen.checklistName).toHaveText(testTextList1);
    });

    it('go to main screen', async () => {
        // go to main screen
        await AddTaskScreen.backBtn.click();

        // assertion
        await AddTaskScreen.tasksNumber.waitForDisplayed({ timeout: 5000 });
        await expect(AddTaskScreen.tasksNumber).toHaveText(taskNumber);
    });
});